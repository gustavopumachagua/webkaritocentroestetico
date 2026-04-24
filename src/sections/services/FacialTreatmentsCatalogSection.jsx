import { useState } from "react";
import Container from "@/components/ui/Container";
import ExpandToggleButton from "@/components/ui/ExpandToggleButton";
import { facialTreatmentsPage } from "@/data/site";
import { uiText } from "@/data/uiText";

function TreatmentCard({ item, index }) {
  const Tag = item.href ? "a" : "article";

  return (
    <Tag
      href={item.href ?? undefined}
      className="treatment-card group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-white/8"
      style={{ animationDelay: `${0.08 + index * 0.09}s` }}
    >
      <div className="relative overflow-hidden">
        <img
          src={item.imageSrc}
          alt={item.imageAlt}
          className="h-[12rem] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07] sm:h-[15rem] lg:h-[18rem]"
          loading="lazy"
          decoding="async"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/04 to-transparent" />
        <div
          aria-hidden
          className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/12 to-transparent transition-transform duration-700 group-hover:translate-x-full"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute left-4 top-4 h-6 w-6 border-l-2 border-t-2 border-white/30 rounded-tl-lg"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute right-4 top-4 h-6 w-6 border-r-2 border-t-2 border-white/30 rounded-tr-lg"
        />
      </div>
      <div className="flex flex-1 flex-col bg-[#0f1620] px-6 py-6">
        {item.tag && (
          <span className="mb-3 inline-flex w-fit items-center rounded-full border border-white/10 bg-white/4 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-[var(--color-accent)]">
            {item.tag}
          </span>
        )}
        <h3 className="font-[var(--font-display)] text-[1.45rem] font-medium leading-[1.05] text-[var(--color-ink)] transition-colors duration-300 group-hover:text-[var(--color-accent)] sm:text-[1.7rem]">
          {item.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
          {item.description}
        </p>
        <div className="mt-6 flex items-center justify-between border-t border-white/8 pt-5">
          <span className="text-sm font-semibold text-[var(--color-accent)]">
            {uiText.facialTreatmentsCatalog.viewMore}
          </span>
          <span
            className="flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 group-hover:translate-x-0.5 group-hover:shadow-[0_4px_14px_rgba(160,94,76,0.3)]"
            style={{
              background:
                "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark, #7a3520) 100%)",
            }}
          >
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
          </span>
        </div>
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-[rgba(160,94,76,0.12)] transition-all duration-300 group-hover:ring-[rgba(160,94,76,0.32)]"
      />
      <div
        aria-hidden
        className="absolute -bottom-4 left-4 right-4 -z-10 h-12 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: "rgba(160,94,76,0.15)", filter: "blur(16px)" }}
      />

      <style>{`
        .treatment-card {
          box-shadow: 0 12px 28px rgba(0,0,0,0.24), 0 20px 52px rgba(0,0,0,0.14);
          transition: box-shadow 0.35s ease, transform 0.35s ease;
          animation: treatCardIn 0.55s cubic-bezier(0.22,1,0.36,1) both;
        }
        .treatment-card:hover {
          box-shadow: 0 18px 36px rgba(0,0,0,0.28), 0 30px 70px rgba(0,0,0,0.2);
          transform: translateY(-5px);
        }
        @keyframes treatCardIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </Tag>
  );
}
export default function FacialTreatmentsCatalogSection({
  items = facialTreatmentsPage.treatmentsSection.items,
}) {
  const { treatmentsSection } = facialTreatmentsPage;
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleItems = isExpanded ? items : items.slice(0, 3);

  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-gradient-to-b from-[#081019] via-[#0d141d] to-[#081019] py-24 sm:py-28 lg:py-36">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute -left-24 top-10 h-[380px] w-[380px] rounded-full opacity-55"
          style={{
            background:
              "radial-gradient(circle, rgba(245,201,169,0.22) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -right-24 bottom-0 h-[360px] w-[360px] rounded-full opacity-40"
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

      <Container size="lg" className="relative z-10">
        <div className="catalog-header mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-medium tracking-tight text-[var(--color-ink)] sm:text-4xl lg:text-5xl">
            {treatmentsSection.title}
          </h2>
          <div className="mx-auto mt-4 flex items-center justify-center gap-2">
            <div className="h-[3px] w-10 rounded-full bg-[var(--color-primary)]" />
            <div className="h-[3px] w-4 rounded-full bg-[rgba(160,94,76,0.3)]" />
          </div>
          {treatmentsSection.description && (
            <p className="mt-5 text-base leading-8 text-[var(--color-ink-soft)] sm:text-lg">
              {treatmentsSection.description}
            </p>
          )}
        </div>
        <div className="mt-12 grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleItems.map((item, index) => (
            <TreatmentCard key={item.id} item={item} index={index} />
          ))}
        </div>
        {items.length > 3 ? (
          <div className="mt-14 text-center">
            <ExpandToggleButton
              expanded={isExpanded}
              onClick={() => setIsExpanded((current) => !current)}
              collapsedLabel={uiText.expandButton.moreServices}
              expandedLabel={uiText.expandButton.lessServices}
            />
          </div>
        ) : null}
      </Container>
      <style>{`
        @keyframes catalogHeaderIn {
          from { opacity: 0; transform: translateY(-14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes catalogMetaIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .catalog-header { animation: catalogHeaderIn 0.6s cubic-bezier(0.22,1,0.36,1) both; }
        .catalog-meta   { animation: catalogMetaIn   0.5s ease 0.25s both; }
      `}</style>
    </section>
  );
}
