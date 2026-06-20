import FloatingWhatsAppButton from "@/components/layout/FloatingWhatsAppButton";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import { useEffect, useRef } from "react";
import { consumeClientNavigation } from "@/utils/navigation";

const SCROLL_STORAGE_PREFIX = "scroll-position:";
const RESTORE_INTERVAL_MS = 120;
const RESTORE_MAX_ATTEMPTS = 18;

function normalizePathname(pathname) {
  if (!pathname || pathname === "/") {
    return "/";
  }

  return pathname.replace(/\/+$/, "").toLowerCase();
}

function getScrollStorageKey(pathname = window.location.pathname) {
  return `${SCROLL_STORAGE_PREFIX}${normalizePathname(pathname)}`;
}

function saveScrollPosition(storageKey) {
  window.sessionStorage.setItem(storageKey, String(window.scrollY));
}

function getSavedScrollPosition(storageKey) {
  const rawValue = window.sessionStorage.getItem(storageKey);
  const scrollY = Number(rawValue);

  return Number.isFinite(scrollY) ? scrollY : null;
}

function getNavigationType() {
  return window.performance?.getEntriesByType?.("navigation")?.at(0)?.type;
}

function scrollToHashOnLoad() {
  const hash = window.location.hash;
  const id = hash?.replace(/^#/, "");
  if (!id) return;

  const target = document.getElementById(id);
  if (!target) return;

  const header = document.querySelector("header");
  const headerHeight = header ? header.getBoundingClientRect().height : 0;
  const extraGap = 16;

  const y =
    window.scrollY +
    target.getBoundingClientRect().top -
    headerHeight -
    extraGap;

  window.scrollTo({ top: Math.max(0, y), behavior: "auto" });
}

function restoreSavedScrollPosition(storageKey) {
  if (consumeClientNavigation()) {
    return null;
  }

  if (window.location.hash || window.sessionStorage.getItem("scrollTarget")) {
    return null;
  }

  const navigationType = getNavigationType();

  if (!["reload", "back_forward"].includes(navigationType)) {
    return null;
  }

  const savedScrollY = getSavedScrollPosition(storageKey);

  if (savedScrollY === null || savedScrollY <= 0) {
    return null;
  }

  let attempts = 0;

  const restore = () => {
    window.scrollTo({ top: savedScrollY, behavior: "auto" });
    attempts += 1;

    if (attempts >= RESTORE_MAX_ATTEMPTS) {
      window.clearInterval(intervalId);
    }
  };

  const intervalId = window.setInterval(restore, RESTORE_INTERVAL_MS);
  restore();

  return () => window.clearInterval(intervalId);
}

export default function SiteLayout({ children }) {
  const scrollStorageKeyRef = useRef(
    typeof window !== "undefined"
      ? getScrollStorageKey(window.location.pathname)
      : `${SCROLL_STORAGE_PREFIX}/`,
  );

  useEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;
    let frameId = 0;

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const onScroll = () => {
      if (frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(() => {
        saveScrollPosition(scrollStorageKeyRef.current);
        frameId = 0;
      });
    };
    const onPageHide = () => {
      saveScrollPosition(scrollStorageKeyRef.current);
    };

    const hashScrollTimeoutId = window.setTimeout(scrollToHashOnLoad, 0);
    const stopRestoringScroll = restoreSavedScrollPosition(
      scrollStorageKeyRef.current,
    );

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pagehide", onPageHide);

    return () => {
      window.clearTimeout(hashScrollTimeoutId);
      stopRestoringScroll?.();
      onPageHide();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pagehide", onPageHide);

      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }

      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = previousScrollRestoration;
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-surface)] text-[var(--color-ink)]">
      <SiteHeader />
      <main className="relative">{children}</main>
      <FloatingWhatsAppButton />
      <SiteFooter />
    </div>
  );
}
