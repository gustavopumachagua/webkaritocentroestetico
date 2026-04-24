import Container from "@/components/ui/Container";
import { toxinaBotulinicaPage } from "@/data/site";
import { uiText } from "@/data/uiText";

function StepPill({ number, label }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/15 font-mono text-[11px] font-bold text-white/80">
        {String(number).padStart(2, "0")}
      </span>
      <span className="text-sm font-medium text-white/70">{label}</span>
    </div>
  );
}

export default function ToxinaBotulinicaProcedureSection() {
  const { procedureSection } = toxinaBotulinicaPage;

  return (
    <section
      className="relative overflow-hidden py-20 sm:py-28 lg:py-32"
      style={{
        background:
          "linear-gradient(135deg, #060b11 0%, #0b121a 52%, #101923 100%)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "200px",
        }}
      />
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute -right-32 -top-20 h-[480px] w-[480px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(245,201,169,0.14) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute -left-24 bottom-[-5rem] h-[360px] w-[360px] rounded-full opacity-25"
          style={{
            background:
              "radial-gradient(circle, rgba(99,125,156,0.12) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 60%)",
          }}
        />
      </div>
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />
      <Container className="relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <div className="relative mx-auto w-full max-w-[32rem] lg:max-w-none tox-proc-image">
            <div
              aria-hidden
              className="absolute -right-3 -top-3 h-full w-full rounded-[2rem] border border-white/12"
            />
            <div
              aria-hidden
              className="absolute -inset-6 rounded-[3rem] opacity-50"
              style={{
                background: "rgba(255,200,160,0.12)",
                filter: "blur(40px)",
              }}
            />
            <figure className="group relative overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
              <img
                src={procedureSection.imageSrc}
                alt={procedureSection.imageAlt}
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
                loading="lazy"
                decoding="async"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/05 to-transparent" />
              <div
                aria-hidden
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/12 to-transparent transition-transform duration-700 group-hover:translate-x-full"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute left-4 top-4 h-7 w-7 border-l-2 border-t-2 border-white/30 rounded-tl-xl"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute right-4 bottom-4 h-7 w-7 border-r-2 border-b-2 border-white/30 rounded-br-xl"
              />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-[rgba(255,200,160,0.9)]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-white/85">
                  {procedureSection.imageLabel ?? uiText.specialPages.procedureImageLabel}
                </span>
              </div>
            </figure>
          </div>
          <div className="max-w-xl text-white lg:max-w-none tox-proc-text">
            <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
              {procedureSection.title}
            </h2>
            <div className="mt-5 flex items-center gap-2">
              <div className="h-[3px] w-12 rounded-full bg-white/50" />
              <div className="h-[3px] w-4 rounded-full bg-white/25" />
            </div>
            <p className="mt-7 text-lg font-medium leading-8 text-white/82 sm:text-[1.22rem] sm:leading-10">
              {procedureSection.content}
            </p>
            {procedureSection.steps?.length > 0 && (
              <div className="mt-8 grid gap-3 border-t border-white/10 pt-8 sm:grid-cols-2">
                {procedureSection.steps.map((step, i) => (
                  <StepPill key={i} number={i + 1} label={step} />
                ))}
              </div>
            )}
            {procedureSection.cta && (
              <a
                href={procedureSection.cta.href}
                target="_blank"
                rel="noreferrer"
                className="group/cta mt-9 inline-flex items-center gap-3 rounded-full border border-white/16 bg-white/8 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/28 hover:bg-white/14 hover:shadow-[0_8px_28px_rgba(0,0,0,0.25)]"
              >
                {procedureSection.cta.label}
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover/cta:translate-x-0.5">
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
              </a>
            )}
          </div>
        </div>
      </Container>
      <style>{`
        @keyframes toxProcImageIn {
          from { opacity: 0; transform: translateX(-22px) scale(0.98); }
          to   { opacity: 1; transform: translateX(0)    scale(1); }
        }
        @keyframes toxProcTextIn {
          from { opacity: 0; transform: translateX(22px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .tox-proc-image { animation: toxProcImageIn 0.65s cubic-bezier(0.22,1,0.36,1) both; }
        .tox-proc-text  { animation: toxProcTextIn  0.65s cubic-bezier(0.22,1,0.36,1) 0.12s both; }
      `}</style>
    </section>
  );
}
