import Container from "@/components/ui/Container";
import { deepCleansePage } from "@/data/site";

function BenefitItem({ title, description, index }) {
  return (
    <article
      className="benefit-card group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/4 p-6 sm:p-7 lg:p-8"
      style={{ animationDelay: `${0.1 + index * 0.08}s` }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at top left, rgba(160,94,76,0.07) 0%, transparent 65%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full border border-[rgba(160,94,76,0.08)] transition-transform duration-500 group-hover:scale-110"
      />
      <div className="relative z-10 flex gap-5">
        <div className="flex flex-col items-center gap-2">
          <div
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl font-mono text-sm font-bold text-white shadow-[0_6px_20px_rgba(160,94,76,0.3)] transition-transform duration-300 group-hover:scale-110"
            style={{
              background:
                "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark, #7a3520) 100%)",
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </div>
          <div className="benefit-connector w-[2px] flex-1 rounded-full bg-[rgba(160,94,76,0.1)]" />
        </div>
        <div className="pb-2 pt-1">
          <h3 className="text-lg font-semibold leading-snug text-[var(--color-ink)] transition-colors duration-300 group-hover:text-[var(--color-accent)] sm:text-lg">
            {title}
          </h3>
          <p className="mt-2.5 text-sm leading-relaxed text-[var(--color-muted)] sm:text-base sm:leading-7">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}
function FrequencyBlock({ title, paragraphs }) {
  return (
    <div
      className="surface-panel relative overflow-hidden rounded-[2rem]"
      style={{
        boxShadow:
          "0 2px 4px rgba(34,24,20,0.03), 0 20px 60px rgba(34,24,20,0.08)",
      }}
    >
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
      <div className="relative z-10 px-8 py-10 sm:px-12 sm:py-12 lg:px-14 lg:py-14">
        <h3 className="text-2xl font-medium tracking-tight text-[var(--color-ink)] sm:text-2xl lg:text-4xl">
          {title}
        </h3>
        <div className="mt-4 flex items-center gap-2">
          <div className="h-[3px] w-10 rounded-full bg-[var(--color-primary)]" />
          <div className="h-[3px] w-4 rounded-full bg-[rgba(160,94,76,0.25)]" />
        </div>
        <div className="mt-8 space-y-5">
          {paragraphs.map((para, i) => (
            <div key={i} className="flex gap-4">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--color-primary)] opacity-60" />
              <p className="text-base leading-7 text-[var(--color-ink-soft)] sm:text-[16px] sm:leading-8">
                {para}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default function DeepCleanseBenefitsSection() {
  const { benefitsSection } = deepCleansePage;
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-gradient-to-b from-[#081019] via-[#0d141d] to-[#081019] py-20 sm:py-28 lg:py-36">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute -left-24 top-10 h-[360px] w-[360px] rounded-full opacity-55"
          style={{
            background:
              "radial-gradient(circle, rgba(245,201,169,0.22) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -right-24 bottom-0 h-[360px] w-[360px] rounded-full opacity-40"
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
            backgroundSize: "32px 32px",
          }}
        />
      </div>
      <Container className="relative z-10">
        <div className="mx-auto max-w-6xl">
          <div className="benefits-header mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-medium tracking-tight text-[var(--color-ink)] sm:text-4xl lg:text-5xl">
              {benefitsSection.title}
            </h2>
            <div className="mx-auto mt-4 flex items-center justify-center gap-2">
              <div className="h-[3px] w-10 rounded-full bg-[var(--color-primary)]" />
              <div className="h-[3px] w-4 rounded-full bg-[rgba(160,94,76,0.3)]" />
            </div>
          </div>
          <div className="mt-14 grid gap-4 sm:gap-5 lg:grid-cols-2">
            {benefitsSection.items.map((item, index) => (
              <BenefitItem
                key={item.title}
                title={item.title}
                description={item.description}
                index={index}
              />
            ))}
          </div>
          <div className="mt-16 sm:mt-20 freq-entrance">
            <FrequencyBlock
              title={benefitsSection.frequencyTitle}
              paragraphs={benefitsSection.frequencyParagraphs}
            />
          </div>
        </div>
      </Container>
      <style>{`
        @keyframes benefitsFadeDown {
          from { opacity: 0; transform: translateY(-12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes benefitCardIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes freqSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .benefits-header { animation: benefitsFadeDown 0.6s cubic-bezier(0.22,1,0.36,1) both; }
        .benefit-card    { animation: benefitCardIn   0.55s cubic-bezier(0.22,1,0.36,1) both;
                           box-shadow: 0 1px 3px rgba(34,24,20,0.04), 0 10px 32px rgba(34,24,20,0.06);
                           transition: box-shadow 0.35s ease, transform 0.35s ease; }
        .benefit-card:hover {
                           box-shadow: 0 4px 8px rgba(34,24,20,0.05), 0 20px_52px rgba(34,24,20,0.1);
                           transform: translateY(-3px); }
        .freq-entrance   { animation: freqSlideUp     0.6s cubic-bezier(0.22,1,0.36,1) 0.3s both; }
      `}</style>
    </section>
  );
}
