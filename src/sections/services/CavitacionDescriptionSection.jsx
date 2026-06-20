import Container from "@/components/ui/Container";
import { cavitacionPage } from "@/data/site";
function QuoteMark({ className = "" }) {
  return (
    <svg
      viewBox="0 0 40 32"
      className={className}
      aria-hidden
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 32V19.2C0 8.533 5.333 2.4 16 0l2.4 3.6C12.267 5.067 9.2 8.4 8 14h8V32H0zm22 0V19.2C22 8.533 27.333 2.4 38 0l2.4 3.6C34.267 5.067 31.2 8.4 30 14h8V32H22z" />
    </svg>
  );
}
function BodyParagraph({ html, index }) {
  const isFirst = index === 0;
  return (
    <div
      className="cav-desc-para group relative pl-5"
      style={{ animationDelay: `${0.25 + index * 0.1}s` }}
    >
      <span
        className={`absolute left-0 top-1 h-full w-[2px] rounded-full transition-all duration-500 ${
          isFirst
            ? "bg-[var(--color-primary)]"
            : "bg-[rgba(160,94,76,0.18)] group-hover:bg-[rgba(133, 83, 69, 0.45)]"
        }`}
      />
      <p
        dangerouslySetInnerHTML={{ __html: html }}
        className="font-medium leading-8 text-[var(--color-ink-soft)] sm:text-lg sm:leading-9"
      />
    </div>
  );
}
export default function CavitacionDescriptionSection() {
  const { descriptionSection } = cavitacionPage;
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-[#091019] py-20 sm:py-28 lg:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-45"
          style={{
            background:
              "radial-gradient(ellipse, rgba(160,94,76,0.1) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute -left-24 bottom-0 h-[340px] w-[340px] rounded-full opacity-40"
          style={{
            background:
              "radial-gradient(circle, rgba(245,201,169,0.2) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #503129 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>
      <Container className="relative z-10">
        <div className="mx-auto max-w-5xl">
          <div className="cav-desc-header max-w-2xl">
            <h2 className="text-3xl font-medium leading-tight text-[var(--color-ink)] sm:text-4xl lg:text-5xl">
              {descriptionSection.title}
            </h2>
            <div className="mt-4 flex items-center gap-2">
              <div className="h-[3px] w-10 rounded-full bg-[var(--color-primary)]" />
              <div className="h-[3px] w-4 rounded-full bg-[rgba(160,94,76,0.3)]" />
            </div>
          </div>
          <div
            className="surface-panel cav-desc-card relative mt-12 overflow-hidden rounded-[2rem] px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14"
            style={{
              boxShadow:
                "0 18px 52px rgba(0,0,0,0.24), 0 24px 72px rgba(0,0,0,0.16)",
            }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-[2rem]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(160,94,76,0.06) 0%, transparent 50%, rgba(160,94,76,0.04) 100%)",
              }}
            />
            <span
              aria-hidden
              className="pointer-events-none absolute right-6 top-6 h-16 w-16 rounded-full border border-[rgba(160,94,76,0.1)]"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute right-10 top-10 h-8 w-8 rounded-full border border-[rgba(160,94,76,0.07)]"
            />
            <QuoteMark className="mb-6 h-7 w-7 text-[rgba(207,155,114,0.18)]" />
            <div className="relative z-10 space-y-7">
              {descriptionSection.paragraphs.map((paragraph, index) => (
                <BodyParagraph key={index} html={paragraph} index={index} />
              ))}
            </div>
            <QuoteMark className="ml-auto mt-6 h-7 w-7 rotate-180 text-[rgba(99,125,156,0.16)]" />
          </div>
        </div>
      </Container>
      <style>{`
        @keyframes cavDescHeaderIn {
          from { opacity: 0; transform: translateY(-14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes cavDescCardIn {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes cavDescParaIn {
          from { opacity: 0; transform: translateX(-10px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .cav-desc-header { animation: cavDescHeaderIn 0.6s cubic-bezier(0.22,1,0.36,1) both; }
        .cav-desc-card   { animation: cavDescCardIn   0.65s cubic-bezier(0.22,1,0.36,1) 0.12s both; }
        .cav-desc-para   { animation: cavDescParaIn   0.5s  cubic-bezier(0.22,1,0.36,1) both; }
      `}</style>
    </section>
  );
}
