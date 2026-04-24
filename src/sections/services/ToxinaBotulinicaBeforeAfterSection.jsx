import Container from "@/components/ui/Container";
import { toxinaBotulinicaPage } from "@/data/site";
import { uiText } from "@/data/uiText";

function BeforeAfterCard({ item, index }) {
  return (
    <figure
      className="ba-card group relative overflow-hidden rounded-[1.75rem]"
      style={{ animationDelay: `${0.1 + index * 0.12}s` }}
    >
      <img
        src={item.imageSrc}
        alt={item.imageAlt}
        className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        loading="lazy"
        decoding="async"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/04 to-transparent" />
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
        className="pointer-events-none absolute right-4 top-4 h-7 w-7 border-r-2 border-t-2 border-white/30 rounded-tr-xl"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-4 right-4 h-7 w-7 border-b-2 border-r-2 border-white/30 rounded-br-xl"
      />
      <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3.5 py-1.5 backdrop-blur-md">
        <span className="h-1.5 w-1.5 rounded-full bg-[rgba(245,201,169,0.9)]" />
        <span className="text-[11px] font-bold uppercase tracking-widest text-white/85">
          {index % 2 === 0 ? uiText.specialPages.before : uiText.specialPages.after}
        </span>
      </div>
      {(item.label || item.caption) && (
        <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/15 bg-black/35 px-5 py-3.5 backdrop-blur-md">
          {item.label && (
            <p className="text-sm font-bold text-white/95 leading-snug">
              {item.label}
            </p>
          )}
          {item.caption && (
            <p className="mt-1 text-xs text-white/65 leading-relaxed">
              {item.caption}
            </p>
          )}
        </div>
      )}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-[rgba(160,94,76,0.14)] transition-all duration-300 group-hover:ring-[rgba(160,94,76,0.35)]"
      />
      <style>{`
        .ba-card {
          box-shadow: 0 1px 3px rgba(34,24,20,0.04), 0 10px 32px rgba(34,24,20,0.08);
          transition: box-shadow 0.35s ease, transform 0.35s ease;
          animation: baCardIn 0.6s cubic-bezier(0.22,1,0.36,1) both;
        }
        .ba-card:hover {
          box-shadow: 0 4px 8px rgba(34,24,20,0.05), 0 24px 60px rgba(34,24,20,0.13);
          transform: translateY(-4px);
        }
        @keyframes baCardIn {
          from { opacity: 0; transform: translateY(18px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0)    scale(1); }
        }
      `}</style>
    </figure>
  );
}
export default function ToxinaBotulinicaBeforeAfterSection() {
  const { beforeAfterSection } = toxinaBotulinicaPage;

  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-gradient-to-b from-[#081019] via-[#0d141d] to-[#081019] py-20 sm:py-28 lg:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute -left-24 top-10 h-[360px] w-[360px] rounded-full opacity-50"
          style={{
            background:
              "radial-gradient(circle, rgba(245,201,169,0.22) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -right-24 bottom-0 h-[340px] w-[340px] rounded-full opacity-35"
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
          <div className="ba-header mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-medium tracking-tight text-[var(--color-ink)] sm:text-4xl lg:text-5xl">
              {beforeAfterSection.title}
            </h2>
            <div className="mx-auto mt-4 flex items-center justify-center gap-2">
              <div className="h-[3px] w-10 rounded-full bg-[var(--color-primary)]" />
              <div className="h-[3px] w-4 rounded-full bg-[rgba(160,94,76,0.3)]" />
            </div>
            <p className="mt-5 text-sm leading-7 text-[var(--color-ink-soft)] sm:text-base">
              {beforeAfterSection.description ??
                uiText.specialPages.visibleResults}
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:gap-6 md:grid-cols-2">
            {beforeAfterSection.items.map((item, index) => (
              <BeforeAfterCard key={item.id} item={item} index={index} />
            ))}
          </div>
          {beforeAfterSection.disclaimer && (
            <p className="ba-disclaimer mt-8 text-center text-xs leading-relaxed text-[var(--color-muted)]">
              {beforeAfterSection.disclaimer}
            </p>
          )}
        </div>
      </Container>
      <style>{`
        @keyframes baHeaderIn {
          from { opacity: 0; transform: translateY(-14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes baMetaIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes baDisclaimerIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .ba-header      { animation: baHeaderIn      0.6s cubic-bezier(0.22,1,0.36,1) both; }
        .ba-meta        { animation: baMetaIn        0.5s ease 0.25s both; }
        .ba-disclaimer  { animation: baDisclaimerIn  0.5s ease 0.6s both; }
      `}</style>
    </section>
  );
}
