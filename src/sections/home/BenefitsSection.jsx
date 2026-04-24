import { FaCheck } from "react-icons/fa";
import { imageAssets } from "@/assets/images";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionShell from "@/components/ui/SectionShell";
import { whyChooseUs } from "@/data/site";
import { uiText } from "@/data/uiText";

function ChecklistItem({ item }) {
  return (
    <div className="flex items-start gap-3 border-b border-white/8 py-3 first:border-t">
      <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-[1.5px] border-[var(--color-primary)]">
        <FaCheck className="text-[10px] text-[var(--color-primary)]" />
      </div>
      <p className="text-base leading-relaxed text-[var(--color-ink-soft)]">{item}</p>
    </div>
  );
}

export default function BenefitsSection() {
  const stats = uiText.benefits.stats;

  return (
    <SectionShell id="beneficios" tone="warm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={whyChooseUs.eyebrow}
          title={whyChooseUs.title}
          description={whyChooseUs.description}
          tone="warm"
          className="mx-auto text-center"
          titleClassName="max-w-4xl mx-auto"
          descriptionClassName="max-w-3xl mx-auto"
        />
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 lg:order-1 max-w-xl">
            <div className="space-y-4">
              <p className="text-[1.02rem] font-medium text-[var(--color-accent)]">
                {whyChooseUs.lead}
              </p>
              <p className="text-base leading-8 text-[var(--color-muted)]">
                {whyChooseUs.description1}
              </p>
            </div>
            {whyChooseUs.badges.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-2">
                {whyChooseUs.badges.map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center rounded-full border border-white/10 bg-white/4 px-3.5 py-1 text-sm font-medium tracking-wide text-[var(--color-accent)]"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            )}
            <div className="mt-8 space-y-1">
              {whyChooseUs.checklist.map((item, i) => (
                <ChecklistItem key={i} item={item} />
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="surface-panel overflow-hidden rounded-[1.75rem]">
              <img
                src={imageAssets.about.quienesSomos}
                alt={uiText.benefits.imageAlt}
                className="aspect-[4/5] w-full object-cover transition duration-500 hover:scale-[1.02]"
                loading="lazy"
                decoding="async"
              />
              <div className="grid grid-cols-3 divide-x divide-white/8 border-t border-white/8 bg-white/[0.03]">
                {stats.map(({ value, label }) => (
                  <div key={label} className="py-4 text-center">
                    <p className="text-xl font-semibold text-[var(--color-accent)]">
                      {value}
                    </p>
                    <p className="mt-1 text-sm tracking-wide text-[var(--color-muted)]">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
