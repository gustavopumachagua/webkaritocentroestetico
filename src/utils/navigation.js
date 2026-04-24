const CLIENT_NAVIGATION_KEY = "client-navigation";

export function normalizePathname(pathname) {
  if (!pathname || pathname === "/") {
    return "/";
  }

  return pathname.replace(/\/+$/, "").toLowerCase();
}

export function isInternalHref(href) {
  if (!href) {
    return false;
  }

  return !/^(?:[a-z]+:)?\/\//i.test(href);
}

function markClientNavigation() {
  window.sessionStorage.setItem(CLIENT_NAVIGATION_KEY, "1");
}

export function consumeClientNavigation() {
  if (typeof window === "undefined") {
    return false;
  }

  const hasClientNavigation =
    window.sessionStorage.getItem(CLIENT_NAVIGATION_KEY) === "1";

  if (hasClientNavigation) {
    window.sessionStorage.removeItem(CLIENT_NAVIGATION_KEY);
  }

  return hasClientNavigation;
}

export function navigateTo(href, { replace = false } = {}) {
  if (typeof window === "undefined" || !href) {
    return false;
  }

  if (!isInternalHref(href)) {
    window.location.href = href;
    return true;
  }

  const url = new URL(href, window.location.origin);
  const nextLocation = `${url.pathname}${url.search}${url.hash}`;
  const currentLocation = `${window.location.pathname}${window.location.search}${window.location.hash}`;

  if (nextLocation === currentLocation) {
    return false;
  }

  markClientNavigation();
  window.history[replace ? "replaceState" : "pushState"]({}, "", nextLocation);
  window.dispatchEvent(new PopStateEvent("popstate"));

  return true;
}
