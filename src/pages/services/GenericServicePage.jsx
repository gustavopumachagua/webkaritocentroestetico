import { useState } from "react";
import FaqItem from "@/components/home/FaqItem";
import SiteLayout from "@/components/layout/SiteLayout";
import PillList from "@/components/ui/PillList";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionShell from "@/components/ui/SectionShell";
import { getGenericServiceContent } from "@/data/genericServiceContent";
import {
  getCategoryById,
  getRelatedServicesForService,
} from "@/data/serviceCatalog";
import { footer } from "@/data/site";
import { uiText } from "@/data/uiText";
import RelatedServicesSection from "@/sections/services/RelatedServicesSection";

function BulletList({
  items,
  className = "",
  itemClassName = "",
  bulletClassName = "",
  textClassName = "",
}) {
  return (
    <div className={`space-y-3 ${className}`.trim()}>
      {items.map((item) => (
        <div
          key={item}
          className={`flex items-start gap-3 rounded-2xl border border-white/8 bg-white/4 px-4 py-3 ${itemClassName}`.trim()}
        >
          <span
            className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--color-accent)] ${bulletClassName}`.trim()}
          />
          <p
            className={`text-sm leading-relaxed text-[var(--color-ink-soft)] sm:text-base ${textClassName}`.trim()}
          >
            {item}
          </p>
        </div>
      ))}
    </div>
  );
}

function BenefitCard({ item, index }) {
  return (
    <article
      className="group relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(18,26,36,0.96)_0%,rgba(9,15,22,0.96)_100%)] p-6 shadow-[0_18px_46px_rgba(0,0,0,0.24)] transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(207,155,114,0.2)] hover:shadow-[0_24px_56px_rgba(0,0,0,0.28)] sm:p-7"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at top left, rgba(207,155,114,0.12) 0%, transparent 62%)",
        }}
      />
      <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/4 text-sm font-semibold text-[var(--color-accent)]">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="relative mt-5 text-2xl font-medium leading-[1.02] text-[var(--color-ink)]">
        {item.title}
      </h3>
      <p className="relative mt-3 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
        {item.description}
      </p>
    </article>
  );
}

function ProtocolStep({ step }) {
  return (
    <div className="relative flex gap-4 rounded-[1.7rem] border border-white/10 bg-white/4 px-5 py-5 sm:px-6">
      <span className="mt-2.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
      <div className="flex-1">
        <p className="text-sm leading-7 text-[var(--color-ink-soft)] sm:text-base">
          {step}
        </p>
      </div>
    </div>
  );
}

export default function GenericServicePage({ service }) {
  const category = getCategoryById(service.categoryId);
  const relatedServices = getRelatedServicesForService(service.id, 4);
  const content = getGenericServiceContent(service, category);
  const whatsappHref = `https://wa.me/51${footer.whatsapp.replace(/[^\d]/g, "")}`;
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#070b10] via-[#0d141d] to-[#131a24] pt-32 sm:pt-40">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div
            className="absolute -left-24 top-10 h-[320px] w-[320px] rounded-full opacity-55"
            style={{
              background:
                "radial-gradient(circle, rgba(245,201,169,0.24) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute -right-24 bottom-0 h-[380px] w-[380px] rounded-full opacity-40"
            style={{
              background:
                "radial-gradient(circle, rgba(160,94,76,0.14) 0%, transparent 72%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(207,155,114,0.7) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />
        </div>

        <div className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8 lg:pb-28">
          <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <span className="inline-flex rounded-full border border-white/10 bg-white/4 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)] shadow-[0_8px_30px_rgba(0,0,0,0.16)]">
                {category?.title ?? uiText.genericService.defaultCategory}
              </span>
              <h1 className="mt-6 max-w-3xl text-[2.9rem] font-medium leading-[0.92] text-[var(--color-ink)] sm:text-[4rem] lg:text-[5rem]">
                {service.title}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--color-ink-soft)] sm:text-lg">
                {service.description}
              </p>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                {content.heroNote}
              </p>
              <PillList items={content.tags} className="mt-8" />
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-[#140d0a] shadow-[0_14px_34px_rgba(160,94,76,0.28)] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  {uiText.genericService.bookEvaluation}
                </a>
                {category?.href ? (
                  <a
                    href={category.href}
                    className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/4 px-6 py-3 text-sm font-semibold text-[var(--color-accent)] transition-colors duration-300 hover:bg-[var(--color-primary)] hover:text-[#140d0a]"
                  >
                    {uiText.genericService.viewMoreServices}
                  </a>
                ) : null}
              </div>
            </div>

            <div className="relative">
              <div
                aria-hidden
                className="absolute inset-x-8 bottom-4 h-16 rounded-full bg-[rgba(160,94,76,0.2)] blur-2xl"
              />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/8 bg-[#091019] p-3 shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
                <img
                  src={service.imageSrc}
                  alt={service.imageAlt}
                  className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
                />
                <div className="pointer-events-none absolute inset-3 rounded-[1.5rem] bg-gradient-to-t from-[#06101a]/80 via-transparent to-transparent" />
                <div className="absolute inset-x-7 bottom-7 rounded-[1.6rem] border border-white/10 bg-[#0d141dcc] p-5 backdrop-blur-md">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-[var(--color-gold)]">
                    {uiText.genericService.idealIfSeeking}
                  </p>
                  <p className="mt-3 text-base leading-7 text-white/88">
                    {content.idealItems[0]}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {content.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/4 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionShell tone="soft">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <div className="surface-panel rounded-[2rem] p-8 sm:p-10 lg:p-12">
            <SectionHeading
              eyebrow={uiText.genericService.aboutTreatment}
              title={content.overviewTitle}
              tone="warm"
            />
            <div className="mt-8 space-y-5">
              {content.overviewParagraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-8 text-[var(--color-ink-soft)] sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="surface-panel-soft rounded-[2rem] p-8 text-white sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                {uiText.genericService.karitoApproach}
              </p>
              <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">
                {content.focusTitle}
              </h2>
              <p className="mt-5 text-sm leading-7 text-white/72 sm:text-base">
                {content.focusParagraph}
              </p>
              <BulletList
                items={content.focusItems}
                className="mt-8"
                itemClassName="bg-white/5"
                textClassName="text-white/82"
              />
            </div>

            <div className="surface-panel rounded-[2rem] p-8 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">
                {content.idealTitle}
              </p>
              <BulletList
                items={content.idealItems}
                className="mt-6"
                bulletClassName="bg-[var(--color-gold)]"
              />
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell tone="ivory">
        <SectionHeading
          eyebrow={uiText.genericService.benefitsEyebrow}
          title={content.benefitsTitle}
          description={uiText.genericService.benefitsDescription}
          centered
          tone="warm"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {content.benefits.map((benefit, index) => (
            <BenefitCard key={benefit.title} item={benefit} index={index} />
          ))}
        </div>
      </SectionShell>

      <SectionShell tone="warm">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div className="surface-panel rounded-[2rem] p-8 sm:p-10 lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">
              {uiText.genericService.stepByStep}
            </p>
            <h2 className="mt-4 text-[2.2rem] font-medium tracking-tight text-[var(--color-ink)] sm:text-[2.8rem]">
              {content.protocolTitle}
            </h2>
            <div className="mt-8 space-y-4">
              {content.protocolSteps.map((step) => (
                <ProtocolStep key={step} step={step} />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="surface-panel-soft rounded-[2rem] p-8 text-white sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                {uiText.genericService.frequencyEyebrow}
              </p>
              <h2 className="mt-4 text-[2.1rem] font-medium tracking-tight sm:text-[2.6rem]">
                {content.sessionTitle}
              </h2>
              <div className="mt-6 space-y-4">
                {content.sessionParagraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-sm leading-7 text-white/76 sm:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="surface-panel rounded-[2rem] p-8 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">
                {uiText.genericService.nextStep}
              </p>
              <h2 className="mt-4 text-[2rem] font-medium tracking-tight text-[var(--color-ink)] sm:text-[2.4rem]">
                {uiText.genericService.personalizedEvaluationTitle}
              </h2>
              <p className="mt-5 text-base leading-8 text-[var(--color-ink-soft)]">
                {uiText.genericService.personalizedEvaluationDescription}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-[#140d0a] shadow-[0_14px_34px_rgba(160,94,76,0.28)] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  {uiText.genericService.reserveWhatsapp}
                </a>
                {category?.href ? (
                  <a
                    href={category.href}
                    className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/4 px-6 py-3 text-sm font-semibold text-[var(--color-accent)] transition-colors duration-300 hover:bg-[var(--color-primary)] hover:text-[#140d0a]"
                  >
                    {uiText.genericService.viewMoreServices}
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </SectionShell>

      {content.faq.length > 0 ? (
        <SectionShell tone="soft">
          <SectionHeading
            eyebrow={uiText.genericService.faqEyebrow}
            title={content.faqTitle}
            description={uiText.genericService.faqDescription}
            centered
            tone="deep"
          />
          <div className="mx-auto mt-12 max-w-4xl space-y-4">
            {content.faq.map((item, index) => (
              <FaqItem
                key={item.question}
                item={item}
                index={index}
                isOpen={openFaqIndex === index}
                onToggle={() =>
                  setOpenFaqIndex(openFaqIndex === index ? -1 : index)
                }
              />
            ))}
          </div>
        </SectionShell>
      ) : null}

      <RelatedServicesSection items={relatedServices} />
    </SiteLayout>
  );
}
