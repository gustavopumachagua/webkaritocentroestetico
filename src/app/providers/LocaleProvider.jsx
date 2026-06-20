import { useEffect, useState } from "react";
import { LocaleContext } from "@/app/providers/LocaleContext";
import { setGenericServiceContentLocale } from "@/data/genericServiceContent";
import { setServiceCatalogLocale } from "@/data/serviceCatalog";
import { setSiteLocale } from "@/data/site";
import { setUiLocale } from "@/data/uiText";

const LOCALE_STORAGE_KEY = "karito-locale";

function normalizeLocale(locale) {
  return locale === "en" ? "en" : "es";
}

function applyLocale(locale) {
  const normalizedLocale = normalizeLocale(locale);
  setSiteLocale(normalizedLocale);
  setServiceCatalogLocale(normalizedLocale);
  setGenericServiceContentLocale(normalizedLocale);
  setUiLocale(normalizedLocale);
  return normalizedLocale;
}

export function LocaleProvider({ children }) {
  const [locale, setLocaleState] = useState(() => {
    const storedLocale =
      typeof window !== "undefined"
        ? window.localStorage.getItem(LOCALE_STORAGE_KEY)
        : null;

    return applyLocale(storedLocale);
  });

  const setLocale = (nextLocale) => {
    const normalizedLocale = applyLocale(nextLocale);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, normalizedLocale);
    }
    setLocaleState(normalizedLocale);
  };

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}
