import SiteLayout from "@/components/layout/SiteLayout";
import ToxinaBotulinicaBeforeAfterSection from "@/sections/services/ToxinaBotulinicaBeforeAfterSection";
import ToxinaBotulinicaBannerSection from "@/sections/services/ToxinaBotulinicaBannerSection";
import ToxinaBotulinicaBenefitsSection from "@/sections/services/ToxinaBotulinicaBenefitsSection";
import ToxinaBotulinicaFaqSection from "@/sections/services/ToxinaBotulinicaFaqSection";
import ToxinaBotulinicaOverviewSection from "@/sections/services/ToxinaBotulinicaOverviewSection";
import ToxinaBotulinicaProcedureSection from "@/sections/services/ToxinaBotulinicaProcedureSection";
import ToxinaBotulinicaResultsSection from "@/sections/services/ToxinaBotulinicaResultsSection";

export default function ToxinaBotulinicaPage() {
  return (
    <SiteLayout>
      <ToxinaBotulinicaBannerSection />
      <ToxinaBotulinicaOverviewSection />
      <ToxinaBotulinicaBenefitsSection />
      <ToxinaBotulinicaProcedureSection />
      <ToxinaBotulinicaResultsSection />
      <ToxinaBotulinicaBeforeAfterSection />
      <ToxinaBotulinicaFaqSection />
    </SiteLayout>
  );
}
