import SiteLayout from "@/components/layout/SiteLayout";
import AboutPurposeSection from "@/sections/about/AboutPurposeSection";
import AboutStorySection from "@/sections/about/AboutStorySection";
import AboutTeamSection from "@/sections/about/AboutTeamSection";

export default function AboutPage() {
  return (
    <SiteLayout>
      <AboutStorySection />
      <AboutTeamSection />
      <AboutPurposeSection />
    </SiteLayout>
  );
}
