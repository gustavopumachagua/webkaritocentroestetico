import Container from "@/components/ui/Container";
import { toxinaBotulinicaPage } from "@/data/site";
import { uiText } from "@/data/uiText";

function BenefitItem({ item, index }) {
  return (
    <article
      className="tox-benefit group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/4 p-5 sm:p-6"
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
      <div className="relative z-10 flex gap-4">
        <div>
          <h3 className="text-base font-semibold leading-snug text-[var(--color-ink)] transition-colors duration-300 group-hover:text-[var(--color-accent)] sm:text-lg lg:text-xl">
            {item.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
            {item.description}
          </p>
        </div>
      </div>
      <style>{`
        .tox-benefit {
          box-shadow: 0 1px 3px rgba(34,24,20,0.04), 0 8px 24px rgba(34,24,20,0.05);
          transition: box-shadow 0.35s ease, transform 0.35s ease;
          animation: toxBenefitIn 0.55s cubic-bezier(0.22,1,0.36,1) both;
        }
        .tox-benefit:hover {
          box-shadow: 0 4px 8px rgba(34,24,20,0.05), 0 20px 52px rgba(34,24,20,0.09);
          transform: translateY(-3px);
        }
        @keyframes toxBenefitIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </article>
  );
}
export default function ToxinaBotulinicaBenefitsSection() {
  const { benefitsDetailSection } = toxinaBotulinicaPage;
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
        <div className="mx-auto max-w-6xl">
          <div className="tox-benefits-header mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-medium tracking-tight text-[var(--color-ink)] sm:text-4xl lg:text-5xl">
              {benefitsDetailSection.title}
            </h2>
            <div className="mx-auto mt-4 flex items-center justify-center gap-2">
              <div className="h-[3px] w-10 rounded-full bg-[var(--color-primary)]" />
              <div className="h-[3px] w-4 rounded-full bg-[rgba(160,94,76,0.3)]" />
            </div>
            {benefitsDetailSection.intro && (
              <p className="mt-5 text-sm leading-7 text-[var(--color-ink-soft)] sm:text-base">
                {benefitsDetailSection.intro}
              </p>
            )}
          </div>
          <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div className="grid gap-4 sm:gap-5">
              {benefitsDetailSection.items.map((item, index) => (
                <BenefitItem key={item.title} item={item} index={index} />
              ))}
            </div>
            <div className="tox-benefits-image relative flex items-center">
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
                  src={benefitsDetailSection.imageSrc}
                  alt={benefitsDetailSection.imageAlt}
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
                    {benefitsDetailSection.imageLabel ?? uiText.specialPages.toxinaImageLabel}
                  </span>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </Container>
      <style>{`
        @keyframes toxBenefitsHeaderIn {
          from { opacity: 0; transform: translateY(-14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes toxBenefitsImageIn {
          from { opacity: 0; transform: translateX(18px) scale(0.98); }
          to   { opacity: 1; transform: translateX(0) scale(1); }
        }
        .tox-benefits-header { animation: toxBenefitsHeaderIn  0.6s  cubic-bezier(0.22,1,0.36,1) both; }
        .tox-benefits-image  { animation: toxBenefitsImageIn   0.65s cubic-bezier(0.22,1,0.36,1) 0.18s both; }
      `}</style>
    </section>
  );
}
