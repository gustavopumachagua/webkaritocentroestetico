import { FaWhatsapp } from "react-icons/fa";
import { contact } from "@/data/site";
import { uiText } from "@/data/uiText";

export default function FloatingWhatsAppButton() {
  if (!contact?.primaryCta?.href) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-[70] sm:bottom-6 sm:right-6">
      <div className="mb-3 hidden justify-end sm:flex">
        <div className="surface-panel-soft pointer-events-none rounded-full px-4 py-2">
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
            {uiText.floatingWhatsApp.prompt}
          </p>
        </div>
      </div>

      <a
        href={contact.primaryCta.href}
        target="_blank"
        rel="noreferrer"
        aria-label={uiText.floatingWhatsApp.ariaLabel}
        className="
          pointer-events-auto group relative flex items-center gap-3 rounded-full
          border border-[#25d366]/30 bg-[#25d366] px-4 py-3 text-[#04110a]
          shadow-[0_10px_20px_rgba(0,0,0,0.28),0_0_0_10px_rgba(37,211,102,0.12)]
          transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_24px_rgba(0,0,0,0.32),0_0_0_14px_rgba(37,211,102,0.16)]
          sm:px-5 sm:py-3.5
        "
      >
        <span className="absolute inset-0 rounded-full bg-white/0 transition group-hover:bg-white/8" />
        <span className="absolute -inset-1 rounded-full border border-[#25d366]/25 opacity-75 animate-pulse" />
        <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-[#0d1510]/10 text-[1.35rem] sm:h-6 sm:w-6 sm:text-[1.45rem]">
          <FaWhatsapp />
        </span>
        <span className="relative hidden min-w-0 sm:block">
          <span className="block text-[0.98rem] font-semibold leading-tight text-[#04110a]">
            {uiText.floatingWhatsApp.chatLabel}
          </span>
        </span>
      </a>
    </div>
  );
}
