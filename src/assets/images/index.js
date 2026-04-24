import equipoBalance from "./about/equipo.jpg";
import queEsLimpiezasFaciales from "./limpiezas-faciales/que_es_limpieza_faciales.jpg";
import misionVision from "./about/vision_mision.jpg";
import generalDermaplaning from "./limpiezas-faciales/general_dermaplaning.jpg";
import generalHidrafacial from "./limpiezas-faciales/general_hidrafacial.jpg";
import generalFacialProfundo from "./limpiezas-faciales/general_facial_profundo.jpg";
import generalPeeling from "./limpiezas-faciales/general_peeling.jpg";
import generalExfoliacionEspalda from "./limpiezas-faciales/general_exfoliacion_espalda.jpg";
import generalDepilacionCera from "./limpiezas-faciales/general_depilacion_cera.jpg";
import quienesSomos from "./about/equipo_1.jpg";
import nosotros from "./about/equipo_2.jpg";
import logo from "./branding/logo.jpg";
import generalPromociones from "./promotions/general_promociones.jpg";
import promoCorporales from "./promotions/promo_corporales.jpg";
import promoDepilacion from "./promotions/promo_depilacion.jpg";
import promoFaciales from "./promotions/promo_faciales.jpg";
import promoLimpiezas from "./promotions/promo_limpieza_faciales.jpg";
import promoMediPacks from "./promotions/promo_exfoliacion.jpg";
import promoSueroterapia from "./promotions/promo_botox.jpg";
import cavitacionBanner from "./descripcion-servicios/banner_reductor.png";
import hero1 from "./hero/hero_1.jpg";
import hero2 from "./hero/hero_2.jpg";
import hero3 from "./hero/hero_3.jpg";
import limpiezaProfundaBanner from "./descripcion-servicios/banner_facial_profundo.jpg";
import serviceBodyTreatment from "./services/servicio_tratamientos_corporales.jpg";
import serviceFacialCleanse from "./services/servicio_limpieza_faciales.jpg";
import serviceFacialTreatment from "./services/servicio_tratamientos_faciales.jpg";
import toxinaBotulinicaAntes from "./descripcion-servicios/antes_botox.jpeg";
import toxinaBotulinicaBanner from "./descripcion-servicios/banner_botox.png";
import toxinaBotulinicaBeneficios from "./descripcion-servicios/detalle_botox.jpg";
import toxinaBotulinicaDespues from "./descripcion-servicios/despues_botox.jpeg";
import toxinaBotulinicaDetalle from "./descripcion-servicios/que_es_botox.jpg";
import toxinaBotulinicaResultados from "./descripcion-servicios/para_que_sirve_botox.jpg";
import tratamientosCorporalesDetalle from "./tratamientos-corporales/que_es_tratamientos_corporales.jpg";
import queEsTratamientosFaciales from "./tratamientos-faciales/que_es_tratamientos_faciales.jpg";
import generalPqAge from "./tratamientos-faciales/general_pqage.png";
import generalDermapen from "./tratamientos-faciales/general_dermapen.jpg";
import generalPrpCapilar from "./tratamientos-faciales/general_prp_capilar.webp";
import generalPlasmaCapilar from "./tratamientos-faciales/general_plasma_capilar.jpg";
import generalHidralips from "./tratamientos-faciales/general_hidralips.jpeg";
import generalPeptonas from "./tratamientos-faciales/general_peptonas.jpg";
import generalExosomas from "./tratamientos-faciales/general_exosomas.jpg";
import generalExosomasVech from "./tratamientos-faciales/general_exosomas_vtech.webp";
import generalExosomasYoutheal from "./tratamientos-faciales/general_exosomas_youtheal.jpg";
import generalRejuran from "./tratamientos-faciales/general_rejuran.jpg";
import generalMesoterapia from "./tratamientos-faciales/general_mesoterapia.jpg";
import generalHialuronico from "./tratamientos-faciales/general_acido_hialuronico.jpg";
import generalBotox from "./tratamientos-faciales/general_botox.jpg";
import generalRinomodelacion from "./tratamientos-faciales/general_rinomodelacion.webp";
import generalHialuronidasa from "./tratamientos-faciales/general_hialuronidasa.jpg";
import generalRichPl from "./tratamientos-faciales/general_rich_pl.jpg";
import generalDrenajePostLipo from "./tratamientos-corporales/general_drenaje_post_lipo.jpg";
import generalReductor from "./tratamientos-corporales/general_reductor.webp";
import generalHidrolipoclasia from "./tratamientos-corporales/general_hidrolipoclasia.jpg";
import generalMuscForte from "./tratamientos-corporales/general_musc_forte.webp";
import generalNovuma from "./tratamientos-corporales/general_novuma.jpg";
import generalEnzimasPolvo from "./tratamientos-corporales/general_enzimas_polvo.webp";
import generalEnzimasPapada from "./tratamientos-corporales/general_enzimas_papada.webp";
import generalTonegirl from "./tratamientos-corporales/general_tonegirl.webp";
import descripcionFacialProfundo from "./descripcion-servicios/descripcion_limpieza_facial_profundo.jpg";
import beneficioBotox from "./descripcion-servicios/beneficio_botox.jpg";
import beneficioReductor from "./descripcion-servicios/beneficios_reductor.jpg";
import detalleReductor from "./descripcion-servicios/detalle_reductor.jpg";

const CLOUDINARY_CLOUD_NAME =
  import.meta.env.VITE_CLOUDINARY_CLOUD_NAME?.trim() ?? "";
const CLOUDINARY_BASE_FOLDER =
  import.meta.env.VITE_CLOUDINARY_BASE_FOLDER?.trim().replace(
    /^\/+|\/+$/g,
    "",
  ) ?? "";
const CLOUDINARY_DELIVERY_TYPE =
  import.meta.env.VITE_CLOUDINARY_DELIVERY_TYPE?.trim() || "upload";
const CLOUDINARY_TRANSFORMATION =
  import.meta.env.VITE_CLOUDINARY_TRANSFORMATION?.trim() || "f_auto,q_auto";
const CLOUDINARY_VERSION =
  import.meta.env.VITE_CLOUDINARY_VERSION?.trim() ?? "";

const isCloudinaryEnabled = Boolean(CLOUDINARY_CLOUD_NAME);

function normalizeCloudinaryVersion(version) {
  if (!version) return "";
  return version.startsWith("v") ? version : `v${version}`;
}

function encodePublicId(publicId) {
  return publicId
    .split("/")
    .filter(Boolean)
    .map((segment) => encodeURIComponent(segment))
    .join("/");
}

function toCloudinaryPublicId(relativePath) {
  const normalizedPath = relativePath
    .replace(/^\.?\//, "")
    .replace(/\.[^.]+$/, "");

  return [CLOUDINARY_BASE_FOLDER, normalizedPath].filter(Boolean).join("/");
}

function buildCloudinaryUrl(relativePath) {
  if (!isCloudinaryEnabled) {
    return null;
  }

  const version = normalizeCloudinaryVersion(CLOUDINARY_VERSION);
  const parts = [
    "https://res.cloudinary.com",
    CLOUDINARY_CLOUD_NAME,
    "image",
    CLOUDINARY_DELIVERY_TYPE,
  ];

  if (CLOUDINARY_TRANSFORMATION) {
    parts.push(CLOUDINARY_TRANSFORMATION);
  }

  if (version) {
    parts.push(version);
  }

  parts.push(encodePublicId(toCloudinaryPublicId(relativePath)));

  return parts.join("/");
}

function resolveImage(relativePath, fallbackSrc) {
  return buildCloudinaryUrl(relativePath) ?? fallbackSrc;
}

const exampleImageModules = import.meta.glob(
  "./examples/**/*.{png,jpg,jpeg,webp}",
  { eager: true, import: "default" },
);

const toCamelCase = (value) =>
  value
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((part, index) => {
      const normalized = part.toLowerCase();

      if (index === 0) {
        return normalized;
      }

      return normalized.charAt(0).toUpperCase() + normalized.slice(1);
    })
    .join("");

const setNestedImage = (target, pathParts, value) => {
  let cursor = target;

  pathParts.forEach((part, index) => {
    if (index === pathParts.length - 1) {
      cursor[part] = value;
      return;
    }

    cursor[part] ??= {};
    cursor = cursor[part];
  });
};

const examples = Object.entries(exampleImageModules).reduce(
  (collection, [path, assetSrc]) => {
    const relativePath = path.replace("./", "");
    const keyPath = path
      .replace("./examples/", "")
      .replace(/\.[^.]+$/, "")
      .split("/")
      .map(toCamelCase);

    setNestedImage(collection, keyPath, resolveImage(relativePath, assetSrc));

    return collection;
  },
  {},
);

export const imageAssets = {
  branding: {
    logo: resolveImage("branding/logo.jpg", logo),
  },
  about: {
    equipoBalance: resolveImage("about/equipo.jpg", equipoBalance),
    misionVision: resolveImage("about/vision_mision.jpg", misionVision),
    quienesSomos: resolveImage("about/equipo_1.jpg", quienesSomos),
    nosotros: resolveImage("about/equipo_2.jpg", nosotros),
  },
  promotions: {
    generalPromociones: resolveImage(
      "promotions/general_promociones.jpg",
      generalPromociones,
    ),
    promoCorporales: resolveImage(
      "promotions/promo_corporales.jpg",
      promoCorporales,
    ),
    promoDepilacion: resolveImage(
      "promotions/promo_depilacion.jpg",
      promoDepilacion,
    ),
    promoFaciales: resolveImage("promotions/promo_faciales.jpg", promoFaciales),
    promoLimpiezas: resolveImage(
      "promotions/promo_limpieza_faciales.jpg",
      promoLimpiezas,
    ),
    promoMediPacks: resolveImage(
      "promotions/promo_exfoliacion.jpg",
      promoMediPacks,
    ),
    promoSueroterapia: resolveImage(
      "promotions/promo_botox.jpg",
      promoSueroterapia,
    ),
  },
  services: {
    cavitacionBanner: resolveImage(
      "descripcion-servicios/banner_reductor.png",
      cavitacionBanner,
    ),
    hero1: resolveImage("hero/hero_1.jpg", hero1),
    hero2: resolveImage("hero/hero_2.jpg", hero2),
    hero3: resolveImage("hero/hero_3.jpg", hero3),
    limpiezaProfundaBanner: resolveImage(
      "descripcion-servicios/banner_facial_profundo.jpg",
      limpiezaProfundaBanner,
    ),
    serviceBodyTreatment: resolveImage(
      "services/servicio_tratamientos_corporales.jpg",
      serviceBodyTreatment,
    ),
    serviceFacialCleanse: resolveImage(
      "services/servicio_limpieza_faciales.jpg",
      serviceFacialCleanse,
    ),
    serviceFacialTreatment: resolveImage(
      "services/servicio_tratamientos_faciales.jpg",
      serviceFacialTreatment,
    ),
    toxinaBotulinicaAntes: resolveImage(
      "descripcion-servicios/antes_botox.jpeg",
      toxinaBotulinicaAntes,
    ),
    toxinaBotulinicaBanner: resolveImage(
      "descripcion-servicios/banner_botox.png",
      toxinaBotulinicaBanner,
    ),
    toxinaBotulinicaBeneficios: resolveImage(
      "descripcion-servicios/detalle_botox.jpg",
      toxinaBotulinicaBeneficios,
    ),
    toxinaBotulinicaDespues: resolveImage(
      "descripcion-servicios/despues_botox.jpeg",
      toxinaBotulinicaDespues,
    ),
    toxinaBotulinicaDetalle: resolveImage(
      "descripcion-servicios/que_es_botox.jpg",
      toxinaBotulinicaDetalle,
    ),
    toxinaBotulinicaResultados: resolveImage(
      "descripcion-servicios/para_que_sirve_botox.jpg",
      toxinaBotulinicaResultados,
    ),
    tratamientosCorporalesDetalle: resolveImage(
      "tratamientos-corporales/que_es_tratamientos_corporales.jpg",
      tratamientosCorporalesDetalle,
    ),
    queEsLimpiezasFaciales: resolveImage(
      "limpiezas-faciales/que_es_limpieza_faciales.jpg",
      queEsLimpiezasFaciales,
    ),
    generalDermaplaning: resolveImage(
      "limpiezas-faciales/general_dermaplaning.jpg",
      generalDermaplaning,
    ),
    generalHidrafacial: resolveImage(
      "limpiezas-faciales/general_hidrafacial.jpg",
      generalHidrafacial,
    ),
    generalFacialProfundo: resolveImage(
      "limpiezas-faciales/general_facial_profundo.jpg",
      generalFacialProfundo,
    ),
    generalPeeling: resolveImage(
      "limpiezas-faciales/general_peeling.jpg",
      generalPeeling,
    ),
    generalExfoliacionEspalda: resolveImage(
      "limpiezas-faciales/general_exfoliacion_espalda.jpg",
      generalExfoliacionEspalda,
    ),
    generalDepilacionCera: resolveImage(
      "limpiezas-faciales/general_depilacion_cera.jpg",
      generalDepilacionCera,
    ),
    queEsTratamientosFaciales: resolveImage(
      "tratamientos-faciales/que_es_tratamientos_faciales.jpg",
      queEsTratamientosFaciales,
    ),
    generalPqAge: resolveImage(
      "tratamientos-faciales/general_pqage.png",
      generalPqAge,
    ),
    generalDermapen: resolveImage(
      "tratamientos-faciales/general_dermapen.jpg",
      generalDermapen,
    ),
    generalPrpCapilar: resolveImage(
      "tratamientos-faciales/general_prp_capilar.webp",
      generalPrpCapilar,
    ),
    generalPlasmaCapilar: resolveImage(
      "tratamientos-faciales/general_plasma_capilar.jpg",
      generalPlasmaCapilar,
    ),
    generalHidralips: resolveImage(
      "tratamientos-faciales/general_hidralips.jpeg",
      generalHidralips,
    ),
    generalPeptonas: resolveImage(
      "tratamientos-faciales/general_peptonas.jpg",
      generalPeptonas,
    ),
    generalExosomas: resolveImage(
      "tratamientos-faciales/general_exosomas.jpg",
      generalExosomas,
    ),
    generalExosomasVech: resolveImage(
      "tratamientos-faciales/general_exosomas_vtech.webp",
      generalExosomasVech,
    ),
    generalExosomasYoutheal: resolveImage(
      "tratamientos-faciales/general_exosomas_youtheal.jpg",
      generalExosomasYoutheal,
    ),
    generalRejuran: resolveImage(
      "tratamientos-faciales/general_rejuran.jpg",
      generalRejuran,
    ),
    generalMesoterapia: resolveImage(
      "tratamientos-faciales/general_mesoterapia.jpg",
      generalMesoterapia,
    ),
    generalHialuronico: resolveImage(
      "tratamientos-faciales/general_acido_hialuronico.jpg",
      generalHialuronico,
    ),
    generalBotox: resolveImage(
      "tratamientos-faciales/general_botox.jpg",
      generalBotox,
    ),
    generalRinomodelacion: resolveImage(
      "tratamientos-faciales/general_rinomodelacion.webp",
      generalRinomodelacion,
    ),
    generalHialuronidasa: resolveImage(
      "tratamientos-faciales/general_hialuronidasa.jpg",
      generalHialuronidasa,
    ),
    generalRichPl: resolveImage(
      "tratamientos-faciales/general_rich_pl.jpg",
      generalRichPl,
    ),
    generalDrenajePostLipo: resolveImage(
      "tratamientos-corporales/general_drenaje_post_lipo.jpg",
      generalDrenajePostLipo,
    ),
    generalReductor: resolveImage(
      "tratamientos-corporales/general_reductor.webp",
      generalReductor,
    ),
    generalHidrolipoclasia: resolveImage(
      "tratamientos-corporales/general_hidrolipoclasia.jpg",
      generalHidrolipoclasia,
    ),
    generalMuscForte: resolveImage(
      "tratamientos-corporales/general_musc_forte.webp",
      generalMuscForte,
    ),
    generalNovuma: resolveImage(
      "tratamientos-corporales/general_novuma.jpg",
      generalNovuma,
    ),
    generalEnzimasPolvo: resolveImage(
      "tratamientos-corporales/general_enzimas_polvo.webp",
      generalEnzimasPolvo,
    ),
    generalEnzimasPapada: resolveImage(
      "tratamientos-corporales/general_enzimas_papada.webp",
      generalEnzimasPapada,
    ),
    generalTonegirl: resolveImage(
      "tratamientos-corporales/general_tonegirl.webp",
      generalTonegirl,
    ),
    descripcionFacialProfundo: resolveImage(
      "descripcion-servicios/descripcion_limpieza_facial_profundo.jpg",
      descripcionFacialProfundo,
    ),
    beneficioBotox: resolveImage(
      "descripcion-servicios/beneficio_botox.jpg",
      beneficioBotox,
    ),
    beneficioReductor: resolveImage(
      "descripcion-servicios/beneficios_reductor.jpg",
      beneficioReductor,
    ),
    detalleReductor: resolveImage(
      "descripcion-servicios/detalle_reductor.jpg",
      detalleReductor,
    ),
  },
  examples,
};

export { isCloudinaryEnabled };
export default imageAssets;
