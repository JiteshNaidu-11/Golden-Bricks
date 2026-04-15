import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ABOUT_COPY } from "@/lib/content/innerPagesContent";
import Reveal from "@/components/motion/Reveal";
import { Award, Compass, Sparkles, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Golden Brix Properties",
  description:
    "Golden Brix Properties is a premium real estate advisory for Mumbai & Navi Mumbai. Learn about our mission, vision, team, and client-first process.",
};

export default function AboutPage() {
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
              className="hero-image h-full w-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0c1b2a]/70 via-[#0c1b2a]/60 to-[#0c1b2a]" />
          </div>

          {/* Floating accents */}
          <div
            className="pointer-events-none absolute left-10 top-20 hidden sm:block animate-float-slow"
            aria-hidden
          >
            <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-[#EBD181]" aria-hidden />
              <span className="text-xs font-semibold tracking-wide text-white/80">
                Premium-first
              </span>
            </div>
          </div>
          <div
            className="pointer-events-none absolute right-12 bottom-16 hidden md:block animate-float-slow-2"
            aria-hidden
          >
            <div className="rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur-md">
              <Award className="h-6 w-6 text-[#EBD181]" aria-hidden />
            </div>
          </div>
          <div
            className="pointer-events-none absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-[#C5A24A]/12 blur-[100px]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-24 bottom-0 h-[380px] w-[380px] rounded-full bg-[#003366]/40 blur-[90px]"
            aria-hidden
          />
          <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-80"
            aria-hidden
          />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20 pt-10 sm:pb-24 sm:pt-14 lg:pb-28">
            <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <p className="text-[#EBD181] text-xs font-semibold uppercase tracking-[0.35em]">
                  About Golden Brix
                </p>
                <h1
                  className="mt-5 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  Premium advice.
                  <span className="mt-1 block bg-gradient-to-r from-[#EBD181] via-[#C5A24A] to-[#EBD181] bg-clip-text text-transparent">
                    Clear decisions.
                  </span>
                </h1>
                <p className="mt-8 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                  {ABOUT_COPY.intro}
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-gradient-to-r from-[#C5A24A] to-[#EBD181] px-8 py-3.5 text-sm font-bold text-[#001F3F] shadow-lg shadow-black/20 transition hover:brightness-105 active:scale-[0.98]"
                  >
                    Start a conversation
                  </Link>
                  <Link
                    href="/properties"
                    className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-white/25 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-[#C5A24A]/50 hover:bg-white/10"
                  >
                    View portfolio
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-md sm:p-8">
                  <div className="pointer-events-none absolute inset-0" aria-hidden>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/photo.jpeg"
                      alt=""
                      className="hero-image h-full w-full object-cover opacity-35"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0c1b2a]/50 via-[#0c1b2a]/55 to-[#0c1b2a]/85" />
                  </div>
                  <div
                    className="absolute left-0 top-8 h-24 w-1 rounded-full bg-gradient-to-b from-[#C5A24A] to-[#EBD181]"
                    aria-hidden
                  />
                  <p className="relative pl-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                    At a glance
                  </p>
                  <ul className="relative mt-6 space-y-5 pl-5">
                    {ABOUT_COPY.stats.map((s) => (
                      <li
                        key={s.label}
                        className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-5 last:border-0 last:pb-0"
                      >
                        <span className="text-sm font-medium text-white/70">
                          {s.label}
                        </span>
                        <span
                          className="text-2xl font-bold tabular-nums sm:text-3xl"
                          style={{ fontFamily: "var(--font-playfair), serif" }}
                        >
                          {s.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overlapping editorial card */}
        <div className="relative z-20 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 -mt-14 sm:-mt-20">
          <Reveal className="rounded-2xl border border-[#C5A24A]/20 bg-white p-8 shadow-[0_25px_80px_-20px_rgba(12,27,42,0.18)] sm:p-10 lg:p-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-14">
              <div className="shrink-0 lg:w-48">
                <p
                  className="text-6xl font-bold leading-none text-[#C5A24A]/25 sm:text-7xl"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                  aria-hidden
                >
                  “
                </p>
                <p className="-mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A24A]">
                  Our promise
                </p>
              </div>
              <p className="text-lg leading-relaxed text-[#0c1b2a]/80 sm:text-xl">
                We combine on-ground market intelligence with a calm, premium
                service rhythm—so every recommendation is clear, data-backed,
                and aligned with your lifestyle and long-term value.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20 pt-16 sm:pt-20">
          {/* Mission / Vision */}
          <section className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            <Reveal className="group relative overflow-hidden rounded-2xl border border-[#C5A24A]/20 bg-white p-8 shadow-md transition hover:shadow-xl sm:p-10">
              <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-[#C5A24A]/8 transition group-hover:bg-[#C5A24A]/12" />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-[#C5A24A]/25 bg-[#faf8f3] text-[#C5A24A]">
                <Award className="h-6 w-6" strokeWidth={1.75} aria-hidden />
              </div>
              <h2
                className="mt-6 text-2xl font-bold text-[#0c1b2a] sm:text-3xl"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Mission
              </h2>
              <div className="mt-4 h-px w-16 bg-gradient-to-r from-[#C5A24A] to-transparent" />
              <p className="mt-5 text-[#0c1b2a]/75 leading-relaxed">
                {ABOUT_COPY.mission}
              </p>
            </Reveal>

            <Reveal
              delay={0.06}
              className="group relative overflow-hidden rounded-2xl border border-[#C5A24A]/20 bg-white p-8 shadow-md transition hover:shadow-xl sm:p-10"
            >
              <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-[#001F3F]/6 transition group-hover:bg-[#001F3F]/10" />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-[#C5A24A]/25 bg-[#faf8f3] text-[#C5A24A]">
                <Compass className="h-6 w-6" strokeWidth={1.75} aria-hidden />
              </div>
              <h2
                className="mt-6 text-2xl font-bold text-[#0c1b2a] sm:text-3xl"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Vision
              </h2>
              <div className="mt-4 h-px w-16 bg-gradient-to-r from-[#C5A24A] to-transparent" />
              <p className="mt-5 text-[#0c1b2a]/75 leading-relaxed">
                {ABOUT_COPY.vision}
              </p>
            </Reveal>
          </section>

          {/* Why choose us */}
          <section className="mt-16 sm:mt-20">
            <Reveal className="relative overflow-hidden rounded-3xl border border-[#C5A24A]/25 bg-[#0c1b2a] text-white shadow-2xl">
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#C5A24A]/10 via-transparent to-[#003366]/30"
                aria-hidden
              />
              <div className="relative grid gap-10 p-8 sm:p-10 lg:grid-cols-12 lg:gap-12 lg:p-14">
                <div className="lg:col-span-4">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#EBD181]">
                    <Sparkles className="h-3.5 w-3.5" aria-hidden />
                    Why choose us
                  </div>
                  <h2
                    className="mt-6 text-3xl font-bold leading-tight sm:text-4xl"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    A premium-first process
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
                    We optimize for clarity, speed, and long-term value—so you
                    can decide with confidence.
                  </p>
                </div>
                <div className="lg:col-span-8">
                  <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                    {ABOUT_COPY.why.map((item, i) => (
                      <li
                        key={item}
                        className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 backdrop-blur-sm transition hover:border-[#C5A24A]/30 hover:bg-white/[0.07]"
                      >
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#C5A24A]/20 text-xs font-bold text-[#EBD181]">
                          {i + 1}
                        </span>
                        <p className="text-sm leading-relaxed text-white/88">
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </section>

          {/* Stats strip */}
          <section className="mt-16 sm:mt-20">
            <Reveal className="grid grid-cols-1 divide-y divide-[#C5A24A]/15 overflow-hidden rounded-2xl border border-[#C5A24A]/20 bg-white shadow-lg sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {ABOUT_COPY.stats.map((s) => (
                <div
                  key={s.label}
                  className="px-8 py-10 text-center sm:py-12"
                >
                  <p
                    className="text-4xl font-bold gold-gradient-text sm:text-5xl"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    {s.value}
                  </p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#0c1b2a]/55">
                    {s.label}
                  </p>
                </div>
              ))}
            </Reveal>
          </section>

          {/* Team */}
          <section className="mt-20 sm:mt-24">
            <Reveal className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 text-[#C5A24A]">
                <Users className="h-4 w-4" strokeWidth={2} aria-hidden />
                <p className="text-xs font-semibold uppercase tracking-[0.3em]">
                  Our team
                </p>
              </div>
              <h2
                className="mt-4 text-3xl font-bold sm:text-4xl lg:text-[2.75rem]"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                People behind the process
              </h2>
              <p className="mt-5 text-[#0c1b2a]/70 leading-relaxed">
                A small, focused team that values transparency, responsiveness,
                and long-term client relationships.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {ABOUT_COPY.team.map((m, idx) => (
                <Reveal
                  key={m.name}
                  delay={0.04 * idx}
                  className="group relative flex flex-col rounded-2xl border border-[#C5A24A]/15 bg-white p-6 shadow-md transition hover:-translate-y-1 hover:border-[#C5A24A]/35 hover:shadow-xl sm:p-7"
                >
                  <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#0c1b2a] to-[#001F3F] text-lg font-bold text-[#EBD181] ring-4 ring-[#C5A24A]/20 transition group-hover:ring-[#C5A24A]/40">
                    {m.name
                      .split(" ")
                      .map((p) => p[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <p className="mt-5 text-center font-semibold text-[#0c1b2a]">
                    {m.name}
                  </p>
                  <p className="mt-1.5 text-center text-xs leading-snug text-[#0c1b2a]/55">
                    {m.title}
                  </p>
                  <p className="mt-4 flex-1 text-center text-sm leading-relaxed text-[#0c1b2a]/70">
                    {m.bio}
                  </p>
                </Reveal>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mt-20 sm:mt-24">
            <Reveal className="relative overflow-hidden rounded-3xl border border-[#C5A24A]/25 bg-gradient-to-br from-[#001F3F] via-[#0c1b2a] to-[#001529] p-10 text-center text-white shadow-2xl sm:p-14">
              <div
                className="pointer-events-none absolute -right-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#C5A24A]/15 blur-3xl"
                aria-hidden
              />
              <h3
                className="relative text-2xl font-bold sm:text-3xl lg:text-4xl"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Ready to explore premium options?
              </h3>
              <p className="relative mx-auto mt-4 max-w-2xl text-sm text-white/75 sm:text-base">
                Tell us your budget and preferred areas. We will share a curated
                shortlist and guide you through the next steps.
              </p>
              <div className="relative mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-gradient-to-r from-[#C5A24A] to-[#EBD181] px-10 py-3.5 text-base font-bold text-[#001F3F] shadow-lg transition hover:brightness-105 active:scale-[0.98]"
                >
                  Contact our experts
                </Link>
                <Link
                  href="/testimonials"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-white/25 px-8 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
                >
                  Client stories
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
