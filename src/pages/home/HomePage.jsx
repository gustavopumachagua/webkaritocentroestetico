import { useEffect } from "react";
import SiteLayout from "@/components/layout/SiteLayout";
import BenefitsSection from "@/sections/home/BenefitsSection";
import FaqSection from "@/sections/home/FaqSection";
import HeroSection from "@/sections/home/HeroSection";
import MapSection from "@/sections/home/MapSection";
import PromotionsSection from "@/sections/home/PromotionsSection";
import ServicesSection from "@/sections/home/ServicesSection";

function scrollToHashId(hash) {
  const id = hash?.replace(/^#/, "");
  if (!id) return;

  const target = document.getElementById(id);
  if (!target) return;

  const header = document.querySelector("header");
  const headerHeight = header ? header.getBoundingClientRect().height : 0;

  const y =
    window.scrollY + target.getBoundingClientRect().top - headerHeight - 16;

  window.scrollTo({ top: y, behavior: "smooth" });
}

export default function HomePage() {
  useEffect(() => {
    const hash = sessionStorage.getItem("scrollTarget");

    if (hash) {
      const interval = setInterval(() => {
        const target = document.getElementById(hash.replace("#", ""));
        if (target) {
          scrollToHashId(hash);
          sessionStorage.removeItem("scrollTarget");
          clearInterval(interval);
        }
      }, 50);

      setTimeout(() => clearInterval(interval), 2000);
    }
  }, []);

  return (
    <>
      <SiteLayout>
        <HeroSection />
        <BenefitsSection />
        <ServicesSection />
        <PromotionsSection />
        <FaqSection />
        <MapSection />
      </SiteLayout>
    </>
  );
}
