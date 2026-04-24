import Container from "@/components/ui/Container";
import { toxinaBotulinicaPage } from "@/data/site";
import { uiText } from "@/data/uiText";

function UseItem({ label, index }) {
  return (
    <li
      className="tox-use-item group relative flex items-start gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/4 px-5 py-4 transition-all duration-300 hover:border-[rgba(160,94,76,0.25)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.24)]"
      style={{ animationDelay: `${0.15 + index * 0.07}s` }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at left, rgba(160,94,76,0.05) 0%, transparent 70%)",
        }}
      />
      <span className="relative z-10 text-sm leading-relaxed text-[var(--color-ink-soft)] sm:text-base">
        {label}
      </span>
      <style>{`
        .tox-use-item {
          box-shadow: 0 1px 3px rgba(34,24,20,0.03);
          animation: toxUseItemIn 0.5s cubic-bezier(0.22,1,0.36,1) both;
        }
        @keyframes toxUseItemIn {
          from { opacity: 0; transform: translateX(-10px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </li>
  );
}
function ResultsBlock({ title, text }) {
  return (
    <div className="surface-panel tox-results-block relative overflow-hidden rounded-[2rem]">
      <div
        aria-hidden
        className="absolute inset-y-0 left-0 w-1 rounded-l-[2rem]"
        style={{
          background:
            "linear-gradient(to bottom, var(--color-primary), var(--color-primary-dark, #7a3520))",
        }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute right-8 top-8 h-20 w-20 rounded-full border border-[rgba(160,94,76,0.07)]"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute right-12 top-12 h-10 w-10 rounded-full border border-[rgba(160,94,76,0.05)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[2rem]"
        style={{
          background:
            "linear-gradient(135deg, rgba(160,94,76,0.04) 0%, transparent 55%)",
        }}
      />
      <div className="relative z-10 px-8 py-9 sm:px-10 sm:py-10">
        <h3 className="text-2xl font-medium tracking-tight text-[var(--color-ink)] sm:text-3xl">
          {title}
        </h3>
        <div className="mt-4 flex items-center gap-2">
          <div className="h-[3px] w-10 rounded-full bg-[var(--color-primary)]" />
          <div className="h-[3px] w-4 rounded-full bg-[rgba(160,94,76,0.25)]" />
        </div>
        <p className="mt-6 text-base leading-7 text-[var(--color-ink-soft)] sm:text-lg sm:leading-8">
          {text}
        </p>
      </div>
      <style>{`
        .tox-results-block {
          box-shadow: 0 2px 4px rgba(34,24,20,0.03), 0 16px 48px rgba(34,24,20,0.07);
          animation: toxResultsBlockIn 0.6s cubic-bezier(0.22,1,0.36,1) 0.3s both;
        }
        @keyframes toxResultsBlockIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
export default function ToxinaBotulinicaResultsSection() {
  const { resultsSection } = toxinaBotulinicaPage;
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-gradient-to-b from-[#081019] via-[#0d141d] to-[#081019] py-20 sm:py-28 lg:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute -left-24 top-10 h-[370px] w-[370px] rounded-full opacity-55"
          style={{
            background:
              "radial-gradient(circle, rgba(245,201,169,0.22) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -right-24 bottom-0 h-[350px] w-[350px] rounded-full opacity-38"
          style={{
            background:
              "radial-gradient(circle, rgba(160,94,76,0.1) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #a05e4c 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>
      <Container className="relative z-10">
        <div className="mx-auto max-w-6xl grid gap-14 lg:grid-cols-2 lg:gap-20 lg:items-start">
          <div className="flex flex-col gap-10">
            <div className="tox-uses-header">
              <h2 className="text-3xl font-medium tracking-tight text-[var(--color-ink)] sm:text-4xl lg:text-5xl">
                {resultsSection.usesTitle}
              </h2>
              <div className="mt-4 flex items-center gap-2">
                <div className="h-[3px] w-10 rounded-full bg-[var(--color-primary)]" />
                <div className="h-[3px] w-4 rounded-full bg-[rgba(160,94,76,0.3)]" />
              </div>
              <ul className="mt-6 flex flex-col gap-3">
                {resultsSection.uses.map((item, index) => (
                  <UseItem key={item} label={item} index={index} />
                ))}
              </ul>
            </div>
            <ResultsBlock
              title={resultsSection.resultsTitle}
              text={resultsSection.resultsText}
            />
          </div>
          <div className="tox-results-image relative flex items-start lg:sticky lg:top-32">
            <div
              aria-hidden
              className="absolute -right-3 -top-3 h-full w-full rounded-[2rem] border border-[rgba(160,94,76,0.12)]"
            />
            <div
              aria-hidden
              className="absolute -inset-6 rounded-[3rem] opacity-40"
              style={{
                background: "rgba(245,201,169,0.2)",
                filter: "blur(40px)",
              }}
            />
            <figure className="group relative w-full overflow-hidden rounded-[2rem] shadow-[0_30px_80px_rgba(34,24,20,0.15)]">
              <img
                src={resultsSection.imageSrc}
                alt={resultsSection.imageAlt}
                className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                loading="lazy"
                decoding="async"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/05 to-transparent" />
              <div
                aria-hidden
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute left-5 top-5 h-7 w-7 border-l-2 border-t-2 border-white/30 rounded-tl-xl"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute right-5 bottom-5 h-7 w-7 border-r-2 border-b-2 border-white/30 rounded-br-xl"
              />
              <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-2xl border border-white/20 bg-black/30 px-4 py-2.5 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-[rgba(245,201,169,0.9)]" />
                <span className="text-xs font-bold uppercase tracking-widest text-white/85">
                  {resultsSection.imageLabel ?? uiText.specialPages.toxinaImageLabel}
                </span>
              </div>
            </figure>
          </div>
        </div>
      </Container>
      <style>{`
        @keyframes toxUsesHeaderIn {
          from { opacity: 0; transform: translateY(-14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes toxResultsImageIn {
          from { opacity: 0; transform: translateX(18px) scale(0.98); }
          to   { opacity: 1; transform: translateX(0) scale(1); }
        }
        .tox-uses-header   { animation: toxUsesHeaderIn   0.6s  cubic-bezier(0.22,1,0.36,1) both; }
        .tox-results-image { animation: toxResultsImageIn 0.65s cubic-bezier(0.22,1,0.36,1) 0.15s both; }
      `}</style>
    </section>
  );
}
