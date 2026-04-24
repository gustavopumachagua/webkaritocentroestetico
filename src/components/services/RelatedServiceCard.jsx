export default function RelatedServiceCard({ title, image, href = "#" }) {
  return (
    <a
      href={href}
      className="related-card group relative block overflow-hidden rounded-[1.75rem] border border-white/8"
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          className="aspect-[6/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08] sm:aspect-[3/4]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

        <div
          aria-hidden
          className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full"
        />
      </div>

      <div className="absolute inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4">
        <div
          className="flex items-center justify-between gap-2 rounded-2xl border border-white/10 bg-[rgba(8,11,16,0.78)] px-4 py-3 backdrop-blur-xl sm:px-5 sm:py-3.5 transition-all duration-300 group-hover:border-[var(--color-primary)]/30 group-hover:shadow-[0_8px_28px_rgba(160,94,76,0.38)]"
          style={{
            boxShadow: "0 12px 24px rgba(0,0,0,0.22)",
          }}
        >
          <h3 className="font-[var(--font-display)] text-[1.12rem] font-medium leading-tight text-[var(--color-ink)] sm:text-[1.22rem]">
            {title}
          </h3>
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/6 transition-all duration-300 group-hover:bg-[var(--color-primary)] group-hover:text-[#140d0a] group-hover:translate-x-0.5">
            <svg
              viewBox="0 0 12 12"
              className="h-3 w-3 fill-none stroke-current stroke-[1.8] text-[var(--color-accent)] group-hover:text-current"
              aria-hidden
            >
              <path
                d="M2 6h8M6 2l4 4-4 4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-white/6 transition-all duration-300 group-hover:ring-[rgba(160,94,76,0.38)]"
      />

      <style>{`
        .related-card {
          box-shadow: 0 12px 28px rgba(0,0,0,0.22), 0 22px 60px rgba(0,0,0,0.14);
          transition: box-shadow 0.35s ease, transform 0.35s ease;
        }
        .related-card:hover {
          box-shadow: 0 18px 36px rgba(0,0,0,0.28), 0 30px 70px rgba(0,0,0,0.2);
          transform: translateY(-4px);
        }
      `}</style>
    </a>
  );
}
