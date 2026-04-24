import { imageAssets } from "@/assets/images";
import PillList from "@/components/ui/PillList";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionShell from "@/components/ui/SectionShell";
import { promotionsIntro } from "@/data/site";
import { uiText } from "@/data/uiText";

function getLinkProps(href) {
  return href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {};
}

function StatChip({ value, label, className = "" }) {
  return (
    <div
      className={`flex flex-col rounded-2xl border border-white/12 bg-white/6 px-4 py-3 text-white backdrop-blur-md ${className}`}
      style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.18)" }}
    >
      <span className="text-xl font-bold leading-none">{value}</span>
      <span className="mt-1 text-[11px] font-medium uppercase tracking-widest text-white/70">
        {label}
      </span>
    </div>
  );
}

export default function PromotionsSection() {
  return (
    <SectionShell id="promociones" tone="soft">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(160,94,76,0.25) 0%, transparent 70%)",
          }}
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="max-w-xl promo-text-entrance">
            <SectionHeading
              eyebrow={promotionsIntro.eyebrow}
              title={promotionsIntro.title}
              description={promotionsIntro.description}
              tone="warm"
              titleClassName="max-w-lg"
              descriptionClassName="mt-4 text-[var(--color-ink-soft)] text-base sm:text-lg leading-relaxed"
            />
            <PillList items={promotionsIntro.pills} className="mt-8" />
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href={promotionsIntro.primaryCta.href}
                className="group/cta relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-[var(--color-primary)] px-7 py-3.5 text-sm font-semibold text-[#140d0a] shadow-[0_4px_20px_rgba(160,94,76,0.35)] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(160,94,76,0.45)] hover:scale-[1.03] sm:text-base"
                {...getLinkProps(promotionsIntro.primaryCta.href)}
              >
                <span
                  aria-hidden
                  className="absolute left-0 top-0 h-full w-1/3 -translate-x-full skew-x-12 bg-white/20 transition-transform duration-500 group-hover/cta:translate-x-[350%]"
                />
                {promotionsIntro.primaryCta.label}
                <svg
                  viewBox="0 0 16 16"
                  className="h-3.5 w-3.5 text-[#140d0a]/80 transition-transform duration-300 group-hover/cta:translate-x-0.5"
                  aria-hidden
                >
                  <path
                    d="M1 8h12M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </a>
              {promotionsIntro.secondaryCta && (
                <a
                  href={promotionsIntro.secondaryCta.href}
                  className="group/sec inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-accent)] underline-offset-4 transition hover:text-[var(--color-gold)] hover:underline"
                  {...getLinkProps(promotionsIntro.secondaryCta.href)}
                >
                  {promotionsIntro.secondaryCta.label}
                  <span className="transition-transform duration-200 group-hover/sec:translate-x-0.5">
                    →
                  </span>
                </a>
              )}
            </div>
          </div>
          <div className="relative flex justify-end promo-image-entrance">
            <div
              aria-hidden
              className="absolute -bottom-6 -right-4 h-[80%] w-[80%] rounded-[2rem] opacity-40"
              style={{
                background: "rgba(160,94,76,0.18)",
                filter: "blur(32px)",
              }}
            />
            <div
              aria-hidden
              className="absolute -right-3 -top-3 h-full w-full rounded-[2rem] border border-[rgba(160,94,76,0.15)]"
            />
            <div className="group relative w-full max-w-md lg:max-w-lg">
              <div className="relative w-full overflow-hidden rounded-[2rem] border border-white/8 shadow-[0_24px_64px_rgba(34,24,20,0.18)]">
                <img
                  src={imageAssets.promotions.generalPromociones}
                  alt={uiText.promotionsSection.imageAlt}
                  className="h-[320px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06] sm:h-[420px] lg:h-[520px]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/05 to-transparent" />
                <div
                  aria-hidden
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes promoFadeLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes promoFadeRight {
          from { opacity: 0; transform: translateX(20px) scale(0.98); }
          to   { opacity: 1; transform: translateX(0)   scale(1); }
        }
        @keyframes chipPop {
          from { opacity: 0; transform: scale(0.8) translateY(6px); }
          to   { opacity: 1; transform: scale(1)   translateY(0); }
        }
        .promo-text-entrance  { animation: promoFadeLeft  0.6s cubic-bezier(0.22,1,0.36,1) both; }
        .promo-image-entrance { animation: promoFadeRight 0.65s cubic-bezier(0.22,1,0.36,1) 0.1s both; }
        .promo-chip-1 { animation: chipPop 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.45s both; }
        .promo-chip-2 { animation: chipPop 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.6s both; }
      `}</style>
    </SectionShell>
  );
}
