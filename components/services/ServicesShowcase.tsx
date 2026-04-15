"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "@/components/motion/Reveal";
import {
  BadgePercent,
  CheckCircle2,
  Handshake,
  Home,
  Megaphone,
  Search,
  Settings,
  Tag,
  TrendingUp,
} from "lucide-react";

export type ServiceIconKey =
  | "handshake"
  | "trendingUp"
  | "badgePercent"
  | "settings"
  | "home"
  | "megaphone"
  | "search"
  | "tag";

export type ServiceShowcaseItem = {
  key: string;
  title: string;
  description: string;
  benefits: string[];
  why: string;
  href: string;
  imageSrc: string;
  iconKey: ServiceIconKey;
};

export default function ServicesShowcase({
  eyebrow = "Services",
  heading = "Designed for premium decisions",
  subheading = "A calm, structured process—built for buyers and investors who value clarity over noise.",
  items,
  variant = "light",
  embedded = false,
}: {
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  items: ServiceShowcaseItem[];
  variant?: "light" | "dark";
  embedded?: boolean;
}) {
  const isDark = variant === "dark";

  const ICONS = {
    handshake: Handshake,
    trendingUp: TrendingUp,
    badgePercent: BadgePercent,
    settings: Settings,
    home: Home,
    megaphone: Megaphone,
    search: Search,
    tag: Tag,
  } as const;

  const Wrapper: React.ElementType = embedded ? "div" : "section";
  const wrapperClassName = embedded
    ? "relative"
    : isDark
      ? "relative overflow-hidden bg-[#0c1b2a] text-white"
      : "relative overflow-hidden bg-[#f6f4ef] text-[#0c1b2a]";

  return (
    <Wrapper className={wrapperClassName}>
      {!embedded ? (
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div
            className={
              isDark
                ? "absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_30%_0%,rgba(197,162,74,0.18),transparent_55%)]"
                : "absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_30%_0%,rgba(197,162,74,0.12),transparent_55%)]"
            }
          />
          <div
            className={
              isDark
                ? "absolute -right-40 top-1/4 h-[520px] w-[520px] rounded-full bg-white/6 blur-[110px]"
                : "absolute -right-40 top-1/4 h-[520px] w-[520px] rounded-full bg-[#0c1b2a]/6 blur-[110px]"
            }
          />
          <div
            className={
              isDark
                ? "absolute -left-40 bottom-0 h-[520px] w-[520px] rounded-full bg-[#C5A24A]/12 blur-[110px]"
                : "absolute -left-40 bottom-0 h-[520px] w-[520px] rounded-full bg-[#C5A24A]/10 blur-[110px]"
            }
          />
        </div>
      ) : null}

      <div className={embedded ? "relative" : "relative mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-12"}>
        <Reveal className="mx-auto max-w-3xl text-center">
          <p
            className={
              isDark
                ? "text-xs font-semibold uppercase tracking-[0.35em] text-[#EBD181]"
                : "text-xs font-semibold uppercase tracking-[0.35em] text-[#C5A24A]"
            }
          >
            {eyebrow}
          </p>
          <h2
            className={
              isDark
                ? "mt-5 text-4xl font-bold leading-tight sm:text-5xl"
                : "mt-5 text-4xl font-bold leading-tight text-[#0c1b2a] sm:text-5xl"
            }
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            {heading.split(" ").slice(0, 2).join(" ")}{" "}
            <span className="bg-linear-to-r from-[#EBD181] via-[#C5A24A] to-[#EBD181] bg-clip-text text-transparent">
              {heading.split(" ").slice(2).join(" ")}
            </span>
          </h2>
          <p className={isDark ? "mt-6 text-white/75 sm:text-lg" : "mt-6 text-[#0c1b2a]/70 sm:text-lg"}>
            {subheading}
          </p>
        </Reveal>

        {/* Divider */}
        <div className="mx-auto mt-10 h-px w-full max-w-4xl bg-linear-to-r from-transparent via-[#C5A24A]/35 to-transparent" />

        <div className="mt-12 grid gap-10 lg:gap-12">
          {items.map((s, idx) => {
            const Icon = ICONS[s.iconKey] ?? Handshake;
            const reversed = idx % 2 === 1;

            return (
              <Reveal key={s.key} delay={0.05 * idx} className="relative">
                <div
                  className={
                    isDark
                      ? "relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_28px_90px_-35px_rgba(0,0,0,0.55)]"
                      : "relative overflow-hidden rounded-3xl border border-[#C5A24A]/14 bg-white shadow-[0_28px_90px_-35px_rgba(12,27,42,0.2)]"
                  }
                >
                  <div className={reversed ? "grid gap-0 lg:grid-cols-12" : "grid gap-0 lg:grid-cols-12"}>
                    {/* Visual */}
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 260, damping: 22 }}
                      className={
                        reversed
                          ? "relative order-1 min-h-[260px] overflow-hidden bg-[#0c1b2a] lg:order-2 lg:col-span-5"
                          : "relative order-1 min-h-[260px] overflow-hidden bg-[#0c1b2a] lg:col-span-5"
                      }
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={s.imageSrc}
                        alt=""
                        className="h-full w-full object-cover opacity-90"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-[#0c1b2a]/80 via-[#0c1b2a]/20 to-transparent" />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(197,162,74,0.18),transparent_55%)]" />
                      <div className="absolute bottom-5 left-5 right-5">
                        <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-xs text-white/85 backdrop-blur-md">
                          <span className="font-semibold">Why choose this?</span>
                          <span className="text-white/70 line-clamp-1">{s.why}</span>
                        </div>
                      </div>
                    </motion.div>

                    {/* Content */}
                    <div
                      className={
                        reversed
                          ? "order-2 p-8 sm:p-10 lg:order-1 lg:col-span-7"
                          : "order-2 p-8 sm:p-10 lg:col-span-7"
                      }
                    >
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-start gap-4">
                          <div
                            className={
                              isDark
                                ? "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/12 bg-white/10 text-[#EBD181] shadow-sm"
                                : "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#C5A24A]/22 bg-[#0c1b2a] text-[#EBD181] shadow-sm"
                            }
                          >
                            <Icon className="h-6 w-6" aria-hidden />
                          </div>
                          <div className="min-w-0">
                            <h3
                              className={isDark ? "text-2xl font-bold text-white" : "text-2xl font-bold text-[#0c1b2a]"}
                              style={{ fontFamily: "var(--font-playfair), serif" }}
                            >
                              {s.title}
                            </h3>
                            <div className="mt-3 h-px w-16 bg-linear-to-r from-[#C5A24A] to-transparent" />
                          </div>
                        </div>

                        <Link
                          href={s.href}
                          className={
                            isDark
                              ? "inline-flex min-h-[44px] items-center justify-center rounded-xl bg-linear-to-r from-[#C5A24A] to-[#EBD181] px-5 py-2.5 text-sm font-bold text-[#001F3F] shadow-lg transition hover:brightness-105 active:scale-[0.98]"
                              : "inline-flex min-h-[44px] items-center justify-center rounded-xl bg-[#0c1b2a] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 active:scale-[0.98]"
                          }
                        >
                          Explore service
                        </Link>
                      </div>

                      <p className={isDark ? "mt-5 text-white/75 leading-relaxed" : "mt-5 text-[#0c1b2a]/70 leading-relaxed"}>
                        {s.description}
                      </p>

                      <div className="mt-7 grid gap-3 sm:grid-cols-2">
                        {s.benefits.slice(0, 4).map((b) => (
                          <motion.div
                            key={b}
                            whileHover={{ y: -2 }}
                            transition={{ type: "spring", stiffness: 260, damping: 22 }}
                            className={
                              isDark
                                ? "flex items-start gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/78"
                                : "flex items-start gap-2 rounded-2xl border border-[#0c1b2a]/10 bg-[#faf8f3] px-4 py-3 text-sm text-[#0c1b2a]/75"
                            }
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#C5A24A]" aria-hidden />
                            <span className="min-w-0">{b}</span>
                          </motion.div>
                        ))}
                      </div>

                      <div className="mt-8 flex flex-wrap items-center gap-3">
                        <Link
                          href="/contact"
                          className={
                            isDark
                              ? "inline-flex min-h-[44px] items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-[#C5A24A]/55 hover:bg-white/10"
                              : "inline-flex min-h-[44px] items-center justify-center rounded-xl border border-[#0c1b2a]/15 bg-white px-5 py-2.5 text-sm font-semibold text-[#0c1b2a] shadow-sm transition hover:border-[#C5A24A]/40 hover:bg-[#faf8f3]"
                          }
                        >
                          Talk to an advisor
                        </Link>
                        <Link
                          href="/properties"
                          className={
                            isDark
                              ? "inline-flex min-h-[44px] items-center justify-center text-sm font-semibold text-white/80 underline-offset-4 hover:text-[#EBD181] hover:underline"
                              : "inline-flex min-h-[44px] items-center justify-center text-sm font-semibold text-[#0c1b2a]/75 underline-offset-4 hover:text-[#C5A24A] hover:underline"
                          }
                        >
                          View properties
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
}

