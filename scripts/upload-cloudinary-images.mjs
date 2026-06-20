import { createHash } from "node:crypto";
import { execFile } from "node:child_process";
import { promises as fs } from "node:fs";
import os from "node:os";
import path from "node:path";
import { promisify } from "node:util";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const envPath = path.join(projectRoot, ".env");
const imagesRoot = path.join(projectRoot, "src", "assets", "images");
const uploadEndpointBase = "https://api.cloudinary.com/v1_1";
const defaultMaxUploadBytes = 10 * 1024 * 1024;
const defaultOptimizeMinBytes = 150 * 1024;
const defaultLocalMaxDimension = 1920;
const defaultJpegQuality = 82;
const defaultWebpQuality = 78;
const defaultUploadTransformation =
  "c_limit,w_1920,h_1920,q_auto:eco,fl_strip_profile";
const allowedExtensions = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".gif",
  ".avif",
]);
const lossyOptimizableExtensions = new Set([".jpg", ".jpeg", ".webp"]);
const localOptimizableExtensions = new Set([".jpg", ".jpeg", ".png", ".webp"]);
const convertFileAsync = promisify(execFile);

const dryRun = process.argv.includes("--dry-run");

async function loadEnvFile(filePath) {
  const env = {};
  const fileContents = await fs.readFile(filePath, "utf8");

  for (const rawLine of fileContents.split(/\r?\n/)) {
    const line = rawLine.trim();

    if (!line || line.startsWith("#")) {
      continue;
    }

    const separatorIndex = line.indexOf("=");

    if (separatorIndex === -1) {
      continue;
    }

    const key = line.slice(0, separatorIndex).trim();
    let value = line.slice(separatorIndex + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    env[key] = value;
  }

  return env;
}

function requireEnv(env, key) {
  const value = env[key]?.trim();

  if (!value) {
    throw new Error(`Falta la variable obligatoria ${key} en ${envPath}`);
  }

  return value;
}

function readOptionalEnv(env, key, fallback = "") {
  if (!Object.hasOwn(env, key)) {
    return fallback;
  }

  return env[key]?.trim() ?? "";
}

function readPositiveIntegerEnv(env, key, fallback) {
  const value = Number.parseInt(env[key]?.trim() || "", 10);

  return Number.isFinite(value) && value > 0 ? value : fallback;
}

function readBooleanEnv(env, key, fallback) {
  if (!Object.hasOwn(env, key)) {
    return fallback;
  }

  const value = env[key]?.trim().toLowerCase();

  if (["1", "true", "yes", "si", "on"].includes(value)) {
    return true;
  }

  if (["0", "false", "no", "off"].includes(value)) {
    return false;
  }

  return fallback;
}

function trimSlashes(value) {
  return value.replace(/^\/+|\/+$/g, "");
}

function formatBytes(bytes) {
  if (!Number.isFinite(bytes)) {
    return "0 B";
  }

  const units = ["B", "KB", "MB", "GB"];
  let value = bytes;
  let unitIndex = 0;

  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024;
    unitIndex += 1;
  }

  const decimals = value >= 10 || unitIndex === 0 ? 0 : 1;

  return `${value.toFixed(decimals)} ${units[unitIndex]}`;
}

function getRelativeImagePath(filePath) {
  return path.relative(imagesRoot, filePath).split(path.sep).join("/");
}

function getPublicId(relativePath, baseFolder) {
  const withoutExtension = relativePath.replace(/\.[^.]+$/, "");
  return [trimSlashes(baseFolder), withoutExtension].filter(Boolean).join("/");
}

function buildAssetFolder(publicId) {
  const directory = path.posix.dirname(publicId);
  return directory === "." ? "" : directory;
}

function buildSignature(params, apiSecret) {
  const serializedParams = Object.entries(params)
    .filter(([, value]) => value !== "" && value !== undefined && value !== null)
    .sort(([leftKey], [rightKey]) => leftKey.localeCompare(rightKey))
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  return createHash("sha1")
    .update(`${serializedParams}${apiSecret}`)
    .digest("hex");
}

async function collectImageFiles(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries.sort((left, right) => left.name.localeCompare(right.name))) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await collectImageFiles(fullPath)));
      continue;
    }

    if (!allowedExtensions.has(path.extname(entry.name).toLowerCase())) {
      continue;
    }

    files.push(fullPath);
  }

  return files;
}

async function uploadImage(filePath, config) {
  const relativePath = getRelativeImagePath(filePath);
  const publicId = getPublicId(relativePath, config.baseFolder);
  const assetFolder = buildAssetFolder(publicId);
  const displayName = path.basename(publicId);
  const uploadFile = await prepareUploadFile(filePath, config);
  try {
    const timestamp = Math.floor(Date.now() / 1000);
    const signingParams = {
      asset_folder: assetFolder,
      display_name: displayName,
      invalidate: "true",
      overwrite: "true",
      public_id: publicId,
      timestamp: String(timestamp),
      transformation: config.uploadTransformation,
    };
    const signature = buildSignature(signingParams, config.apiSecret);
    const fileBuffer = await fs.readFile(uploadFile.path);
    const formData = new FormData();

    formData.append("file", new Blob([fileBuffer]), path.basename(filePath));
    formData.append("api_key", config.apiKey);
    formData.append("asset_folder", assetFolder);
    formData.append("display_name", displayName);
    formData.append("invalidate", "true");
    formData.append("overwrite", "true");
    formData.append("public_id", publicId);
    formData.append("signature", signature);
    formData.append("timestamp", String(timestamp));
    if (config.uploadTransformation) {
      formData.append("transformation", config.uploadTransformation);
    }

    const response = await fetch(
      `${uploadEndpointBase}/${config.cloudName}/image/upload`,
      {
        method: "POST",
        body: formData,
      },
    );
    const payload = await response.json();

    if (!response.ok) {
      const errorMessage = payload?.error?.message || "Error desconocido";
      throw new Error(`${relativePath}: ${errorMessage}`);
    }

    return {
      assetFolder: payload.asset_folder || assetFolder,
      bytes: payload.bytes,
      optimizedBeforeUpload: uploadFile.optimized,
      publicId: payload.public_id,
      relativePath,
      secureUrl: payload.secure_url,
      sourceBytes: uploadFile.sourceBytes,
      uploadBytes: uploadFile.bytes,
    };
  } finally {
    if (uploadFile.tempDirectory) {
      await fs.rm(uploadFile.tempDirectory, { force: true, recursive: true });
    }
  }
}

function getConvertArgs(filePath, outputPath, extension, config, quality) {
  const maxSize = `${config.localMaxDimension}x${config.localMaxDimension}>`;
  const commonArgs = [filePath, "-auto-orient", "-resize", maxSize, "-strip"];

  if (extension === ".jpg" || extension === ".jpeg") {
    return [
      ...commonArgs,
      "-interlace",
      "Plane",
      "-sampling-factor",
      "4:2:0",
      "-quality",
      String(quality),
      outputPath,
    ];
  }

  if (extension === ".webp") {
    return [...commonArgs, "-quality", String(quality), outputPath];
  }

  if (extension === ".png") {
    return [
      ...commonArgs,
      "-define",
      "png:compression-level=9",
      "-define",
      "png:compression-filter=5",
      outputPath,
    ];
  }

  return [...commonArgs, outputPath];
}

function getQualitySteps(extension, config) {
  if (extension === ".jpg" || extension === ".jpeg") {
    return [...new Set([config.jpegQuality, 74, 66, 58, 50])].filter(
      (quality) => quality > 0 && quality <= 100,
    );
  }

  if (extension === ".webp") {
    return [...new Set([config.webpQuality, 70, 62, 54])].filter(
      (quality) => quality > 0 && quality <= 100,
    );
  }

  return [null];
}

async function prepareUploadFile(filePath, config) {
  const stats = await fs.stat(filePath);
  const extension = path.extname(filePath).toLowerCase();

  if (
    !config.localOptimize ||
    stats.size < config.optimizeMinBytes ||
    !localOptimizableExtensions.has(extension)
  ) {
    if (stats.size <= config.maxUploadBytes) {
      return {
        bytes: stats.size,
        optimized: false,
        path: filePath,
        sourceBytes: stats.size,
      };
    }

    throw new Error(
      `${getRelativeImagePath(filePath)} supera el limite de ${formatBytes(
        config.maxUploadBytes,
      )} y no tiene optimizacion local habilitada para ${extension}`,
    );
  }

  const tempDirectory = await fs.mkdtemp(
    path.join(os.tmpdir(), "cloudinary-image-upload-"),
  );
  const outputPath = path.join(tempDirectory, path.basename(filePath));
  const qualitySteps = getQualitySteps(extension, config);
  let optimizedSize = stats.size;

  try {
    for (const quality of qualitySteps) {
      await convertFileAsync(
        "convert",
        getConvertArgs(filePath, outputPath, extension, config, quality),
      );

      optimizedSize = (await fs.stat(outputPath)).size;

      if (optimizedSize < stats.size && optimizedSize <= config.maxUploadBytes) {
        console.log(
          `optimizada local: ${getRelativeImagePath(filePath)} ${formatBytes(
            stats.size,
          )} -> ${formatBytes(optimizedSize)}`,
        );

        return {
          bytes: optimizedSize,
          optimized: true,
          path: outputPath,
          sourceBytes: stats.size,
          tempDirectory,
        };
      }
    }

    if (stats.size <= config.maxUploadBytes) {
      await fs.rm(tempDirectory, { force: true, recursive: true });

      return {
        bytes: stats.size,
        optimized: false,
        path: filePath,
        sourceBytes: stats.size,
      };
    }
  } catch (error) {
    await fs.rm(tempDirectory, { force: true, recursive: true });

    if (stats.size <= config.maxUploadBytes) {
      console.warn(
        `aviso: no se pudo optimizar localmente ${getRelativeImagePath(
          filePath,
        )}; se subira el original. ${error.message}`,
      );

      return {
        bytes: stats.size,
        optimized: false,
        path: filePath,
        sourceBytes: stats.size,
      };
    }

    throw new Error(
      `${getRelativeImagePath(filePath)} supera el limite de ${formatBytes(
        config.maxUploadBytes,
      )} y fallo la optimizacion local: ${error.message}`,
    );
  }

  await fs.rm(tempDirectory, { force: true, recursive: true });

  if (!lossyOptimizableExtensions.has(extension)) {
    throw new Error(
      `${getRelativeImagePath(filePath)} sigue superando el limite de ${formatBytes(
        config.maxUploadBytes,
      )} tras optimizar ${extension}`,
    );
  }

  throw new Error(
    `${getRelativeImagePath(filePath)} sigue superando el limite tras optimizar (${formatBytes(
      optimizedSize,
    )})`,
  );
}

async function main() {
  const env = await loadEnvFile(envPath);
  const config = {
    apiKey: dryRun ? "" : requireEnv(env, "CLOUDINARY_API_KEY"),
    apiSecret: dryRun ? "" : requireEnv(env, "CLOUDINARY_API_SECRET"),
    baseFolder: requireEnv(env, "VITE_CLOUDINARY_BASE_FOLDER"),
    cloudName: dryRun
      ? readOptionalEnv(env, "VITE_CLOUDINARY_CLOUD_NAME")
      : requireEnv(env, "VITE_CLOUDINARY_CLOUD_NAME"),
    jpegQuality: readPositiveIntegerEnv(
      env,
      "CLOUDINARY_LOCAL_JPEG_QUALITY",
      defaultJpegQuality,
    ),
    localMaxDimension: readPositiveIntegerEnv(
      env,
      "CLOUDINARY_LOCAL_MAX_DIMENSION",
      defaultLocalMaxDimension,
    ),
    localOptimize: readBooleanEnv(env, "CLOUDINARY_LOCAL_OPTIMIZE", true),
    maxUploadBytes: readPositiveIntegerEnv(
      env,
      "CLOUDINARY_MAX_UPLOAD_BYTES",
      defaultMaxUploadBytes,
    ),
    optimizeMinBytes: readPositiveIntegerEnv(
      env,
      "CLOUDINARY_OPTIMIZE_MIN_BYTES",
      defaultOptimizeMinBytes,
    ),
    uploadTransformation: readOptionalEnv(
      env,
      "CLOUDINARY_UPLOAD_TRANSFORMATION",
      defaultUploadTransformation,
    ),
    webpQuality: readPositiveIntegerEnv(
      env,
      "CLOUDINARY_LOCAL_WEBP_QUALITY",
      defaultWebpQuality,
    ),
  };
  const imageFiles = await collectImageFiles(imagesRoot);

  if (!imageFiles.length) {
    throw new Error(`No se encontraron imagenes en ${imagesRoot}`);
  }

  console.log(
    `${dryRun ? "[dry-run]" : "[upload]"} ${imageFiles.length} imagenes detectadas`,
  );
  console.log(
    `transformacion de subida: ${config.uploadTransformation || "(sin transformacion entrante)"}`,
  );
  console.log(
    `optimizacion local: ${
      config.localOptimize
        ? `activa, max ${config.localMaxDimension}px, desde ${formatBytes(
            config.optimizeMinBytes,
          )}`
        : "inactiva"
    }`,
  );

  if (dryRun) {
    for (const filePath of imageFiles) {
      const stats = await fs.stat(filePath);
      const relativePath = getRelativeImagePath(filePath);
      const publicId = getPublicId(relativePath, config.baseFolder);
      const assetFolder = buildAssetFolder(publicId) || "(root)";
      console.log(
        `${relativePath} (${formatBytes(
          stats.size,
        )}) -> ${assetFolder} -> ${publicId}`,
      );
    }
    return;
  }

  const uploaded = [];
  const failures = [];

  for (const filePath of imageFiles) {
    try {
      const result = await uploadImage(filePath, config);
      uploaded.push(result);
      const cloudinarySize = result.bytes
        ? `, cloudinary ${formatBytes(result.bytes)}`
        : "";
      console.log(
        `subida: ${result.relativePath} (${formatBytes(
          result.sourceBytes,
        )} -> ${formatBytes(result.uploadBytes)}${cloudinarySize}) -> ${
          result.assetFolder || "(root)"
        } -> ${result.publicId}`,
      );
    } catch (error) {
      failures.push(error.message);
      console.error(`error: ${error.message}`);
    }
  }

  if (failures.length) {
    console.error(
      `Termino con ${uploaded.length} imagenes subidas y ${failures.length} errores.`,
    );
    process.exitCode = 1;
    return;
  }

  console.log(`Listo: ${uploaded.length} imagenes subidas a Cloudinary.`);
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
