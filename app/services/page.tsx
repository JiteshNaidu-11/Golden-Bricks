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
            <div className="absolute inset-0 bg-gradient-to-b from-[#0c1b2a]/85 via-[#0c1b2a]/70 to-[#0c1b2a]" />
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

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-10 sm:pb-20 sm:pt-14">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#EBD181]">
                Services
              </p>
              <h1
                className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                End-to-end support for{" "}
                <span className="bg-gradient-to-r from-[#EBD181] via-[#C5A24A] to-[#EBD181] bg-clip-text text-transparent">
                  premium decisions
                </span>
              </h1>
              <p className="mt-6 text-base leading-relaxed text-white/75 sm:text-lg">
                Whether you are buying your first home or building a portfolio,
                we keep the process clear, structured, and stress-free.
              </p>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/properties"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-gradient-to-r from-[#C5A24A] to-[#EBD181] px-8 py-3.5 text-sm font-bold text-[#001F3F] shadow-lg transition hover:brightness-105 active:scale-[0.98]"
                >
                  View properties
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-white/25 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-[#C5A24A]/50 hover:bg-white/10"
                >
                  Talk to an advisor
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
            </div>
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

          {/* Services grid */}
          <section className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            {SERVICES_COPY.map((s, idx) => {
              const Icon = ICONS[s.key as keyof typeof ICONS] ?? Handshake;
              const href = SERVICE_ROUTES[s.key as keyof typeof SERVICE_ROUTES] ?? "/services";
              const cover = SERVICE_IMAGES[s.key as keyof typeof SERVICE_IMAGES] ?? "/properties/one-platinum.jpg";
              return (
                <Reveal
                  key={s.key}
                  delay={0.03 * idx}
                  className="group relative overflow-hidden rounded-3xl border border-[#C5A24A]/15 bg-white shadow-md transition hover:-translate-y-1 hover:border-[#C5A24A]/30 hover:shadow-xl"
                >
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#C5A24A]/6 transition group-hover:bg-[#C5A24A]/10" />

                  <div className="relative grid gap-7 p-8 sm:p-10">
                    <div className="grid gap-6 sm:grid-cols-[1.1fr_0.9fr] sm:items-start">
                      <div className="min-w-0">
                        <div className="flex items-start gap-4">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#C5A24A]/22 bg-[#0c1b2a] text-[#EBD181] shadow-sm">
                            <Icon className="h-6 w-6" aria-hidden />
                          </div>
                          <div className="min-w-0">
                            <h2
                              className="text-2xl font-bold text-[#0c1b2a]"
                              style={{ fontFamily: "var(--font-playfair), serif" }}
                            >
                              {s.title}
                            </h2>
                            <div className="mt-3 h-px w-16 bg-gradient-to-r from-[#C5A24A] to-transparent" />
                          </div>
                        </div>
                        <p className="mt-4 text-[#0c1b2a]/70 leading-relaxed">
                          {s.description}
                        </p>

                        <div className="mt-6 flex flex-wrap items-center gap-3">
                          <Link
                            href={href}
                            className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-[#0c1b2a] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-110"
                          >
                            Explore details
                          </Link>
                          <Link
                            href="/contact"
                            className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-[#0c1b2a]/15 bg-white px-5 py-2.5 text-sm font-semibold text-[#0c1b2a] shadow-sm transition hover:border-[#C5A24A]/40 hover:bg-[#faf8f3]"
                          >
                            Talk to us
                          </Link>
                        </div>
                      </div>

                      <div className="relative overflow-hidden rounded-2xl border border-[#0c1b2a]/10 bg-[#0c1b2a] shadow-sm">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={cover}
                          alt=""
                          className="h-48 w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.04]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1b2a]/60 via-transparent to-transparent" />
                        <div className="absolute bottom-3 left-3 right-3">
                          <div className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-xs text-white/85 backdrop-blur-md">
                            <span className="font-semibold">What you get</span>
                            <span className="text-white/70">3 key benefits</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-3">
                      {s.benefits.map((b) => (
                        <div
                          key={b}
                          className="flex items-start gap-2 rounded-2xl border border-[#0c1b2a]/10 bg-[#faf8f3] px-4 py-3 text-sm text-[#0c1b2a]/75 transition group-hover:bg-white"
                        >
                          <CheckCircle2
                            className="mt-0.5 h-4 w-4 shrink-0 text-[#C5A24A]"
                            aria-hidden
                          />
                          {b}
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
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
            <Reveal className="rounded-3xl border border-[#C5A24A]/20 bg-gradient-to-br from-[#001F3F] via-[#0c1b2a] to-[#001529] p-10 text-center text-white shadow-2xl sm:p-14">
              <h3
                className="text-2xl sm:text-3xl lg:text-4xl font-bold"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Need a curated shortlist?
              </h3>
              <p className="mt-4 text-white/75 max-w-2xl mx-auto leading-relaxed">
                Share your budget, preferred micro-market, and timeline. We’ll
                respond with the best-fit options and a clear next-step plan.
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/properties"
                  className="inline-flex items-center justify-center min-h-[48px] px-9 py-3 rounded-xl text-base font-bold bg-gradient-to-r from-[#C5A24A] to-[#EBD181] text-[#001F3F] shadow-lg hover:brightness-105 active:scale-[0.98] transition-all duration-300"
                >
                  View properties
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center min-h-[48px] px-9 py-3 rounded-xl text-base font-semibold border border-white/25 bg-white/5 text-white hover:bg-white/10 hover:border-[#C5A24A]/55 transition-all duration-300"
                >
                  Contact Us
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

