import SiteLayout from "@/components/layout/SiteLayout";
import { aestheticMedicinePage } from "@/data/site";
import {
  getServicesByCategory,
  getSuggestedServicesForCategory,
} from "@/data/serviceCatalog";
import FacialTreatmentsCatalogSection from "@/sections/services/FacialTreatmentsCatalogSection";
import FacialTreatmentsOverviewSection from "@/sections/services/FacialTreatmentsOverviewSection";
import RelatedServicesSection from "@/sections/services/RelatedServicesSection";

export default function AestheticMedicinePage() {
  return (
    <SiteLayout>
      <FacialTreatmentsOverviewSection
        pageData={aestheticMedicinePage}
        ariaLabel={aestheticMedicinePage.title}
        panelIdPrefix="aesthetic-medicine"
      />
      <FacialTreatmentsCatalogSection
        items={getServicesByCategory("aesthetic-medicine")}
        pageData={aestheticMedicinePage}
      />
      <RelatedServicesSection
        items={getSuggestedServicesForCategory("aesthetic-medicine")}
      />
    </SiteLayout>
  );
}
