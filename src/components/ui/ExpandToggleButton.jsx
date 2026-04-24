import { uiText } from "@/data/uiText";

export default function ExpandToggleButton({
  expanded,
  onClick,
  collapsedLabel = uiText.expandButton.more,
  expandedLabel = uiText.expandButton.less,
  className = "",
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/4 px-7 py-3.5 text-sm font-semibold text-[var(--color-accent)] shadow-[0_2px_12px_rgba(0,0,0,0.16)] transition-all duration-300 hover:bg-[var(--color-primary)] hover:text-[#140d0a] hover:shadow-[0_8px_24px_rgba(19,40,60,0.2)] sm:text-base ${className}`.trim()}
    >
      {expanded ? expandedLabel : collapsedLabel}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`transition-transform duration-300 ${
          expanded ? "rotate-90" : "group-hover:translate-x-1"
        }`}
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </button>
  );
}
