export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  tone = "default",
  className = "",
  eyebrowClassName = "",
  titleClassName = "",
  descriptionClassName = "",
}) {
  const alignment = centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl";
  const paletteByTone = {
    default: {
      eyebrow: "text-[var(--color-accent)]",
      title: "text-[var(--color-ink)]",
      description: "text-[var(--color-muted)]",
    },
    warm: {
      eyebrow: "text-[var(--color-gold)]",
      title: "text-[var(--color-ink)]",
      description: "text-[var(--color-ink-soft)]",
    },
    deep: {
      eyebrow: "text-[var(--color-accent)]",
      title: "text-white",
      description: "text-white/72",
    },
  };

  const palette = paletteByTone[tone] ?? paletteByTone.default;

  return (
    <div className={`${alignment} ${className}`.trim()}>
      {eyebrow ? (
        <p
          className={`text-[0.72rem] font-semibold uppercase tracking-[0.32em] sm:text-[0.82rem] ${palette.eyebrow} ${eyebrowClassName}`.trim()}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`mt-4 text-[2.45rem] font-medium leading-[0.92] sm:text-[3.15rem] lg:text-[4.35rem] ${palette.title} ${titleClassName}`.trim()}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 text-base leading-8 sm:text-[1.06rem] lg:text-[1.12rem] ${palette.description} ${descriptionClassName}`.trim()}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
