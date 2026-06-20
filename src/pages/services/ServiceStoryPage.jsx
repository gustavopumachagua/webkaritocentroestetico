import { useState } from "react";
import FaqItem from "@/components/home/FaqItem";
import SiteLayout from "@/components/layout/SiteLayout";
import OptimizedImage from "@/components/ui/OptimizedImage";
import PillList from "@/components/ui/PillList";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionShell from "@/components/ui/SectionShell";
import { getGenericServiceContent } from "@/data/genericServiceContent";
import {
  getCategoryById,
  getRelatedServicesForService,
  getServiceById,
} from "@/data/serviceCatalog";
import { footer } from "@/data/site";
import { uiText } from "@/data/uiText";
import RelatedServicesSection from "@/sections/services/RelatedServicesSection";

function ServiceBanner({ service, category, bannerSrc, bannerAlt, bannerLabel }) {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#081019_0%,#0d141d_100%)] pb-12 pt-24 sm:pb-16 sm:pt-28 lg:pb-20 lg:pt-32">
      <h1 className="sr-only">{service.title}</h1>
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute -left-32 top-6 h-[420px] w-[420px] rounded-full opacity-65"
          style={{
            background:
              "radial-gradient(circle, rgba(207,155,114,0.22) 0%, transparent 68%)",
          }}
        />
        <div
          className="absolute -right-32 bottom-0 h-[380px] w-[380px] rounded-full opacity-45"
          style={{
            background:
              "radial-gradient(circle, rgba(99,125,156,0.16) 0%, transparent 68%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #a05e4c 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          className="service-story-frame relative rounded-3xl p-[2px]"
          style={{
            background:
              "linear-gradient(135deg, rgba(207,155,114,0.28) 0%, rgba(207,155,114,0.04) 50%, rgba(99,125,156,0.18) 100%)",
            boxShadow: "0 24px 64px rgba(0,0,0,0.28)",
          }}
        >
          <div className="overflow-hidden rounded-[1.35rem] bg-[#091019] p-1">
            <div className="group relative overflow-hidden rounded-2xl">
              <OptimizedImage
                src={bannerSrc ?? service.imageSrc}
                alt={bannerAlt ?? service.imageAlt}
                wrapperClassName="h-[14rem] w-full sm:h-[18rem] lg:h-[22rem]"
                className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                fit="contain"
                loading="eager"
                fetchPriority="high"
                sizes="(min-width: 1024px) 72rem, 100vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/06 to-transparent" />
              <div
                aria-hidden
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute left-5 top-5 h-8 w-8 rounded-tl-xl border-l-2 border-t-2 border-white/35"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute right-5 top-5 h-8 w-8 rounded-tr-xl border-r-2 border-t-2 border-white/35"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute bottom-5 left-5 h-8 w-8 rounded-bl-xl border-b-2 border-l-2 border-white/35"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute bottom-5 right-5 h-8 w-8 rounded-br-xl border-b-2 border-r-2 border-white/35"
              />
              <div className="absolute bottom-5 left-5 right-5 flex flex-col gap-2 rounded-2xl border border-white/12 bg-[rgba(8,11,16,0.78)] px-5 py-3 backdrop-blur-md sm:right-auto">
                <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-white/60">
                  {category?.title ?? uiText.genericService.defaultCategory}
                </span>
                <span className="text-sm font-bold tracking-wide text-[var(--color-accent)] sm:text-base">
                  {bannerLabel ?? service.title}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes serviceStoryFrameIn {
          from { opacity: 0; transform: translateY(20px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .service-story-frame {
          animation: serviceStoryFrameIn 0.7s cubic-bezier(0.22,1,0.36,1) both;
        }
      `}</style>
    </section>
  );
}

function BulletList({ items, accent = false }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div
          key={item}
          className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/4 px-4 py-3"
        >
          <span
            className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${
              accent ? "bg-[var(--color-gold)]" : "bg-[var(--color-accent)]"
            }`}
          />
          <p className="text-sm leading-relaxed text-[var(--color-ink-soft)] sm:text-base">
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
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/4 text-sm font-semibold text-[var(--color-accent)]">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="mt-5 text-2xl font-medium leading-[1.02] text-[var(--color-ink)]">
        {item.title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
        {item.description}
      </p>
    </article>
  );
}

function ProcedureStep({ step, index }) {
  return (
    <div className="relative flex gap-4 rounded-[1.7rem] border border-white/10 bg-white/4 px-5 py-5 sm:px-6">
      <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-[var(--color-accent)]">
        {String(index + 1).padStart(2, "0")}
      </span>
      <p className="flex-1 text-sm leading-7 text-[var(--color-ink-soft)] sm:text-base">
        {step}
      </p>
    </div>
  );
}

function BeforeAfterColumn({ title, items, accent = false }) {
  return (
    <article className="surface-panel rounded-[2rem] p-8 sm:p-10">
      <p
        className={`text-sm font-semibold uppercase tracking-[0.22em] ${
          accent ? "text-[var(--color-gold)]" : "text-[var(--color-accent)]"
        }`}
      >
        {title}
      </p>
      <div className="mt-6">
        <BulletList items={items} accent={accent} />
      </div>
    </article>
  );
}

export default function ServiceStoryPage({
  serviceId,
  bannerSrc,
  bannerAlt,
  bannerLabel,
}) {
  const service = getServiceById(serviceId);
  const category = getCategoryById(service?.categoryId);
  const content = service ? getGenericServiceContent(service, category) : null;
  const relatedServices = service ? getRelatedServicesForService(service.id) : [];
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const whatsappHref = `https://wa.me/51${footer.whatsapp.replace(/[^\d]/g, "")}`;

  if (!service || !content) {
    return null;
  }

  return (
    <SiteLayout>
      <ServiceBanner
        service={service}
        category={category}
        bannerSrc={bannerSrc}
        bannerAlt={bannerAlt}
        bannerLabel={bannerLabel}
      />

      <SectionShell tone="soft">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
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
            <PillList items={content.tags} className="mt-8" />
          </div>

          <div className="surface-panel-soft rounded-[2rem] p-8 text-white sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
              {uiText.genericService.karitoApproach}
            </p>
            <h2 className="mt-4 text-3xl font-medium sm:text-4xl">
              {content.focusTitle}
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/72 sm:text-base">
              {content.focusParagraph}
            </p>
            <div className="mt-8">
              <BulletList items={content.focusItems} />
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
            <h2 className="mt-4 text-[2.2rem] font-medium text-[var(--color-ink)] sm:text-[2.8rem]">
              {content.protocolTitle}
            </h2>
            <div className="mt-8 space-y-4">
              {content.protocolSteps.map((step, index) => (
                <ProcedureStep key={step} step={step} index={index} />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="surface-panel rounded-[2rem] p-8 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">
                {content.usesTitle}
              </p>
              <div className="mt-6">
                <BulletList items={content.usesItems} accent />
              </div>
            </div>

            <div className="surface-panel-soft rounded-[2rem] p-8 text-white sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                {uiText.genericService.frequencyEyebrow}
              </p>
              <h2 className="mt-4 text-[2.1rem] font-medium sm:text-[2.6rem]">
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
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-[#140d0a] shadow-[0_14px_34px_rgba(160,94,76,0.28)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                {uiText.genericService.reserveWhatsapp}
              </a>
            </div>
          </div>
        </div>
      </SectionShell>

      {content.beforeAfter ? (
        <SectionShell tone="ivory">
          <SectionHeading
            eyebrow={uiText.genericService.beforeAfterEyebrow}
            title={content.beforeAfterTitle}
            description={uiText.genericService.beforeAfterDescription}
            centered
            tone="warm"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <BeforeAfterColumn
              title={content.beforeAfter.beforeTitle}
              items={content.beforeAfter.beforeItems}
            />
            <BeforeAfterColumn
              title={content.beforeAfter.afterTitle}
              items={content.beforeAfter.afterItems}
              accent
            />
          </div>
        </SectionShell>
      ) : null}

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
