import Container from "@/components/ui/Container";
import { facialCleansePage } from "@/data/site";

export default function FacialCleanseDetailSection() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-[#091019] py-24 sm:py-28 lg:py-32">
      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#e8e0d6] to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#e8e0d6] to-transparent" />
      <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(245,201,169,0.18),transparent_65%)]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(22,54,80,0.06),transparent_65%)]" />
      <Container size="lg" className="relative z-10">
        <div className="flex justify-center lg:justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/4 px-5 py-2 shadow-[0_1px_8px_rgba(0,0,0,0.16)]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-primary)]" />
            <span className="text-[16px] font-bold tracking-[0.12em] text-[var(--color-accent)] uppercase ">
              {facialCleansePage.questionLabel}
            </span>
          </div>
        </div>
        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-start lg:gap-20">
          <div className="max-w-2xl">
            <div className="mb-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-[var(--color-primary)]/30 to-transparent" />
            </div>
            <div className="space-y-5">
              {facialCleansePage.content.map((paragraph, idx) => (
                <p
                  key={idx}
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                  className={
                    idx === 0
                      ? "text-lg font-medium leading-8 text-[var(--color-ink)] sm:text-[21px] sm:leading-9"
                      : "text-[17px] leading-8 text-[var(--color-ink-soft)] sm:text-[19px] sm:leading-9"
                  }
                />
              ))}
            </div>
            {facialCleansePage.stats && (
              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {facialCleansePage.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/8 bg-white/4 px-4 py-4 text-center"
                  >
                    <p className="text-2xl font-bold text-[var(--color-accent)]">
                      {stat.value}
                    </p>
                    <p className="mt-0.5 text-xs text-[var(--color-muted)]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            )}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={facialCleansePage.primaryCta.href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 rounded-2xl bg-[var(--color-primary)] px-7 py-3.5 text-sm font-semibold text-[#140d0a] shadow-[0_4px_18px_-4px_rgba(19,40,60,0.35)] transition-all duration-300 hover:shadow-[0_8px_24px_-4px_rgba(19,40,60,0.4)] hover:scale-[1.02] sm:text-base"
              >
                {facialCleansePage.primaryCta.label}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
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
              {facialCleansePage.secondaryCta && (
                <a
                  href={facialCleansePage.secondaryCta.href}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] underline-offset-4 hover:text-[var(--color-gold)] hover:underline sm:text-base"
                >
                  {facialCleansePage.secondaryCta.label}
                </a>
              )}
            </div>
            {facialCleansePage.trustNote && (
              <p className="mt-4 flex items-center gap-1.5 text-xs text-[var(--color-muted)]">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                {facialCleansePage.trustNote}
              </p>
            )}
          </div>
          <div className="relative mx-auto w-full max-w-[26rem] lg:max-w-none">
            <div className="absolute -bottom-3 -right-3 h-full w-full rounded-[2rem] border border-white/8 bg-[#0d1620]" />
            <div className="group relative overflow-hidden rounded-[2rem] border border-white/8 bg-[#091019] shadow-[0_16px_56px_-8px_rgba(0,0,0,0.28)]">
              <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />
              <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-br from-white/5 to-transparent" />
              <div
                aria-hidden
                className="absolute inset-0 z-10 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full"
              />
              <img
                src={facialCleansePage.imageSrc}
                alt={facialCleansePage.imageAlt}
                className="aspect-[6/5] min-h-[15rem] w-full object-cover transition duration-700 group-hover:scale-[1.03] sm:aspect-[4/5] sm:min-h-[18rem] lg:min-h-[24rem]"
                loading="lazy"
                decoding="async"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute left-5 top-5 z-20 h-7 w-7 rounded-tl-xl border-l-2 border-t-2 border-white/30"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute bottom-5 right-5 z-20 h-7 w-7 rounded-br-xl border-b-2 border-r-2 border-white/30"
              />
              <div className="absolute bottom-5 left-5 z-20 flex items-center gap-2 rounded-2xl border border-white/20 bg-black/30 px-4 py-2.5 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-[rgba(245,201,169,0.9)]" />
                <span className="text-xs font-bold uppercase tracking-widest text-white/85">
                  {facialCleansePage.imageLabel ?? facialCleansePage.title}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
