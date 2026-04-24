import { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import Container from "@/components/ui/Container";
import { aboutPage } from "@/data/site";
import { uiText } from "@/data/uiText";

export default function AboutTeamSection() {
  const teamSection = aboutPage.teamSection;
  const [expandedSpecialty, setExpandedSpecialty] = useState(0);

  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-[#081018] py-20 sm:py-28 lg:py-32">
      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="pointer-events-none absolute -left-48 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(207,155,114,0.15),transparent_65%)]" />
      <div className="pointer-events-none absolute -right-48 top-1/4 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(99,125,156,0.1),transparent_65%)]" />
      <Container className="relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className="order-2 mx-auto w-full max-w-sm lg:order-1 lg:max-w-none">
            <div className="group relative">
              <div className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl border border-white/8 bg-[#0d1620]" />
              <div className="relative overflow-hidden rounded-3xl border border-white/8 bg-[#091019] shadow-[0_8px_40px_-8px_rgba(0,0,0,0.26)]">
                <img
                  src={teamSection.imageSrc}
                  alt={teamSection.imageAlt}
                  className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#13283c]/30 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[rgba(8,11,16,0.8)] px-4 py-3 backdrop-blur-sm">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-white">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-[13px] font-semibold text-[var(--color-ink)]">
                        {teamSection.badgeTitle ?? uiText.aboutTeam.badgeTitle}
                      </p>
                      <p className="text-[12px] text-[var(--color-muted)]">
                        {teamSection.badgeSub ?? uiText.aboutTeam.badgeSubtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-[2.6rem] font-medium leading-[0.94] tracking-tight text-[var(--color-ink)] sm:text-[3.3rem] lg:text-[4rem]">
              {teamSection.title}
            </h2>
            <div className="mt-2 h-1 w-12 rounded-full bg-[var(--color-primary)]" />
            <p className="mt-6 text-base leading-8 text-[var(--color-ink-soft)] sm:text-lg">
              {teamSection.lead}
            </p>
            <p className="mt-3 text-base leading-8 text-[var(--color-ink-soft)] sm:text-lg">
              {teamSection.supportingLine}
            </p>
            <div className="mt-8 grid gap-2.5">
              {teamSection.specialties.map((item, index) => {
                const specialty =
                  typeof item === "string"
                    ? { title: item, description: "" }
                    : item;
                const isExpanded = expandedSpecialty === index;

                return (
                  <div
                    key={specialty.title}
                    className={`overflow-hidden rounded-2xl border transition-all duration-200 ${
                      isExpanded
                        ? "border-[var(--color-primary)]/24 bg-white/7 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.24)]"
                        : "border-white/8 bg-white/4 hover:border-[var(--color-primary)]/18 hover:bg-white/6"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedSpecialty((current) =>
                          current === index ? -1 : index,
                        )
                      }
                      className="flex w-full items-center gap-4 px-5 py-4 text-left"
                    >
                      <p className="text-[0.98rem] font-medium text-[var(--color-ink)] sm:text-[1.05rem]">
                        {specialty.title}
                      </p>
                      <FaChevronDown
                        className={`ml-auto h-3.5 w-3.5 flex-shrink-0 text-[var(--color-primary)] transition-transform duration-200 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isExpanded && specialty.description ? (
                      <div className="border-t border-white/8 px-5 pb-4 pt-3">
                        <p className="text-[0.95rem] leading-7 text-[var(--color-ink-soft)] sm:text-base">
                          {specialty.description}
                        </p>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
            <p className="mt-7 text-base leading-8 text-[var(--color-ink-soft)] sm:text-lg">
              {teamSection.closing}
            </p>
            {teamSection.cta && (
              <div className="mt-8">
                <a
                  href={teamSection.cta.href ?? "#"}
                  className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_14px_-4px_rgba(19,40,60,0.35)] transition hover:opacity-90 hover:shadow-[0_6px_20px_-4px_rgba(19,40,60,0.4)]"
                >
                  {teamSection.cta.label ?? uiText.aboutTeam.cta}
                  <FaChevronRight className="h-3 w-3" />
                </a>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
