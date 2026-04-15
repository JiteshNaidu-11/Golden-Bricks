import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/motion/Reveal";
import { createClient } from "@supabase/supabase-js";
import { TESTIMONIALS_FALLBACK } from "@/lib/content/innerPagesContent";
import { Quote, Star } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Testimonials | Golden Brix Properties",
  description:
    "What premium buyers and investors say about Golden Brix Properties across Mumbai & Navi Mumbai.",
};

type Row = {
  id: string;
  name: string;
  quote: string;
  role: string | null;
  rating: number | null;
};

type DisplayItem = {
  name: string;
  location: string;
  rating: 4 | 5;
  text: string;
};

async function fetchTestimonials(): Promise<Row[]> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";
  if (!url || !key) return [];
  const supabase = createClient(url, key);
  const { data, error } = await supabase
    .from("testimonials")
    .select("id,name,quote,role,rating")
    .order("created_at", { ascending: false })
    .limit(20);
  if (error) return [];
  return (data ?? []) as Row[];
}

function toDisplayItems(rows: Row[]): DisplayItem[] {
  if (!rows.length) return [...TESTIMONIALS_FALLBACK];
  return rows.map((r) => ({
    name: r.name,
    location: r.role ?? "Mumbai & Navi Mumbai",
    rating: (typeof r.rating === "number" ? r.rating : 5) as 4 | 5,
    text: r.quote,
  }));
}

function StarRow({ rating }: { rating: number }) {
  const n = Math.min(5, Math.max(1, Math.round(rating)));
  return (
    <div className="flex items-center gap-0.5" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: n }).map((_, i) => (
        <Star
          key={i}
          className="h-4 w-4 fill-[#C5A24A] text-[#C5A24A] sm:h-[18px] sm:w-[18px]"
          aria-hidden
        />
      ))}
    </div>
  );
}

export default async function TestimonialsPage() {
  const rows = await fetchTestimonials();
  const items = toDisplayItems(rows);
  const [featured, ...rest] = items;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f6f4ef] text-[#0c1b2a] pt-28 sm:pt-32 pb-0">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#0c1b2a] text-white">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/Hero/4.jpg"
              alt=""
              className="hero-image h-full w-full object-cover opacity-18"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0c1b2a]/75 via-[#0c1b2a]/65 to-[#0c1b2a]" />
          </div>

          {/* Floating accents */}
          <div
            className="pointer-events-none absolute left-10 top-20 hidden sm:block animate-float-slow"
            aria-hidden
          >
            <div className="rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur-md">
              <Star className="h-6 w-6 text-[#EBD181]" aria-hidden />
            </div>
          </div>
          <div
            className="pointer-events-none absolute right-12 bottom-16 hidden md:block animate-float-slow-2"
            aria-hidden
          >
            <div className="rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur-md">
              <Quote className="h-6 w-6 text-[#EBD181]" aria-hidden />
            </div>
          </div>
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#C5A24A]/10 blur-[120px]"
            aria-hidden
          />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-10 sm:pb-20 sm:pt-14">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#EBD181]">
                Testimonials
              </p>
              <h1
                className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Trusted by
                <span className="mt-1 block bg-gradient-to-r from-[#EBD181] via-[#C5A24A] to-[#EBD181] bg-clip-text text-transparent">
                  premium buyers
                </span>
              </h1>
              <p className="mt-6 text-base leading-relaxed text-white/75 sm:text-lg">
                Outcomes matter—and so does how calm the journey feels. Here is
                what clients say about working with Golden Brix.
              </p>
            </div>
          </div>
        </section>

        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-10 pb-20 sm:-mt-14 sm:pb-24">
          {/* Featured testimonial */}
          {featured ? (
            <Reveal className="mb-10 sm:mb-14">
              <article className="relative overflow-hidden rounded-3xl border border-[#C5A24A]/25 bg-white shadow-[0_30px_90px_-25px_rgba(12,27,42,0.22)]">
                <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-[#C5A24A] via-[#EBD181] to-[#C5A24A]" />
                <div className="grid lg:grid-cols-5">
                  <div className="relative flex min-h-[220px] items-end justify-center bg-gradient-to-br from-[#0c1b2a] to-[#001F3F] p-8 lg:col-span-2 lg:min-h-[320px]">
                    <Quote
                      className="absolute right-6 top-6 h-24 w-24 text-white/10 sm:h-32 sm:w-32"
                      strokeWidth={1}
                      aria-hidden
                    />
                    <div className="relative text-center">
                      <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white/10 text-2xl font-bold text-[#EBD181] ring-2 ring-[#C5A24A]/40">
                        {featured.name
                          .split(" ")
                          .map((p) => p[0])
                          .slice(0, 2)
                          .join("")}
                      </div>
                      <p className="mt-5 font-semibold text-white">
                        {featured.name}
                      </p>
                      <p className="mt-1 text-sm text-white/65">
                        {featured.location}
                      </p>
                      <div className="mt-4 flex justify-center">
                        <StarRow rating={featured.rating} />
                      </div>
                    </div>
                  </div>
                  <div className="relative p-8 sm:p-10 lg:col-span-3 lg:p-12">
                    <Quote
                      className="absolute right-8 top-8 h-10 w-10 text-[#C5A24A]/20"
                      aria-hidden
                    />
                    <p
                      className="relative text-lg leading-relaxed text-[#0c1b2a]/85 sm:text-xl"
                      style={{ fontFamily: "var(--font-playfair), serif" }}
                    >
                      “{featured.text}”
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ) : null}

          {/* Grid */}
          <ul className="grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {rest.map((t, idx) => (
              <li key={`${t.name}-${idx}`} className="min-w-0">
                <Reveal delay={0.03 * idx}>
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#C5A24A]/15 bg-white p-7 shadow-md transition hover:-translate-y-1 hover:border-[#C5A24A]/30 hover:shadow-xl sm:p-8">
                    <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-[#C5A24A]/5 transition group-hover:bg-[#C5A24A]/10" />
                    <div className="relative mb-5 flex items-start justify-between gap-3">
                      <StarRow rating={t.rating} />
                      <Quote
                        className="h-8 w-8 shrink-0 text-[#C5A24A]/25"
                        aria-hidden
                      />
                    </div>
                    <p className="relative flex-1 text-[#0c1b2a]/80 leading-relaxed">
                      “{t.text}”
                    </p>
                    <div className="relative mt-8 flex items-center gap-4 border-t border-[#0c1b2a]/8 pt-6">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0c1b2a] text-sm font-bold text-[#EBD181] ring-2 ring-[#C5A24A]/25">
                        {t.name
                          .split(" ")
                          .map((p) => p[0])
                          .slice(0, 2)
                          .join("")}
                      </div>
                      <div className="min-w-0">
                        <p className="truncate font-semibold text-[#0c1b2a]">
                          {t.name}
                        </p>
                        <p className="truncate text-sm text-[#0c1b2a]/55">
                          {t.location}
                        </p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal className="mt-14 sm:mt-16">
            <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-[#C5A24A]/20 bg-gradient-to-br from-white to-[#faf8f3] px-8 py-10 text-center shadow-lg sm:flex-row sm:text-left">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A24A]">
                  Next step
                </p>
                <p className="mt-2 max-w-xl text-lg font-semibold text-[#0c1b2a]">
                  Experience the same level of care on your property journey.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex min-h-[48px] shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-[#C5A24A] to-[#EBD181] px-8 py-3.5 text-sm font-bold text-[#001F3F] shadow-md transition hover:brightness-105 active:scale-[0.98]"
              >
                Book a consultation
              </Link>
            </div>
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
