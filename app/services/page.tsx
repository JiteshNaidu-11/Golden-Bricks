import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { SERVICES_COPY } from "@/lib/content/innerPagesContent";
import Reveal from "@/components/motion/Reveal";
import {
  BadgeCheck,
  BadgePercent,
  Building2,
  CheckCircle2,
  Handshake,
  LineChart,
  MapPin,
  Settings,
  Sparkles,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Golden Brix Properties",
  description:
    "Premium real estate services across Mumbai & Navi Mumbai: buying assistance, investment advisory, home loan support, and property management.",
};

const ICONS = {
  buying: Handshake,
  investment: TrendingUp,
  loan: BadgePercent,
  management: Settings,
} as const;

const SERVICE_ROUTES: Record<(typeof SERVICES_COPY)[number]["key"], string> = {
  buying: "/services/buying-selling",
  investment: "/services/investor-advisory",
  loan: "/contact",
  management: "/services/property-management",
};

const SERVICE_IMAGES: Partial<Record<(typeof SERVICES_COPY)[number]["key"], string>> =
  {
    buying: "/properties/one-platinum.jpg",
    investment: "/properties/codename-growth.jpeg",
    loan: "/properties/sai-world-one.jpg",
    management: "/properties/goodwill-wisteria.jpeg",
  };

export default function ServicesPage() {
  const services = SERVICES_COPY.map((s) => {
    const Icon = ICONS[s.key as keyof typeof ICONS] ?? Handshake;
    const detailHref =
      SERVICE_ROUTES[s.key as keyof typeof SERVICE_ROUTES] ?? "/services";
    const imageSrc =
      SERVICE_IMAGES[s.key as keyof typeof SERVICE_IMAGES] ??
      "/properties/one-platinum.jpg";
    const why = "why" in s ? (s as unknown as { why?: string }).why ?? "" : "";

    const benefits = [
      ...s.benefits,
      ...(s.benefits.length < 4
        ? ["End-to-end coordination to keep timelines predictable"]
        : []),
    ].slice(0, 4);

    return { ...s, Icon, detailHref, imageSrc, why, benefits };
  });

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f6f4ef] text-[#0c1b2a] pt-28 sm:pt-32 pb-0">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#0c1b2a] text-white">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/properties/one-platinum.jpg"
              alt=""
              className="hero-image h-full w-full object-cover opacity-18"
            />
            <div className="absolute inset-0 bg-linear-to-b from-[#0c1b2a]/85 via-[#0c1b2a]/70 to-[#0c1b2a]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(197,162,74,0.22),transparent_55%)]" />
          </div>

          {/* Floating accents */}
          <div
            className="pointer-events-none absolute left-10 top-20 hidden sm:block animate-float-slow"
            aria-hidden
          >
            <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-[#EBD181]" aria-hidden />
              <span className="text-xs font-semibold tracking-wide text-white/80">
                Premium advisory
              </span>
            </div>
          </div>
          <div
            className="pointer-events-none absolute right-10 bottom-14 hidden md:block animate-float-slow-2"
            aria-hidden
          >
            <div className="rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur-md">
              <BadgeCheck className="h-6 w-6 text-[#EBD181]" aria-hidden />
            </div>
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-12 sm:pb-20 sm:pt-16">
            <Reveal className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#EBD181]">
                Golden Brix Properties
              </p>
              <h1
                className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Premium Real Estate{" "}
                <span className="bg-linear-to-r from-[#EBD181] via-[#C5A24A] to-[#EBD181] bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
              <p className="mt-6 text-base leading-relaxed text-white/75 sm:text-lg">
                A high-touch advisory experience for Mumbai & Navi Mumbai—built
                around verification, calm comparisons, and execution support that
                feels discreet and premium.
              </p>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/projects"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-linear-to-r from-[#C5A24A] to-[#EBD181] px-8 py-3.5 text-sm font-bold text-[#001F3F] shadow-lg transition hover:brightness-105 active:scale-[0.98]"
                >
                  View projects
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-white/25 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-[#C5A24A]/50 hover:bg-white/10"
                >
                  Talk to advisor
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-white/70">
                {[
                  { k: "Verified inventory", v: "Only shortlist-worthy projects" },
                  { k: "Negotiation support", v: "Better pricing + terms" },
                  { k: "Documentation help", v: "Less stress, fewer misses" },
                ].map((x) => (
                  <div key={x.k} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#EBD181]" />
                    <span className="font-semibold text-white/85">{x.k}</span>
                    <span className="hidden sm:inline">—</span>
                    <span className="hidden sm:inline">{x.v}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-10 pb-20 sm:-mt-14 sm:pb-24">
          {/* Value strip */}
          <Reveal className="mb-10 sm:mb-12">
            <div className="grid overflow-hidden rounded-3xl border border-[#C5A24A]/18 bg-white shadow-[0_24px_70px_-22px_rgba(12,27,42,0.16)] sm:grid-cols-3">
              {[
                {
                  icon: MapPin,
                  title: "Micro-market clarity",
                  text: "Shortlists built on connectivity, neighborhood depth, and resale strength.",
                },
                {
                  icon: LineChart,
                  title: "Investor-grade lens",
                  text: "Yield, appreciation catalysts, liquidity, and risk checks—kept simple.",
                },
                {
                  icon: Building2,
                  title: "Execution support",
                  text: "Negotiation, documentation, and timelines managed end-to-end.",
                },
              ].map((x) => {
                const Icon = x.icon;
                return (
                  <div
                    key={x.title}
                    className="flex items-start gap-4 border-b border-[#0c1b2a]/8 p-7 last:border-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#C5A24A]/20 bg-[#faf8f3] text-[#C5A24A]">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-[#0c1b2a]">{x.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-[#0c1b2a]/65">
                        {x.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>

          {/* Alternating split services */}
          <section className="mt-2">
            <Reveal className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C5A24A]">
                Signature services
              </p>
              <h2
                className="mt-4 text-3xl font-bold text-[#0c1b2a] sm:text-4xl"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                A premium, structured way to buy and invest
              </h2>
              <p className="mt-5 text-[#0c1b2a]/65 leading-relaxed">
                No generic listings. No pressure. Just verified options, clear
                comparisons, and end-to-end support that protects your time.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-8 sm:gap-10">
              {services.map((s, idx) => {
                const reverse = idx % 2 === 1;
                const Icon = s.Icon;

                return (
                  <Reveal
                    key={s.key}
                    delay={0.05 * idx}
                    className="group relative overflow-hidden rounded-3xl border border-[#C5A24A]/18 bg-white shadow-[0_28px_90px_-35px_rgba(12,27,42,0.22)] transition hover:-translate-y-1 hover:border-[#C5A24A]/30 hover:shadow-[0_40px_110px_-45px_rgba(12,27,42,0.28)]"
                  >
                    <div
                      className="pointer-events-none absolute inset-0"
                      aria-hidden
                    >
                      <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#C5A24A]/10 blur-[120px]" />
                      <div className="absolute -left-40 -bottom-40 h-[520px] w-[520px] rounded-full bg-[#0c1b2a]/6 blur-[120px]" />
                    </div>

                    <div className="relative grid gap-0 lg:grid-cols-12">
                      {/* Visual */}
                      <div
                        className={
                          reverse
                            ? "relative order-1 min-h-[260px] overflow-hidden bg-[#0c1b2a] lg:order-2 lg:col-span-5"
                            : "relative order-1 min-h-[260px] overflow-hidden bg-[#0c1b2a] lg:col-span-5"
                        }
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={s.imageSrc}
                          alt=""
                          className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-[1.04]"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-[#0c1b2a]/85 via-[#0c1b2a]/25 to-transparent" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(197,162,74,0.20),transparent_55%)]" />

                        {/* Why choose */}
                        <div className="absolute bottom-5 left-5 right-5">
                          <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
                              Why choose this?
                            </p>
                            <p className="mt-1 text-sm font-semibold text-white/90">
                              {s.why || "A calmer, clearer way to move forward."}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div
                        className={
                          reverse
                            ? "order-2 p-8 sm:p-10 lg:order-1 lg:col-span-7"
                            : "order-2 p-8 sm:p-10 lg:col-span-7"
                        }
                      >
                        <div className="flex flex-wrap items-start justify-between gap-4">
                          <div className="flex items-start gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#C5A24A]/22 bg-[#0c1b2a] text-[#EBD181] shadow-sm">
                              <Icon className="h-6 w-6" aria-hidden />
                            </div>
                            <div className="min-w-0">
                              <h3
                                className="text-2xl font-bold text-[#0c1b2a]"
                                style={{
                                  fontFamily:
                                    "var(--font-playfair), serif",
                                }}
                              >
                                {s.title}
                              </h3>
                              <div className="mt-3 h-px w-16 bg-linear-to-r from-[#C5A24A] to-transparent" />
                            </div>
                          </div>
                        </div>

                        <p className="mt-5 text-[#0c1b2a]/70 leading-relaxed">
                          {s.description}
                        </p>

                        <div className="mt-7 grid gap-3 sm:grid-cols-2">
                          {s.benefits.map((b, bIdx) => (
                            <Reveal key={`${s.key}-${b}`} delay={0.04 * bIdx}>
                              <div className="flex items-start gap-2 rounded-2xl border border-[#0c1b2a]/10 bg-[#faf8f3] px-4 py-3 text-sm text-[#0c1b2a]/75 transition group-hover:bg-white">
                                <CheckCircle2
                                  className="mt-0.5 h-4 w-4 shrink-0 text-[#C5A24A]"
                                  aria-hidden
                                />
                                <span className="min-w-0">{b}</span>
                              </div>
                            </Reveal>
                          ))}
                        </div>

                        <div className="mt-8 flex flex-wrap items-center gap-3">
                          <Link
                            href="/contact"
                            className="inline-flex min-h-[46px] items-center justify-center rounded-xl bg-[#0c1b2a] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 active:scale-[0.98]"
                          >
                            Talk to Advisor
                          </Link>
                          <Link
                            href="/projects"
                            className="inline-flex min-h-[46px] items-center justify-center rounded-xl border border-[#0c1b2a]/15 bg-white px-6 py-3 text-sm font-semibold text-[#0c1b2a] shadow-sm transition hover:border-[#C5A24A]/40 hover:bg-[#faf8f3] active:scale-[0.98]"
                          >
                            View Projects
                          </Link>
                          <Link
                            href={s.detailHref}
                            className="inline-flex min-h-[46px] items-center justify-center text-sm font-semibold text-[#0c1b2a]/65 underline-offset-4 hover:text-[#C5A24A] hover:underline"
                          >
                            Explore details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </section>

          {/* Why choose our services */}
          <section className="mt-14 sm:mt-16">
            <Reveal className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C5A24A]">
                Why choose our services
              </p>
              <h2
                className="mt-4 text-3xl font-bold text-[#0c1b2a] sm:text-4xl"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Premium clarity over template advice
              </h2>
              <p className="mt-5 text-[#0c1b2a]/65 leading-relaxed">
                A luxury experience is defined by calm execution: fewer surprises,
                cleaner timelines, and decisions backed by verification.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: BadgeCheck,
                  title: "Verification-led",
                  text: "Clean checks on project fundamentals and deal terms before you commit.",
                },
                {
                  icon: LineChart,
                  title: "Investor-grade lens",
                  text: "Yield, upside catalysts, and liquidity—kept practical and decision-ready.",
                },
                {
                  icon: MapPin,
                  title: "Micro-market fit",
                  text: "Shortlists built around commute, neighborhood depth, and long-term livability.",
                },
                {
                  icon: Building2,
                  title: "End-to-end execution",
                  text: "Negotiation, documentation, and timelines coordinated with precision.",
                },
              ].map((x, i) => {
                const Icon = x.icon;
                return (
                  <Reveal key={x.title} delay={0.04 * i}>
                    <div className="group relative overflow-hidden rounded-3xl border border-[#C5A24A]/16 bg-white p-7 shadow-md transition hover:-translate-y-1 hover:border-[#C5A24A]/30 hover:shadow-xl">
                      <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#C5A24A]/8 transition group-hover:bg-[#C5A24A]/12" />
                      <div className="relative flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#C5A24A]/20 bg-[#faf8f3] text-[#C5A24A]">
                          <Icon className="h-5 w-5" aria-hidden />
                        </div>
                        <div className="min-w-0">
                          <p className="font-semibold text-[#0c1b2a]">
                            {x.title}
                          </p>
                          <p className="mt-2 text-sm leading-relaxed text-[#0c1b2a]/65">
                            {x.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </section>

          {/* Process */}
          <section className="mt-14 sm:mt-16">
            <Reveal className="rounded-3xl border border-[#C5A24A]/15 bg-white p-10 shadow-xl sm:p-12">
              <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
                <div className="lg:col-span-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A24A]">
                    Our process
                  </p>
                  <h3
                    className="mt-4 text-2xl font-bold text-[#0c1b2a] sm:text-3xl"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    Clear steps. Calm execution.
                  </h3>
                  <p className="mt-4 text-[#0c1b2a]/65 leading-relaxed">
                    We keep the journey structured and transparent—so you can
                    move fast without missing critical details.
                  </p>
                </div>
                <div className="lg:col-span-8">
                  <ol className="grid gap-4 sm:grid-cols-2">
                    {[
                      {
                        t: "Requirement mapping",
                        d: "Budget, location, configuration, timeline—captured with precision.",
                      },
                      {
                        t: "Curated shortlist",
                        d: "Verified options that match lifestyle + long-term value.",
                      },
                      {
                        t: "Site visits & comparisons",
                        d: "Layouts, views, access, developer track record—clearly compared.",
                      },
                      {
                        t: "Offer, paperwork & closure",
                        d: "Negotiation guidance, documentation coordination, and timelines.",
                      },
                    ].map((x, i) => (
                      <li
                        key={x.t}
                        className="flex gap-4 rounded-2xl border border-[#0c1b2a]/10 bg-[#faf8f3] p-5"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#0c1b2a] text-xs font-bold text-[#EBD181]">
                          {i + 1}
                        </span>
                        <div className="min-w-0">
                          <p className="font-semibold text-[#0c1b2a]">{x.t}</p>
                          <p className="mt-1 text-sm text-[#0c1b2a]/65">
                            {x.d}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </Reveal>
          </section>

          {/* CTA */}
          <section className="mt-14 sm:mt-16">
            <Reveal className="rounded-3xl border border-[#C5A24A]/20 bg-linear-to-br from-[#001F3F] via-[#0c1b2a] to-[#001529] p-10 text-center text-white shadow-2xl sm:p-14">
              <h3
                className="text-2xl sm:text-3xl lg:text-4xl font-bold"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Ready to find your perfect property?
              </h3>
              <p className="mt-4 text-white/75 max-w-2xl mx-auto leading-relaxed">
                Get a free consultation and a calm, verified shortlist aligned
                to your budget, micro-market, and timeline.
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center min-h-[48px] px-9 py-3 rounded-xl text-base font-bold bg-linear-to-r from-[#C5A24A] to-[#EBD181] text-[#001F3F] shadow-lg hover:brightness-105 active:scale-[0.98] transition-all duration-300"
                >
                  Get Free Consultation
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center min-h-[48px] px-9 py-3 rounded-xl text-base font-semibold border border-white/25 bg-white/5 text-white hover:bg-white/10 hover:border-[#C5A24A]/55 transition-all duration-300"
                >
                  View Projects
                </Link>
              </div>
            </Reveal>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

