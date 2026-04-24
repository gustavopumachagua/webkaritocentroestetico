import { useEffect, useState } from "react";
import ExpandToggleButton from "@/components/ui/ExpandToggleButton";
import { footer } from "@/data/site";
import { uiText } from "@/data/uiText";

function PromotionServiceCard({ service, index }) {
  return (
    <a
      href={service.href}
      className="group relative flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-white/8 bg-[linear-gradient(180deg,rgba(18,26,36,0.96)_0%,rgba(10,15,22,0.98)_100%)] shadow-[0_12px_36px_rgba(0,0,0,0.24)] transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(207,155,114,0.22)] hover:shadow-[0_22px_48px_rgba(0,0,0,0.28)]"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className="relative overflow-hidden">
        <img
          src={service.imageSrc}
          alt={service.imageAlt}
          className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
          loading="lazy"
          decoding="async"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/04 to-transparent" />
        <div
          aria-hidden
          className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/12 to-transparent transition-transform duration-700 group-hover:translate-x-full"
        />
        <div className="absolute inset-x-4 bottom-4">
          <span className="inline-flex rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)] backdrop-blur-sm">
            {uiText.promotionModal.serviceBadge}
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col px-5 py-5 sm:px-6">
        <h3 className="text-[1.4rem] font-medium leading-[1.02] text-[var(--color-ink)]">
          {service.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-[var(--color-muted)]">
          {service.description}
        </p>
        <div className="mt-6 flex items-center justify-between border-t border-white/8 pt-4">
          <span className="text-sm font-semibold text-[var(--color-accent)]">
            {uiText.promotionModal.serviceCta}
          </span>
          <span
            className="flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 group-hover:translate-x-0.5"
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
    </a>
  );
}

export default function PromotionDetailsModal({
  promotion,
  image,
  services = [],
  onClose,
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const whatsappHref = `https://wa.me/51${footer.whatsapp.replace(/[^\d]/g, "")}`;

  useEffect(() => {
    if (!promotion) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, promotion]);

  if (!promotion) {
    return null;
  }

  const visibleServices = isExpanded ? services : services.slice(0, 3);

  return (
    <div className="fixed inset-0 z-[120] px-4 py-6 sm:px-6 sm:py-8">
      <button
        type="button"
        aria-label={uiText.promotionModal.closeModal}
        onClick={onClose}
        className="absolute inset-0 bg-[rgba(4,7,11,0.86)] backdrop-blur-sm"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={`promotion-modal-title-${promotion.id}`}
        className="relative mx-auto flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-[#081019] shadow-[0_32px_120px_rgba(0,0,0,0.45)]"
      >
        <div className="flex items-center justify-between border-b border-white/8 px-5 py-4 sm:px-7">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-gold)]">
              {uiText.promotionModal.activePromotion}
            </p>
            <h2
              id={`promotion-modal-title-${promotion.id}`}
              className="mt-2 text-[1.7rem] font-medium leading-none text-[var(--color-ink)] sm:text-[2rem]"
            >
              {promotion.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/4 text-[var(--color-accent)] transition-colors duration-300 hover:bg-[var(--color-primary)] hover:text-[#140d0a]"
            aria-label={uiText.promotionModal.close}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 fill-none stroke-current stroke-[2]"
              aria-hidden
            >
              <path
                d="M6 6l12 12M18 6L6 18"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="overflow-y-auto px-5 py-5 sm:px-7 sm:py-7">
          <div className="grid gap-7 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <figure className="group relative w-full overflow-hidden rounded-[1.8rem] border border-white/8 shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
              <img
                src={image}
                alt={promotion.title}
                className="h-[17rem] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06] sm:h-[20rem] lg:h-[23rem] xl:h-[25rem]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/05 to-transparent" />
              <div
                aria-hidden
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full"
              />
            </figure>

            <div className="surface-panel rounded-[1.8rem] p-6 sm:p-7">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
                {uiText.promotionModal.detailEyebrow}
              </p>
              <h3 className="mt-4 text-[2rem] font-medium leading-[0.95] text-[var(--color-ink)] sm:text-[2.4rem]">
                {promotion.title}
              </h3>
              <p className="mt-5 text-base leading-8 text-[var(--color-ink-soft)]">
                {promotion.description}
              </p>
              <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                {uiText.promotionModal.detailDescription}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-[#140d0a] shadow-[0_14px_34px_rgba(160,94,76,0.28)] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  {uiText.promotionModal.requestWhatsApp}
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/4 px-6 py-3 text-sm font-semibold text-[var(--color-accent)] transition-colors duration-300 hover:bg-[var(--color-primary)] hover:text-[#140d0a]"
                >
                  {uiText.promotionModal.close}
                </button>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-gold)]">
                {uiText.promotionModal.suggestedServices}
              </p>
              <h3 className="mt-4 text-[2.2rem] font-medium tracking-tight text-[var(--color-ink)] sm:text-[2.8rem]">
                {uiText.promotionModal.suggestedServicesTitle}
              </h3>
              <p className="mt-4 text-base leading-8 text-[var(--color-ink-soft)]">
                {uiText.promotionModal.suggestedServicesDescription}
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {visibleServices.map((service, index) => (
                <PromotionServiceCard
                  key={service.id}
                  service={service}
                  index={index}
                />
              ))}
            </div>

            {services.length > 3 ? (
              <div className="mt-12 text-center">
                <ExpandToggleButton
                  expanded={isExpanded}
                  onClick={() => setIsExpanded((current) => !current)}
                  collapsedLabel={uiText.expandButton.moreServices}
                  expandedLabel={uiText.expandButton.lessServices}
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
