"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EmiCalculator from "@/components/EmiCalculator";
import Reveal from "@/components/motion/Reveal";
import {
  Calculator,
  CheckCircle2,
  FileDown,
  IndianRupee,
  LineChart,
  MessageCircle,
  ShieldCheck,
  Percent,
} from "lucide-react";
import Link from "next/link";

export default function EmiCalculatorPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen overflow-x-hidden bg-[#f9f6f0] text-[#0c1b2a]">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-[#C5A24A]/12 bg-[#0c1b2a] text-white">
          <div
            className="pointer-events-none absolute inset-0 overflow-hidden"
            aria-hidden
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/properties/westwoods-platinum.jpg"
              alt=""
              className="hero-image h-full w-full object-cover opacity-18"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0c1b2a]/80 via-[#0c1b2a]/65 to-[#0c1b2a]" />
            <div className="absolute -top-32 left-1/2 h-[22rem] w-[min(100%,42rem)] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#C5A24A]/18 via-[#EBD181]/10 to-transparent blur-3xl" />
            <div className="absolute -right-20 top-24 h-56 w-56 rounded-full bg-[#0b1f2e]/[0.07] blur-3xl sm:right-[12%]" />
            <div className="absolute -left-16 bottom-0 h-40 w-40 rounded-full bg-[#C5A24A]/10 blur-2xl" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C5A24A]/35 to-transparent" />
          </div>

          {/* Floating accents */}
          <div
            className="pointer-events-none absolute left-10 top-20 hidden sm:block animate-float-slow"
            aria-hidden
          >
            <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md">
              <LineChart className="h-4 w-4 text-[#EBD181]" aria-hidden />
              <span className="text-xs font-semibold tracking-wide text-white/80">
                Plan smarter
              </span>
            </div>
          </div>
          <div
            className="pointer-events-none absolute right-10 bottom-16 hidden md:block animate-float-slow-2"
            aria-hidden
          >
            <div className="rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur-md">
              <ShieldCheck className="h-6 w-6 text-[#EBD181]" aria-hidden />
            </div>
          </div>

          <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-12 sm:px-8 sm:pt-24 sm:pb-16 lg:px-12 lg:pb-20">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mb-4 flex justify-center sm:mb-5">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80 shadow-sm backdrop-blur-sm sm:text-xs sm:tracking-[0.22em]">
                  <Calculator
                    className="h-3.5 w-3.5 text-[#C5A24A] sm:h-4 sm:w-4"
                    aria-hidden
                  />
                  Tools
                </span>
              </div>

              <h1
                className="text-balance text-[2rem] font-bold leading-[1.12] tracking-tight text-white sm:text-4xl sm:leading-[1.1] lg:text-[2.9rem]"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                EMI{" "}
                <span className="gold-gradient-text">Calculator</span>
              </h1>

              <p className="mx-auto mt-3 max-w-xl text-pretty text-[15px] leading-relaxed text-white/75 sm:mt-4 sm:text-base sm:leading-relaxed">
                Work out your monthly EMI, total interest, and principal vs
                interest split — with Indian numbering (₹) and a yearly
                breakdown you can export.
              </p>

              <ul
                className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:mt-7 sm:gap-3"
                aria-label="Calculator features"
              >
                <li className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-xs font-medium text-white/85 shadow-sm backdrop-blur-sm sm:text-[13px]">
                  <IndianRupee
                    className="h-3.5 w-3.5 shrink-0 text-[#C5A24A]"
                    aria-hidden
                  />
                  Lakhs & crores
                </li>
                <li className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-xs font-medium text-white/85 shadow-sm backdrop-blur-sm sm:text-[13px]">
                  <Percent
                    className="h-3.5 w-3.5 shrink-0 text-[#C5A24A]"
                    aria-hidden
                  />
                  Reducing balance
                </li>
                <li className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-xs font-medium text-white/85 shadow-sm backdrop-blur-sm sm:text-[13px]">
                  <FileDown
                    className="h-3.5 w-3.5 shrink-0 text-[#C5A24A]"
                    aria-hidden
                  />
                  CSV export
                </li>
              </ul>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#C5A24A] to-[#EBD181] px-7 py-3 text-sm font-bold text-[#001F3F] shadow-lg transition hover:brightness-105 active:scale-[0.98]"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden />
                  Talk to a loan advisor
                </Link>
                <a
                  href="#calculator"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-white/20 bg-white/5 px-7 py-3 text-sm font-semibold text-white/90 backdrop-blur-sm transition hover:bg-white/10 hover:border-[#C5A24A]/45"
                >
                  Calculate EMI
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator — no photo; soft gradient + faint gold, luxury-neutral */}
        <section
          id="calculator"
          className="relative overflow-hidden border-t border-[#C5A24A]/10 py-16 sm:py-20 md:py-24"
          aria-label="EMI calculator"
        >
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-gray-50 via-[#faf9f7] to-white"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-10%,rgba(197,162,74,0.08),transparent_55%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-24 top-1/2 h-[min(100%,28rem)] w-[min(100%,28rem)] -translate-y-1/2 rounded-full bg-[#C5A24A]/06 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#0b1f2e]/04 blur-3xl"
            aria-hidden
          />
          <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
            <Reveal className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C5A24A]">
                Calculator
              </p>
              <h2
                className="mt-4 text-3xl font-bold text-[#0c1b2a] sm:text-4xl"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                See your EMI in seconds
              </h2>
              <div className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-[#C5A24A] to-transparent" />
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  "Updated instantly as you adjust sliders",
                  "Indian currency formatting (₹) built in",
                  "Download a yearly breakdown as CSV",
                ].map((t) => (
                  <div
                    key={t}
                    className="flex items-start gap-2 rounded-2xl border border-[#0c1b2a]/10 bg-white/70 px-4 py-3 text-left text-sm text-[#0c1b2a]/70 shadow-sm"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#C5A24A]"
                      aria-hidden
                    />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <EmiCalculator />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
