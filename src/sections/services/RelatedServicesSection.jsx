import { useState } from "react";
import Container from "@/components/ui/Container";
import ExpandToggleButton from "@/components/ui/ExpandToggleButton";
import RelatedServiceCard from "@/components/services/RelatedServiceCard";
import { uiText } from "@/data/uiText";

export default function RelatedServicesSection({
  title = uiText.relatedServices.title,
  items = [],
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (items.length === 0) {
    return null;
  }

  const visibleItems = isExpanded ? items : items.slice(0, 3);

  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-gradient-to-b from-[#070b10] to-[#0d141d] py-24 sm:py-28 lg:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute -right-24 top-10 h-[420px] w-[420px] rounded-full opacity-50"
          style={{
            background:
              "radial-gradient(circle, rgba(207,155,114,0.18) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -left-20 bottom-0 h-[320px] w-[320px] rounded-full opacity-40"
          style={{
            background:
              "radial-gradient(circle, rgba(99,125,156,0.12) 0%, transparent 70%)",
          }}
        />
      </div>
      <Container size="lg" className="relative z-10">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[0.74rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-gold)]">
              {uiText.relatedServices.eyebrow}
            </p>
            <h2 className="mt-4 text-[2.2rem] font-medium tracking-tight text-[var(--color-ink)] sm:text-[2.7rem] lg:text-[3.5rem]">
              {title}
            </h2>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-6">
          {visibleItems.map((item, i) => (
            <div
              key={item.id}
              className="related-item-entrance"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <RelatedServiceCard
                title={item.title}
                image={item.imageSrc}
                href={item.href ?? "#"}
              />
            </div>
          ))}
        </div>
        {items.length > 3 ? (
          <div className="mt-14 text-center">
            <ExpandToggleButton
              expanded={isExpanded}
              onClick={() => setIsExpanded((current) => !current)}
              collapsedLabel={uiText.expandButton.more}
              expandedLabel={uiText.expandButton.less}
            />
          </div>
        ) : null}
      </Container>
      <style>{`
        @keyframes relatedFadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .related-item-entrance {
          animation: relatedFadeUp 0.5s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
      `}</style>
    </section>
  );
}
