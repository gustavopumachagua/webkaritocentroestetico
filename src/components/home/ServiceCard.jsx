import { uiText } from "@/data/uiText";

export default function ServiceCard({ service, image, itemNumber }) {
  const Component = service.href ? "a" : "article";
  const extraProps = service.href ? { href: service.href } : {};

  return (
    <Component
      {...extraProps}
      className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-[1.85rem] border border-white/8 bg-[#0d121a]
        shadow-[0_12px_36px_rgba(0,0,0,0.26)]
        transition-all duration-[450ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]
        hover:-translate-y-1.5 hover:scale-[1.015] hover:shadow-[0_24px_64px_rgba(0,0,0,0.4)]"
    >
      <img
        src={image}
        alt={service.title}
        className="absolute inset-0 h-full w-full object-cover
          brightness-[0.84] saturate-[1.04]
          transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
          group-hover:scale-[1.06] group-hover:brightness-[0.6] group-hover:saturate-110"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#081018]/10 via-[#081018]/45 to-[#04070b]/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#081018]/35" />

      {service.category && (
        <span
          className="surface-chip absolute left-4 top-4 z-10 rounded-full px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]"
        >
          {service.category}
        </span>
      )}

      <span
        className="absolute right-4 top-4 z-10 font-[var(--font-display)] text-sm text-white/35 tracking-[0.12em]"
      >
        {itemNumber ?? service.index ?? ""}
      </span>

      <div className="absolute bottom-0 left-0 right-0 z-10 px-[22px] pb-[22px]">
        <h3
          className="mb-3 font-[var(--font-display)] text-[1.9rem] font-medium leading-[1.02] tracking-[-0.03em] text-white sm:text-[2.1rem]"
        >
          {service.title}
        </h3>

        <p
          className="mb-4 text-[0.84rem] leading-6 text-white/68
          opacity-100 translate-y-0
          transition-all duration-[350ms] ease-out delay-[60ms]
          sm:translate-y-2.5 sm:opacity-0
          sm:group-hover:translate-y-0 sm:group-hover:opacity-100"
        >
          {service.description}
        </p>

        <div
          className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]
          opacity-100 translate-y-0
          transition-all duration-[320ms] ease-out delay-[120ms]
          sm:translate-y-2 sm:opacity-0
          sm:group-hover:translate-y-0 sm:group-hover:opacity-100"
        >
          <span className="h-px w-6 bg-[var(--color-accent)] transition-all duration-300 group-hover:w-9" />
          {service.href ? uiText.serviceCard.viewService : uiText.serviceCard.consult}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-[1.85rem] ring-1 ring-white/6 transition duration-300 group-hover:ring-[var(--color-primary)]/28" />
    </Component>
  );
}
