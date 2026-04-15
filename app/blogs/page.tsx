import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";
import { BLOGS_FALLBACK } from "@/lib/content/innerPagesContent";
import Reveal from "@/components/motion/Reveal";
import { ArrowUpRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Blogs | Golden Brix Properties",
  description:
    "Expert insights, property trends, and investment tips for Mumbai and Navi Mumbai real estate.",
};

type BlogRow = {
  slug: string;
  title: string;
  excerpt: string | null;
  cover_image: string | null;
  published_at: string | null;
};

type BlogCard = {
  slug: string;
  title: string;
  excerpt: string;
  cover_image: string;
  published_at: string | null;
};

function formatBlogDate(value: string | null): string {
  if (!value) return "—";
  if (value.includes("-")) {
    try {
      return new Date(value).toLocaleDateString("en-IN", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return value;
    }
  }
  return String(value);
}

async function fetchBlogs(): Promise<BlogRow[]> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";
  if (!url || !key) return [];
  const supabase = createClient(url, key);
  const { data, error } = await supabase
    .from("blogs")
    .select("slug,title,excerpt,cover_image,published_at")
    .order("published_at", { ascending: false });
  if (error) return [];
  return (data ?? []) as BlogRow[];
}

export default async function BlogsPage() {
  const blogs = await fetchBlogs();
  const items: BlogCard[] =
    blogs.length > 0
      ? blogs.map((b) => ({
          slug: String(b.slug).trim(),
          title: b.title,
          excerpt: b.excerpt ?? "",
          cover_image: b.cover_image ?? "",
          published_at: b.published_at,
        }))
      : BLOGS_FALLBACK.map((b) => ({
          slug: String(b.slug).trim(),
          title: b.title,
          excerpt: b.excerpt,
          cover_image: b.coverImage,
          published_at: b.dateLabel,
        }));

  const [featured, ...rest] = items;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f6f4ef] text-[#0c1b2a] pt-28 sm:pt-32 pb-0">
        <section className="relative overflow-hidden bg-[#0c1b2a] text-white">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/properties/westwoods-platinum.jpg"
              alt=""
              className="hero-image h-full w-full object-cover opacity-18"
            />
            <div className="absolute inset-0 bg-linear-to-b from-[#0c1b2a]/80 via-[#0c1b2a]/65 to-[#0c1b2a]" />
          </div>

          <div
            className="pointer-events-none absolute left-10 top-20 hidden sm:block animate-float-slow"
            aria-hidden
          >
            <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md">
              <BookOpen className="h-4 w-4 text-[#EBD181]" aria-hidden />
              <span className="text-xs font-semibold tracking-wide text-white/80">
                Market insights
              </span>
            </div>
          </div>
          <div
            className="pointer-events-none absolute right-10 bottom-14 hidden md:block animate-float-slow-2"
            aria-hidden
          >
            <div className="rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur-md">
              <ArrowUpRight className="h-6 w-6 text-[#EBD181]" aria-hidden />
            </div>
          </div>
          <div
            className="pointer-events-none absolute -right-32 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[#C5A24A]/12 blur-[100px]"
            aria-hidden
          />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-10 sm:pb-20 sm:pt-14">
            <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-[#EBD181]">
                  <BookOpen className="h-3.5 w-3.5" aria-hidden />
                  Insights & guides
                </div>
                <h1
                  className="mt-6 text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  Journal
                </h1>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-white/72 sm:text-lg">
                  Expert perspectives on Mumbai and Navi Mumbai markets—written
                  for buyers and investors who value clarity over noise.
                </p>
              </div>
              <p className="text-sm text-white/45 lg:pb-2">
                {items.length} article{items.length === 1 ? "" : "s"}
              </p>
            </div>
          </div>
        </section>

        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-8 pb-20 sm:-mt-12 sm:pb-24">
          {items.length === 0 ? (
            <div className="rounded-2xl border border-[#C5A24A]/15 bg-white p-12 text-center text-[#0c1b2a]/60 shadow-md">
              No blog posts published yet.
            </div>
          ) : (
            <>
              {featured ? (
                <Reveal className="mb-10 sm:mb-12">
                  <Link
                    href={`/blogs/${featured.slug}`}
                    className="group relative block overflow-hidden rounded-3xl border border-[#C5A24A]/20 bg-white shadow-[0_28px_80px_-24px_rgba(12,27,42,0.2)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A24A] focus-visible:ring-offset-2"
                  >
                    <div className="grid lg:grid-cols-12">
                      <div className="relative h-56 overflow-hidden bg-[#0c1b2a] sm:h-64 lg:col-span-5 lg:h-[280px]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={
                            featured.cover_image || "/properties/westwoods-platinum.jpg"
                          }
                          alt={featured.title}
                          className="h-full w-full object-cover opacity-95 transition duration-700 group-hover:scale-105"
                          loading="eager"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-[#0c1b2a]/90 via-[#0c1b2a]/20 to-transparent lg:bg-linear-to-r" />
                        <span className="absolute left-5 top-5 rounded-full bg-white/15 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                          Featured
                        </span>
                      </div>
                      <div className="flex flex-col justify-start p-6 sm:p-7 lg:col-span-7 lg:p-9">
                        <time className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A24A]">
                          {formatBlogDate(featured.published_at)}
                        </time>
                        <h2
                          className="mt-3 text-xl font-bold leading-snug text-[#0c1b2a] sm:text-2xl lg:text-[1.65rem] lg:leading-snug"
                          style={{ fontFamily: "var(--font-playfair), serif" }}
                        >
                          {featured.title}
                        </h2>
                        {featured.excerpt ? (
                          <p className="mt-3 line-clamp-2 text-sm text-[#0c1b2a]/70 leading-relaxed sm:text-[15px]">
                            {featured.excerpt}
                          </p>
                        ) : null}
                        <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#C5A24A] transition group-hover:gap-3">
                          Read article
                          <ArrowUpRight className="h-4 w-4" aria-hidden />
                        </span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ) : null}

              {rest.length > 0 ? (
                <ul className="grid list-none grid-cols-1 gap-6 p-0 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                  {rest.map((b, idx) => (
                    <li key={b.slug} className="min-w-0">
                      <Reveal delay={0.04 * idx}>
                        <Link
                          href={`/blogs/${b.slug}`}
                          className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#C5A24A]/12 bg-white shadow-md transition hover:-translate-y-1 hover:border-[#C5A24A]/28 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A24A] focus-visible:ring-offset-2"
                        >
                          <div className="relative h-52 w-full overflow-hidden bg-[#0c1b2a]/5">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={b.cover_image || "/properties/westwoods-platinum.jpg"}
                              alt={b.title}
                              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-60 transition group-hover:opacity-80" />
                          </div>
                          <div className="flex flex-1 flex-col p-6 sm:p-7">
                            <time className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C5A24A]">
                              {formatBlogDate(b.published_at)}
                            </time>
                            <h2
                              className="mt-3 flex-1 font-semibold leading-snug text-[#0c1b2a] group-hover:text-[#001F3F] sm:text-lg"
                              style={{
                                fontFamily: "var(--font-playfair), serif",
                              }}
                            >
                              {b.title}
                            </h2>
                            {b.excerpt ? (
                              <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-[#0c1b2a]/65">
                                {b.excerpt}
                              </p>
                            ) : null}
                            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#C5A24A]">
                              Continue reading
                              <ArrowUpRight
                                className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                aria-hidden
                              />
                            </span>
                          </div>
                        </Link>
                      </Reveal>
                    </li>
                  ))}
                </ul>
              ) : null}
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
