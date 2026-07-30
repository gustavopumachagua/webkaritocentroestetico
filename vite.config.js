import process from "node:process";
import { fileURLToPath, URL } from "node:url";
import { defineConfig, loadEnv } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import { getPageSeo } from "./src/data/seo.js";

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function resolveSiteUrl(mode) {
  const env = loadEnv(mode, process.cwd(), "");
  const siteUrl = env.VITE_SITE_URL?.trim();

  if (!siteUrl) {
    throw new Error(
      "Falta VITE_SITE_URL. Define el dominio publico en .env y en Vercel.",
    );
  }

  return siteUrl;
}

function karitoHtmlSeoPlugin(defaultHtmlSeo) {
  const replacements = {
    "%KARITO_SEO_LANG%": defaultHtmlSeo.lang,
    "%KARITO_SEO_TITLE%": defaultHtmlSeo.title,
    "%KARITO_SEO_DESCRIPTION%": defaultHtmlSeo.description,
    "%KARITO_SEO_KEYWORDS%": defaultHtmlSeo.keywords,
    "%KARITO_SEO_AUTHOR%": defaultHtmlSeo.author,
    "%KARITO_SEO_APPLICATION_NAME%": defaultHtmlSeo.applicationName,
    "%KARITO_SEO_OG_LOCALE%": defaultHtmlSeo.ogLocale,
    "%KARITO_SEO_SITE_NAME%": defaultHtmlSeo.siteName,
    "%KARITO_SEO_IMAGE_TYPE%": defaultHtmlSeo.imageType,
    "%KARITO_SEO_IMAGE_ALT%": defaultHtmlSeo.imageAlt,
    "%KARITO_SEO_IMAGE_WIDTH%": defaultHtmlSeo.imageWidth,
    "%KARITO_SEO_IMAGE_HEIGHT%": defaultHtmlSeo.imageHeight,
    "%KARITO_CANONICAL_URL%": defaultHtmlSeo.canonicalUrl,
    "%KARITO_OG_IMAGE_URL%": defaultHtmlSeo.imageUrl,
  };

  return {
    name: "karito-html-seo",
    transformIndexHtml(html) {
      return Object.entries(replacements).reduce(
        (updatedHtml, [token, value]) =>
          updatedHtml.replaceAll(token, escapeHtml(value)),
        html,
      );
    },
  };
}

export default defineConfig(({ mode }) => {
  const defaultHtmlSeo = getPageSeo({
    locale: "es",
    pathname: "/",
    siteUrl: resolveSiteUrl(mode),
  });
  const appName = defaultHtmlSeo.siteName;
  const appDescription = defaultHtmlSeo.description;

  return {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    plugins: [
      karitoHtmlSeoPlugin(defaultHtmlSeo),
      tailwindcss(),
      react({
        babel: {
          plugins: ["babel-plugin-react-compiler"],
        },
      }),
      VitePWA({
        registerType: "autoUpdate",
        injectRegister: false,
        includeAssets: [
          "favicon.ico",
          "favicon-16x16.png",
          "favicon-32x32.png",
          "apple-touch-icon.png",
          "imagen_principal.png",
          "og-image.jpg",
        ],
        manifest: {
          id: "/",
          name: appName,
          short_name: "Karito",
          description: appDescription,
          theme_color: "#a05e4c",
          background_color: "#fff8f4",
          display: "standalone",
          orientation: "portrait",
          start_url: "/",
          scope: "/",
          lang: "es-PE",
          categories: ["beauty", "wellness", "health", "lifestyle"],
          icons: [
            {
              src: "pwa-192x192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "pwa-512x512.png",
              sizes: "512x512",
              type: "image/png",
            },
            {
              src: "maskable-icon-512x512.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "maskable",
            },
          ],
        },
        workbox: {
          cleanupOutdatedCaches: true,
          clientsClaim: true,
          skipWaiting: true,
          maximumFileSizeToCacheInBytes: 3 * 1024 * 1024,
          navigateFallback: "/index.html",
          // Avoid precaching content images so replacements appear immediately
          // and large source photos do not fail the PWA build.
          globPatterns: ["**/*.{js,css,html,ico,svg,json,woff2}"],
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
              handler: "StaleWhileRevalidate",
              options: {
                cacheName: "google-fonts-stylesheets",
              },
            },
            {
              urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
              handler: "CacheFirst",
              options: {
                cacheName: "google-fonts-webfonts",
                cacheableResponse: {
                  statuses: [0, 200],
                },
                expiration: {
                  maxEntries: 20,
                  maxAgeSeconds: 60 * 60 * 24 * 365,
                },
              },
            },
          ],
        },
        devOptions: {
          enabled: false,
          suppressWarnings: true,
        },
      }),
    ],
  };
});
