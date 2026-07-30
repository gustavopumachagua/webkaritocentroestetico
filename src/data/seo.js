export const seoSettings = {
  siteUrl: import.meta.env?.VITE_SITE_URL ?? "",
  shareImagePath: "/og-image.jpg",
  imageType: "image/jpeg",
  imageWidth: "1200",
  imageHeight: "630",
};

export const seoByLocale = {
  es: {
    lang: "es-PE",
    brandTitle: "Karito Centro Estético",
    siteName: "Karito Centro Estético",
    author: "Karito Centro Estético",
    applicationName: "Karito Centro Estético",
    ogLocale: "es_PE",
    defaultDescription:
      "Karito Centro Estético ofrece limpiezas faciales, tratamientos faciales y corporales con atención personalizada, tecnología moderna y resultados visibles en Los Olivos, Lima.",
    keywords:
      "Karito Centro Estético, centro estético, medicina estética, limpiezas faciales, tratamientos faciales, tratamientos corporales, Los Olivos, Lima",
    imageAlt: "Karito Centro Estético, medicina estética facial y corporal",
    pageMetaByPath: {
      "/": {
        title:
          "Karito Centro Estético | Medicina Estética Facial y Corporal en Los Olivos",
        description:
          "Karito Centro Estético ofrece limpiezas faciales, tratamientos faciales y corporales con atención personalizada, tecnología moderna y resultados visibles en Los Olivos, Lima.",
      },
      "/nosotros": {
        title: "Nosotros | Karito Centro Estético",
        description:
          "Conoce la esencia de Karito Centro Estético, nuestro enfoque humano y la experiencia que acompaña cada tratamiento.",
      },
      "/promociones": {
        title: "Promociones | Karito Centro Estético",
        description:
          "Descubre promociones vigentes en limpiezas faciales, tratamientos faciales y corporales de Karito Centro Estético.",
      },
      "/medicina-estetica": {
        title: "Medicina Estética | Karito Centro Estético",
        description:
          "Explora tratamientos de medicina estética como Botox, ácido hialurónico, exosomas, Novuma, Rejuran, mesoterapia y más.",
      },
      "/limpiezas-faciales": {
        title: "Limpiezas Faciales | Karito Centro Estético",
        description:
          "Explora nuestras limpiezas faciales y protocolos de renovación para una piel más limpia, fresca y luminosa.",
      },
      "/tratamientos-faciales": {
        title: "Tratamientos Faciales | Karito Centro Estético",
        description:
          "Tratamientos faciales personalizados para hidratación, bioestimulación, firmeza y rejuvenecimiento de la piel.",
      },
      "/tratamientos-corporales": {
        title: "Tratamientos Corporales | Karito Centro Estético",
        description:
          "Protocolos corporales orientados a drenaje, modelado, tonicidad y mejora del contorno con atención personalizada.",
      },
      "/limpieza-facial-profunda": {
        title: "Limpieza Facial Profunda | Karito Centro Estético",
        description:
          "Conoce el tratamiento de limpieza facial profunda de Karito Centro Estético y sus beneficios para una piel renovada.",
      },
      "/botox": {
        title: "Botox | Karito Centro Estético",
        description:
          "Tratamiento de Botox para suavizar líneas de expresión y mantener la armonía natural del rostro.",
      },
      "/reductor": {
        title: "Reductor | Karito Centro Estético",
        description:
          "Descubre nuestro tratamiento reductor corporal orientado a trabajar grasa localizada y mejorar el contorno.",
      },
    },
  },
  en: {
    lang: "en",
    brandTitle: "Karito Aesthetic Center",
    siteName: "Karito Aesthetic Center",
    author: "Karito Aesthetic Center",
    applicationName: "Karito Aesthetic Center",
    ogLocale: "en_US",
    defaultDescription:
      "Karito Aesthetic Center offers facial cleanses, facial treatments, and body treatments with personalized care, modern technology, and visible results in Los Olivos, Lima.",
    keywords:
      "Karito Aesthetic Center, aesthetic center, aesthetic medicine, facial cleanses, facial treatments, body treatments, Los Olivos, Lima",
    imageAlt: "Karito Aesthetic Center, facial and body aesthetic medicine",
    pageMetaByPath: {
      "/": {
        title:
          "Karito Aesthetic Center | Facial and Body Aesthetic Medicine in Los Olivos",
        description:
          "Karito Aesthetic Center offers facial cleanses, facial treatments, and body treatments with personalized care, modern technology, and visible results in Los Olivos, Lima.",
      },
      "/nosotros": {
        title: "About Us | Karito Aesthetic Center",
        description:
          "Discover the essence of Karito Aesthetic Center, our human approach, and the experience that supports every treatment.",
      },
      "/promociones": {
        title: "Promotions | Karito Aesthetic Center",
        description:
          "Discover current promotions on facial cleanses, facial treatments, and body treatments at Karito Aesthetic Center.",
      },
      "/medicina-estetica": {
        title: "Aesthetic Medicine | Karito Aesthetic Center",
        description:
          "Explore aesthetic medicine treatments such as Botox, hyaluronic acid, exosomes, Novuma, Rejuran, mesotherapy, and more.",
      },
      "/limpiezas-faciales": {
        title: "Facial Cleanses | Karito Aesthetic Center",
        description:
          "Explore our facial cleanse and renewal protocols for cleaner, fresher, and more radiant skin.",
      },
      "/tratamientos-faciales": {
        title: "Facial Treatments | Karito Aesthetic Center",
        description:
          "Personalized facial treatments for hydration, biostimulation, firmness, and skin rejuvenation.",
      },
      "/tratamientos-corporales": {
        title: "Body Treatments | Karito Aesthetic Center",
        description:
          "Body protocols focused on drainage, contouring, toning, and silhouette improvement with personalized care.",
      },
      "/limpieza-facial-profunda": {
        title: "Deep Facial Cleanse | Karito Aesthetic Center",
        description:
          "Learn about our deep facial cleanse treatment and its benefits for refreshed skin.",
      },
      "/botox": {
        title: "Botox | Karito Aesthetic Center",
        description:
          "Botox treatment designed to soften expression lines while maintaining the natural harmony of the face.",
      },
      "/reductor": {
        title: "Slimming Treatment | Karito Aesthetic Center",
        description:
          "Discover our body slimming treatment focused on localized fat and contour improvement.",
      },
    },
  },
};

export function normalizeSiteUrl(siteUrl = seoSettings.siteUrl) {
  return siteUrl.replace(/\/+$/g, "");
}

export function toAbsoluteUrl(path = "/", siteUrl = seoSettings.siteUrl) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const normalizedSiteUrl = normalizeSiteUrl(siteUrl);

  return normalizedSiteUrl
    ? `${normalizedSiteUrl}${normalizedPath}`
    : normalizedPath;
}

export function getShareImageUrl(siteUrl = seoSettings.siteUrl) {
  return toAbsoluteUrl(seoSettings.shareImagePath, siteUrl);
}

export function getCanonicalUrl(pathname = "/", siteUrl = seoSettings.siteUrl) {
  return toAbsoluteUrl(pathname || "/", siteUrl);
}

export function getSeoLocaleContent(locale = "es") {
  return seoByLocale[locale] ?? seoByLocale.es;
}

export function getPageSeo({
  locale = "es",
  pathname = "/",
  service = null,
  siteUrl = seoSettings.siteUrl,
}) {
  const localeContent = getSeoLocaleContent(locale);
  const pageMeta = service
    ? {
        title: `${service.title} | ${localeContent.brandTitle}`,
        description: service.description,
      }
    : localeContent.pageMetaByPath[pathname] ?? {
        title: `${localeContent.brandTitle} | Medicina Estética Facial y Corporal`,
        description: localeContent.defaultDescription,
      };

  return {
    ...localeContent,
    ...pageMeta,
    canonicalUrl: getCanonicalUrl(pathname, siteUrl),
    imageUrl: getShareImageUrl(siteUrl),
    imageType: seoSettings.imageType,
    imageWidth: seoSettings.imageWidth,
    imageHeight: seoSettings.imageHeight,
  };
}

export const defaultHtmlSeo = getPageSeo({ locale: "es", pathname: "/" });
