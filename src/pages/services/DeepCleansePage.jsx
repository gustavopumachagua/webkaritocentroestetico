import SiteLayout from "@/components/layout/SiteLayout";
import DeepCleanseBannerSection from "@/sections/services/DeepCleanseBannerSection";
import DeepCleanseBenefitsSection from "@/sections/services/DeepCleanseBenefitsSection";
import DeepCleanseDescriptionSection from "@/sections/services/DeepCleanseDescriptionSection";
import DeepCleanseProcedureSection from "@/sections/services/DeepCleanseProcedureSection";

export default function DeepCleansePage() {
  return (
    <SiteLayout>
      <DeepCleanseBannerSection />
      <DeepCleanseDescriptionSection />
      <DeepCleanseProcedureSection />
      <DeepCleanseBenefitsSection />
    </SiteLayout>
  );
}
