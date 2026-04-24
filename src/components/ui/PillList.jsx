export default function PillList({
  items,
  centered = false,
  className = "",
  itemClassName = "",
}) {
  return (
    <div
      className={`flex flex-wrap gap-3 ${centered ? "justify-center" : ""} ${className}`.trim()}
    >
      {items.map((item) => (
        <span
          key={item}
          className={`rounded-full border border-white/10 bg-white/4 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)] backdrop-blur-sm sm:text-[0.8rem] ${itemClassName}`.trim()}
        >
          {item}
        </span>
      ))}
    </div>
  );
}
