import { useState, useRef, useEffect } from "react";
import Container from "@/components/ui/Container";
import { toxinaBotulinicaPage } from "@/data/site";

function FaqRow({ item, index, isOpen, onToggle }) {
  const answerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (answerRef.current) setHeight(answerRef.current.scrollHeight);
  }, [item.answer]);

  return (
    <article
      className={`tox-faq-item group relative overflow-hidden rounded-2xl transition-all duration-500 ${
        isOpen ? "tox-faq-item--open" : ""
      }`}
      style={{ "--item-index": index }}
    >
      <span
        className={`absolute left-0 top-0 h-full w-[3px] rounded-full transition-all duration-500 ${
          isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
        }`}
        style={{
          background: "var(--color-primary)",
          transformOrigin: "top",
        }}
        aria-hidden
      />
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={onToggle}
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
          className={`relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-500 ${
            isOpen
              ? "shadow-[0_4px_16px_rgba(160,94,76,0.35)]"
              : "bg-white/6 group-hover/btn:bg-white/10"
          }`}
          style={
            isOpen
              ? {
                  background:
                    "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark, #7a3520) 100%)",
                }
              : {}
          }
        >
          <span
            className={`absolute h-[1.5px] w-3.5 rounded-full transition-all duration-500 ${
              isOpen ? "bg-white" : "bg-[var(--color-primary)]"
            }`}
          />
          <span
            className={`absolute h-3.5 w-[1.5px] rounded-full transition-all duration-500 ${
              isOpen
                ? "scale-y-0 opacity-0 bg-white"
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
          <p
            className={`px-6 pb-6 pl-[4.5rem] text-sm leading-relaxed text-[var(--color-muted)] transition-all duration-500 sm:px-7 sm:text-base ${
              isOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
            }`}
            style={{ transitionDelay: isOpen ? "0.12s" : "0s" }}
          >
            {item.answer}
          </p>
        </div>
      </div>
      <style>{`
        .tox-faq-item {
          background: linear-gradient(180deg, rgba(18, 26, 36, 0.92), rgba(11, 16, 23, 0.96));
          border: 1px solid rgba(242, 231, 219, 0.08);
          box-shadow: 0 10px 24px rgba(0,0,0,0.2);
          transition: border-color 0.3s, box-shadow 0.3s;
        }
        .tox-faq-item:hover {
          border-color: rgba(207,155,114,0.22);
          box-shadow: 0 16px 40px rgba(0,0,0,0.28);
        }
        .tox-faq-item--open {
          border-color: rgba(207,155,114,0.3);
          box-shadow: 0 18px 44px rgba(0,0,0,0.32);
          background: linear-gradient(to bottom right, rgba(22, 30, 42, 0.98) 68%, rgba(207,155,114,0.08));
        }
      `}</style>
    </article>
  );
}
export default function ToxinaBotulinicaFaqSection() {
  const { faqSection } = toxinaBotulinicaPage;
  const [openIndex, setOpenIndex] = useState(0);
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
        <div className="mx-auto max-w-4xl">
          <div className="tox-faq-header text-center">
            <h2 className="text-3xl font-medium tracking-tight text-[var(--color-ink)] sm:text-4xl lg:text-5xl">
              {faqSection.title}
            </h2>
            <div className="mx-auto mt-4 flex items-center justify-center gap-2">
              <div className="h-[3px] w-10 rounded-full bg-[var(--color-primary)]" />
              <div className="h-[3px] w-4 rounded-full bg-[rgba(160,94,76,0.3)]" />
            </div>
          </div>
          <div className="mt-5 flex flex-col gap-3">
            {faqSection.items.map((item, index) => (
              <div
                key={item.question}
                className="tox-faq-stagger"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <FaqRow
                  item={item}
                  index={index}
                  isOpen={openIndex === index}
                  onToggle={() =>
                    setOpenIndex((cur) => (cur === index ? null : index))
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
      <style>{`
        @keyframes toxFaqHeaderIn {
          from { opacity: 0; transform: translateY(-12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes toxFaqMetaIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes toxFaqItemIn {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .tox-faq-header  { animation: toxFaqHeaderIn 0.6s cubic-bezier(0.22,1,0.36,1) both; }
        .tox-faq-meta    { animation: toxFaqMetaIn   0.5s ease 0.2s both; }
        .tox-faq-stagger { animation: toxFaqItemIn   0.45s cubic-bezier(0.22,1,0.36,1) both; }
      `}</style>
    </section>
  );
}
