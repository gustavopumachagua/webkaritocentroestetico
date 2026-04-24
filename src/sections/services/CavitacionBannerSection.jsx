import Container from "@/components/ui/Container";
import { cavitacionPage } from "@/data/site";

export default function CavitacionBannerSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#081019_0%,#0d141d_100%)] pb-16 pt-28 sm:pb-20 sm:pt-36 lg:pb-24 lg:pt-40">
      <h1 className="sr-only">{cavitacionPage.title}</h1>
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute -left-32 top-6 h-[420px] w-[420px] rounded-full opacity-65"
          style={{
            background:
              "radial-gradient(circle, rgba(207,155,114,0.22) 0%, transparent 68%)",
          }}
        />
        <div
          className="absolute -right-32 bottom-0 h-[380px] w-[380px] rounded-full opacity-45"
          style={{
            background:
              "radial-gradient(circle, rgba(99,125,156,0.16) 0%, transparent 68%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #a05e4c 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>
      <Container className="relative z-10 max-w-[104rem]">
        <div
          className="cav-frame relative rounded-[2rem] p-[3px]"
          style={{
            background:
                "linear-gradient(135deg, rgba(207,155,114,0.28) 0%, rgba(207,155,114,0.04) 50%, rgba(99,125,156,0.18) 100%)",
            boxShadow: "0 30px 80px rgba(0,0,0,0.32)",
          }}
        >
          <div className="overflow-hidden rounded-[1.8rem] bg-[#091019] p-1.5">
            <div className="group relative overflow-hidden rounded-[1.5rem]">
              <img
                src={cavitacionPage.bannerSrc}
                alt={cavitacionPage.bannerAlt}
                className="w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                decoding="async"
                loading="eager"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/06 to-transparent" />
              <div
                aria-hidden
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute left-5 top-5 h-8 w-8 border-l-2 border-t-2 border-white/35 rounded-tl-xl"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute right-5 top-5 h-8 w-8 border-r-2 border-t-2 border-white/35 rounded-tr-xl"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute bottom-5 left-5 h-8 w-8 border-b-2 border-l-2 border-white/35 rounded-bl-xl"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute bottom-5 right-5 h-8 w-8 border-b-2 border-r-2 border-white/35 rounded-br-xl"
              />
              <div className="cav-chip absolute bottom-5 left-5 flex items-center gap-3 rounded-2xl border border-white/12 bg-[rgba(8,11,16,0.78)] px-5 py-3 backdrop-blur-md">
                <span className="h-2 w-2 shrink-0 rounded-full bg-[rgba(245,201,169,0.9)]" />
                <span className="text-sm font-bold tracking-wide text-[var(--color-accent)]">
                  {cavitacionPage.bannerLabel ?? cavitacionPage.title}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <style>{`
        @keyframes cavEyebrowIn {
          from { opacity: 0; transform: translateX(-12px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes cavFrameIn {
          from { opacity: 0; transform: translateY(20px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes cavChipIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes cavMetaIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .cav-eyebrow { animation: cavEyebrowIn 0.5s  cubic-bezier(0.22,1,0.36,1) both; }
        .cav-frame   { animation: cavFrameIn   0.7s  cubic-bezier(0.22,1,0.36,1) 0.1s both; }
        .cav-chip    { animation: cavChipIn    0.5s  cubic-bezier(0.22,1,0.36,1) 0.55s both; }
        .cav-badge   { animation: cavChipIn    0.5s  cubic-bezier(0.22,1,0.36,1) 0.65s both; }
        .cav-meta    { animation: cavMetaIn    0.6s  ease 0.8s both; }
      `}</style>
    </section>
  );
}
