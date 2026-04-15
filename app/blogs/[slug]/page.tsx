import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";
import { BLOGS_FALLBACK } from "@/lib/content/innerPagesContent";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export async function generateStaticParams() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";
  const local = BLOGS_FALLBACK.map((b) => ({ slug: b.slug }));
  if (!url || !key) return local;

  const supabase = createClient(url, key);
  const { data } = await supabase.from("blogs").select("slug");
  const remote = (data ?? []).map((r) => ({ slug: String(r.slug) }));
  const map = new Map<string, { slug: string }>();
  [...remote, ...local].forEach((x) => map.set(String(x.slug).trim(), { slug: String(x.slug).trim() }));
  return Array.from(map.values());
}

export const dynamicParams = true;

type BlogRow = {
  slug: string;
  title: string;
  excerpt: string | null;
  content: string;
  cover_image: string | null;
  published_at: string | null;
};

function formatBlogDate(value: string | null): string {
  if (!value) return "—";
  if (value.includes("-")) {
    try {
      return new Date(value).toLocaleDateString("en-IN", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return value;
    }
  }
  return String(value);
}

async function fetchBlog(slug: string): Promise<BlogRow | null> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";
  if (!url || !key) return null;
  const supabase = createClient(url, key);
  const { data, error } = await supabase
    .from("blogs")
    .select("slug,title,excerpt,content,cover_image,published_at")
    .eq("slug", slug)
    .maybeSingle();
  if (error || !data) return null;
  return data as BlogRow;
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const normalizedSlug = decodeURIComponent(slug).trim();
  const blog =
    (await fetchBlog(normalizedSlug)) ??
    (() => {
      const local = BLOGS_FALLBACK.find((b) => b.slug === normalizedSlug);
      if (!local) return null;
      return {
        slug: local.slug,
        title: local.title,
        excerpt: local.excerpt,
        content: local.content,
        cover_image: local.coverImage,
        published_at: local.dateLabel,
      } as BlogRow;
    })();

  if (!blog) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-[#f6f4ef] text-[#0c1b2a] pt-28 sm:pt-32 pb-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-[#C5A24A]/15 bg-white p-10 text-center text-[#0c1b2a]/60 shadow-md">
              Blog not found.
            </div>
            <div className="mt-8 flex justify-center">
              <Link
                href="/blogs"
                className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-linear-to-r from-[#C5A24A] to-[#EBD181] px-8 py-3 text-base font-bold text-[#001F3F] shadow-md transition hover:brightness-105 active:scale-[0.98]"
              >
                Back to Blogs
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f6f4ef] text-[#0c1b2a] pt-28 sm:pt-32 pb-0">
        <div className="relative overflow-hidden bg-[#0c1b2a] pb-8 pt-6 sm:pb-12 sm:pt-8">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="/properties/sai-world-one.jpg"
              alt=""
              className="hero-image h-full w-full object-cover opacity-18"
            />
            <div className="absolute inset-0 bg-linear-to-b from-[#0c1b2a]/80 via-[#0c1b2a]/65 to-[#0c1b2a]" />
          </div>

          <div
            className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-70"
            aria-hidden
          />
          <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition hover:text-[#EBD181]"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Back to journal
            </Link>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.3em] text-[#EBD181]">
              {formatBlogDate(blog.published_at)}
            </p>
            <h1
              className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              {blog.title}
            </h1>
            {blog.excerpt ? (
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/72 sm:text-lg">
                {blog.excerpt}
              </p>
            ) : null}
          </div>
        </div>

        <div className="relative z-20 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 -mt-6 pb-20 sm:-mt-10 sm:pb-24">
          <article className="overflow-hidden rounded-3xl border border-[#C5A24A]/15 bg-white shadow-[0_30px_90px_-28px_rgba(12,27,42,0.18)]">
            <div className="relative aspect-21/9 min-h-[200px] w-full bg-[#0c1b2a] sm:aspect-21/8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={blog.cover_image || "/properties/westwoods-platinum.jpg"}
                alt={blog.title}
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#0c1b2a]/40 to-transparent" />
            </div>
            <div className="border-t border-[#C5A24A]/10 px-6 py-10 sm:px-12 sm:py-14">
              <div className="mx-auto max-w-3xl">
                <div className="mb-10 flex items-center gap-4">
                  <div className="h-px flex-1 bg-linear-to-r from-transparent via-[#C5A24A]/40 to-transparent" />
                  <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A24A]">
                    Reading
                  </span>
                  <div className="h-px flex-1 bg-linear-to-r from-transparent via-[#C5A24A]/40 to-transparent" />
                </div>
                <div className="prose prose-lg prose-slate max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-[#0c1b2a] prose-p:text-[#0c1b2a]/80 prose-p:leading-relaxed prose-li:text-[#0c1b2a]/80 prose-strong:text-[#0c1b2a] prose-a:text-[#C5A24A] prose-a:no-underline hover:prose-a:underline prose-hr:border-[#0c1b2a]/10">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      h2: (props) => (
                        <h2
                          {...props}
                          className="mt-10 scroll-mt-28 text-2xl sm:text-[1.7rem]"
                          style={{ fontFamily: "var(--font-playfair), serif" }}
                        />
                      ),
                      h3: (props) => (
                        <h3
                          {...props}
                          className="mt-8 scroll-mt-28 text-xl"
                          style={{ fontFamily: "var(--font-playfair), serif" }}
                        />
                      ),
                      ul: (props) => (
                        <ul {...props} className="my-6 space-y-2" />
                      ),
                      ol: (props) => (
                        <ol {...props} className="my-6 space-y-2" />
                      ),
                      li: (props) => <li {...props} className="pl-1" />,
                      blockquote: (props) => (
                        <blockquote
                          {...props}
                          className="my-8 rounded-2xl border border-[#C5A24A]/18 bg-[#faf8f3] px-6 py-4 text-[#0c1b2a]/75"
                        />
                      ),
                    }}
                  >
                    {blog.content}
                  </ReactMarkdown>
                </div>
                <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-[#0c1b2a]/8 pt-10 sm:flex-row">
                  <p className="text-center text-sm text-[#0c1b2a]/55 sm:text-left">
                    Questions about this topic? Our team is one message away.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex min-h-[48px] shrink-0 items-center justify-center rounded-xl bg-linear-to-r from-[#C5A24A] to-[#EBD181] px-8 py-3 text-sm font-bold text-[#001F3F] shadow-md transition hover:brightness-105 active:scale-[0.98]"
                  >
                    Speak with an advisor
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
