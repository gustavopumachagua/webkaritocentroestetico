import Container from "@/components/ui/Container";
import { aboutPage } from "@/data/site";
import { uiText } from "@/data/uiText";

export default function AboutStorySection() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-[#091019] py-20 sm:py-28 lg:py-32">
      <div className="absolute left-1/2 top-0 h-px w-[60%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <Container className="relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">
          <div>
            <h1 className="text-[2.6rem] font-medium leading-[0.94] text-[var(--color-ink)] sm:text-[3.4rem] lg:text-[4.2rem]">
              {aboutPage.title}
            </h1>
            <div className="mt-8 h-px w-full bg-gradient-to-r from-[var(--color-primary)]/35 to-transparent" />
            <div className="mt-8 space-y-6 text-[1.02rem] leading-8 text-[var(--color-ink-soft)] sm:text-[1.12rem] sm:leading-9 lg:text-[1.18rem]">
              {aboutPage.paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-10 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/8">
              {[
                ...uiText.aboutStory.stats,
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center justify-center gap-1 bg-[#0e1620] px-4 py-5 text-center"
                >
                  <span className="text-2xl font-bold text-[var(--color-accent)]">
                    {value}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-muted)]">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute -inset-3 rounded-3xl border border-white/8 bg-[#0e1620]" />
            <div className="group relative overflow-hidden rounded-2xl shadow-2xl shadow-black/10">
              <img
                src={aboutPage.imageSrc}
                alt={aboutPage.imageAlt}
                className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-xl border border-white/10 bg-[rgba(8,11,16,0.78)] px-4 py-3 backdrop-blur-sm">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]/12">
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
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[13px] font-bold text-[var(--color-ink)]">
                    {uiText.aboutStory.badgeTitle}
                  </p>
                  <p className="text-[12px] text-[var(--color-muted)]">
                    {uiText.aboutStory.badgeSubtitle}
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -right-4 -top-4 z-10 flex h-20 w-20 flex-col items-center justify-center rounded-full bg-[var(--color-primary)] text-[#140d0a] shadow-lg">
              <span className="text-xl font-bold leading-none">5+</span>
              <span className="mt-0.5 text-[9px] font-semibold uppercase tracking-wider opacity-75">
                {uiText.aboutStory.yearsLabel}
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
