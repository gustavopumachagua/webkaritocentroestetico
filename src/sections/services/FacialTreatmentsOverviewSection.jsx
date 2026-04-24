import { useState } from "react";
import Container from "@/components/ui/Container";
import { facialTreatmentsPage } from "@/data/site";
import { uiText } from "@/data/uiText";

function TabButton({ tab, isActive, onSelect, index }) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      aria-controls={`facial-treatment-panel-${tab.id}`}
      id={`facial-treatment-tab-${tab.id}`}
      onClick={() => onSelect(tab.id)}
      className={`relative px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 sm:text-base ${
        isActive
          ? "bg-white/8 text-[var(--color-ink)] shadow-[0_12px_28px_rgba(0,0,0,0.2)]"
          : "text-[var(--color-muted)] hover:text-[var(--color-ink-soft)]"
      }`}
      style={{ animationDelay: `${index * 0.07}s` }}
    >
      {isActive && (
        <span className="absolute left-3 top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />
      )}
      <span className={isActive ? "pl-2" : ""}>{tab.label}</span>
    </button>
  );
}
function WhatIsContent({ tab }) {
  return (
    <div className="space-y-5">
      {tab.paragraphs.map((paragraph, idx) => (
        <div key={idx} className="flex gap-4">
          <span className="mt-2.5 h-[2px] w-4 shrink-0 rounded-full bg-[var(--color-primary)] opacity-50" />
          <p
            className="text-base leading-7 text-[var(--color-ink-soft)] sm:text-lg sm:leading-8"
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        </div>
      ))}
    </div>
  );
}
function BenefitsContent({ tab }) {
  return (
    <div className="grid gap-3 sm:gap-4">
      {tab.items.map((item, idx) => (
        <div
          key={idx}
          className="benefit-row group relative flex items-start gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/4 px-5 py-4 transition-all duration-300 hover:border-[rgba(160,94,76,0.25)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.24)]"
          style={{ animationDelay: `${0.15 + idx * 0.07}s` }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-400 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(circle at left, rgba(160,94,76,0.05) 0%, transparent 70%)",
            }}
          />
          <p className="relative z-10 text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
            <strong className="font-semibold text-[var(--color-ink)]">
              {item.title}
            </strong>{" "}
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
export default function FacialTreatmentsOverviewSection() {
  const [activeTabId, setActiveTabId] = useState(
    facialTreatmentsPage.tabs[0].id,
  );
  const activeTab =
    facialTreatmentsPage.tabs.find((t) => t.id === activeTabId) ??
    facialTreatmentsPage.tabs[0];
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-gradient-to-b from-[#081019] via-[#0d141d] to-[#081019] pb-20 pt-32 sm:pb-28 sm:pt-40 lg:pb-32 lg:pt-44">
      <h1 className="sr-only">{facialTreatmentsPage.title}</h1>
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute -left-24 top-10 h-[380px] w-[380px] rounded-full opacity-55"
          style={{
            background:
              "radial-gradient(circle, rgba(245,201,169,0.22) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -right-28 bottom-0 h-[400px] w-[400px] rounded-full opacity-40"
          style={{
            background:
              "radial-gradient(circle, rgba(160,94,76,0.1) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #a05e4c 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>
      <Container className="relative z-10">
        <div
          role="tablist"
          aria-label={uiText.specialPages.facialTreatmentsAria}
            className="overview-tabs flex w-fit flex-wrap gap-1.5 rounded-full border border-white/8 bg-white/4 p-1.5"
        >
          {facialTreatmentsPage.tabs.map((tab, i) => (
            <TabButton
              key={tab.id}
              tab={tab}
              isActive={tab.id === activeTab.id}
              onSelect={setActiveTabId}
              index={i}
            />
          ))}
        </div>
        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div
            role="tabpanel"
            id={`facial-treatment-panel-${activeTab.id}`}
            aria-labelledby={`facial-treatment-tab-${activeTab.id}`}
            className="surface-panel overview-card relative overflow-hidden rounded-[2rem]"
            style={{
              boxShadow:
                "0 18px 52px rgba(0,0,0,0.24), 0 24px 72px rgba(0,0,0,0.16)",
            }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-[2rem]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(160,94,76,0.04) 0%, transparent 55%)",
              }}
            />
            <span
              aria-hidden
              className="pointer-events-none absolute right-6 top-6 h-20 w-20 rounded-full border border-[rgba(160,94,76,0.07)]"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute right-10 top-10 h-10 w-10 rounded-full border border-[rgba(160,94,76,0.05)]"
            />
            <div className="relative z-10 p-6 sm:p-8 lg:p-10">
              <div key={activeTab.id} className="tab-content-in">
                {activeTab.id === "benefits" ? (
                  <BenefitsContent tab={activeTab} />
                ) : (
                  <WhatIsContent tab={activeTab} />
                )}
              </div>
              <div className="mt-10 flex items-center gap-5 border-t border-[rgba(160,94,76,0.08)] pt-8">
                <a
                  href={facialTreatmentsPage.cta.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group/cta relative inline-flex items-center gap-2.5 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold text-[#140d0a] shadow-[0_4px_20px_rgba(160,94,76,0.32)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_8px_32px_rgba(160,94,76,0.42)] sm:text-base"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark, #7a3520) 100%)",
                  }}
                >
                  <span
                    aria-hidden
                    className="absolute left-0 top-0 h-full w-1/3 -translate-x-full skew-x-12 bg-white/20 transition-transform duration-500 group-hover/cta:translate-x-[350%]"
                  />
                  {facialTreatmentsPage.cta.label}
                  <svg
                    viewBox="0 0 12 12"
                    className="h-3 w-3 fill-none stroke-current stroke-[1.8]"
                    aria-hidden
                  >
                    <path
                      d="M2 6h8M6 2l4 4-4 4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                {facialTreatmentsPage.secondaryCta && (
                  <a
                    href={facialTreatmentsPage.secondaryCta.href}
                    className="group/sec text-sm font-semibold text-[var(--color-accent)] underline-offset-4 transition hover:text-[var(--color-gold)] hover:underline"
                  >
                    {facialTreatmentsPage.secondaryCta.label}
                    <span className="inline-block transition-transform duration-200 group-hover/sec:translate-x-0.5">
                      {" "}
                      →
                    </span>
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="overview-image relative flex items-center">
            <div
              aria-hidden
              className="absolute -right-3 -top-3 h-full w-full rounded-[2rem] border border-[rgba(160,94,76,0.12)]"
            />
            <div
              aria-hidden
              className="absolute -inset-6 rounded-[3rem] opacity-45"
              style={{
                background: "rgba(245,201,169,0.18)",
                filter: "blur(40px)",
              }}
            />
            <figure className="group relative w-full overflow-hidden rounded-[2rem] shadow-[0_30px_80px_rgba(34,24,20,0.18)]">
              <img
                src={facialTreatmentsPage.imageSrc}
                alt={facialTreatmentsPage.imageAlt}
                className="h-full min-h-[15rem] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06] sm:min-h-[19rem] lg:min-h-[22rem]"
                loading="lazy"
                decoding="async"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/05 to-transparent" />
              <div
                aria-hidden
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute left-5 top-5 h-7 w-7 border-l-2 border-t-2 border-white/30 rounded-tl-xl"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute right-5 bottom-5 h-7 w-7 border-r-2 border-b-2 border-white/30 rounded-br-xl"
              />
              <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-2xl border border-white/20 bg-black/30 px-4 py-2.5 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-[rgba(245,201,169,0.9)]" />
                <span className="text-xs font-bold uppercase tracking-widest text-white/85">
                  {facialTreatmentsPage.imageLabel ?? uiText.specialPages.facialImageLabel}
                </span>
              </div>
            </figure>
          </div>
        </div>
      </Container>
      <style>{`
        @keyframes overviewEyebrowIn {
          from { opacity: 0; transform: translateX(-12px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes overviewTabsIn {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes overviewCardIn {
          from { opacity: 0; transform: translateX(-18px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes overviewImageIn {
          from { opacity: 0; transform: translateX(18px) scale(0.98); }
          to   { opacity: 1; transform: translateX(0) scale(1); }
        }
        @keyframes tabContentFade {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes benefitRowIn {
          from { opacity: 0; transform: translateX(-8px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .overview-eyebrow { animation: overviewEyebrowIn 0.5s cubic-bezier(0.22,1,0.36,1) both; }
        .overview-tabs    { animation: overviewTabsIn   0.5s cubic-bezier(0.22,1,0.36,1) 0.08s both; }
        .overview-card    { animation: overviewCardIn   0.65s cubic-bezier(0.22,1,0.36,1) 0.15s both; }
        .overview-image   { animation: overviewImageIn  0.65s cubic-bezier(0.22,1,0.36,1) 0.2s both; }
        .tab-content-in   { animation: tabContentFade   0.35s cubic-bezier(0.22,1,0.36,1) both; }
        .benefit-row      { animation: benefitRowIn     0.4s  cubic-bezier(0.22,1,0.36,1) both; }
      `}</style>
    </section>
  );
}
