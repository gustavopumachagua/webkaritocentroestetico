import { useState } from "react";
import Container from "@/components/ui/Container";
import ExpandToggleButton from "@/components/ui/ExpandToggleButton";
import { facialCleansePage } from "@/data/site";
import { uiText } from "@/data/uiText";

function ProtocolCard({ item }) {
  const Component = item.href ? "a" : "article";
  const extraProps = item.href ? { href: item.href } : {};

  return (
    <Component
      {...extraProps}
      className="group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-white/8 bg-[#0f1620] shadow-[0_12px_28px_rgba(0,0,0,0.24)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_56px_rgba(0,0,0,0.34)]"
    >
      <div className="relative overflow-hidden">
        <img
          src={item.imageSrc}
          alt={item.imageAlt}
          className="h-[11rem] w-full object-cover transition duration-700 group-hover:scale-[1.06] sm:h-[14rem] lg:h-[17rem]"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#13283c]/55 via-[#13283c]/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 z-10 px-5 pb-5 pt-10">
          <h3 className="text-lg font-bold leading-snug text-white drop-shadow sm:text-xl">
            {item.title}
          </h3>
        </div>
      </div>
      <div className="flex flex-1 flex-col px-5 py-5 sm:px-6 sm:py-6">
          <p className="flex-1 text-sm leading-7 text-[var(--color-muted)] sm:text-[15px]">
            {item.description}
          </p>
        <div className="my-4 h-px bg-gradient-to-r from-[var(--color-primary)]/20 via-[#e8ddd4] to-transparent" />
        <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-[var(--color-accent)]">
              {uiText.serviceCard.viewProtocol}
            </span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/4 text-[var(--color-accent)] transition-all duration-300 group-hover:border-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-[#140d0a]">
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

export default function FacialCleanseProtocolsSection({
  items = facialCleansePage.protocolsSection.items,
}) {
  const { protocolsSection } = facialCleansePage;
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleItems = isExpanded ? items : items.slice(0, 3);

  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-[#091019] py-24 sm:py-28 lg:py-32">
      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(245,201,169,0.15),transparent_65%)]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(22,54,80,0.06),transparent_65%)]" />
      <Container size="lg" className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[2.2rem] font-medium tracking-tight text-[var(--color-ink)] sm:text-[2.8rem] lg:text-[3.4rem] lg:leading-[1.05]">
            {protocolsSection.title}
          </h2>
          <div className="mx-auto mt-3 h-1 w-10 rounded-full bg-[var(--color-primary)]" />
          <p className="mt-5 text-base leading-8 text-[var(--color-ink-soft)] sm:text-lg">
            {protocolsSection.description}
          </p>
        </div>
        <div className="mt-14 grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleItems.map((item) => (
            <ProtocolCard key={item.id} item={item} />
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
        {protocolsSection.cta && items.length <= 3 ? (
          <div className="mt-14 text-center">
            <a
              href={protocolsSection.cta.href}
              className="group inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/4 px-7 py-3.5 text-sm font-semibold text-[var(--color-accent)] shadow-[0_2px_12px_rgba(0,0,0,0.16)] transition-all duration-300 hover:bg-[var(--color-primary)] hover:text-[#140d0a] hover:shadow-[0_8px_24px_rgba(19,40,60,0.2)] sm:text-base"
            >
              {protocolsSection.cta.label ?? uiText.serviceCard.viewProtocol}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
