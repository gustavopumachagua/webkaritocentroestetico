import { useState } from "react";
import Container from "@/components/ui/Container";
import { toxinaBotulinicaPage } from "@/data/site";
import { uiText } from "@/data/uiText";

function TabButton({ tab, isActive, onSelect, index }) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      aria-controls={`toxina-panel-${tab.id}`}
      id={`toxina-tab-${tab.id}`}
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
      {tab.benefits.map((item, idx) => (
        <div
          key={item.title}
          className="tox-ov-benefit group relative flex items-start gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/4 px-5 py-4 transition-all duration-300 hover:border-[rgba(160,94,76,0.25)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.24)]"
          style={{ animationDelay: `${0.15 + idx * 0.07}s` }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
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

function DetailParagraphs({ paragraphs }) {
  return (
    <div className="surface-panel tox-ov-detail relative overflow-hidden rounded-[2rem]">
      <div
        aria-hidden
        className="absolute inset-y-0 left-0 w-1 rounded-l-[2rem]"
        style={{
          background:
            "linear-gradient(to bottom, var(--color-primary), var(--color-primary-dark, #7a3520))",
        }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute right-8 top-8 h-20 w-20 rounded-full border border-[rgba(160,94,76,0.07)]"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute right-12 top-12 h-10 w-10 rounded-full border border-[rgba(160,94,76,0.05)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[2rem]"
        style={{
          background:
            "linear-gradient(135deg, rgba(160,94,76,0.04) 0%, transparent 55%)",
        }}
      />
      <div className="relative z-10 px-8 py-10 sm:px-12 sm:py-12">
        <div className="space-y-5">
          {paragraphs.map((paragraph, idx) => (
            <div key={idx} className="flex gap-4">
              <span className="mt-2.5 h-[2px] w-4 shrink-0 rounded-full bg-[var(--color-primary)] opacity-40" />
              <p
                className="text-base leading-7 text-[var(--color-ink-soft)] sm:text-lg sm:leading-8"
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default function ToxinaBotulinicaOverviewSection() {
  const { overviewSection } = toxinaBotulinicaPage;
  const [activeTabId, setActiveTabId] = useState(overviewSection.tabs[0].id);
  const activeTab =
    overviewSection.tabs.find((t) => t.id === activeTabId) ??
    overviewSection.tabs[0];
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-gradient-to-b from-[#081019] via-[#0d141d] to-[#081019] py-20 sm:py-28 lg:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute -left-24 top-10 h-[380px] w-[380px] rounded-full opacity-50"
          style={{
            background:
              "radial-gradient(circle, rgba(245,201,169,0.22) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -right-24 bottom-0 h-[380px] w-[380px] rounded-full opacity-35"
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
        <div className="mx-auto max-w-6xl">
          <div className="tox-ov-header mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-medium tracking-tight text-[var(--color-ink)] sm:text-4xl lg:text-5xl">
              {overviewSection.headingLead && (
                <span className="text-[var(--color-primary)]">
                  {overviewSection.headingLead}{" "}
                </span>
              )}
              {overviewSection.headingText}
            </h2>
            <div className="mx-auto mt-4 flex items-center justify-center gap-2">
              <div className="h-[3px] w-10 rounded-full bg-[var(--color-primary)]" />
              <div className="h-[3px] w-4 rounded-full bg-[rgba(160,94,76,0.3)]" />
            </div>
          </div>
          <div
            role="tablist"
            aria-label={uiText.specialPages.toxinaAria}
            className="tox-ov-tabs mx-auto mt-10 flex w-fit flex-wrap gap-1.5 rounded-full border border-white/8 bg-white/4 p-1.5"
          >
            {overviewSection.tabs.map((tab, i) => (
              <TabButton
                key={tab.id}
                tab={tab}
                isActive={tab.id === activeTab.id}
                onSelect={setActiveTabId}
                index={i}
              />
            ))}
          </div>
          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div
              role="tabpanel"
              id={`toxina-panel-${activeTab.id}`}
              aria-labelledby={`toxina-tab-${activeTab.id}`}
              className="surface-panel tox-ov-card relative overflow-hidden rounded-[2rem]"
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
                <div key={activeTab.id} className="tox-ov-tab-in">
                  {activeTab.id === "benefits" ? (
                    <BenefitsContent tab={activeTab} />
                  ) : (
                    <WhatIsContent tab={activeTab} />
                  )}
                </div>
                <div className="mt-10 flex flex-wrap items-center gap-5 border-t border-[rgba(160,94,76,0.08)] pt-8">
                  <a
                    href={overviewSection.cta.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group/cta relative inline-flex items-center gap-2.5 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(160,94,76,0.32)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_8px_32px_rgba(160,94,76,0.42)] sm:text-base"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark, #7a3520) 100%)",
                    }}
                  >
                    <span
                      aria-hidden
                      className="absolute left-0 top-0 h-full w-1/3 -translate-x-full skew-x-12 bg-white/20 transition-transform duration-500 group-hover/cta:translate-x-[350%]"
                    />
                    {overviewSection.cta.label}
                    <svg
                      viewBox="0 0 12 12"
                      className="h-3 w-3 fill-none stroke-white stroke-[1.8]"
                      aria-hidden
                    >
                      <path
                        d="M2 6h8M6 2l4 4-4 4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  {overviewSection.secondaryCta && (
                    <a
                      href={overviewSection.secondaryCta.href}
                    className="group/sec text-sm font-semibold text-[var(--color-accent)] underline-offset-4 transition hover:text-[var(--color-gold)] hover:underline"
                  >
                      {overviewSection.secondaryCta.label}
                      <span className="inline-block transition-transform duration-200 group-hover/sec:translate-x-0.5">
                        {" "}
                        →
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className="tox-ov-image relative flex items-center">
              <div
                aria-hidden
                className="absolute -right-3 -top-3 h-full w-full rounded-[2rem] border border-[rgba(160,94,76,0.12)]"
              />
              <div
                aria-hidden
                className="absolute -inset-6 rounded-[3rem] opacity-40"
                style={{
                  background: "rgba(245,201,169,0.2)",
                  filter: "blur(40px)",
                }}
              />
              <figure className="group relative w-full overflow-hidden rounded-[2rem] shadow-[0_30px_80px_rgba(34,24,20,0.15)]">
                <img
                  src={overviewSection.imageSrc}
                  alt={overviewSection.imageAlt}
                  className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
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
                    {overviewSection.imageLabel ?? uiText.specialPages.toxinaImageLabel}
                  </span>
                </div>
              </figure>
            </div>
          </div>
          {overviewSection.detailParagraphs?.length > 0 && (
            <div className="mt-14">
              <DetailParagraphs paragraphs={overviewSection.detailParagraphs} />
            </div>
          )}
        </div>
      </Container>
      <style>{`
        @keyframes toxOvHeaderIn {
          from { opacity: 0; transform: translateY(-14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes toxOvTabsIn {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes toxOvCardIn {
          from { opacity: 0; transform: translateX(-18px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes toxOvImageIn {
          from { opacity: 0; transform: translateX(18px) scale(0.98); }
          to   { opacity: 1; transform: translateX(0) scale(1); }
        }
        @keyframes toxOvTabIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes toxOvDetailIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes toxOvBenefitIn {
          from { opacity: 0; transform: translateX(-8px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .tox-ov-header   { animation: toxOvHeaderIn  0.6s  cubic-bezier(0.22,1,0.36,1) both; }
        .tox-ov-tabs     { animation: toxOvTabsIn    0.5s  cubic-bezier(0.22,1,0.36,1) 0.1s both; }
        .tox-ov-card     { animation: toxOvCardIn    0.65s cubic-bezier(0.22,1,0.36,1) 0.15s both; }
        .tox-ov-image    { animation: toxOvImageIn   0.65s cubic-bezier(0.22,1,0.36,1) 0.2s both; }
        .tox-ov-tab-in   { animation: toxOvTabIn     0.35s cubic-bezier(0.22,1,0.36,1) both; }
        .tox-ov-detail   { animation: toxOvDetailIn  0.6s  cubic-bezier(0.22,1,0.36,1) 0.35s both;
                           box-shadow: 0 2px 4px rgba(34,24,20,0.03), 0 16px 48px rgba(34,24,20,0.07); }
        .tox-ov-benefit  { animation: toxOvBenefitIn 0.4s  cubic-bezier(0.22,1,0.36,1) both; }
      `}</style>
    </section>
  );
}
