import generalFacialProfundo from "./limpiezas-faciales/general_facial_profundo.jpg";
import logo from "./branding/logo.jpg";
import promoNovuma from "./promotions/promo_novuma.webp";
import cardPromocion from "./promotions/card_promocion.png";
import cardMedicinaEstetica from "./services/card_medicina_estetica.png";
import cardTratamientoCorporales from "./services/card_tratamiento_corporales.png";
import cardTratamientoFaciales from "./services/card_tratamiento_faciales.png";
import desktopInformacion from "./hero/desktop_informacion.png";
import desktopPromocion from "./hero/desktop_promocion.png";
import desktopServicios from "./hero/desktop_servicios.png";
import mobileInformacion from "./hero/mobile_informacion.png";
import mobilePromocion from "./hero/mobile_promocion.png";
import mobileServicios from "./hero/mobile_servicios.png";
import tableInformacion from "./hero/table_informacion.png";
import tablePromocion from "./hero/table_promocion.png";
import tableServicios from "./hero/table_servicios.png";
import toxinaBotulinicaAntes from "./descripcion-servicios/antes_botox.jpeg";
import toxinaBotulinicaDespues from "./descripcion-servicios/despues_botox.jpeg";
import generalPrpCapilar from "./tratamientos-faciales/general_prp_capilar.webp";
import generalPlasmaCapilar from "./tratamientos-faciales/general_plasma_capilar.jpg";
import generalHidralips from "./tratamientos-faciales/general_hidralips.jpeg";
import generalPeptonas from "./tratamientos-faciales/general_peptonas.jpg";
import generalExosomas from "./tratamientos-faciales/general_exosomas.jpg";
import generalExosomasVech from "./tratamientos-faciales/general_exosomas_vtech.webp";
import generalExosomasYoutheal from "./tratamientos-faciales/general_exosomas_youtheal.jpg";
import generalRinomodelacion from "./tratamientos-faciales/general_rinomodelacion.webp";
import generalHialuronidasa from "./tratamientos-faciales/general_hialuronidasa.jpg";
import generalRichPl from "./tratamientos-faciales/general_rich_pl.jpg";
import generalDrenajePostLipo from "./tratamientos-corporales/general_drenaje_post_lipo.jpg";
import generalReductor from "./tratamientos-corporales/general_reductor.webp";
import generalHidrolipoclasia from "./tratamientos-corporales/general_hidrolipoclasia.jpg";
import generalMuscForte from "./tratamientos-corporales/general_musc_forte.webp";
import generalNovuma from "./tratamientos-corporales/general_novuma.jpg";
import generalEnzimasPolvo from "./tratamientos-corporales/general_enzimas_polvo.webp";
import generalEliminacionVerruga from "./tratamientos-faciales/general_eliminacion_verruga.jpg";
import generalEnzimasPapada from "./tratamientos-corporales/general_enzimas_papada.webp";
import generalTonegirl from "./tratamientos-corporales/general_tonegirl.webp";
import generalPinkIntimate from "./tratamientos-corporales/general_pink_intimate.jpg";
import beneficioReductor from "./descripcion-servicios/beneficios_reductor.jpg";
import detalleReductor from "./descripcion-servicios/detalle_reductor.jpg";
import bannerFacialProfundo from "./descripcion-servicios/banner_facial_profundo.jpg";
import bannerBotox from "./descripcion-servicios/banner_botox.png";
import bannerReductor from "./descripcion-servicios/banner_reductor.png";
import beneficioBotox from "./descripcion-servicios/beneficio_botox.jpg";
import descripcionFacialProfundo from "./descripcion-servicios/descripcion_limpieza_facial_profundo.jpg";
import detalleBotox from "./descripcion-servicios/detalle_botox.jpg";
import equipo from "./about/equipo.jpg";
import equipo1 from "./about/equipo_1.jpg";
import equipo2 from "./about/equipo_2.jpg";
import generalAcidoHialuronico from "./tratamientos-faciales/general_acido_hialuronico.jpg";
import generalBotox from "./tratamientos-faciales/general_botox.jpg";
import generalDepilacionCera from "./limpiezas-faciales/general_depilacion_cera.jpg";
import generalDermaplaning from "./limpiezas-faciales/general_dermaplaning.jpg";
import generalExfoliacionEspalda from "./limpiezas-faciales/general_exfoliacion_espalda.jpg";
import generalDermapen from "./tratamientos-faciales/general_dermapen.jpg";
import generalHidrafacial from "./limpiezas-faciales/general_hidrafacial.jpg";
import generalMesoterapia from "./tratamientos-faciales/general_mesoterapia.jpg";
import generalPeeling from "./limpiezas-faciales/general_peeling.jpg";
import generalPqAge from "./tratamientos-faciales/general_pqage.png";
import generalRejuran from "./tratamientos-faciales/general_rejuran.jpg";
import paraQueSirveBotox from "./descripcion-servicios/para_que_sirve_botox.jpg";
import promoBotox from "./promotions/promo_botox.jpg";
import promoAcidoHialuronico from "./promotions/promo_acido_hialuronico.jpg";
import promoPeeling from "./promotions/promo_peeling.jpg";
import promoDermapen from "./promotions/promo_dermapen.webp";
import promoLimpiezaFaciales from "./promotions/promo_limpieza_faciales.jpg";
import queEsBotox from "./descripcion-servicios/que_es_botox.jpg";
import queEsTratamientosCorporales from "./tratamientos-corporales/que_es_tratamientos_corporales.jpg";
import queEsTratamientosFaciales from "./tratamientos-faciales/que_es_medicina_estetica.jpg";
import queEsLimpiezasFaciales from "./limpiezas-faciales/que_es_limpieza_faciales.jpg";
import visionMision from "./about/vision_mision.jpg";

const CLOUDINARY_CLOUD_NAME =
  import.meta.env.VITE_CLOUDINARY_CLOUD_NAME?.trim() ?? "";
const CLOUDINARY_BASE_FOLDER = (
  import.meta.env.VITE_CLOUDINARY_BASE_FOLDER?.trim() ?? ""
).replace(/^\/+|\/+$/g, "");
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

function createImageSource(src, fallbackSrc) {
  const resolvedSrc = src || fallbackSrc;

  return {
    src: resolvedSrc,
    fallbackSrc:
      fallbackSrc && fallbackSrc !== resolvedSrc ? fallbackSrc : undefined,
    toString() {
      return resolvedSrc;
    },
  };
}

function resolveImage(relativePath, fallbackSrc) {
  return createImageSource(buildCloudinaryUrl(relativePath), fallbackSrc);
}

function buildResponsiveImage({ desktop, tablet, mobile }) {
  return {
    src: resolveImage(desktop.path, desktop.fallback),
    sources: [
      {
        media: "(max-width: 767px)",
        srcSet: resolveImage(mobile.path, mobile.fallback),
      },
      {
        media: "(max-width: 1023px)",
        srcSet: resolveImage(tablet.path, tablet.fallback),
      },
    ],
  };
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
    equipoBalance: resolveImage("about/equipo.jpg", equipo),
    misionVision: resolveImage("about/vision_mision.jpg", visionMision),
    quienesSomos: resolveImage("about/equipo_1.jpg", equipo1),
    nosotros: resolveImage("about/equipo_2.jpg", equipo2),
  },
  promotions: {
    generalPromociones: resolveImage(
      "promotions/card_promocion.png",
      cardPromocion,
    ),
    promoAcidoHialuronico: resolveImage(
      "promotions/promo_acido_hialuronico.jpg",
      promoAcidoHialuronico,
    ),
    promoNovuma: resolveImage("promotions/promo_novuma.webp", promoNovuma),
    promoDermapen: resolveImage(
      "promotions/promo_dermapen.webp",
      promoDermapen,
    ),
    promoLimpiezas: resolveImage(
      "promotions/promo_limpieza_faciales.jpg",
      promoLimpiezaFaciales,
    ),
    promoMediPacks: resolveImage("promotions/promo_peeling.jpg", promoPeeling),
    promoSueroterapia: resolveImage("promotions/promo_botox.jpg", promoBotox),
  },
  services: {
    cavitacionBanner: resolveImage(
      "descripcion-servicios/banner_reductor.png",
      bannerReductor,
    ),
    heroInformacion: buildResponsiveImage({
      desktop: {
        path: "hero/desktop_informacion.png",
        fallback: desktopInformacion,
      },
      tablet: {
        path: "hero/table_informacion.png",
        fallback: tableInformacion,
      },
      mobile: {
        path: "hero/mobile_informacion.png",
        fallback: mobileInformacion,
      },
    }),
    heroServicios: buildResponsiveImage({
      desktop: {
        path: "hero/desktop_servicios.png",
        fallback: desktopServicios,
      },
      tablet: {
        path: "hero/table_servicios.png",
        fallback: tableServicios,
      },
      mobile: {
        path: "hero/mobile_servicios.png",
        fallback: mobileServicios,
      },
    }),
    heroPromocion: buildResponsiveImage({
      desktop: {
        path: "hero/desktop_promocion.png",
        fallback: desktopPromocion,
      },
      tablet: {
        path: "hero/table_promocion.png",
        fallback: tablePromocion,
      },
      mobile: {
        path: "hero/mobile_promocion.png",
        fallback: mobilePromocion,
      },
    }),
    limpiezaProfundaBanner: resolveImage(
      "descripcion-servicios/banner_facial_profundo.jpg",
      bannerFacialProfundo,
    ),
    cardMedicinaEstetica: resolveImage(
      "services/card_medicina_estetica.png",
      cardMedicinaEstetica,
    ),
    cardTratamientoFaciales: resolveImage(
      "services/card_tratamiento_faciales.png",
      cardTratamientoFaciales,
    ),
    cardTratamientoCorporales: resolveImage(
      "services/card_tratamiento_corporales.png",
      cardTratamientoCorporales,
    ),
    toxinaBotulinicaAntes: resolveImage(
      "descripcion-servicios/antes_botox.jpeg",
      toxinaBotulinicaAntes,
    ),
    toxinaBotulinicaBanner: resolveImage(
      "descripcion-servicios/banner_botox.png",
      bannerBotox,
    ),
    toxinaBotulinicaBeneficios: resolveImage(
      "descripcion-servicios/detalle_botox.jpg",
      detalleBotox,
    ),
    toxinaBotulinicaDespues: resolveImage(
      "descripcion-servicios/despues_botox.jpeg",
      toxinaBotulinicaDespues,
    ),
    toxinaBotulinicaDetalle: resolveImage(
      "descripcion-servicios/que_es_botox.jpg",
      queEsBotox,
    ),
    toxinaBotulinicaResultados: resolveImage(
      "descripcion-servicios/para_que_sirve_botox.jpg",
      paraQueSirveBotox,
    ),
    tratamientosCorporalesDetalle: resolveImage(
      "tratamientos-corporales/que_es_tratamientos_corporales.jpg",
      queEsTratamientosCorporales,
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
    generalEliminacionVerruga: resolveImage(
      "tratamientos-faciales/general_eliminacion_verruga.jpg",
      generalEliminacionVerruga,
    ),
    queEsTratamientosFaciales: resolveImage(
      "tratamientos-faciales/que_es_medicina_estetica.jpg",
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
      generalAcidoHialuronico,
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
    generalPinkIntimate: resolveImage(
      "tratamientos-corporales/general_pink_intimate.jpg",
      generalPinkIntimate,
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
