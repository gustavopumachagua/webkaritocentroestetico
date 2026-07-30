import { Fragment, useEffect, useLayoutEffect, useRef, useState } from "react";
import { useLocale } from "@/app/providers/LocaleContext";
import AboutPage from "@/pages/about/AboutPage";
import HomePage from "@/pages/home/HomePage";
import PromocionsPage from "@/pages/PromocionsPage";
import AestheticMedicinePage from "@/pages/services/AestheticMedicinePage";
import BodyTreatmentsPage from "@/pages/services/BodyTreatmentsPage";
import CavitacionPage from "@/pages/services/CavitacionPage";
import DeepCleansePage from "@/pages/services/DeepCleansePage";
import FacialCleansePage from "@/pages/services/FacialCleansePage";
import FacialTreatmentsPage from "@/pages/services/FacialTreatmentsPage";
import GenericServicePage from "@/pages/services/GenericServicePage";
import ToxinaBotulinicaPage from "@/pages/services/ToxinaBotulinicaPage";
import { genericServicePages, getServiceByPath } from "@/data/serviceCatalog";
import { normalizePathname } from "@/utils/navigation";
import Seo from "@/components/layout/Seo";

export default function App() {
  const { locale } = useLocale();
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
    "/medicina-estetica": <AestheticMedicinePage />,
    "/limpiezas-faciales": <FacialCleansePage />,
    "/tratamientos-faciales": <FacialTreatmentsPage />,
    "/tratamientos-corporales": <BodyTreatmentsPage />,
    ...genericPageByPath,
    "/reductor": <CavitacionPage />,
    "/limpieza-facial-profunda": <DeepCleansePage />,
    "/botox": <ToxinaBotulinicaPage />,
    "/eliminacion-verrugas": genericPageByPath["/eliminacion_verrugas"],
  };

  const page = pageByPath[pathname] ?? <HomePage />;

  return (
    <Fragment key={locale}>
      <Seo locale={locale} pathname={pathname} service={genericService} />
      {page}
    </Fragment>
  );
}
