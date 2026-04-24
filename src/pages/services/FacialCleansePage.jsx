import SiteLayout from "@/components/layout/SiteLayout";
import {
  getServicesByCategory,
  getSuggestedServicesForCategory,
} from "@/data/serviceCatalog";
import FacialCleanseDetailSection from "@/sections/services/FacialCleanseDetailSection";
import FacialCleanseProtocolsSection from "@/sections/services/FacialCleanseProtocolsSection";
import RelatedServicesSection from "@/sections/services/RelatedServicesSection";

export default function FacialCleansePage() {
  return (
    <SiteLayout>
      <FacialCleanseDetailSection />
      <FacialCleanseProtocolsSection items={getServicesByCategory("facial-cleanse")} />
      <RelatedServicesSection
        items={getSuggestedServicesForCategory("facial-cleanse")}
      />
    </SiteLayout>
  );
}
