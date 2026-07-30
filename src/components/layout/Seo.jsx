import { useEffect } from "react";
import { getPageSeo } from "@/data/seo";

function setMetaTag(selector, content) {
  const metaTag = document.head.querySelector(selector);

  if (metaTag && content) {
    metaTag.setAttribute("content", content);
  }
}

function setCanonicalLink(href) {
  let canonicalLink = document.head.querySelector('link[rel="canonical"]');

  if (!canonicalLink) {
    canonicalLink = document.createElement("link");
    canonicalLink.setAttribute("rel", "canonical");
    document.head.appendChild(canonicalLink);
  }

  canonicalLink.setAttribute("href", href);
}

export default function Seo({ locale, pathname, service }) {
  useEffect(() => {
    const seo = getPageSeo({ locale, pathname, service });

    document.documentElement.lang = seo.lang;
    document.title = seo.title;
    setCanonicalLink(seo.canonicalUrl);
    setMetaTag('meta[name="description"]', seo.description);
    setMetaTag('meta[name="keywords"]', seo.keywords);
    setMetaTag('meta[name="author"]', seo.author);
    setMetaTag('meta[name="application-name"]', seo.applicationName);
    setMetaTag('meta[property="og:locale"]', seo.ogLocale);
    setMetaTag('meta[property="og:url"]', seo.canonicalUrl);
    setMetaTag('meta[property="og:site_name"]', seo.siteName);
    setMetaTag('meta[property="og:title"]', seo.title);
    setMetaTag('meta[property="og:description"]', seo.description);
    setMetaTag('meta[property="og:image"]', seo.imageUrl);
    setMetaTag('meta[property="og:image:secure_url"]', seo.imageUrl);
    setMetaTag('meta[property="og:image:type"]', seo.imageType);
    setMetaTag('meta[property="og:image:alt"]', seo.imageAlt);
    setMetaTag('meta[property="og:image:width"]', seo.imageWidth);
    setMetaTag('meta[property="og:image:height"]', seo.imageHeight);
    setMetaTag('meta[name="twitter:url"]', seo.canonicalUrl);
    setMetaTag('meta[name="twitter:title"]', seo.title);
    setMetaTag('meta[name="twitter:description"]', seo.description);
    setMetaTag('meta[name="twitter:image"]', seo.imageUrl);
    setMetaTag('meta[name="twitter:image:alt"]', seo.imageAlt);
  }, [locale, pathname, service]);

  return null;
}
