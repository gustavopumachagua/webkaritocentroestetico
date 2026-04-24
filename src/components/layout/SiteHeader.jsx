import { useEffect, useRef, useState } from "react";
import {
  FaBars,
  FaChevronDown,
  FaChevronRight,
  FaLeaf,
  FaSpa,
  FaUserCheck,
  FaTimes,
} from "react-icons/fa";
import { imageAssets } from "@/assets/images";
import { useLocale } from "@/app/providers/LocaleContext";
import Container from "@/components/ui/Container";
import { contact, headerNavigation, site } from "@/data/site";
import { getServiceByPath } from "@/data/serviceCatalog";
import { uiText } from "@/data/uiText";
import {
  isInternalHref,
  navigateTo,
  normalizePathname,
} from "@/utils/navigation";

function getLinkProps(href) {
  return href?.startsWith("http")
    ? { target: "_blank", rel: "noreferrer" }
    : {};
}

function scrollToHashId(hash) {
  const id = hash?.replace(/^#/, "");
  if (!id) return false;
  const target = document.getElementById(id);
  if (!target) return false;
  const header = document.querySelector("header");
  const headerHeight = header?.getBoundingClientRect().height ?? 0;
  window.scrollTo({
    top: Math.max(
      0,
      window.scrollY + target.getBoundingClientRect().top - headerHeight - 16,
    ),
    behavior: "smooth",
  });
  return true;
}

function getHashFromHref(href) {
  if (!href) return null;
  const i = href.indexOf("#");
  return i === -1 ? null : href.slice(i);
}

function getSectionId(value) {
  return value?.replace(/^#/, "") ?? null;
}

function getActiveHomeSection() {
  const sectionIds = [
    "inicio",
    "beneficios",
    "servicios",
    "promociones",
    "preguntas",
    "ubicacion",
  ];
  const header = document.querySelector("header");
  const headerHeight = header?.getBoundingClientRect().height ?? 0;
  const scrollMarker = window.scrollY + headerHeight + 72;
  let activeSection = "inicio";

  sectionIds.forEach((sectionId) => {
    const section = document.getElementById(sectionId);

    if (section && section.offsetTop <= scrollMarker) {
      activeSection = sectionId;
    }
  });

  return activeSection;
}

function isItemActive(item, pathname, activeSection, isServicePage) {
  const targetSection = getSectionId(item.hash ?? getHashFromHref(item.href));

  if (item.submenu?.length) {
    return (
      isServicePage || (pathname === "/" && activeSection === targetSection)
    );
  }

  if (item.href === "/nosotros") {
    return pathname === "/nosotros";
  }

  if (targetSection === "beneficios") {
    return pathname === "/" && ["inicio", "beneficios"].includes(activeSection);
  }

  if (targetSection === "promociones") {
    return (
      pathname === "/promociones" ||
      (pathname === "/" && activeSection === "promociones")
    );
  }

  if (targetSection) {
    return pathname === "/" && activeSection === targetSection;
  }

  return pathname === normalizePathname(item.href);
}

function getServiceIcon(href) {
  const map = {
    "/limpiezas-faciales": FaSpa,
    "/tratamientos-faciales": FaUserCheck,
    "/tratamientos-corporales": FaLeaf,
  };
  return map[href] ?? FaChevronRight;
}

function isServiceSectionPath(pathname) {
  if (getServiceByPath(pathname)) {
    return true;
  }

  return headerNavigation.some((item) =>
    item.submenu?.some((sub) => normalizePathname(sub.href) === pathname),
  );
}

function useHeaderNavigation(
  setMobileOpen,
  setDropdownOpen,
  setMobileServicesOpen,
) {
  return (event, href, hash) => {
    const target = hash || getHashFromHref(href);

    if (target) {
      event.preventDefault();
      if (!scrollToHashId(target)) {
        sessionStorage.setItem("scrollTarget", target);
        navigateTo("/");
      }
      setMobileOpen(false);
      setDropdownOpen(false);
      setMobileServicesOpen(false);
      return;
    }

    if (!href || !isInternalHref(href)) {
      setMobileOpen(false);
      setDropdownOpen(false);
      setMobileServicesOpen(false);
      return;
    }

    event.preventDefault();
    navigateTo(href);
    setMobileOpen(false);
    setDropdownOpen(false);
    setMobileServicesOpen(false);
  };
}

function LanguageToggle({
  locale,
  setLocale,
  compact = false,
  desktop = false,
}) {
  const items = [
    { code: "es", shortLabel: "ES", flag: "🇪🇸", label: uiText.locale.spanish },
    { code: "en", shortLabel: "US", flag: "🇺🇸", label: uiText.locale.english },
  ];
  const containerClassName = compact
    ? "w-fit gap-1 p-1"
    : desktop
      ? "gap-0.5 p-0.5"
      : "gap-1 p-1";
  const buttonClassName = compact
    ? "px-3 py-2 text-xs tracking-[0.14em]"
    : desktop
      ? "min-w-8 px-2 py-1 text-[0.58rem] tracking-[0.12em]"
      : "px-3 py-2 text-xs tracking-[0.14em]";
  const activeButtonClassName = desktop
    ? "bg-[var(--color-primary)] text-[#140d0a] shadow-[0_4px_12px_rgba(160,94,76,0.22)]"
    : "bg-[var(--color-primary)] text-[#140d0a] shadow-[0_6px_18px_rgba(160,94,76,0.26)]";
  const flagClassName = desktop ? "text-[0.82rem]" : "text-sm";

  return (
    <div
      aria-label={uiText.locale.ariaLabel}
      className={`flex items-center rounded-full border border-white/10 bg-white/5 ${containerClassName}`.trim()}
    >
      {items.map((item) => {
        const isActive = locale === item.code;

        return (
          <button
            key={item.code}
            type="button"
            onClick={() => setLocale(item.code)}
            className={`inline-flex items-center gap-1.5 rounded-full font-semibold uppercase transition-all duration-300 ${buttonClassName} ${
              isActive
                ? activeButtonClassName
                : "text-white/70 hover:bg-white/8 hover:text-white"
            }`.trim()}
            aria-pressed={isActive}
            title={item.label}
          >
            {!desktop && (
              <span className={flagClassName} aria-hidden>
                {item.flag}
              </span>
            )}
            {!compact && (
              <span>{desktop ? item.shortLabel : item.code.toUpperCase()}</span>
            )}
          </button>
        );
      })}
    </div>
  );
}

export default function SiteHeader() {
  const { locale, setLocale } = useLocale();
  const isEnglish = locale === "en";
  const [pathname, setPathname] = useState(
    typeof window !== "undefined"
      ? normalizePathname(window.location.pathname)
      : "/",
  );
  const [activeSection, setActiveSection] = useState(() =>
    typeof window !== "undefined" &&
    normalizePathname(window.location.pathname) === "/"
      ? getActiveHomeSection()
      : null,
  );
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileView, setIsMobileView] = useState(
    typeof window !== "undefined" ? window.innerWidth < 640 : false,
  );
  const dropdownRef = useRef(null);
  const navigate = useHeaderNavigation(
    setMobileOpen,
    setDropdownOpen,
    setMobileServicesOpen,
  );
  const isServicePage = isServiceSectionPath(pathname);
  const desktopNavLinkClassName = isEnglish
    ? "rounded-full px-2.5 py-1.5 text-[0.78rem] font-medium text-white/68 transition hover:bg-white/7 hover:text-white xl:px-3 xl:text-[0.84rem]"
    : "rounded-full px-3 py-1.5 text-[0.82rem] font-medium text-white/68 transition hover:bg-white/7 hover:text-white xl:px-3.5 xl:text-[0.88rem]";
  const mobileNavLinkClassName =
    "flex items-center justify-between rounded-xl px-4 py-3.5 text-[0.98rem] font-medium transition";
  const navUnderlineClassName =
    "pointer-events-none absolute bottom-0 left-3 right-3 h-px rounded-full bg-[var(--color-accent)] shadow-[0_0_12px_rgba(245,201,169,0.3)] transition-all duration-300";

  const handleLogoClick = (event) => {
    event.preventDefault();
    setMobileOpen(false);
    setDropdownOpen(false);
    setMobileServicesOpen(false);

    const isHomeWithoutHash =
      normalizePathname(window.location.pathname) === "/" &&
      !window.location.hash;

    if (isHomeWithoutHash) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    navigateTo("/");
  };

  useEffect(() => {
    const syncNavigationState = () => {
      const nextPathname = normalizePathname(window.location.pathname);

      setPathname(nextPathname);
      setActiveSection(nextPathname === "/" ? getActiveHomeSection() : null);
      setScrolled(window.scrollY > 12);
    };
    const onPointerDown = (e) => {
      if (!dropdownRef.current?.contains(e.target)) setDropdownOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") {
        setDropdownOpen(false);
        setMobileOpen(false);
        setMobileServicesOpen(false);
      }
    };
    const onResize = () => {
      setIsMobileView(window.innerWidth < 640);
      syncNavigationState();
    };
    const onScroll = () => syncNavigationState();

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("hashchange", syncNavigationState);
    window.addEventListener("popstate", syncNavigationState);
    syncNavigationState();

    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", syncNavigationState);
      window.removeEventListener("popstate", syncNavigationState);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`
          border-b transition-all duration-300
          ${
            scrolled
              ? "border-white/10 bg-[rgba(4,7,10,0.94)] shadow-[0_18px_40px_rgba(0,0,0,0.24)] backdrop-blur-2xl"
              : "border-white/5 bg-[rgba(4,7,10,0.76)] backdrop-blur-xl"
          }
        `}
      >
        <Container size="xl" className="relative">
          <div className="flex h-16 items-center justify-between gap-3 lg:grid lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:gap-4 xl:gap-7">
            <a
              href="/"
              className="flex min-w-0 items-center gap-2.5 text-white xl:gap-3"
              onClick={handleLogoClick}
            >
              <span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/14 bg-white/6 shadow-[0_8px_24px_rgba(0,0,0,0.2)] sm:h-11 sm:w-11">
                <img
                  src={imageAssets.branding.logo}
                  alt={`${site.name} logo`}
                  className="h-full w-full object-cover"
                  loading="eager"
                  decoding="async"
                />
              </span>
              <div className="min-w-0">
                <span
                  className="block font-[var(--font-display)] leading-tight tracking-[-0.03em] text-white"
                  style={{ fontSize: isMobileView ? "1.22rem" : "1.62rem" }}
                >
                  {site.shortName}
                </span>
                {!isMobileView && (
                  <span className="mt-0.5 hidden text-[0.54rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-gold)]/70 xl:block">
                    {site.brandDescriptor}
                  </span>
                )}
              </div>
            </a>

            <nav className="hidden min-w-0 items-center justify-center gap-0.5 px-1 lg:flex xl:gap-1 xl:px-3">
              {headerNavigation.map((item) => {
                const itemActive = isItemActive(
                  item,
                  pathname,
                  activeSection,
                  isServicePage,
                );

                if (!item.submenu?.length) {
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      className={`${desktopNavLinkClassName} relative whitespace-nowrap ${itemActive ? "!text-white" : ""}`.trim()}
                      onClick={(e) => navigate(e, item.href, item.hash)}
                      {...getLinkProps(item.href)}
                    >
                      {item.label}
                      <span
                        aria-hidden
                        className={`${navUnderlineClassName} ${itemActive ? "scale-x-100 opacity-100" : "scale-x-50 opacity-0"}`.trim()}
                      />
                    </a>
                  );
                }

                return (
                  <div key={item.href} className="relative" ref={dropdownRef}>
                    <div className="relative flex items-center">
                      <a
                        href={item.href}
                        className={`${desktopNavLinkClassName} whitespace-nowrap pr-1.5 xl:pr-2 ${itemActive ? "!text-white" : ""}`.trim()}
                        onClick={(e) => navigate(e, item.href, item.hash)}
                      >
                        {item.label}
                      </a>
                      <button
                        type="button"
                        onClick={() => setDropdownOpen((v) => !v)}
                        className={`flex h-6 w-6 items-center justify-center rounded-full transition hover:bg-white/7 hover:text-white xl:h-7 xl:w-7 ${itemActive ? "text-white" : "text-white/50"}`.trim()}
                      >
                        <FaChevronDown
                          className={`text-[0.6rem] transition duration-250 ${dropdownOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      <span
                        aria-hidden
                        className={`${navUnderlineClassName} ${itemActive ? "scale-x-100 opacity-100" : "scale-x-50 opacity-0"}`.trim()}
                      />
                    </div>

                    {dropdownOpen && (
                      <div className="absolute left-0 mt-2 w-60 overflow-hidden rounded-2xl border border-white/10 bg-[rgba(6,9,13,0.98)] backdrop-blur-2xl shadow-[0_24px_48px_rgba(0,0,0,0.4)]">
                        <div className="p-1.5">
                          {item.submenu.map((sub) => {
                            const Icon = getServiceIcon(sub.href);
                            const subActive =
                              normalizePathname(sub.href) === pathname;

                            return (
                              <a
                                key={sub.href}
                                href={sub.href}
                                className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 transition hover:bg-white/6 ${subActive ? "bg-white/7" : ""}`.trim()}
                                onClick={(e) => navigate(e, sub.href)}
                              >
                                <span
                                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border bg-white/5 transition group-hover:border-[var(--color-primary)]/20 group-hover:bg-[var(--color-primary)]/8 group-hover:text-[var(--color-accent)] ${subActive ? "border-[var(--color-primary)]/25 text-[var(--color-accent)]" : "border-white/8 text-[var(--color-accent)]/70"}`.trim()}
                                >
                                  <Icon className="text-sm" />
                                </span>
                                <span
                                  className={`text-[0.88rem] transition group-hover:text-white ${subActive ? "text-white" : "text-white/72"}`.trim()}
                                >
                                  {sub.label}
                                </span>
                                <FaChevronRight
                                  className={`ml-auto text-[0.62rem] transition group-hover:text-white/50 ${subActive ? "text-white/55" : "text-white/25"}`.trim()}
                                />
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            <div className="flex shrink-0 items-center gap-1.5 lg:justify-self-end lg:gap-4 xl:gap-5">
              <div className="hidden lg:block">
                <LanguageToggle locale={locale} setLocale={setLocale} desktop />
              </div>
              <a
                href={contact.headerCta.href}
                className="
                  hidden lg:inline-flex items-center gap-2
                  rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10
                  whitespace-nowrap px-3 py-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)] xl:px-4 xl:text-[0.66rem]
                  transition hover:border-[var(--color-primary)]/50 hover:bg-[var(--color-primary)] hover:text-[#140d0a]
                "
                {...getLinkProps(contact.headerCta.href)}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]" />
                {contact.headerCta.label}
              </a>
              <button
                type="button"
                aria-label={
                  mobileOpen ? uiText.header.closeMenu : uiText.header.openMenu
                }
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                onClick={() => {
                  setMobileOpen((v) => !v);
                  setMobileServicesOpen(false);
                }}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/6 text-white transition hover:bg-white/10 lg:hidden"
              >
                {mobileOpen ? (
                  <FaTimes className="text-sm" />
                ) : (
                  <FaBars className="text-sm" />
                )}
              </button>
            </div>
          </div>
        </Container>
      </div>
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 bottom-0 top-[60px] z-40 overflow-y-auto lg:hidden"
        >
          <div className="min-h-full bg-[rgba(5,8,12,0.98)] backdrop-blur-2xl">
            <Container>
              <nav className="flex flex-col gap-1 py-4">
                {headerNavigation.map((item) => {
                  const itemActive = isItemActive(
                    item,
                    pathname,
                    activeSection,
                    isServicePage,
                  );

                  if (!item.submenu?.length) {
                    return (
                      <a
                        key={item.href}
                        href={item.href}
                        className={`${mobileNavLinkClassName} ${itemActive ? "bg-white/8 text-white" : "text-white/75 hover:bg-white/5 hover:text-white"}`.trim()}
                        onClick={(e) => navigate(e, item.href, item.hash)}
                        {...getLinkProps(item.href)}
                      >
                        {item.label}
                      </a>
                    );
                  }

                  return (
                    <div
                      key={item.href}
                      className={`overflow-hidden rounded-2xl border bg-white/[0.03] ${itemActive ? "border-[var(--color-primary)]/22" : "border-white/7"}`.trim()}
                    >
                      <div className="flex items-center justify-between px-4 py-3.5">
                        <a
                          href={item.href}
                          className={`text-[0.98rem] font-medium ${itemActive ? "text-white" : "text-white/75"}`.trim()}
                          onClick={(e) => navigate(e, item.href, item.hash)}
                        >
                          {item.label}
                        </a>
                        <button
                          type="button"
                          onClick={() => setMobileServicesOpen((v) => !v)}
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50 transition hover:bg-white/8 hover:text-white"
                        >
                          <FaChevronDown
                            className={`text-[0.6rem] transition duration-250 ${mobileServicesOpen ? "rotate-180" : ""}`}
                          />
                        </button>
                      </div>

                      {mobileServicesOpen && (
                        <div className="border-t border-white/6 px-2 pb-2">
                          {item.submenu.map((sub) => {
                            const Icon = getServiceIcon(sub.href);
                            const subActive =
                              normalizePathname(sub.href) === pathname;

                            return (
                              <a
                                key={sub.href}
                                href={sub.href}
                                className={`group mt-1 flex items-center gap-3 rounded-xl px-3 py-3 text-[0.92rem] transition hover:bg-white/5 hover:text-white ${subActive ? "bg-white/7 text-white" : "text-white/68"}`.trim()}
                                onClick={(e) => navigate(e, sub.href)}
                                {...getLinkProps(sub.href)}
                              >
                                <span
                                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border bg-white/4 transition group-hover:text-[var(--color-accent)] ${subActive ? "border-[var(--color-primary)]/25 text-[var(--color-accent)]" : "border-white/8 text-[var(--color-accent)]/65"}`.trim()}
                                >
                                  <Icon className="text-sm" />
                                </span>
                                {sub.label}
                                <FaChevronRight className="ml-auto text-[0.62rem] text-white/25" />
                              </a>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>
              <div className="mb-4 mt-2 flex justify-end">
                <LanguageToggle locale={locale} setLocale={setLocale} compact />
              </div>

              <a
                href={contact.headerCta.href}
                className="mb-6 flex w-full items-center justify-center gap-2 rounded-full border border-[var(--color-primary)]/28 bg-[var(--color-primary)]/10 py-3.5 text-[0.74rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)] transition hover:border-[var(--color-primary)]/50 hover:bg-[var(--color-primary)] hover:text-[#140d0a]"
                {...getLinkProps(contact.headerCta.href)}
                onClick={() => setMobileOpen(false)}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]" />
                {contact.headerCta.label}
              </a>
            </Container>
          </div>
        </div>
      )}
    </header>
  );
}
