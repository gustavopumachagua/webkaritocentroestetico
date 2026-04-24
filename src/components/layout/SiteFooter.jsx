import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";

import Container from "@/components/ui/Container";
import { footer, site } from "@/data/site";
import { uiText } from "@/data/uiText";

const iconsBySocialLabel = {
  Instagram: FaInstagram,
  Facebook: FaFacebookF,
  TikTok: FaTiktok,
};

const footerWhatsAppHref = "https://api.whatsapp.com/message/EZSTNTZEBGBAK1";

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/8 bg-[linear-gradient(180deg,#070b10_0%,#0b1016_100%)]">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(207,155,114,0.15),transparent_68%)]" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(99,125,156,0.12),transparent_68%)]" />
      </div>
      <Container size="lg" className="relative py-14 sm:py-16 lg:py-20">
        <div className="grid gap-10 xl:grid-cols-[1.55fr_1fr_1fr_1fr]">
          <div className="space-y-5">
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-gold)]">
                {footer.descriptor}
              </p>
              <h2 className="mt-3 text-[2.35rem] font-medium tracking-tight text-[var(--color-ink)] sm:text-[2.8rem]">
                {footer.companyName}
              </h2>
            </div>
            <p className="max-w-sm text-[1rem] leading-8 text-[var(--color-ink-soft)]">
              {site.tagline}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {footer.socialLinks.map((item) => {
                const Icon = iconsBySocialLabel[item.label];
                if (!Icon) return null;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/4 text-[var(--color-accent)] transition-all duration-200 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[#140d0a]"
                  >
                    <Icon className="text-lg" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="surface-panel-soft rounded-[1.6rem] p-5 sm:p-6">
              <h3 className="mb-4 text-[0.78rem] font-semibold uppercase tracking-[0.26em] text-[var(--color-gold)]">
              {uiText.footer.contact}
            </h3>
            <div className="space-y-3.5">
              {[
                {
                  href: footerWhatsAppHref,
                  icon: <FaPhone className="text-base" />,
                  label: footer.phone,
                  external: true,
                },
                {
                  href: footerWhatsAppHref,
                  icon: <FaWhatsapp className="text-base" />,
                  label: footer.whatsapp,
                  external: true,
                },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  className="flex items-center gap-3 text-[0.98rem] text-[var(--color-ink-soft)] transition hover:text-[var(--color-accent)]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/8 bg-white/4 text-[var(--color-accent)]">
                    {item.icon}
                  </span>
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="surface-panel-soft rounded-[1.6rem] p-5 sm:p-6">
              <h3 className="mb-4 text-[0.78rem] font-semibold uppercase tracking-[0.26em] text-[var(--color-gold)]">
              {uiText.footer.location}
            </h3>
            <div className="space-y-4">
              {footer.locations.map((loc) => (
                <div key={loc.label}>
                  <p className="text-[0.98rem] font-semibold text-[var(--color-ink)]">
                    {loc.label}
                  </p>
                  <p className="mt-1 text-[0.96rem] leading-7 text-[var(--color-muted)]">
                    {loc.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="surface-panel-soft rounded-[1.6rem] p-5 sm:p-6">
              <h3 className="mb-4 text-[0.78rem] font-semibold uppercase tracking-[0.26em] text-[var(--color-gold)]">
              {uiText.footer.hours}
            </h3>
            <div className="space-y-1.5">
              {footer.schedule.map((line, i) => (
                <p
                  key={i}
                  className="text-[0.96rem] leading-7 text-[var(--color-ink-soft)]"
                >
                  {line}
                </p>
              ))}
            </div>
            <div className="mt-5 flex flex-col gap-2.5">
              {footer.links.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-2 text-[0.96rem] font-medium text-[var(--color-accent)] transition-all hover:gap-3 hover:text-[var(--color-gold)]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/8 pt-5 text-[0.9rem] text-[var(--color-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {footer.companyName}.{" "}
            {uiText.footer.rightsReserved}
          </p>
          <span className="inline-flex w-fit rounded-full border border-white/10 bg-white/4 px-3.5 py-1.5 text-[0.82rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
            {uiText.footer.city}
          </span>
        </div>
      </Container>
    </footer>
  );
}
