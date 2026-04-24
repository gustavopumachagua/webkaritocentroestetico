import { useState } from "react";
import { imageAssets } from "@/assets/images";
import PromotionDetailsModal from "@/components/promotions/PromotionDetailsModal";
import SiteLayout from "@/components/layout/SiteLayout";
import Container from "@/components/ui/Container";
import PromotionCard from "@/components/home/PromotionCard";
import { promotions, site } from "@/data/site";
import { getServicesByIds } from "@/data/serviceCatalog";
import { uiText } from "@/data/uiText";

const imagesByPromotionId = {
  limpiezas: imageAssets.promotions.promoLimpiezas,
  "medi-packs": imageAssets.promotions.promoMediPacks,
  sueroterapia: imageAssets.promotions.promoSueroterapia,
  corporales: imageAssets.promotions.promoCorporales,
  faciales: imageAssets.promotions.promoFaciales,
  depilacion: imageAssets.promotions.promoDepilacion,
};

function getPromotionServicesById() {
  return {
    limpiezas: getServicesByIds([
      "hidrafacial",
      "dermaplaning",
      "peeling",
      "limpieza-facial-profunda",
      "exfoliacion-espalda",
      "depilacion-cera",
    ]),
    faciales: getServicesByIds([
      "limpieza-facial-profunda",
      "hidrafacial",
      "dermaplaning",
      "peeling",
      "exfoliacion-espalda",
    ]),
    corporales: getServicesByIds([
      "acido-hialuronico",
      "hialuronidasa",
      "rinomodelacion",
      "botox",
      "hidralips",
      "mesoterapia",
    ]),
    "medi-packs": getServicesByIds([
      "botox",
      "acido-hialuronico",
      "rinomodelacion",
      "hialuronidasa",
      "rejuran",
      "peptona",
    ]),
    sueroterapia: getServicesByIds([
      "peptona",
      "mesoterapia",
      "exosomas",
      "rejuran",
      "rich-pl",
      "acido-hialuronico",
    ]),
    depilacion: getServicesByIds([
      "novuma",
      "reductor",
      "tonegirl",
      "musc-forte",
      "drenaje-post-lipo",
      "hidrolipoclasia",
    ]),
  };
}

export default function PromocionsPage() {
  const [selectedPromotionId, setSelectedPromotionId] = useState(null);
  const selectedPromotion =
    promotions.find((promotion) => promotion.id === selectedPromotionId) ??
    null;
  const promotionServicesById = getPromotionServicesById();
  const selectedPromotionServices = selectedPromotion
    ? (promotionServicesById[selectedPromotion.id] ?? [])
    : [];

  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-[#150f0a] py-28 sm:py-36 lg:py-44">
        <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="pointer-events-none absolute -left-48 top-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(245,201,169,0.07),transparent_65%)]" />
        <div className="pointer-events-none absolute -right-48 bottom-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(22,54,80,0.12),transparent_65%)]" />
        <Container className="relative z-10 text-center">
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/8 px-5 py-2 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-primary)]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/65">
              {uiText.promotionsPage.badge}
            </span>
          </div>
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {site.brandMark}
          </h1>
          <div className="mx-auto mt-4 h-0.5 w-12 rounded-full bg-[var(--color-primary)]" />
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
            {uiText.promotionsPage.heroDescription}
          </p>
          <div className="mt-12 flex justify-center">
            <div className="flex flex-col items-center gap-1.5">
              <span className="text-[11px] uppercase tracking-widest text-white/30">
                {uiText.promotionsPage.scrollHint}
              </span>
              <div className="flex h-8 w-5 items-start justify-center rounded-full border border-white/15 pt-1.5">
                <div className="h-1.5 w-0.5 animate-bounce rounded-full bg-white/40" />
              </div>
            </div>
          </div>
        </Container>
        <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </section>
      <section className="relative overflow-hidden border-y border-white/5 bg-[#091019] py-24 sm:py-28 lg:py-32">
        <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(207,155,114,0.14),transparent_65%)]" />
        <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(99,125,156,0.12),transparent_65%)]" />
        <Container className="relative z-10">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="text-[2.3rem] font-medium tracking-tight text-[var(--color-ink)] sm:text-[2.9rem] lg:text-[3.6rem] lg:leading-[1.05]">
              {uiText.promotionsPage.sectionTitle}
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-10 rounded-full bg-[var(--color-primary)]" />
            <p className="mt-5 text-base leading-8 text-[var(--color-ink-soft)] sm:text-lg">
              {uiText.promotionsPage.sectionDescription}
            </p>
          </div>
          <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {promotions.map((promotion) => (
              <PromotionCard
                key={promotion.id}
                promotion={promotion}
                image={imagesByPromotionId[promotion.id]}
                onClick={() => setSelectedPromotionId(promotion.id)}
              />
            ))}
          </div>
        </Container>
      </section>
      <PromotionDetailsModal
        key={selectedPromotion?.id ?? "promotion-modal"}
        promotion={selectedPromotion}
        image={
          selectedPromotion ? imagesByPromotionId[selectedPromotion.id] : null
        }
        services={selectedPromotionServices}
        onClose={() => setSelectedPromotionId(null)}
      />
    </SiteLayout>
  );
}
