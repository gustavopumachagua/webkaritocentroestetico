import { useState, useRef } from "react";
import FaqItem from "@/components/home/FaqItem";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionShell from "@/components/ui/SectionShell";
import { contact, faqs, faqIntro } from "@/data/site";
import { uiText } from "@/data/uiText";

function StatBadge({ value, label }) {
  return (
    <div className="flex flex-col items-center rounded-xl border border-white/8 bg-white/4 px-4 py-3 text-center">
      <span className="text-xl font-bold text-[var(--color-accent)]">
        {value}
      </span>
      <span className="mt-0.5 text-[11px] leading-tight text-[var(--color-muted)]">
        {label}
      </span>
    </div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const listRef = useRef(null);

  return (
    <SectionShell id="preguntas" tone="ivory">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle at center, rgba(160,94,76,0.12) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -left-24 bottom-0 h-[380px] w-[380px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle at center, rgba(160,94,76,0.1) 0%, transparent 70%)",
          }}
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <div
              className="surface-panel relative overflow-hidden rounded-[2rem] p-6 sm:p-7 lg:p-9"
              style={{
                boxShadow:
                  "0 18px 52px rgba(0,0,0,0.24), 0 24px 72px rgba(0,0,0,0.16)",
              }}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full border-[1.5px] border-[rgba(160,94,76,0.08)]"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute -right-4 -top-4 h-20 w-20 rounded-full border-[1.5px] border-[rgba(160,94,76,0.06)]"
              />
              <SectionHeading
                eyebrow={faqIntro.eyebrow}
                title={faqIntro.title}
                description={faqIntro.description}
                tone="warm"
                titleClassName="max-w-md"
                descriptionClassName="mt-3 text-sm sm:text-base text-[var(--color-ink-soft)] leading-relaxed"
              />
              <div className="mt-8 border-t border-white/8 pt-7">
                <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-[var(--color-gold)]">
                  {uiText.faq.missingAnswerTitle}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                  {uiText.faq.missingAnswerDescription}
                </p>
                <a
                  href={contact.primaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/wa mt-5 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/4 px-4 py-2.5 text-sm font-semibold text-[var(--color-accent)] transition-all duration-300 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[#140d0a] hover:shadow-[0_4px_14px_rgba(160,94,76,0.15)]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-current transition-transform duration-300 group-hover/wa:scale-110"
                    aria-hidden
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  {uiText.faq.whatsappCta}
                </a>
              </div>
            </div>
          </div>
          <div ref={listRef} className="flex flex-col gap-3 sm:gap-4">
            {faqs.map((item, index) => (
              <div
                key={item.question}
                style={{
                  animationDelay: `${index * 60}ms`,
                }}
                className="faq-stagger-in"
              >
                <FaqItem
                  item={item}
                  index={index}
                  isOpen={openIndex === index}
                  onToggle={() =>
                    setOpenIndex((current) =>
                      current === index ? null : index,
                    )
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes faqFadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .faq-stagger-in {
          animation: faqFadeUp 0.45s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
      `}</style>
    </SectionShell>
  );
}
