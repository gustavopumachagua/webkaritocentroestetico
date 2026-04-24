import Container from "@/components/ui/Container";
import { cavitacionPage } from "@/data/site";

function StepItem({ step }) {
  return (
    <div className="group relative flex gap-4 sm:gap-5">
      <div className="relative flex flex-col items-center">
        <div className="mt-2 w-px flex-1 bg-gradient-to-b from-white/15 to-transparent" />
      </div>
      <div className="pb-7 pt-1.5">
        <p className="text-base leading-8 text-white/78 transition duration-300 group-hover:text-white/96 sm:text-[1.05rem]">
          {step}
        </p>
      </div>
    </div>
  );
}
export default function CavitacionProcedureSection() {
  const { procedureSection } = cavitacionPage;
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#060b11_0%,#0b121a_52%,#101923_100%)] py-24 sm:py-28 lg:py-32">
      <div className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(99,125,156,0.12),transparent_65%)]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(245,201,169,0.08),transparent_65%)]" />
      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <Container className="relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="absolute -bottom-3 -right-3 h-full w-full rounded-3xl border border-white/5 bg-white/5" />
            <figure className="group relative overflow-hidden rounded-3xl border border-white/10 shadow-[0_24px_64px_rgba(0,0,0,0.5)]">
              <img
                src={procedureSection.imageSrc}
                alt={procedureSection.imageAlt}
                className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.04] sm:aspect-auto sm:h-[460px] lg:h-[540px]"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#081019]/65 via-transparent to-transparent" />
              {procedureSection.badge && (
                <div className="absolute bottom-5 left-5 right-5 z-10">
                  <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]/30 text-[var(--color-primary)]">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-xs font-semibold text-white">
                        {procedureSection.badge.title}
                      </p>
                      <p className="text-[11px] text-white/55">
                        {procedureSection.badge.sub}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </figure>
          </div>
          <div className="max-w-xl">
            <h2 className="mt-4 text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.5rem]">
              {procedureSection.title}
            </h2>
            <div className="mt-3 h-0.5 w-10 rounded-full bg-[var(--color-primary)]" />
            <div className="mt-10">
              {procedureSection.steps.map((step) => (
                <StepItem key={step} step={step} />
              ))}
            </div>
            {procedureSection.cta && (
              <div className="mt-2">
                <a
                  href={procedureSection.cta.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 rounded-2xl bg-[var(--color-primary)] px-7 py-3.5 text-sm font-semibold text-[#140d0a] shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_28px_rgba(0,0,0,0.5)] sm:text-base"
                >
                  {procedureSection.cta.label}
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
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
