import SiteLayout from "@/components/layout/SiteLayout";
import {
  getServicesByCategory,
  getSuggestedServicesForCategory,
} from "@/data/serviceCatalog";
import FacialTreatmentsCatalogSection from "@/sections/services/FacialTreatmentsCatalogSection";
import FacialTreatmentsOverviewSection from "@/sections/services/FacialTreatmentsOverviewSection";
import RelatedServicesSection from "@/sections/services/RelatedServicesSection";

export default function FacialTreatmentsPage() {
  return (
    <SiteLayout>
      <FacialTreatmentsOverviewSection />
      <FacialTreatmentsCatalogSection items={getServicesByCategory("facial-treatment")} />
      <RelatedServicesSection
        items={getSuggestedServicesForCategory("facial-treatment")}
      />
    </SiteLayout>
  );
}
