import { imageAssets } from "@/assets/images";
import { cloneMutableValue, syncMutableValue } from "@/utils/mutableData";

const serviceCategories = {
  "facial-cleanse": {
    id: "facial-cleanse",
    title: "Limpiezas Faciales",
    href: "/limpiezas-faciales",
    featuredIds: ["limpieza-facial-profunda", "dermaplaning", "hidrafacial"],
    relatedIds: ["peeling", "exfoliacion-espalda", "depilacion-cera"],
  },
  "facial-treatment": {
    id: "facial-treatment",
    title: "Tratamientos Faciales",
    href: "/tratamientos-faciales",
    featuredIds: [
      "botox",
      "pqage",
      "dermapen",
      "prp-capilar",
      "plasma-capilar",
      "hidralips",
      "peptona",
      "exosomas",
      "exosomas-v-tech",
    ],
    relatedIds: [
      "exosomas-youtheal",
      "rejuran",
      "mesoterapia",
      "acido-hialuronico",
      "rinomodelacion",
      "hialuronidasa",
      "rich-pl",
    ],
  },
  "body-treatment": {
    id: "body-treatment",
    title: "Tratamientos Corporales",
    href: "/tratamientos-corporales",
    featuredIds: [
      "reductor",
      "drenaje-post-lipo",
      "hidrolipoclasia",
      "enzimas-polvo",
    ],
    relatedIds: ["papada-enzimas", "tonegirl", "musc-forte", "novuma"],
  },
};

const categoryTitlesByLocale = {
  en: {
    "facial-cleanse": "Facial Cleanses",
    "facial-treatment": "Facial Treatments",
    "body-treatment": "Body Treatments",
  },
};

const serviceDefinitions = [
  {
    id: "limpieza-facial-profunda",
    title: "Facial profundo",
    href: "/limpieza-facial-profunda",
    categoryId: "facial-cleanse",
    description:
      "Limpieza intensiva enfocada en desobstruir poros, retirar impurezas y equilibrar la piel según sus necesidades.",
    imageSrc: imageAssets.services.generalFacialProfundo,
    pageType: "custom",
  },
  {
    id: "dermaplaning",
    title: "Dermaplaning",
    href: "/dermaplaning",
    categoryId: "facial-cleanse",
    description:
      "Exfoliación suave que retira células muertas y vello fino para dejar la piel más lisa, luminosa y uniforme.",
    imageSrc: imageAssets.services.generalDermaplaning,
  },
  {
    id: "hidrafacial",
    title: "Hidrafacial",
    href: "/hidrafacial",
    categoryId: "facial-cleanse",
    description:
      "Protocolo de limpieza e hidratación profunda que refresca el rostro y aporta glow inmediato.",
    imageSrc: imageAssets.services.generalHidrafacial,
  },
  {
    id: "peeling",
    title: "Peeling",
    href: "/peeling",
    categoryId: "facial-cleanse",
    description:
      "Renovación superficial que ayuda a unificar el tono, suavizar la textura y mejorar la luminosidad.",
    imageSrc: imageAssets.services.generalPeeling,
  },
  {
    id: "exfoliacion-espalda",
    title: "Exfoliación de espalda",
    href: "/exfoliacion-espalda",
    categoryId: "facial-cleanse",
    description:
      "Tratamiento de limpieza y renovación pensado para purificar la piel de la espalda y mejorar su apariencia.",
    imageSrc: imageAssets.services.generalExfoliacionEspalda,
  },
  {
    id: "depilacion-cera",
    title: "Depilación con cera",
    href: "/depilacion-cera",
    categoryId: "facial-cleanse",
    description:
      "Depilación tradicional que retira el vello desde la raíz para una piel más suave y prolija por más tiempo.",
    imageSrc: imageAssets.services.generalDepilacionCera,
  },
  {
    id: "pqage",
    title: "PQAge",
    href: "/pqage",
    categoryId: "facial-treatment",
    description:
      "Bioestimulación facial orientada a mejorar firmeza, textura y luminosidad sin alterar la naturalidad del rostro.",
    imageSrc: imageAssets.services.generalPqAge,
  },
  {
    id: "dermapen",
    title: "Dermapen",
    href: "/dermapen",
    categoryId: "facial-treatment",
    description:
      "Microneedling que estimula colágeno y ayuda a mejorar textura, poros y apariencia general de la piel.",
    imageSrc: imageAssets.services.generalDermapen,
  },
  {
    id: "prp-capilar",
    title: "PRP capilar",
    href: "/prp-capilar",
    categoryId: "facial-treatment",
    description:
      "Tratamiento regenerativo con plasma rico en plaquetas que apoya la salud del cuero cabelludo y fortalece el folículo.",
    imageSrc: imageAssets.services.generalPrpCapilar,
  },
  {
    id: "plasma-capilar",
    title: "Plasma capilar",
    href: "/plasma-capilar",
    categoryId: "facial-treatment",
    description:
      "Protocolo capilar orientado a estimular el cuero cabelludo y acompañar planes de fortalecimiento y recuperación.",
    imageSrc: imageAssets.services.generalPlasmaCapilar,
  },
  {
    id: "hidralips",
    title: "Hidralips",
    href: "/hidralips",
    categoryId: "facial-treatment",
    description:
      "Protocolo hidratante para labios que mejora suavidad, definición y una apariencia saludable.",
    imageSrc: imageAssets.services.generalHidralips,
  },
  {
    id: "peptona",
    title: "Peptona",
    href: "/peptona",
    categoryId: "facial-treatment",
    description:
      "Bioestimulación con péptidos pensada para mejorar calidad cutánea, hidratación y firmeza.",
    imageSrc: imageAssets.services.generalPeptonas,
  },
  {
    id: "exosomas",
    title: "Exosomas",
    href: "/exosomas",
    categoryId: "facial-treatment",
    description:
      "Tratamiento avanzado de regeneración que favorece hidratación, luminosidad y recuperación de la piel.",
    imageSrc: imageAssets.services.generalExosomas,
  },
  {
    id: "exosomas-v-tech",
    title: "Exosomas V-Tech",
    href: "/exosomas-v-tech",
    categoryId: "facial-treatment",
    description:
      "Variante enfocada en regeneración y soporte de la calidad cutánea con tecnología de exosomas.",
    imageSrc: imageAssets.services.generalExosomasVech,
  },
  {
    id: "exosomas-youtheal",
    title: "Exosomas Youtheal",
    href: "/exosomas-youtheal",
    categoryId: "facial-treatment",
    description:
      "Alternativa de exosomas orientada a revitalizar la piel y acompañar protocolos de rejuvenecimiento.",
    imageSrc: imageAssets.services.generalExosomasYoutheal,
  },
  {
    id: "rejuran",
    title: "Rejuran",
    href: "/rejuran",
    categoryId: "facial-treatment",
    description:
      "Tratamiento bioestimulador enfocado en mejorar elasticidad, textura y apariencia saludable del rostro.",
    imageSrc: imageAssets.services.generalRejuran,
  },
  {
    id: "mesoterapia",
    title: "Mesoterapia",
    href: "/mesoterapia",
    categoryId: "facial-treatment",
    description:
      "Microaplicaciones personalizadas para aportar activos que hidratan, revitalizan y acompañan objetivos específicos.",
    imageSrc: imageAssets.services.generalMesoterapia,
  },
  {
    id: "acido-hialuronico",
    title: "Ácido hialurónico",
    href: "/acido-hialuronico",
    categoryId: "facial-treatment",
    description:
      "Relleno e hidratación localizada para aportar volumen, definición y armonía facial.",
    imageSrc: imageAssets.services.generalHialuronico,
  },
  {
    id: "botox",
    title: "Botox",
    href: "/botox",
    categoryId: "facial-treatment",
    description:
      "Tratamiento médico estético que ayuda a suavizar líneas de expresión manteniendo la naturalidad del rostro.",
    imageSrc: imageAssets.services.generalBotox,
    pageType: "custom",
  },
  {
    id: "rinomodelacion",
    title: "Rinomodelación",
    href: "/rinomodelacion",
    categoryId: "facial-treatment",
    description:
      "Perfilado nasal sin cirugía para armonizar puente y punta de forma sutil y controlada.",
    imageSrc: imageAssets.services.generalRinomodelacion,
  },
  {
    id: "hialuronidasa",
    title: "Hialuronidasa",
    href: "/hialuronidasa",
    categoryId: "facial-treatment",
    description:
      "Procedimiento orientado a corregir o modular resultados previos con ácido hialurónico.",
    imageSrc: imageAssets.services.generalHialuronidasa,
  },
  {
    id: "rich-pl",
    title: "Rich PL",
    href: "/rich-pl",
    categoryId: "facial-treatment",
    description:
      "Protocolo regenerativo enfocado en revitalización cutánea y soporte de planes de rejuvenecimiento.",
    imageSrc: imageAssets.services.generalRichPl,
  },
  {
    id: "drenaje-post-lipo",
    title: "Drenaje post lipo",
    href: "/drenaje-post-lipo",
    categoryId: "body-treatment",
    description:
      "Masaje postoperatorio enfocado en disminuir inflamación, favorecer el drenaje y acompañar la recuperación.",
    imageSrc: imageAssets.services.generalDrenajePostLipo,
  },
  {
    id: "reductor",
    title: "Reductor",
    href: "/reductor",
    categoryId: "body-treatment",
    description:
      "Protocolo corporal orientado a trabajar grasa localizada y mejorar el contorno de zonas específicas.",
    imageSrc: imageAssets.services.generalReductor,
    pageType: "custom",
  },
  {
    id: "hidrolipoclasia",
    title: "Hidrolipoclasia",
    href: "/hidrolipoclasia",
    categoryId: "body-treatment",
    description:
      "Tratamiento mínimamente invasivo que complementa procesos de reducción localizada con evaluación profesional.",
    imageSrc: imageAssets.services.generalHidrolipoclasia,
  },
  {
    id: "enzimas-polvo",
    title: "Enzimas en polvo",
    href: "/enzimas-polvo",
    categoryId: "body-treatment",
    description:
      "Aplicación corporal enfocada en trabajar adiposidad localizada y apoyar protocolos de modelado.",
    imageSrc: imageAssets.services.generalEnzimasPolvo,
  },
  {
    id: "papada-enzimas",
    title: "Papada con enzimas",
    href: "/papada-enzimas",
    categoryId: "body-treatment",
    description:
      "Protocolo específico para trabajar la zona submentoniana y mejorar el perfil facial.",
    imageSrc: imageAssets.services.generalEnzimasPapada,
  },
  {
    id: "tonegirl",
    title: "Tonegirl",
    href: "/tonegirl",
    categoryId: "body-treatment",
    description:
      "Tratamiento corporal pensado para tonificar y acompañar objetivos de definición muscular y firmeza.",
    imageSrc: imageAssets.services.generalTonegirl,
  },
  {
    id: "musc-forte",
    title: "Musc Forte",
    href: "/musc-forte",
    categoryId: "body-treatment",
    description:
      "Protocolo orientado a fortalecer y mejorar el aspecto de zonas que buscan mayor tonicidad.",
    imageSrc: imageAssets.services.generalMuscForte,
  },
  {
    id: "novuma",
    title: "Novuma",
    href: "/novuma",
    categoryId: "body-treatment",
    description:
      "Tecnología corporal enfocada en redefinir contorno y potenciar resultados de forma personalizada.",
    imageSrc: imageAssets.services.generalNovuma,
  },
];

const serviceCategoriesEs = cloneMutableValue(serviceCategories);
const serviceDefinitionsEs = cloneMutableValue(serviceDefinitions);

const serviceTextByLocale = {
  en: {
    "limpieza-facial-profunda": {
      title: "Deep Facial Cleanse",
      description:
        "Intensive cleansing focused on unclogging pores, removing impurities, and balancing the skin according to its needs.",
    },
    dermaplaning: {
      title: "Dermaplaning",
      description:
        "Gentle exfoliation that removes dead skin cells and peach fuzz for smoother, brighter, and more even-looking skin.",
    },
    hidrafacial: {
      title: "Hydrafacial",
      description:
        "Deep cleansing and hydration protocol that refreshes the face and delivers an immediate glow.",
    },
    peeling: {
      title: "Peeling",
      description:
        "Surface renewal treatment that helps even the tone, smooth texture, and improve radiance.",
    },
    "exfoliacion-espalda": {
      title: "Back Exfoliation",
      description:
        "Cleansing and renewal treatment designed to purify the skin on the back and improve its appearance.",
    },
    "depilacion-cera": {
      title: "Waxing",
      description:
        "Traditional hair removal that pulls hair from the root for smoother, cleaner-looking skin for longer.",
    },
    pqage: {
      title: "PQAge",
      description:
        "Facial biostimulation designed to improve firmness, texture, and glow without altering the face's natural look.",
    },
    dermapen: {
      title: "Dermapen",
      description:
        "Microneedling that stimulates collagen and helps improve texture, pores, and the overall look of the skin.",
    },
    "prp-capilar": {
      title: "Hair PRP",
      description:
        "Regenerative treatment with platelet-rich plasma that supports scalp health and strengthens the follicle.",
    },
    "plasma-capilar": {
      title: "Hair Plasma",
      description:
        "Hair-focused protocol designed to stimulate the scalp and support strengthening and recovery plans.",
    },
    hidralips: {
      title: "Hydralips",
      description:
        "Hydrating lip protocol that improves softness, definition, and a healthy appearance.",
    },
    peptona: {
      title: "Peptona",
      description:
        "Peptide-based biostimulation designed to improve skin quality, hydration, and firmness.",
    },
    exosomas: {
      title: "Exosomes",
      description:
        "Advanced regenerative treatment that supports hydration, glow, and skin recovery.",
    },
    "exosomas-v-tech": {
      title: "Exosomes V-Tech",
      description:
        "Variation focused on regeneration and support for skin quality through exosome technology.",
    },
    "exosomas-youtheal": {
      title: "Exosomes Youtheal",
      description:
        "Exosome alternative designed to revitalize the skin and support rejuvenation protocols.",
    },
    rejuran: {
      title: "Rejuran",
      description:
        "Biostimulatory treatment focused on improving elasticity, texture, and the healthy appearance of the face.",
    },
    mesoterapia: {
      title: "Mesotherapy",
      description:
        "Personalized micro-applications that deliver active ingredients to hydrate, revitalize, and support specific goals.",
    },
    "acido-hialuronico": {
      title: "Hyaluronic Acid",
      description:
        "Localized filler and hydration to provide volume, definition, and facial harmony.",
    },
    botox: {
      title: "Botox",
      description:
        "Aesthetic medical treatment that helps soften expression lines while preserving the natural look of the face.",
    },
    rinomodelacion: {
      title: "Nose Reshaping",
      description:
        "Non-surgical nose shaping to harmonize bridge and tip in a subtle and controlled way.",
    },
    hialuronidasa: {
      title: "Hyaluronidase",
      description:
        "Procedure designed to correct or adjust previous hyaluronic acid results.",
    },
    "rich-pl": {
      title: "Rich PL",
      description:
        "Regenerative protocol focused on skin revitalization and support for rejuvenation plans.",
    },
    "drenaje-post-lipo": {
      title: "Post-Lipo Drainage",
      description:
        "Post-surgical massage focused on reducing inflammation, supporting drainage, and accompanying recovery.",
    },
    reductor: {
      title: "Slimming Treatment",
      description:
        "Body protocol designed to work on localized fat and improve contour in specific areas.",
    },
    hidrolipoclasia: {
      title: "Hydrolipoclasia",
      description:
        "Minimally invasive treatment that complements localized reduction processes with professional evaluation.",
    },
    "enzimas-polvo": {
      title: "Powder Enzymes",
      description:
        "Body application focused on localized fat and support for contouring protocols.",
    },
    "papada-enzimas": {
      title: "Double Chin Enzymes",
      description:
        "Specific protocol to work on the submental area and improve the facial profile.",
    },
    tonegirl: {
      title: "Tonegirl",
      description:
        "Body treatment created to tone and support goals related to muscle definition and firmness.",
    },
    "musc-forte": {
      title: "Musc Forte",
      description:
        "Protocol focused on strengthening and improving the look of areas seeking greater tone.",
    },
    novuma: {
      title: "Novuma",
      description:
        "Body technology focused on redefining contour and enhancing results in a personalized way.",
    },
  },
};

function normalizePathname(pathname) {
  if (!pathname || pathname === "/") {
    return "/";
  }

  return pathname.replace(/\/+$/, "").toLowerCase();
}

const serviceById = Object.fromEntries(
  serviceDefinitions.map((service) => [
    service.id,
    {
      ...service,
      imageAlt: service.imageAlt ?? `Tratamiento ${service.title}`,
      pageType: service.pageType ?? "generic",
    },
  ]),
);

export const serviceCatalog = Object.values(serviceById);
export { serviceCategories };

export const genericServicePages = serviceCatalog.filter(
  (service) => service.pageType === "generic",
);

function buildLocalizedCatalogState(locale) {
  const normalizedLocale = locale === "en" ? "en" : "es";
  const categories = cloneMutableValue(serviceCategoriesEs);

  Object.entries(categoryTitlesByLocale[normalizedLocale] ?? {}).forEach(
    ([categoryId, title]) => {
      if (categories[categoryId]) {
        categories[categoryId].title = title;
      }
    },
  );

  const definitions = serviceDefinitionsEs.map((service) => {
    const localizedText =
      serviceTextByLocale[normalizedLocale]?.[service.id] ?? {};
    const title = localizedText.title ?? service.title;

    return {
      ...service,
      ...localizedText,
      title,
      imageAlt:
        localizedText.imageAlt ??
        service.imageAlt ??
        (normalizedLocale === "en"
          ? `Treatment ${title}`
          : `Tratamiento ${title}`),
      pageType: service.pageType ?? "generic",
    };
  });

  const byId = Object.fromEntries(
    definitions.map((service) => [service.id, service]),
  );
  const catalog = Object.values(byId);

  return {
    categories,
    byId,
    catalog,
    genericPages: catalog.filter((service) => service.pageType === "generic"),
  };
}

export function setServiceCatalogLocale(locale) {
  const nextState = buildLocalizedCatalogState(locale);

  syncMutableValue(serviceCategories, nextState.categories);
  syncMutableValue(serviceById, nextState.byId);
  syncMutableValue(serviceCatalog, nextState.catalog);
  syncMutableValue(genericServicePages, nextState.genericPages);
}

export function getCategoryById(categoryId) {
  return serviceCategories[categoryId] ?? null;
}

export function getServiceById(serviceId) {
  return serviceById[serviceId] ?? null;
}

export function getServiceByPath(pathname) {
  const normalizedPathname = normalizePathname(pathname);

  return (
    serviceCatalog.find(
      (service) => normalizePathname(service.href) === normalizedPathname,
    ) ?? null
  );
}

export function getServicesByIds(serviceIds) {
  return serviceIds.map((serviceId) => serviceById[serviceId]).filter(Boolean);
}

export function getFeaturedServicesByCategory(categoryId) {
  return getServicesByIds(serviceCategories[categoryId]?.featuredIds ?? []);
}

export function getRelatedServicesByCategory(categoryId) {
  return getServicesByIds(serviceCategories[categoryId]?.relatedIds ?? []);
}

export function getServicesByCategory(categoryId) {
  const category = getCategoryById(categoryId);

  if (!category) {
    return [];
  }

  return getServicesByIds([
    ...new Set([...category.featuredIds, ...category.relatedIds]),
  ]);
}

export function getSuggestedServicesForCategory(categoryId, limit = 8) {
  const candidateIds = Object.values(serviceCategories)
    .filter((category) => category.id !== categoryId)
    .flatMap((category) => [...category.featuredIds, ...category.relatedIds]);

  return getServicesByIds([...new Set(candidateIds)]).slice(0, limit);
}

export function getRelatedServicesForService(serviceId, limit = 4) {
  const service = getServiceById(serviceId);
  const category = getCategoryById(service?.categoryId);

  if (!service || !category) {
    return [];
  }

  return [...category.featuredIds, ...category.relatedIds]
    .filter((candidateId) => candidateId !== serviceId)
    .map((candidateId) => serviceById[candidateId])
    .filter(Boolean)
    .slice(0, limit);
}
