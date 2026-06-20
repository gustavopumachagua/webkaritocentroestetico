import Container from "@/components/ui/Container";

const toneClasses = {
  white: "bg-[linear-gradient(180deg,#091019_0%,#0f1721_100%)]",
  ivory:
    "bg-[linear-gradient(180deg,#0a0f15_0%,#111a24_100%)]",
  warm: "bg-[linear-gradient(180deg,#0b0e13_0%,#17110e_46%,#0e151d_100%)]",
  soft: "bg-[linear-gradient(180deg,#091019_0%,#121d28_100%)]",
};

const accentByTone = {
  white: (
    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(207,155,114,0.08)_0%,transparent_34%,rgba(99,125,156,0.06)_100%)]" />
  ),
  ivory: (
    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(207,155,114,0.07)_0%,transparent_38%,rgba(155,102,71,0.06)_100%)]" />
  ),
  warm: (
    <>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(207,155,114,0.1)_0%,transparent_42%,rgba(222,195,113,0.05)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(180deg,transparent,rgba(10,15,23,0.62))]" />
    </>
  ),
  soft: (
    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(140deg,rgba(99,125,156,0.07)_0%,transparent_42%,rgba(207,155,114,0.07)_100%)]" />
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
      className={`relative scroll-mt-28 overflow-hidden border-y border-white/6 py-20 sm:scroll-mt-32 sm:py-24 lg:scroll-mt-36 lg:py-28 ${toneClasses[tone] ?? toneClasses.ivory} ${className}`.trim()}
    >
      {accentByTone[tone] ?? accentByTone.ivory}
      <Container className={`relative z-10 ${containerClassName}`.trim()}>{children}</Container>
    </section>
  );
}
