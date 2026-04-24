import { useRef, useEffect, useState } from "react";

export default function FaqItem({ item, index, isOpen, onToggle }) {
  const answerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (answerRef.current) {
      setHeight(answerRef.current.scrollHeight);
    }
  }, [item.answer]);

  return (
    <article
      className={`faq-item relative overflow-hidden rounded-2xl transition-all duration-500 ${
        isOpen ? "faq-item--open" : ""
      }`}
      style={{ "--item-index": index }}
    >
      <span
        className={`absolute left-0 top-0 h-full w-[3px] rounded-full transition-all duration-500 ${
          isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
        }`}
        style={{ background: "var(--color-primary)", transformOrigin: "top" }}
        aria-hidden
      />

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="group/btn flex w-full items-center gap-5 px-6 py-5 text-left sm:px-7 sm:py-6"
      >
        <span
          className={`flex-1 text-base font-semibold leading-snug transition-colors duration-300 sm:text-lg lg:text-xl ${
            isOpen
              ? "text-[var(--color-ink)]"
              : "text-[var(--color-ink-soft)] group-hover/btn:text-[var(--color-ink)]"
          }`}
        >
          {item.question}
        </span>

        <span
          className={`faq-icon relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-500 ${
            isOpen
              ? "bg-[var(--color-primary)] shadow-[0_4px_16px_rgba(160,94,76,0.35)]"
              : "bg-white/6 group-hover/btn:bg-white/10"
          }`}
        >
          <span
            className={`absolute h-[1.5px] w-3.5 rounded-full transition-all duration-500 ${
              isOpen ? "bg-white" : "bg-[var(--color-primary)]"
            }`}
          />
          <span
            className={`absolute h-3.5 w-[1.5px] rounded-full transition-all duration-500 ${
              isOpen
                ? "scale-y-0 bg-white opacity-0"
                : "bg-[var(--color-primary)]"
            }`}
          />
        </span>
      </button>
      <div
        style={{
          maxHeight: isOpen ? `${height}px` : "0px",
          transition: "max-height 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
          overflow: "hidden",
        }}
      >
        <div ref={answerRef}>
          <div
            className={`px-6 pb-6 pl-[4.5rem] text-sm leading-relaxed text-[var(--color-muted)] transition-all duration-500 sm:px-7 sm:text-base ${
              isOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
            }`}
            style={{ transitionDelay: isOpen ? "0.12s" : "0s" }}
          >
            {item.answer}
          </div>
        </div>
      </div>

      <style>{`
        .faq-item {
          background: linear-gradient(180deg, rgba(18, 26, 36, 0.92), rgba(11, 16, 23, 0.96));
          border: 1px solid rgba(242, 231, 219, 0.08);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.2);
          transition: border-color 0.3s, box-shadow 0.3s, background 0.3s;
        }
        .faq-item:hover {
          border-color: rgba(207, 155, 114, 0.22);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.28);
        }
        .faq-item--open {
          border-color: rgba(207, 155, 114, 0.3);
          box-shadow: 0 18px 44px rgba(0, 0, 0, 0.32);
          background: linear-gradient(
            to bottom right,
            rgba(22, 30, 42, 0.98) 68%,
            rgba(207, 155, 114, 0.08)
          );
        }
      `}</style>
    </article>
  );
}
