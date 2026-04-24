import Container from "@/components/ui/Container";
import { cavitacionPage } from "@/data/site";
import { uiText } from "@/data/uiText";

function BenefitItem({ title, description, index }) {
  return (
    <article
      className="cav-benefit group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/4 p-5 sm:p-6"
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
        className="pointer-events-none absolute -right-5 -top-5 h-20 w-20 rounded-full border border-[rgba(160,94,76,0.07)] transition-transform duration-500 group-hover:scale-110"
      />
      <div className="relative z-10 flex gap-4 sm:gap-5">
        <div>
          <h3 className="text-base font-semibold leading-snug text-[var(--color-ink)] transition-colors duration-300 group-hover:text-[var(--color-accent)] sm:text-lg">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
            {description}
          </p>
        </div>
      </div>

      <style>{`
        .cav-benefit {
          box-shadow: 0 1px 3px rgba(34,24,20,0.04), 0 8px 24px rgba(34,24,20,0.05);
          transition: box-shadow 0.35s ease, transform 0.35s ease;
          animation: cavBenefitIn 0.55s cubic-bezier(0.22,1,0.36,1) both;
        }
        .cav-benefit:hover {
          box-shadow: 0 4px 8px rgba(34,24,20,0.05), 0 20px 52px rgba(34,24,20,0.09);
          transform: translateY(-3px);
        }
        @keyframes cavBenefitIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </article>
  );
}
export default function CavitacionBenefitsSection() {
  const { benefitsSection } = cavitacionPage;
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-[#091019] py-20 sm:py-28 lg:py-32">
      {/* ── Ambient glows ── */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-0 h-[480px] w-[700px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-50"
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
          className="absolute -right-20 top-1/3 h-[280px] w-[280px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(160,94,76,0.1) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #a05e4c 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>
      <Container className="relative z-10">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className="max-w-xl cav-benefits-text">
            {benefitsSection.intro && (
              <p className="mb-5 text-base leading-8 text-[var(--color-ink-soft)] sm:text-lg">
                {benefitsSection.intro}
              </p>
            )}
            <h2 className="text-3xl font-medium leading-tight text-[var(--color-ink)] sm:text-4xl">
              {benefitsSection.heading}
            </h2>
            <div className="mt-4 flex items-center gap-2">
              <div className="h-[3px] w-10 rounded-full bg-[var(--color-primary)]" />
              <div className="h-[3px] w-4 rounded-full bg-[rgba(160,94,76,0.3)]" />
            </div>
            {benefitsSection.subheading && (
              <p className="mt-4 text-lg font-semibold text-[var(--color-accent)] sm:text-xl">
                {benefitsSection.subheading}
              </p>
            )}
            <div className="mt-6 flex flex-col gap-4 sm:gap-5">
              {benefitsSection.items.map((item, index) => (
                <BenefitItem
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  index={index}
                />
              ))}
            </div>
          </div>
          <div className="cav-benefits-image relative flex items-center justify-end">
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
                src={benefitsSection.imageSrc}
                alt={benefitsSection.imageAlt}
                className="h-[320px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06] sm:h-[420px] lg:h-[520px]"
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
                  {benefitsSection.imageLabel ?? uiText.specialPages.cavitacionImageLabel}
                </span>
              </div>
            </figure>
          </div>
        </div>
      </Container>
      <style>{`
        @keyframes cavBenefitsTextIn {
          from { opacity: 0; transform: translateX(-20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes cavBenefitsImageIn {
          from { opacity: 0; transform: translateX(20px) scale(0.98); }
          to   { opacity: 1; transform: translateX(0) scale(1); }
        }
        .cav-benefits-text  { animation: cavBenefitsTextIn  0.65s cubic-bezier(0.22,1,0.36,1) both; }
        .cav-benefits-image { animation: cavBenefitsImageIn 0.65s cubic-bezier(0.22,1,0.36,1) 0.12s both; }
      `}</style>
    </section>
  );
}
