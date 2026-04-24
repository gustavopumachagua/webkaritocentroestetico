import { uiText } from "@/data/uiText";

export default function PromotionCard({ promotion, image, onClick }) {
  const Component = onClick ? "button" : "article";
  const actionProps = onClick
    ? {
        type: "button",
        onClick,
        "aria-haspopup": "dialog",
      }
    : {};

  return (
    <Component
      {...actionProps}
      className="group relative flex h-full w-full flex-col overflow-hidden rounded-[1.85rem] border border-white/8 bg-[linear-gradient(180deg,rgba(20,27,37,0.96)_0%,rgba(11,16,22,0.98)_100%)] text-left shadow-[0_16px_48px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(0,0,0,0.4)]"
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={promotion.title}
          className="h-[18rem] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
          loading="lazy"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/04 to-transparent" />
        <div
          aria-hidden
          className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/12 to-transparent transition-transform duration-700 group-hover:translate-x-full"
        />

        {promotion.category && (
          <div className="absolute left-4 top-4">
            <span className="rounded-full border border-white/15 bg-black/35 px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[var(--color-accent)] backdrop-blur-sm">
              {promotion.category}
            </span>
          </div>
        )}

        {promotion.discount && (
          <div className="absolute right-4 top-4">
            <span className="rounded-full bg-[var(--color-primary)] px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[#140d0a] shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
              {promotion.discount}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col justify-between gap-4 px-5 py-5 sm:px-6 sm:py-6">
        <div>
          <h3 className="font-[var(--font-display)] text-[1.5rem] font-medium leading-[1.04] tracking-[-0.03em] text-[var(--color-ink)] transition duration-200 group-hover:text-[var(--color-accent)] sm:text-[1.75rem]">
            {promotion.title}
          </h3>

          <p className="mt-3 line-clamp-3 text-[0.92rem] leading-7 text-[var(--color-muted)] sm:text-[0.98rem]">
            {promotion.description}
          </p>

          {(promotion.price || promotion.originalPrice) && (
            <div className="mt-3 flex items-baseline gap-2">
              {promotion.price && (
                <span className="text-2xl font-bold text-[var(--color-accent)]">
                  {promotion.price}
                </span>
              )}
              {promotion.originalPrice && (
                <span className="text-sm text-[var(--color-muted-strong)] line-through">
                  {promotion.originalPrice}
                </span>
              )}
            </div>
          )}
        </div>

        <div className="h-px bg-gradient-to-r from-[var(--color-primary)]/30 via-white/8 to-transparent" />

        <div className="flex items-center justify-between">
          <span className="text-[0.82rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
            {uiText.promotionCard.cta}
          </span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/4 text-[var(--color-accent)] transition-all duration-300 group-hover:border-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-[#140d0a]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Component>
  );
}
