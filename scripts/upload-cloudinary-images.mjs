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
const allowedExtensions = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".gif",
  ".avif",
]);
const lossyOptimizableExtensions = new Set([".jpg", ".jpeg"]);
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

function trimSlashes(value) {
  return value.replace(/^\/+|\/+$/g, "");
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
  const uploadFile = await prepareUploadFile(filePath, config.maxUploadBytes);
  try {
    const timestamp = Math.floor(Date.now() / 1000);
    const signingParams = {
      asset_folder: assetFolder,
      display_name: displayName,
      invalidate: "true",
      overwrite: "true",
      public_id: publicId,
      timestamp: String(timestamp),
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
      publicId: payload.public_id,
      relativePath,
      secureUrl: payload.secure_url,
    };
  } finally {
    if (uploadFile.tempDirectory) {
      await fs.rm(uploadFile.tempDirectory, { force: true, recursive: true });
    }
  }
}

async function prepareUploadFile(filePath, maxUploadBytes) {
  const stats = await fs.stat(filePath);

  if (stats.size <= maxUploadBytes) {
    return { optimized: false, path: filePath };
  }

  const extension = path.extname(filePath).toLowerCase();

  if (!lossyOptimizableExtensions.has(extension)) {
    throw new Error(
      `${getRelativeImagePath(filePath)} supera el limite de ${maxUploadBytes} bytes y no tiene optimizacion automatica para ${extension}`,
    );
  }

  const tempDirectory = await fs.mkdtemp(
    path.join(os.tmpdir(), "cloudinary-image-upload-"),
  );
  const outputPath = path.join(tempDirectory, path.basename(filePath));
  const qualities = [82, 74, 66, 58, 50];
  let optimizedSize = stats.size;

  for (const quality of qualities) {
    await convertFileAsync("convert", [
      filePath,
      "-strip",
      "-interlace",
      "Plane",
      "-sampling-factor",
      "4:2:0",
      "-quality",
      String(quality),
      outputPath,
    ]);

    optimizedSize = (await fs.stat(outputPath)).size;

    if (optimizedSize <= maxUploadBytes) {
      console.log(
        `optimizada: ${getRelativeImagePath(filePath)} ${stats.size} -> ${optimizedSize} bytes`,
      );

      return {
        optimized: true,
        path: outputPath,
        tempDirectory,
      };
    }
  }

  await fs.rm(tempDirectory, { force: true, recursive: true });
  throw new Error(
    `${getRelativeImagePath(filePath)} sigue superando el limite tras optimizar (${optimizedSize} bytes)`,
  );
}

async function main() {
  const env = await loadEnvFile(envPath);
  const config = {
    apiKey: requireEnv(env, "VITE_CLOUDINARY_API_KEY"),
    apiSecret: requireEnv(env, "CLOUDINARY_API_SECRET"),
    baseFolder: env.VITE_CLOUDINARY_BASE_FOLDER?.trim() || "",
    cloudName: requireEnv(env, "VITE_CLOUDINARY_CLOUD_NAME"),
    maxUploadBytes:
      Number.parseInt(env.CLOUDINARY_MAX_UPLOAD_BYTES?.trim() || "", 10) ||
      defaultMaxUploadBytes,
  };
  const imageFiles = await collectImageFiles(imagesRoot);

  if (!imageFiles.length) {
    throw new Error(`No se encontraron imagenes en ${imagesRoot}`);
  }

  console.log(
    `${dryRun ? "[dry-run]" : "[upload]"} ${imageFiles.length} imagenes detectadas`,
  );

  if (dryRun) {
    for (const filePath of imageFiles) {
      const relativePath = getRelativeImagePath(filePath);
      const publicId = getPublicId(relativePath, config.baseFolder);
      const assetFolder = buildAssetFolder(publicId) || "(root)";
      console.log(`${relativePath} -> ${assetFolder} -> ${publicId}`);
    }
    return;
  }

  const uploaded = [];
  const failures = [];

  for (const filePath of imageFiles) {
    try {
      const result = await uploadImage(filePath, config);
      uploaded.push(result);
      console.log(
        `subida: ${result.relativePath} -> ${result.assetFolder || "(root)"} -> ${result.publicId}`,
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
