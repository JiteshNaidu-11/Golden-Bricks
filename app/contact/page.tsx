"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialLinks from "@/components/SocialLinks";
import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  Clock,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";

const CONTACT = {
  tagline: "Premium real estate advisory — Mumbai & Navi Mumbai",
  addressLines: [
    "Shop No. 5, Madhushree CHS",
    "Plot No. 33, Sector 40",
    "Seawoods, Navi Mumbai",
    "Maharashtra 400706",
  ],
  phoneDisplay: "+91 77383 84100",
  phoneTel: "+917738384100",
  email: "goldenbrix@gmail.com",
  hours: "Monday – Saturday: 9:00 AM – 7:00 PM",
  hoursNote: "Sunday: by appointment",
  mapsEmbedQuery:
    "Shop+No+5,+Madhushree+CHS,+Plot+33,+Sector+40,+Seawoods,+Navi+Mumbai+400706",
  mapsOpenUrl:
    "https://www.google.com/maps/search/?api=1&query=Shop+No+5+Madhushree+CHS+Sector+40+Seawoods+Navi+Mumbai",
} as const;

const siteDisplay = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://goldenbrix.com")
  .replace(/^https?:\/\//, "")
  .replace(/\/$/, "");

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    inquiryType: "Buying / selling",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("idle");
    setErrorMessage("");
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        inquiryType: formData.inquiryType,
        message: formData.message,
        source: "contact_page",
        page: "/contact",
        _subject: `New lead — Contact page (${formData.inquiryType})`,
        _template: "table",
        _captcha: "false",
      } as const;

      const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT.email)}`;
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...payload,
          message: `Inquiry type: ${formData.inquiryType}\n\n${formData.message}`.trim(),
        }),
      });

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(
          text?.trim()
            ? `Failed to send message. ${text}`
            : "Failed to send message. Please try again.",
        );
      }

      setSubmitStatus("success");
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
        inquiryType: "Buying / selling",
      });
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "An error occurred. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f6f4ef] text-[#0c1b2a] pt-28 sm:pt-32 pb-0">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#0c1b2a] text-white">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/Hero/1.jpg"
              alt=""
              className="hero-image h-full w-full object-cover opacity-18"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0c1b2a]/80 via-[#0c1b2a]/60 to-[#0c1b2a]" />
          </div>

          <div
            className="pointer-events-none absolute -left-24 top-0 h-[380px] w-[380px] rounded-full bg-[#C5A24A]/12 blur-[100px]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-20 bottom-0 h-[320px] w-[320px] rounded-full bg-[#003366]/50 blur-[90px]"
            aria-hidden
          />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20 pt-10 sm:pb-24 sm:pt-14">
            <div className="relative z-10">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#EBD181]">
                Contact
              </p>
              <h1
                className="mt-4 max-w-3xl text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Let&apos;s plan your
                <span className="mt-1 block bg-gradient-to-r from-[#EBD181] via-[#C5A24A] to-[#EBD181] bg-clip-text text-transparent">
                  next move
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
                Curated listings, transparent advice, and end-to-end support across
                Mumbai and Navi Mumbai. Share your requirement—we&apos;ll respond
                promptly.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() =>
                    openWhatsApp(
                      "917738384100",
                      "Hi Golden Brix, I would like to speak about a property requirement.",
                    )
                  }
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-[#25D366]/50 hover:bg-white/15"
                >
                  <MessageCircle className="h-4 w-4 text-[#25D366]" aria-hidden />
                  WhatsApp
                </button>
                <a
                  href={`tel:${CONTACT.phoneTel}`}
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#C5A24A] to-[#EBD181] px-6 py-3 text-sm font-bold text-[#001F3F] shadow-lg transition hover:brightness-105"
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  Call now
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-12 pb-16 sm:-mt-16 sm:pb-20">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Contact details column */}
            <aside className="lg:col-span-5">
              <div className="sticky top-32 space-y-6">
                <div className="rounded-3xl border border-[#C5A24A]/20 bg-white p-7 shadow-[0_24px_70px_-20px_rgba(12,27,42,0.15)] sm:p-8">
                  <h2
                    className="text-xl font-bold text-[#0c1b2a] sm:text-2xl"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    Visit & connect
                  </h2>
                  <div className="mt-3 h-px w-14 bg-gradient-to-r from-[#C5A24A] to-transparent" />
                  <p className="mt-4 text-sm leading-relaxed text-[#0c1b2a]/65">
                    {CONTACT.tagline}
                  </p>

                  <ul className="mt-8 space-y-6">
                    <li className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0c1b2a] text-[#EBD181]">
                        <MapPin className="h-5 w-5" aria-hidden />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-[#C5A24A]">
                          Office
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-[#0c1b2a]/80">
                          {CONTACT.addressLines.map((line) => (
                            <span key={line} className="block">
                              {line}
                            </span>
                          ))}
                        </p>
                        <a
                          href={CONTACT.mapsOpenUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-[#C5A24A] hover:underline"
                        >
                          Open in Maps
                          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                        </a>
                      </div>
                    </li>

                    <li className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#C5A24A]/25 bg-[#faf8f3] text-[#C5A24A]">
                        <Phone className="h-5 w-5" aria-hidden />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-[#C5A24A]">
                          Phone
                        </p>
                        <a
                          href={`tel:${CONTACT.phoneTel}`}
                          className="mt-1 block text-lg font-semibold text-[#0c1b2a] transition hover:text-[#C5A24A]"
                        >
                          {CONTACT.phoneDisplay}
                        </a>
                      </div>
                    </li>

                    <li className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#C5A24A]/25 bg-[#faf8f3] text-[#C5A24A]">
                        <Mail className="h-5 w-5" aria-hidden />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-[#C5A24A]">
                          Email
                        </p>
                        <a
                          href={`mailto:${CONTACT.email}`}
                          className="mt-1 block break-all text-sm font-semibold text-[#0c1b2a] underline-offset-2 transition hover:text-[#C5A24A] hover:underline"
                        >
                          {CONTACT.email}
                        </a>
                      </div>
                    </li>

                    <li className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#C5A24A]/25 bg-[#faf8f3] text-[#C5A24A]">
                        <Clock className="h-5 w-5" aria-hidden />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-[#C5A24A]">
                          Hours
                        </p>
                        <p className="mt-1 text-sm text-[#0c1b2a]/75">
                          {CONTACT.hours}
                        </p>
                        <p className="mt-1 text-sm text-[#0c1b2a]/55">
                          {CONTACT.hoursNote}
                        </p>
                      </div>
                    </li>
                  </ul>

                  <div className="mt-8 rounded-2xl border border-[#C5A24A]/15 bg-[#faf8f3] px-4 py-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#0c1b2a]/45">
                      Website
                    </p>
                    <p className="mt-1 text-sm font-medium text-[#0c1b2a]/80">
                      {siteDisplay}
                    </p>
                  </div>

                  <div className="mt-8 border-t border-[#0c1b2a]/8 pt-6">
                    <SocialLinks variant="sectionLight" label="Connect with us" />
                  </div>
                </div>

                <div className="rounded-2xl border border-[#C5A24A]/15 bg-gradient-to-br from-[#001F3F] to-[#0c1b2a] p-6 text-white shadow-lg">
                  <p className="text-sm font-semibold text-[#EBD181]">
                    Prefer a call-back?
                  </p>
                  <p className="mt-2 text-sm text-white/70">
                    Submit the form and our team will reach out at a time that
                    suits you.
                  </p>
                  <Link
                    href="/properties"
                    className="mt-4 inline-flex text-sm font-semibold text-white underline-offset-2 hover:text-[#EBD181] hover:underline"
                  >
                    Browse properties →
                  </Link>
                </div>
              </div>
            </aside>

            {/* Form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-[#C5A24A]/15 bg-white p-7 shadow-[0_28px_80px_-24px_rgba(12,27,42,0.18)] sm:p-9 lg:p-10">
                <h2
                  className="text-xl font-bold text-[#0c1b2a] sm:text-2xl"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  Send a message
                </h2>
                <p className="mt-2 text-sm text-[#0c1b2a]/65">
                  Fields marked * are required. We respect your privacy and never
                  share your details.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#0c1b2a]/55"
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        autoComplete="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-[#0c1b2a]/12 bg-[#faf8f3]/50 px-4 py-3 text-[#0c1b2a] outline-none transition focus:border-[#C5A24A] focus:bg-white focus:ring-2 focus:ring-[#C5A24A]/20"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#0c1b2a]/55"
                      >
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 …"
                        className="w-full rounded-xl border border-[#0c1b2a]/12 bg-[#faf8f3]/50 px-4 py-3 text-[#0c1b2a] outline-none transition focus:border-[#C5A24A] focus:bg-white focus:ring-2 focus:ring-[#C5A24A]/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#0c1b2a]/55"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-[#0c1b2a]/12 bg-[#faf8f3]/50 px-4 py-3 text-[#0c1b2a] outline-none transition focus:border-[#C5A24A] focus:bg-white focus:ring-2 focus:ring-[#C5A24A]/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="inquiryType"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#0c1b2a]/55"
                    >
                      Inquiry type *
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      required
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-[#0c1b2a]/12 bg-[#faf8f3]/50 px-4 py-3 text-[#0c1b2a] outline-none transition focus:border-[#C5A24A] focus:bg-white focus:ring-2 focus:ring-[#C5A24A]/20"
                    >
                      <option value="Buying / selling">Buying / selling</option>
                      <option value="Investment advisory">Investment advisory</option>
                      <option value="Home loan / documentation">Home loan / documentation</option>
                      <option value="Site visit / shortlist">Site visit / shortlist</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#0c1b2a]/55"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Budget, preferred locations, timeline…"
                      className="w-full resize-none rounded-xl border border-[#0c1b2a]/12 bg-[#faf8f3]/50 px-4 py-3 text-[#0c1b2a] outline-none transition focus:border-[#C5A24A] focus:bg-white focus:ring-2 focus:ring-[#C5A24A]/20"
                    />
                  </div>

                  {submitStatus === "success" ? (
                    <div className="rounded-xl border border-emerald-200/80 bg-emerald-50/90 px-4 py-4 text-emerald-900">
                      <p className="font-semibold">Thank you for your message.</p>
                      <p className="mt-1 text-sm text-emerald-800/90">
                        Our team will contact you shortly.
                      </p>
                    </div>
                  ) : null}

                  {submitStatus === "error" ? (
                    <div className="rounded-xl border border-red-200/80 bg-red-50/90 px-4 py-4 text-red-900">
                      <p className="font-semibold">Something went wrong</p>
                      <p className="mt-1 text-sm">{errorMessage}</p>
                    </div>
                  ) : null}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full min-h-[52px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#C5A24A] to-[#EBD181] px-8 py-3.5 text-base font-bold text-[#001F3F] shadow-lg transition hover:brightness-105 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-55"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" aria-hidden />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" aria-hidden />
                        Request a consultation
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <section className="border-t border-[#C5A24A]/10 bg-[#0c1b2a] py-10 sm:py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-6 text-center sm:mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#EBD181]">
                Location
              </p>
              <h2
                className="mt-3 text-3xl font-bold text-white sm:text-4xl"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Find us in Seawoods
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm text-white/65">
                Convenient access from Seawoods Darave station and Palm Beach
                Road.
              </p>
            </div>
            <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl ring-1 ring-[#C5A24A]/20">
              <iframe
                src={`https://www.google.com/maps?q=${CONTACT.mapsEmbedQuery}&z=16&output=embed`}
                className="h-[220px] w-full sm:h-[280px] lg:h-[320px]"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="Golden Brix Properties — Seawoods, Navi Mumbai"
              />
            </div>
          </div>
        </section>

        {/* Reviews CTA */}
        <section className="bg-gradient-to-b from-[#f6f4ef] to-[#ece6da] py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <div className="rounded-3xl border border-[#C5A24A]/20 bg-white p-10 shadow-xl sm:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A24A]">
                Feedback
              </p>
              <h2
                className="mt-4 text-2xl font-bold text-[#0c1b2a] sm:text-3xl"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Loved working with us?
              </h2>
              <p className="mt-4 text-[#0c1b2a]/70 leading-relaxed">
                Reviews help more families discover trustworthy advisory. If you
                visited our office or closed a deal with us, consider leaving a
                note on Google Maps.
              </p>
              <a
                href={CONTACT.mapsOpenUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#C5A24A] to-[#EBD181] px-8 py-3.5 text-sm font-bold text-[#001F3F] shadow-md transition hover:brightness-105"
              >
                View on Google Maps
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
