import Container from "@/components/ui/Container";

const toneClasses = {
  white: "bg-[linear-gradient(180deg,#081018_0%,#0d141d_100%)]",
  ivory:
    "bg-[linear-gradient(180deg,#090d13_0%,#101824_100%)]",
  warm: "bg-[linear-gradient(180deg,#0b0d12_0%,#16100d_48%,#0d131b_100%)]",
  soft: "bg-[linear-gradient(180deg,#091019_0%,#121c27_100%)]",
};

const accentByTone = {
  white: (
    <>
      <div className="pointer-events-none absolute left-[-8rem] top-10 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(207,155,114,0.2),transparent_68%)]" />
      <div className="pointer-events-none absolute right-[-8rem] bottom-6 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(99,125,156,0.12),transparent_68%)]" />
    </>
  ),
  ivory: (
    <>
      <div className="pointer-events-none absolute left-[-10rem] top-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(207,155,114,0.2),transparent_68%)]" />
      <div className="pointer-events-none absolute right-[-8rem] bottom-0 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(155,102,71,0.14),transparent_70%)]" />
    </>
  ),
  warm: (
    <>
      <div className="pointer-events-none absolute left-[-9rem] top-8 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(207,155,114,0.24),transparent_68%)]" />
      <div className="pointer-events-none absolute right-[-6rem] top-20 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(222,195,113,0.16),transparent_68%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(180deg,transparent,rgba(10,15,23,0.6))]" />
    </>
  ),
  soft: (
    <>
      <div className="pointer-events-none absolute left-[-7rem] bottom-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(99,125,156,0.12),transparent_70%)]" />
      <div className="pointer-events-none absolute right-[-8rem] top-10 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(207,155,114,0.18),transparent_68%)]" />
    </>
  ),
};

export default function SectionShell({
  id,
  tone = "ivory",
  className = "",
  containerClassName = "",
  children,
}) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-28 overflow-hidden border-y border-white/5 py-20 sm:scroll-mt-32 sm:py-24 lg:scroll-mt-36 lg:py-28 ${toneClasses[tone] ?? toneClasses.ivory} ${className}`.trim()}
    >
      {accentByTone[tone] ?? accentByTone.ivory}
      <Container className={`relative z-10 ${containerClassName}`.trim()}>{children}</Container>
    </section>
  );
}
