import SiteLayout from "@/components/layout/SiteLayout";
import CavitacionBannerSection from "@/sections/services/CavitacionBannerSection";
import CavitacionDescriptionSection from "@/sections/services/CavitacionDescriptionSection";
import CavitacionBenefitsSection from "@/sections/services/CavitacionBenefitsSection";
import CavitacionProcedureSection from "@/sections/services/CavitacionProcedureSection";

export default function CavitacionPage() {
  return (
    <SiteLayout>
      <CavitacionBannerSection />
      <CavitacionDescriptionSection />
      <CavitacionBenefitsSection />
      <CavitacionProcedureSection />
    </SiteLayout>
  );
}
