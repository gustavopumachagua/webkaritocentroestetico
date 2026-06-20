import {
  FaEnvelope,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegClock,
  FaWhatsapp,
} from "react-icons/fa";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { contact } from "@/data/site";
import { uiText } from "@/data/uiText";

export default function ContactSection() {
  return (
    <section id="contacto" className="pb-24 pt-20 sm:pb-28 sm:pt-24">
      <Container className="grid gap-10 rounded-[2rem] bg-white/80 p-8 shadow-[0_32px_80px_rgba(74,36,24,0.12)] lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
        <div>
          <SectionHeading
            eyebrow={uiText.contact.eyebrow}
            title={uiText.contact.title}
            description={uiText.contact.description}
          />
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={contact.primaryCta.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-dark)]"
            >
              <FaWhatsapp />
              {contact.primaryCta.label}
            </a>
            <a
              href={contact.secondaryCta.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[color:rgba(159,95,76,0.2)] px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
            >
              <FaInstagram />
              {contact.secondaryCta.label}
            </a>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <article className="rounded-[1.5rem] bg-[var(--color-soft)] p-5">
            <div className="flex items-center gap-3 text-[var(--color-primary-dark)]">
              <FaPhoneAlt />
                <h3 className="text-sm font-semibold uppercase tracking-[0.24em]">
                {uiText.contact.phone}
              </h3>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              {contact.phone}
            </p>
          </article>
          <article className="rounded-[1.5rem] bg-[var(--color-soft)] p-5">
            <div className="flex items-center gap-3 text-[var(--color-primary-dark)]">
              <FaEnvelope />
                <h3 className="text-sm font-semibold uppercase tracking-[0.24em]">
                {uiText.contact.email}
              </h3>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              {contact.email}
            </p>
          </article>
          <article className="rounded-[1.5rem] bg-[var(--color-soft)] p-5">
            <div className="flex items-center gap-3 text-[var(--color-primary-dark)]">
              <FaMapMarkerAlt />
                <h3 className="text-sm font-semibold uppercase tracking-[0.24em]">
                {uiText.contact.address}
              </h3>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              {contact.address}
            </p>
          </article>
          <article className="rounded-[1.5rem] bg-[var(--color-soft)] p-5">
            <div className="flex items-center gap-3 text-[var(--color-primary-dark)]">
              <FaRegClock />
                <h3 className="text-sm font-semibold uppercase tracking-[0.24em]">
                {uiText.contact.schedule}
              </h3>
            </div>
            <div className="mt-4 space-y-2 text-sm leading-7 text-slate-700">
              {contact.schedule.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
