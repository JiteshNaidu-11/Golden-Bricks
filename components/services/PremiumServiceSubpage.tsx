"use client";

import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/motion/Reveal";
import { CheckCircle2, Sparkles } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";

export type PremiumSplitBlock = {
  key: string;
  title: string;
  description: string;
  bullets: readonly [string, string, string, string];
  why: string;
  imageSrc: string;
  Icon: LucideIcon;
};

export type PremiumWhyColumn = {
  key: string;
  Icon: LucideIcon;
  title: string;
  text: string;
};

export type PremiumTopCard = {
  key: string;
  Icon: LucideIcon;
  title: string;
  description: string;
};

export type PremiumShowcaseItem = {
  key: string;
  imageSrc: string;
  title: string;
  description: string;
  meta?: string;
};

function SlideIn({
  children,
  from,
  className,
}: {
  children: React.ReactNode;
  from: "left" | "right";
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
  const x = from === "left" ? -28 : 28;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function PremiumServiceSubpage({
  eyebrow,
  heroTitle,
  heroSubtitle,
  heroImageSrc,
  topCardsTitle,
  topCards,
  splitBlocks,
  whyTitle,
  whySubtitle,
  whyColumns,
  showcaseTitle,
  showcaseItems,
  ctaHeadline = "Ready to move forward with confidence?",
  ctaSubline = "Speak with our team for a calm, structured next step—no obligation.",
}: {
  eyebrow: string;
  heroTitle: React.ReactNode;
  heroSubtitle: string;
  heroImageSrc: string;
  topCardsTitle?: string;
  topCards?: PremiumTopCard[];
  splitBlocks: PremiumSplitBlock[];
  whyTitle: string;
  whySubtitle?: string;
  whyColumns: PremiumWhyColumn[];
  showcaseTitle?: string;
  showcaseItems?: PremiumShowcaseItem[];
  ctaHeadline?: string;
  ctaSubline?: string;
}) {
  return (
    <main className="min-h-screen bg-[#f6f4ef] text-[#0c1b2a]">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0c1b2a] pt-28 text-white sm:pt-32">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={heroImageSrc}
            alt=""
            className="h-full w-full object-cover opacity-20"
            style={{ transform: "scale(1.06)", filter: "blur(2px)" }}
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#0c1b2a]/90 via-[#0c1b2a]/78 to-[#0c1b2a]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(197,162,74,0.22),transparent_55%)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#EBD181]">
              {eyebrow}
            </p>
            <h1
              className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              {heroTitle}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-white/75 sm:text-lg">
              {heroSubtitle}
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-linear-to-r from-[#C5A24A] to-[#EBD181] px-8 py-3.5 text-sm font-bold text-[#001F3F] shadow-lg transition hover:brightness-105 active:scale-[0.98]"
              >
                Talk to Advisor
              </Link>
              <Link
                href="/projects"
                className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-white/25 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-[#C5A24A]/50 hover:bg-white/10"
              >
                View Projects
              </Link>
              <Link
                href="/services"
                className="inline-flex min-h-[48px] items-center justify-center text-sm font-semibold text-white/80 underline-offset-4 hover:text-[#EBD181] hover:underline"
              >
                All services overview
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="relative z-20 mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 sm:pb-24 sm:pt-12 lg:px-8">
        {/* Top cards */}
        {topCards && topCards.length > 0 ? (
          <Reveal className="mb-12 sm:mb-14">
            {topCardsTitle ? (
              <h2
                className="mb-8 text-center text-2xl font-bold text-[#0c1b2a] sm:text-3xl"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {topCardsTitle}
              </h2>
            ) : null}
            <div
              className={`grid gap-5 ${
                topCards.length >= 4
                  ? "sm:grid-cols-2 lg:grid-cols-4"
                  : topCards.length === 3
                    ? "md:grid-cols-3"
                    : "md:grid-cols-2"
              }`}
            >
              {topCards.map((c, i) => {
                const Icon = c.Icon;
                return (
                  <motion.div
                    key={c.key}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.45, delay: 0.05 * i }}
                    className="group relative overflow-hidden rounded-2xl border border-[#C5A24A]/18 bg-white/80 p-6 shadow-md backdrop-blur-md transition hover:-translate-y-1 hover:border-[#C5A24A]/32 hover:shadow-xl"
                  >
                    <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#C5A24A]/10 transition group-hover:bg-[#C5A24A]/14" />
                    <div className="relative flex flex-col items-center text-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#C5A24A]/22 bg-[#0c1b2a] text-[#EBD181]">
                        <Icon className="h-6 w-6" aria-hidden />
                      </div>
                      <p className="mt-4 text-lg font-bold text-[#0c1b2a]">
                        {c.title}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-[#0c1b2a]/65">
                        {c.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </Reveal>
        ) : null}

        {/* Alternating splits */}
        <section className="mt-2 grid gap-8 sm:gap-10">
          {splitBlocks.map((s, idx) => {
            const reverse = idx % 2 === 1;
            const Icon = s.Icon;
            const textFrom = reverse ? "right" : "left";
            const imgFrom = reverse ? "left" : "right";

            return (
              <Reveal
                key={s.key}
                delay={0.04 * idx}
                className="group relative overflow-hidden rounded-3xl border border-[#C5A24A]/18 bg-white shadow-[0_28px_90px_-35px_rgba(12,27,42,0.2)] transition hover:-translate-y-1 hover:border-[#C5A24A]/30 hover:shadow-[0_40px_110px_-45px_rgba(12,27,42,0.26)]"
              >
                <div className="pointer-events-none absolute inset-0" aria-hidden>
                  <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#C5A24A]/10 blur-[120px]" />
                </div>

                <div className="relative grid gap-0 lg:grid-cols-12">
                  {/* Visual */}
                  <SlideIn
                    from={imgFrom}
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
                    <div className="absolute bottom-5 left-5 right-5">
                      <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
                          Why this matters
                        </p>
                        <p className="mt-1 text-sm font-semibold text-white/90">
                          {s.why}
                        </p>
                      </div>
                    </div>
                  </SlideIn>

                  {/* Text */}
                  <SlideIn
                    from={textFrom}
                    className={
                      reverse
                        ? "order-2 p-8 sm:p-10 lg:order-1 lg:col-span-7"
                        : "order-2 p-8 sm:p-10 lg:col-span-7"
                    }
                  >
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
                        <div className="mt-3 h-px w-16 bg-linear-to-r from-[#C5A24A] to-transparent" />
                      </div>
                    </div>

                    <p className="mt-5 text-[#0c1b2a]/70 leading-relaxed">
                      {s.description}
                    </p>

                    <div className="mt-7 grid gap-3 sm:grid-cols-2">
                      {s.bullets.map((b, bIdx) => (
                        <motion.div
                          key={b}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-8%" }}
                          transition={{
                            duration: 0.4,
                            delay: 0.06 * bIdx,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          whileHover={{ y: -2 }}
                          className="flex items-start gap-2 rounded-2xl border border-[#0c1b2a]/10 bg-[#faf8f3] px-4 py-3 text-sm text-[#0c1b2a]/75 transition group-hover:bg-white"
                        >
                          <CheckCircle2
                            className="mt-0.5 h-4 w-4 shrink-0 text-[#C5A24A]"
                            aria-hidden
                          />
                          <span>{b}</span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-3">
                      <Link
                        href="/contact"
                        className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-[#0c1b2a] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 active:scale-[0.98]"
                      >
                        Talk to Advisor
                      </Link>
                      <Link
                        href="/projects"
                        className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-[#0c1b2a]/15 bg-white px-5 py-2.5 text-sm font-semibold text-[#0c1b2a] shadow-sm transition hover:border-[#C5A24A]/40 hover:bg-[#faf8f3] active:scale-[0.98]"
                      >
                        View Projects
                      </Link>
                    </div>
                  </SlideIn>
                </div>
              </Reveal>
            );
          })}
        </section>

        {/* Why choose */}
        <section className="mt-14 sm:mt-16">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#C5A24A]">
              <Sparkles className="h-4 w-4" aria-hidden />
              Why choose us
            </p>
            <h2
              className="mt-4 text-3xl font-bold text-[#0c1b2a] sm:text-4xl"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              {whyTitle}
            </h2>
            {whySubtitle ? (
              <p className="mt-5 text-[#0c1b2a]/65 leading-relaxed">
                {whySubtitle}
              </p>
            ) : null}
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {whyColumns.map((col, i) => {
              const Icon = col.Icon;
              return (
                <Reveal key={col.key} delay={0.04 * i}>
                  <div className="group relative h-full overflow-hidden rounded-3xl border border-[#C5A24A]/16 bg-white p-7 shadow-md transition hover:-translate-y-1 hover:border-[#C5A24A]/30 hover:shadow-xl">
                    <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#C5A24A]/8 transition group-hover:bg-[#C5A24A]/12" />
                    <div className="relative flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#C5A24A]/20 bg-[#faf8f3] text-[#C5A24A]">
                        <Icon className="h-5 w-5" aria-hidden />
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-[#0c1b2a]">{col.title}</p>
                        <p className="mt-2 text-sm leading-relaxed text-[#0c1b2a]/65">
                          {col.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* Showcase */}
        {showcaseItems && showcaseItems.length > 0 && showcaseTitle ? (
          <section className="mt-14 sm:mt-16">
            <Reveal className="mx-auto max-w-3xl text-center">
              <h2
                className="text-3xl font-bold text-[#0c1b2a] sm:text-4xl"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {showcaseTitle}
              </h2>
              <div className="mx-auto mt-5 h-px w-24 bg-linear-to-r from-transparent via-[#C5A24A] to-transparent" />
            </Reveal>
            <div
              className={`mt-10 grid gap-8 ${
                showcaseItems.length >= 3
                  ? "md:grid-cols-3"
                  : "md:grid-cols-2"
              }`}
            >
              {showcaseItems.map((it, i) => (
                <Reveal key={it.key} delay={0.05 * i}>
                  <div className="group overflow-hidden rounded-3xl border border-[#C5A24A]/18 bg-white shadow-lg transition hover:-translate-y-1 hover:border-[#C5A24A]/30 hover:shadow-2xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={it.imageSrc}
                      alt=""
                      className="h-52 w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    <div className="border-t border-[#0c1b2a]/8 bg-linear-to-b from-white to-[#faf8f3] p-6">
                      <h3
                        className="text-lg font-bold text-[#0c1b2a]"
                        style={{ fontFamily: "var(--font-playfair), serif" }}
                      >
                        {it.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#0c1b2a]/65">
                        {it.description}
                      </p>
                      {it.meta ? (
                        <p className="mt-3 text-xs font-semibold text-[#C5A24A]">
                          {it.meta}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        ) : null}

        {/* Final CTA */}
        <section className="mt-14 sm:mt-16">
          <Reveal className="rounded-3xl border border-[#C5A24A]/20 bg-linear-to-br from-[#001F3F] via-[#0c1b2a] to-[#001529] p-10 text-center text-white shadow-2xl sm:p-14">
            <h3
              className="text-2xl font-bold sm:text-3xl lg:text-4xl"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              {ctaHeadline}
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-white/75 leading-relaxed">
              {ctaSubline}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => openWhatsApp()}
                className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-linear-to-r from-[#C5A24A] to-[#EBD181] px-9 py-3 text-base font-bold text-[#001F3F] shadow-lg transition hover:brightness-105 active:scale-[0.98]"
              >
                Get Free Consultation
              </button>
              <Link
                href="/contact"
                className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-white/25 bg-white/5 px-9 py-3 text-base font-semibold text-white transition hover:border-[#C5A24A]/55 hover:bg-white/10"
              >
                Contact form
              </Link>
            </div>
          </Reveal>
        </section>
      </div>

      <Footer />
    </main>
  );
}
