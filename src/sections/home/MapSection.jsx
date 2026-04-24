import PillList from "@/components/ui/PillList";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionShell from "@/components/ui/SectionShell";
import { locationSection } from "@/data/site";

function CompassRose({ className = "" }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="32"
        cy="32"
        r="30"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="3 4"
      />
      <circle
        cx="32"
        cy="32"
        r="20"
        stroke="currentColor"
        strokeWidth="0.75"
        opacity="0.4"
      />
      <circle cx="32" cy="32" r="3" fill="currentColor" opacity="0.6" />
      {[0, 90, 180, 270].map((deg) => (
        <line
          key={deg}
          x1="32"
          y1="2"
          x2="32"
          y2="10"
          stroke="currentColor"
          strokeWidth="1.5"
          transform={`rotate(${deg} 32 32)`}
        />
      ))}
      {[45, 135, 225, 315].map((deg) => (
        <line
          key={deg}
          x1="32"
          y1="4"
          x2="32"
          y2="9"
          stroke="currentColor"
          strokeWidth="0.75"
          opacity="0.5"
          transform={`rotate(${deg} 32 32)`}
        />
      ))}
      <text
        x="32"
        y="20"
        textAnchor="middle"
        fontSize="7"
        fill="currentColor"
        fontWeight="700"
        opacity="0.7"
      >
        N
      </text>
    </svg>
  );
}
function PinPulse() {
  return (
    <span className="relative flex h-3 w-3">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-primary)] opacity-50" />
      <span className="relative inline-flex h-3 w-3 rounded-full bg-[var(--color-primary)]" />
    </span>
  );
}
export default function MapSection() {
  return (
    <SectionShell id="ubicacion" tone="soft">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(160,94,76,0.14) 0%, transparent 65%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-start justify-between gap-6">
          <div className="flex-1">
            <SectionHeading
              eyebrow={locationSection.eyebrow}
              title={locationSection.title}
              description={locationSection.description}
              centered
              tone="warm"
              className="mx-auto"
              titleClassName="max-w-1xl"
              descriptionClassName="max-w-1xl mx-auto mt-4"
            />
          </div>
          <div className="absolute right-0 top-0 hidden opacity-30 lg:block">
            <CompassRose className="h-16 w-16 text-[var(--color-primary)]" />
          </div>
        </div>
        <PillList
          items={locationSection.highlights}
          centered
          className="mt-8"
        />
        <div className="mt-12">
          <div
            className="relative rounded-[2.5rem] p-[3px]"
            style={{
              background:
                "linear-gradient(135deg, rgba(207,155,114,0.22) 0%, rgba(207,155,114,0.04) 50%, rgba(99,125,156,0.16) 100%)",
              boxShadow: "0 32px 80px rgba(0,0,0,0.26)",
            }}
          >
            <div className="overflow-hidden rounded-[2.3rem] bg-[#091019] p-2 sm:p-3">
              <div className="group relative overflow-hidden rounded-[1.9rem]">
                <div className="transition-transform duration-700 ease-out group-hover:scale-[1.015]">
                  <iframe
                    title={locationSection.iframeTitle}
                    src={locationSection.embedUrl}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-[22rem] w-full border-0 sm:h-[28rem] md:h-[36rem] lg:h-[46rem]"
                  />
                </div>
                <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#091019]/70 to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/25 via-black/5 to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black/08 to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black/08 to-transparent" />
                <div className="absolute left-5 top-5 z-20 hidden lg:block"></div>
                <div className="absolute right-5 top-5 z-20 hidden sm:flex items-center gap-2 rounded-full border border-white/12 bg-[rgba(8,11,16,0.75)] px-3.5 py-2 shadow-lg backdrop-blur-md">
                  <PinPulse />
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[var(--color-accent)]">
                    {locationSection.liveLabel}
                  </span>
                </div>
                <div className="absolute bottom-5 right-5 z-20 hidden items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-2 backdrop-blur-md md:flex">
                  <svg
                    viewBox="0 0 16 16"
                    className="h-3.5 w-3.5 fill-white/80"
                    aria-hidden
                  >
                    <path d="M8 0C5.243 0 3 2.243 3 5c0 3.89 5 11 5 11s5-7.11 5-11c0-2.757-2.243-5-5-5zm0 7.5A2.5 2.5 0 1 1 8 2.5 2.5 2.5 0 0 1 8 7.5z" />
                  </svg>
                  <span className="text-xs font-semibold text-white/90">
                    {locationSection.area}
                  </span>
                </div>
                <span
                  aria-hidden
                  className="pointer-events-none absolute left-4 top-4 h-6 w-6 border-l-2 border-t-2 border-white/40 rounded-tl-lg"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute bottom-4 right-4 h-6 w-6 border-b-2 border-r-2 border-white/40 rounded-br-lg"
                />
              </div>
            </div>
          </div>
        </div>
        {locationSection.note ? (
          <p className="mt-5 text-center text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
            {locationSection.note}
          </p>
        ) : null}
      </div>
      <style>{`
        @keyframes mapCardIn {
          from { opacity: 0; transform: translateY(-8px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)   scale(1); }
        }
        .map-card-entrance {
          animation: mapCardIn 0.55s cubic-bezier(0.22, 1, 0.36, 1) 0.2s both;
        }
      `}</style>
    </SectionShell>
  );
}
