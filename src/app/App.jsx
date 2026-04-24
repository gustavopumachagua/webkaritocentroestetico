import { Fragment, useEffect, useLayoutEffect, useRef, useState } from "react";
import { useLocale } from "@/app/providers/LocaleContext";
import AboutPage from "@/pages/about/AboutPage";
import HomePage from "@/pages/home/HomePage";
import PromocionsPage from "@/pages/PromocionsPage";
import BodyTreatmentsPage from "@/pages/services/BodyTreatmentsPage";
import CavitacionPage from "@/pages/services/CavitacionPage";
import DeepCleansePage from "@/pages/services/DeepCleansePage";
import FacialCleansePage from "@/pages/services/FacialCleansePage";
import FacialTreatmentsPage from "@/pages/services/FacialTreatmentsPage";
import GenericServicePage from "@/pages/services/GenericServicePage";
import ToxinaBotulinicaPage from "@/pages/services/ToxinaBotulinicaPage";
import { genericServicePages, getServiceByPath } from "@/data/serviceCatalog";
import { normalizePathname } from "@/utils/navigation";

const metaByLocale = {
  es: {
    brandTitle: "Karito Centro Estetico",
    defaultDescription:
      "Limpiezas faciales, tratamientos faciales y corporales con atención personalizada, tecnología moderna y bienestar en cada cita.",
    pageMetaByPath: {
      "/": {
        title: "Karito Centro Estetico | Medicina Estética Facial y Corporal en Los Olivos",
        description:
          "Limpiezas faciales, tratamientos faciales y corporales con atención personalizada, tecnología moderna y bienestar en cada cita.",
      },
      "/nosotros": {
        title: "Nosotros | Karito Centro Estetico",
        description:
          "Conoce la esencia de Karito Centro Estetico, nuestro enfoque humano y la experiencia que acompaña cada tratamiento.",
      },
      "/promociones": {
        title: "Promociones | Karito Centro Estetico",
        description:
          "Descubre promociones vigentes en limpiezas faciales, tratamientos faciales y corporales de Karito Centro Estetico.",
      },
      "/limpiezas-faciales": {
        title: "Limpiezas Faciales | Karito Centro Estetico",
        description:
          "Explora nuestras limpiezas faciales y protocolos de renovación para una piel más limpia, fresca y luminosa.",
      },
      "/tratamientos-faciales": {
        title: "Tratamientos Faciales | Karito Centro Estetico",
        description:
          "Tratamientos faciales personalizados para hidratación, bioestimulación, firmeza y rejuvenecimiento de la piel.",
      },
      "/tratamientos-corporales": {
        title: "Tratamientos Corporales | Karito Centro Estetico",
        description:
          "Protocolos corporales orientados a drenaje, modelado, tonicidad y mejora del contorno con atención personalizada.",
      },
      "/limpieza-facial-profunda": {
        title: "Limpieza Facial Profunda | Karito Centro Estetico",
        description:
          "Conoce el tratamiento de limpieza facial profunda de Karito Centro Estetico y sus beneficios para una piel renovada.",
      },
      "/botox": {
        title: "Botox | Karito Centro Estetico",
        description:
          "Tratamiento de Botox para suavizar líneas de expresión y mantener la armonía natural del rostro.",
      },
      "/reductor": {
        title: "Reductor | Karito Centro Estetico",
        description:
          "Descubre nuestro tratamiento reductor corporal orientado a trabajar grasa localizada y mejorar el contorno.",
      },
    },
  },
  en: {
    brandTitle: "Karito Aesthetic Center",
    defaultDescription:
      "Facial cleanses, facial treatments, and body treatments with personalized care, modern technology, and wellbeing in every appointment.",
    pageMetaByPath: {
      "/": {
        title: "Karito Aesthetic Center | Facial and Body Aesthetic Medicine in Los Olivos",
        description:
          "Facial cleanses, facial treatments, and body treatments with personalized care, modern technology, and wellbeing in every appointment.",
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

function setMetaTag(selector, content) {
  const metaTag = document.head.querySelector(selector);

  if (metaTag && content) {
    metaTag.setAttribute("content", content);
  }
}

function updateDocumentMeta({ title, description }) {
  document.title = title;
  setMetaTag('meta[name="description"]', description);
  setMetaTag('meta[property="og:title"]', title);
  setMetaTag('meta[property="og:description"]', description);
  setMetaTag('meta[name="twitter:title"]', title);
  setMetaTag('meta[name="twitter:description"]', description);
}

export default function App() {
  const { locale } = useLocale();
  const { brandTitle, defaultDescription, pageMetaByPath } =
    metaByLocale[locale] ?? metaByLocale.es;
  const isFirstRenderRef = useRef(true);
  const [pathname, setPathname] = useState(() =>
    normalizePathname(window.location.pathname),
  );
  const [locationKey, setLocationKey] = useState(
    () => `${normalizePathname(window.location.pathname)}${window.location.hash}`,
  );
  const genericPageByPath = Object.fromEntries(
    genericServicePages.map((service) => [
      service.href,
      <GenericServicePage key={service.id} service={service} />,
    ]),
  );
  const genericService = getServiceByPath(pathname);

  useEffect(() => {
    const syncPathname = () => {
      const nextPathname = normalizePathname(window.location.pathname);

      setPathname(nextPathname);
      setLocationKey(`${nextPathname}${window.location.hash}`);
    };

    window.addEventListener("popstate", syncPathname);

    return () => {
      window.removeEventListener("popstate", syncPathname);
    };
  }, []);

  useEffect(() => {
    const pageMeta = genericService
      ? {
          title: `${genericService.title} | ${brandTitle}`,
          description: genericService.description,
        }
      : pageMetaByPath[pathname] ?? {
          title: `${brandTitle} | Medicina Estética Facial y Corporal`,
          description: defaultDescription,
        };

    updateDocumentMeta(pageMeta);
  }, [brandTitle, defaultDescription, genericService, pageMetaByPath, pathname]);

  useLayoutEffect(() => {
    if (isFirstRenderRef.current) {
      isFirstRenderRef.current = false;
      return;
    }

    if (window.location.hash || window.sessionStorage.getItem("scrollTarget")) {
      return;
    }

    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "auto" });
    });
  }, [locationKey]);

  const pageByPath = {
    "/": <HomePage />,
    "/nosotros": <AboutPage />,
    "/promociones": <PromocionsPage />,
    "/limpiezas-faciales": <FacialCleansePage />,
    "/tratamientos-faciales": <FacialTreatmentsPage />,
    "/tratamientos-corporales": <BodyTreatmentsPage />,
    "/reductor": <CavitacionPage />,
    "/limpieza-facial-profunda": <DeepCleansePage />,
    "/botox": <ToxinaBotulinicaPage />,
    ...genericPageByPath,
  };

  const page = pageByPath[pathname] ?? <HomePage />;

  return <Fragment key={locale}>{page}</Fragment>;
}
