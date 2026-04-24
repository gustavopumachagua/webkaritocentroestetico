import Container from "@/components/ui/Container";
import { aboutPage } from "@/data/site";

export default function AboutPurposeSection() {
  const purposeSection = aboutPage.purposeSection;
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-[#091019] py-20 sm:py-28 lg:py-32">
      <div className="absolute left-1/2 top-0 h-px w-[60%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <Container className="relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">
          <div className="order-2 lg:order-1">
            <div className="group relative">
              <div className="absolute -inset-3 rounded-3xl border border-white/8 bg-[#0d1620]" />
              <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-black/10">
                <img
                  src={purposeSection.imageSrc}
                  alt={purposeSection.imageAlt}
                  className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                <div className="absolute bottom-5 left-5 flex items-center gap-2.5 rounded-full border border-white/10 bg-[rgba(8,11,16,0.8)] px-4 py-2 backdrop-blur-sm">
                  <span className="h-2 w-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
                    {purposeSection.eyebrow}
                  </span>
                </div>
              </div>
              <div className="absolute -right-4 -top-4 z-10 flex h-20 w-20 flex-col items-center justify-center rounded-full bg-[var(--color-primary)] text-[#140d0a] shadow-lg">
                <span className="text-xl font-bold leading-none">
                  {purposeSection.experienceBadgeValue}
                </span>
                <span className="mt-0.5 text-[9px] font-semibold uppercase tracking-wider opacity-75">
                  {purposeSection.experienceBadgeLabel}
                </span>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-[2.6rem] font-medium leading-[0.94] text-[var(--color-ink)] sm:text-[3.3rem] lg:text-[4rem]">
              {purposeSection.title}
            </h2>
            <div className="mt-8 h-px w-full bg-gradient-to-r from-[var(--color-primary)]/35 to-transparent" />
            <div className="mt-8 space-y-8">
              <div className="flex gap-5">
                <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--color-primary)]/12">
                  <svg
                    className="h-4 w-4 text-[var(--color-primary)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-bold uppercase tracking-wider text-[var(--color-ink)]">
                    {purposeSection.missionTitle}
                  </h3>
                  <p className="mt-2 text-[1.02rem] leading-8 text-[var(--color-ink-soft)] sm:text-[1.12rem] sm:leading-9">
                    {purposeSection.mission}
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--color-primary)]/12">
                  <svg
                    className="h-4 w-4 text-[var(--color-primary)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-bold uppercase tracking-wider text-[var(--color-ink)]">
                    {purposeSection.visionTitle}
                  </h3>
                  <p className="mt-2 text-[1.02rem] leading-8 text-[var(--color-ink-soft)] sm:text-[1.12rem] sm:leading-9">
                    {purposeSection.vision}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10 flex items-center gap-4">
              <a
                href={purposeSection.promotionsCta.href}
                className="group inline-flex items-center gap-2.5 rounded-full bg-[var(--color-primary)] px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-[#140d0a] shadow-lg shadow-[var(--color-primary)]/20 transition-all duration-200 hover:shadow-xl hover:shadow-[var(--color-primary)]/30 hover:-translate-y-0.5"
              >
                {purposeSection.promotionsCta.label}
                <svg
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
