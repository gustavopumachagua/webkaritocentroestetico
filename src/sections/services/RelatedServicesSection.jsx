import { useState } from "react";
import Container from "@/components/ui/Container";
import RelatedServiceCard from "@/components/services/RelatedServiceCard";
import { uiText } from "@/data/uiText";

const INITIAL_VISIBLE_ITEMS = 4;
const VISIBLE_ITEMS_INCREMENT = 4;

export default function RelatedServicesSection({
  title = uiText.relatedServices.title,
  items = [],
}) {
  const itemsKey = items.map((item) => item.id).join("|");
  const [visibilityState, setVisibilityState] = useState(() => ({
    itemsKey,
    visibleItemsCount: INITIAL_VISIBLE_ITEMS,
  }));

  if (items.length === 0) {
    return null;
  }

  const visibleItemsCount =
    visibilityState.itemsKey === itemsKey
      ? visibilityState.visibleItemsCount
      : INITIAL_VISIBLE_ITEMS;
  const visibleItems = items.slice(0, visibleItemsCount);
  const hasMoreItems = visibleItemsCount < items.length;
  const canCollapse = !hasMoreItems && items.length > INITIAL_VISIBLE_ITEMS;

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
            <h2 className="mt-4 text-[2.2rem] font-medium text-[var(--color-ink)] sm:text-[2.7rem] lg:text-[3.5rem]">
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
        {(hasMoreItems || canCollapse) && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/6 px-6 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)] transition hover:border-[var(--color-primary)]/45 hover:bg-[var(--color-primary)] hover:text-[#140d0a] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d141d]"
              onClick={() => {
                setVisibilityState((currentState) => {
                  const currentCount =
                    currentState.itemsKey === itemsKey
                      ? currentState.visibleItemsCount
                      : INITIAL_VISIBLE_ITEMS;

                  return {
                    itemsKey,
                    visibleItemsCount: hasMoreItems
                      ? Math.min(
                          currentCount + VISIBLE_ITEMS_INCREMENT,
                          items.length,
                        )
                      : INITIAL_VISIBLE_ITEMS,
                  };
                });
              }}
            >
              {hasMoreItems
                ? uiText.expandButton.moreServices
                : uiText.expandButton.lessServices}
            </button>
          </div>
        )}
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
