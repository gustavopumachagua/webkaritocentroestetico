import SiteLayout from "@/components/layout/SiteLayout";
import {
  getServicesByCategory,
  getSuggestedServicesForCategory,
} from "@/data/serviceCatalog";
import BodyTreatmentsCatalogSection from "@/sections/services/BodyTreatmentsCatalogSection";
import BodyTreatmentsOverviewSection from "@/sections/services/BodyTreatmentsOverviewSection";
import RelatedServicesSection from "@/sections/services/RelatedServicesSection";

export default function BodyTreatmentsPage() {
  return (
    <SiteLayout>
      <BodyTreatmentsOverviewSection />
      <BodyTreatmentsCatalogSection items={getServicesByCategory("body-treatment")} />
      <RelatedServicesSection
        items={getSuggestedServicesForCategory("body-treatment")}
      />
    </SiteLayout>
  );
}
