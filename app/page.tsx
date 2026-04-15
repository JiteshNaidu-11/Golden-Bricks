'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Star,
  Quote,
} from "lucide-react";
import Link from "next/link";
import { PROPERTIES_CATALOG } from "@/lib/propertiesCatalog";
import PropertyListingCard from "@/components/PropertyListingCard";
import { useSupabaseQuery } from "@/hooks/useSupabaseQuery";
import Reveal from "@/components/motion/Reveal";
import {
  BLOGS_FALLBACK,
  SERVICES_COPY,
  TESTIMONIALS_FALLBACK,
} from "@/lib/content/innerPagesContent";
import ServicesShowcase from "@/components/services/ServicesShowcase";

const FEATURED_PROPERTIES_ON_HOME = 6;
const FORMSUBMIT_EMAIL = "goldenbrix@gmail.com";

export default function Home() {
  const [guideSubmitting, setGuideSubmitting] = useState(false);
  const [guideStatus, setGuideStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );
  const [guideError, setGuideError] = useState("");

  const { data: testimonialsData } = useSupabaseQuery(
    "testimonials:home",
    async (supabase) => {
      const { data, error } = await supabase
        .from("testimonials")
        .select("id,name,quote,role,rating,created_at")
        .order("created_at", { ascending: false })
        .limit(6);
      if (error) throw error;
      return (data ?? []).map((t) => ({
        id: String(t.id),
        name: t.name as string,
        text: (t.quote as string) ?? "",
        role: (t.role as string) ?? "",
        rating: typeof t.rating === "number" ? t.rating : 5,
      }));
    },
  );

  const { data: blogsData } = useSupabaseQuery("blogs:home", async (supabase) => {
    const { data, error } = await supabase
      .from("blogs")
      .select("slug,title,excerpt,cover_image,published_at")
      .order("published_at", { ascending: false })
      .limit(6);
    if (error) throw error;
    return (data ?? []).map((b) => ({
      slug: b.slug as string,
      title: b.title as string,
      excerpt: (b.excerpt as string) ?? "",
      image: (b.cover_image as string) ?? "",
      date: b.published_at
        ? new Date(String(b.published_at)).toLocaleDateString("en-IN", {
            month: "short",
            year: "numeric",
          })
        : "",
    }));
  });

  const homeBlogs =
    (blogsData ?? []).length > 0
      ? (blogsData ?? [])
      : BLOGS_FALLBACK.map((b) => ({
          slug: b.slug,
          title: b.title,
          excerpt: b.excerpt,
          image: b.coverImage,
          date: b.dateLabel,
        }));

  const homeTestimonials =
    (testimonialsData ?? []).length > 0
      ? (testimonialsData ?? []).map((t) => ({
          ...t,
          rating:
            typeof t.rating === "number" && t.rating > 0 ? t.rating : 5,
        }))
      : TESTIMONIALS_FALLBACK.slice(0, 6).map((t, idx) => ({
          id: `fallback-${idx}-${t.name}`,
          name: t.name,
          text: t.text,
          role: t.location,
          rating: t.rating,
        }));

  const heroImages = [
    "/images/Hero/1.jpg",
    "/images/Hero/2.jpg",
    "/images/Hero/3.jpg",
    "/images/Hero/4.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const handleGuideSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    try {
      if (guideSubmitting) return;
      setGuideStatus("idle");
      setGuideError("");
      setGuideSubmitting(true);
      const fd = new FormData(form);
      const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent(FORMSUBMIT_EMAIL)}`;
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: String(fd.get("name") ?? ""),
          email: String(fd.get("email") ?? ""),
          phone: String(fd.get("phone") ?? ""),
          budget: String(fd.get("budget") ?? ""),
          location: String(fd.get("location") ?? ""),
          source: "home_guide",
          page: "/",
          message: "Requested free property investment guide",
          _subject: "New lead — Investment Guide",
          _template: "table",
          _captcha: "false",
        }),
      });
      if (!res.ok) throw new Error("Failed to submit. Please try again.");
      setGuideStatus("success");
      form.reset();
    } catch (err) {
      setGuideStatus("error");
      setGuideError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setGuideSubmitting(false);
    }
  };

  /* Hidden: Download Investment Guide CTA — uncomment to restore
  const handleDownloadInvestmentGuide = async () => {
    try {
      const res = await fetch("/guides/investment-guide.pdf");
      if (res.ok) {
        const blob = await res.blob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "Golden-Brix-Investment-Guide.pdf";
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
        return;
      }
    } catch {
    }
    const text = [
      "Golden Brix Properties — Investment Guide",
      "",
      "Mumbai & Navi Mumbai — introductory overview",
      "",
      "Add public/guides/investment-guide.pdf to your site to offer a full branded PDF.",
      "",
      "Contact: sunitaestate@gmail.com",
    ].join("\n");
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Golden-Brix-Investment-Guide.txt";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };
  */

  // const developers = [
  //   { name: "LODHA", description: "" },
  //   { name: "GODREJ PROPERTIES", description: "" },
  //   { name: "OBEROI REALTY", description: "" },
  //   { name: "RUNWAL GROUP", description: "" },
  //   { name: "KALPATARU", description: "" },
  //   { name: "RUSTOMJEE", description: "" },
  //   { name: "RAHEJA", description: "" },
  //   { name: "SHAPOORJI PALLONJI", description: "" },
  //   { name: "MAHINDRA LIFESPACES", description: "" },
  //   { name: "PRESTIGE GROUP", description: "" }
  // ];

  return (
    <main className="min-h-screen bg-white text-[#001F3F]">

      <Header />

      {/* HERO */}
<section
  id="home"
  className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16"
>
  {/* Background Slider */}
  <div className="absolute inset-0">
    {heroImages.map((img, index) => (
      <img
        key={index}
        src={img}
        alt="Luxury Property"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-2000 ${
          index === currentImage ? "opacity-100" : "opacity-0"
        }`}
      />
    ))}

    <div className="absolute inset-0 bg-black/55"></div>
  </div>

  <div className="relative z-10 container mx-auto px-6 lg:px-20">

    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

      {/* LEFT CONTENT */}
      <div>

        {/* Brand Label */}
        <p className="text-[#C5A24A] uppercase tracking-widest text-sm mb-4">
          Golden Brix Properties 
        </p>

        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          Luxury Living
          <span className="block gold-gradient-text">
            In Mumbai
          </span>
        </h1>

        <p className="text-white/80 mt-6 text-base md:text-lg max-w-xl">
          Discover exclusive residences, premium investment opportunities,
          and high-end properties across Mumbai and Navi Mumbai with
          <span className="font-semibold text-white"> Golden Brix Properties.</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mt-8">

          <a
            href="#contact"
            className="px-7 py-3 gold-gradient text-white font-semibold rounded-lg hover:scale-105 transition-all inline-block text-center"
          >
            Book Consultation
          </a>

          {/* Download Investment Guide — hidden; uncomment block + handler above to restore
          <button
            type="button"
            onClick={handleDownloadInvestmentGuide}
            className="px-7 py-3 border border-[#C5A24A] text-white rounded-lg hover:bg-[#C5A24A] hover:text-black transition-all"
          >
            Download Investment Guide
          </button>
          */}

        </div>

        {/* Trust Stats */}
        <div className="flex flex-wrap gap-8 mt-10 text-white">

          <div>
            <p className="text-2xl md:text-3xl font-bold gold-gradient-text">120+</p>
            <p className="text-white/70 text-sm">Properties Sold</p>
          </div>

          <div>
            <p className="text-2xl md:text-3xl font-bold gold-gradient-text">25+</p>
            <p className="text-white/70 text-sm">Developers</p>
          </div>

          <div>
            <p className="text-2xl md:text-3xl font-bold gold-gradient-text">10+</p>
            <p className="text-white/70 text-sm">Years Experience</p>
          </div>

        </div>

      </div>

     {/* RIGHT SIDE LEAD MAGNET */}
<form
  onSubmit={handleGuideSubmit}
  className="bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-2xl shadow-2xl max-w-sm w-full ml-auto"
>

  {/* Stored in Supabase `leads` */}

  <h3 className="text-white text-base font-semibold mb-2">
    Get Free Property Investment Guide
  </h3>

  <p className="text-white/70 mb-4 text-xs leading-relaxed">
    Discover the best areas to invest in Mumbai, price trends,
    upcoming luxury projects and ROI insights curated by
    Golden Brix Properties experts.
  </p>

  <div className="space-y-3">

    <input
      name="name"
      type="text"
      required
      autoComplete="name"
      placeholder="Your Name"
      className="w-full px-3 py-2 rounded-lg bg-white/20 text-white placeholder-white/60 outline-none text-sm border border-transparent focus:border-[#C5A24A]"
    />

    <input
      name="email"
      type="email"
      required
      autoComplete="email"
      placeholder="Email Address"
      className="w-full px-3 py-2 rounded-lg bg-white/20 text-white placeholder-white/60 outline-none text-sm border border-transparent focus:border-[#C5A24A]"
    />

    <input
      name="phone"
      type="tel"
      required
      inputMode="tel"
      pattern="^[0-9+()\\s-]{8,18}$"
      title="Please enter a valid phone number."
      autoComplete="tel"
      placeholder="Phone Number"
      className="w-full px-3 py-2 rounded-lg bg-white/20 text-white placeholder-white/60 outline-none text-sm border border-transparent focus:border-[#C5A24A]"
    />

    <select
      name="budget"
      required
      defaultValue="₹50L - ₹1Cr"
      className="w-full px-3 py-2 rounded-lg bg-white/20 text-white outline-none text-sm border border-transparent focus:border-[#C5A24A]"
    >
      <option className="text-black" value="₹50L - ₹1Cr">₹50L - ₹1Cr</option>
      <option className="text-black" value="₹1Cr - ₹2Cr">₹1Cr - ₹2Cr</option>
      <option className="text-black" value="₹2Cr - ₹5Cr">₹2Cr - ₹5Cr</option>
      <option className="text-black" value="₹5Cr+">₹5Cr+</option>
    </select>

    <select
      name="location"
      required
      defaultValue="Navi Mumbai"
      className="w-full px-3 py-2 rounded-lg bg-white/20 text-white outline-none text-sm border border-transparent focus:border-[#C5A24A]"
    >
      <option className="text-black" value="Navi Mumbai">Navi Mumbai</option>
      <option className="text-black" value="Thane">Thane</option>
      <option className="text-black" value="Powai">Powai</option>
      <option className="text-black" value="Andheri">Andheri</option>
      <option className="text-black" value="Open to suggestions">Open to suggestions</option>
    </select>

    <button
      type="submit"
      disabled={guideSubmitting}
      className="w-full gold-gradient py-2.5 rounded-lg font-semibold text-white text-sm disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {guideSubmitting ? "Sending…" : "Get Free Guide"}
    </button>

  </div>

  {guideStatus === "success" ? (
    <div className="mt-4 rounded-xl border border-emerald-200/40 bg-emerald-50/10 px-3.5 py-3 text-xs text-emerald-100">
      <p className="font-semibold text-emerald-100">Request received.</p>
      <p className="mt-1 text-emerald-100/80">
        We&apos;ll share the guide and contact you shortly.
      </p>
    </div>
  ) : null}

  {guideStatus === "error" ? (
    <div className="mt-4 rounded-xl border border-red-200/30 bg-red-50/10 px-3.5 py-3 text-xs text-red-100">
      <p className="font-semibold text-red-100">Couldn&apos;t submit.</p>
      <p className="mt-1 text-red-100/80">{guideError || "Please try again."}</p>
    </div>
  ) : null}

  <p className="text-xs text-white/50 mt-3">
    No spam. Your information is safe with us.
  </p>

</form>
    </div>

  </div>
</section>

{/* Projects section — featured subset; full catalog at /properties */}
<section id="projects" className="py-20 sm:py-24 bg-[#f6f4ef]">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

<div className="text-center mb-12 sm:mb-14">

<p className="text-[#C5A24A] uppercase text-sm tracking-widest">
Our Portfolio
</p>

<h2
className="text-3xl sm:text-4xl font-bold text-[#0c1b2a]"
style={{ fontFamily: "var(--font-playfair), serif" }}
>
Featured properties
</h2>

<p className="mt-4 text-[#0c1b2a]/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
  A curated selection of our latest listings. Explore the full portfolio anytime.
</p>

</div>

<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 list-none p-0 m-0">
{PROPERTIES_CATALOG.slice(0, FEATURED_PROPERTIES_ON_HOME).map((property) => (
  <li key={property.slug} className="min-w-0">
    <PropertyListingCard property={property} />
  </li>
))}
</ul>

<div className="flex justify-center mt-12 sm:mt-14">
  <Link
    href="/properties"
    className="inline-flex items-center justify-center min-h-[48px] px-8 sm:px-10 py-3 sm:py-3.5 rounded-xl text-base font-semibold gold-gradient text-[#001F3F] shadow-md hover:shadow-lg hover:brightness-105 active:scale-[0.98] transition-all duration-300"
  >
    Explore All Properties
  </Link>
</div>

</div>
</section>

      {/* About Section */}
<section id="about" className="py-24 px-4 sm:px-8 lg:px-12 bg-linear-to-b from-[#faf8f3] via-[#f3efe6] to-[#ece6da] relative overflow-hidden">

  {/* Background accents */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-[#C5A24A]/10 rounded-full blur-[120px]"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#001F3F]/10 rounded-full blur-[120px]"></div>

  <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 grid lg:grid-cols-2 gap-16 items-center relative z-10">

    {/* LEFT CONTENT */}
    <div>

      <p className="text-[#C5A24A] uppercase tracking-[0.25em] text-xs mb-4">
        About Golden Brix Properties 
      </p>

      <h2
        className="text-4xl lg:text-5xl font-bold leading-tight mb-6 text-[#0c1b2a]"
        style={{ fontFamily: "var(--font-playfair), serif" }}
      >
        Your Trusted Partner in
        <span className="block text-[#C5A24A]">
          Premium Real Estate
        </span>
      </h2>

      <p className="text-gray-600 mb-8 leading-relaxed max-w-xl">
        Golden Brix Properties is a trusted real estate advisory specializing in
        premium residential and investment opportunities across Mumbai
        and Navi Mumbai. With years of industry expertise, we help
        clients discover properties aligned with their lifestyle,
        financial goals, and long-term investment strategies.
      </p>

      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">

        <div className="flex items-center gap-3">
          <span className="text-[#C5A24A] text-lg">✓</span>
          <span>15+ Years of Experience</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[#C5A24A] text-lg">✓</span>
          <span>500+ Happy Families</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[#C5A24A] text-lg">✓</span>
          <span>Transparent Dealings</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[#C5A24A] text-lg">✓</span>
          <span>RERA Registered</span>
        </div>

      </div>

      <Link
        href="/about"
        className="mt-10 inline-flex items-center justify-center px-8 py-4 bg-[#C5A24A] text-white rounded-lg font-semibold hover:scale-105 transition shadow-lg"
      >
        Learn More About Us
      </Link>

    </div>

    {/* IMAGE */}
    <div className="relative group">

      <img
        src="/images/photo.jpeg"
        alt="Golden Brix advisor"
        className="rounded-xl shadow-2xl w-full h-[420px] object-cover object-[50%_20%] transition-transform duration-500 group-hover:scale-105"
      />

      {/* Experience badge */}
      <div className="absolute -bottom-8 -left-8 bg-[#C5A24A] text-white px-10 py-6 rounded-xl shadow-xl">

        <p className="text-3xl font-bold">15+</p>
        <p className="text-sm opacity-90">Years Experience</p>

      </div>

    </div>

  </div>

</section>

      {/*Services */}
      <section id="services">
        <ServicesShowcase
          eyebrow="What we offer"
          heading="Services that feel premium"
          subheading="Less noise, more certainty. We combine verified options, calm comparisons, and execution support—so you move with confidence."
          variant="dark"
          items={SERVICES_COPY.map((s) => {
            const iconKey =
              s.key === "buying"
                ? ("handshake" as const)
                : s.key === "investment"
                  ? ("trendingUp" as const)
                  : s.key === "loan"
                    ? ("badgePercent" as const)
                    : ("settings" as const);
            const href =
              s.key === "buying"
                ? "/services/buying-selling"
                : s.key === "investment"
                  ? "/services/investor-advisory"
                  : s.key === "loan"
                    ? "/contact"
                    : "/services/property-management";

            const imageSrc =
              s.key === "buying"
                ? "/properties/one-platinum.jpg"
                : s.key === "investment"
                  ? "/properties/codename-growth.jpeg"
                  : s.key === "loan"
                    ? "/properties/sai-world-one.jpg"
                    : "/properties/goodwill-wisteria.jpeg";

            return {
              key: s.key,
              title: s.title,
              description: s.description,
              benefits: [...s.benefits],
              why: "why" in s ? (s as unknown as { why?: string }).why ?? "" : "",
              href,
              imageSrc,
              iconKey,
            };
          })}
        />
      </section>

      {/*Enhanced TESTIMONIALS */}
      <section id="testimonials" className="relative overflow-hidden py-24 px-6 lg:px-20 bg-linear-to-b from-[#f6f4ef] via-[#faf8f3] to-[#f0ebe0]">
        <div
          className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full bg-[#C5A24A]/10 blur-[90px]"
          aria-hidden
        />
        <div className="relative z-10 mx-auto max-w-7xl">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center sm:mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C5A24A]">
              Testimonials
            </p>
            <h2
              className="mt-4 text-4xl font-bold text-[#0c1b2a] sm:text-5xl"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              What our clients say
            </h2>
            <div className="mx-auto mt-5 h-px w-24 bg-linear-to-r from-transparent via-[#C5A24A] to-transparent" />
            <p className="mt-5 text-[#0c1b2a]/65 leading-relaxed">
              Real feedback from buyers and investors across Mumbai and Navi Mumbai.
            </p>
          </Reveal>

          <div className="grid max-w-7xl gap-6 md:grid-cols-3 md:gap-8">
            {homeTestimonials.length ? (
              homeTestimonials.slice(0, 3).map((t, idx) => (
                <Reveal key={t.id} delay={0.04 * idx}>
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#C5A24A]/15 bg-white p-7 shadow-md transition hover:-translate-y-1 hover:border-[#C5A24A]/30 hover:shadow-xl sm:p-8">
                    <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-[#C5A24A]/6 transition group-hover:bg-[#C5A24A]/10" />
                    <Quote className="relative mb-4 h-9 w-9 text-[#C5A24A]/30" aria-hidden />
                    <div className="relative mb-5 flex gap-0.5">
                      {Array.from({
                        length: Math.min(
                          5,
                          Math.max(1, Math.round(Number(t.rating) || 5)),
                        ),
                      }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-[#C5A24A] text-[#C5A24A]"
                          aria-hidden
                        />
                      ))}
                    </div>
                    <p
                      className="relative flex-1 text-[#0c1b2a]/78 leading-relaxed"
                      style={{ fontFamily: "var(--font-playfair), serif" }}
                    >
                      “{t.text}”
                    </p>
                    <div className="relative mt-8 flex items-center gap-4 border-t border-[#0c1b2a]/8 pt-6">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0c1b2a] text-xs font-bold text-[#EBD181] ring-2 ring-[#C5A24A]/25">
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
                        {t.role ? (
                          <p className="truncate text-sm text-[#0c1b2a]/55">
                            {t.role}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))
            ) : (
              <div className="md:col-span-3 rounded-2xl border border-[#C5A24A]/15 bg-white p-10 text-center text-[#0c1b2a]/55 shadow-sm">
                Testimonials will appear here once published.
              </div>
            )}
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              href="/testimonials"
              className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-[#C5A24A]/35 bg-white px-8 py-3 text-sm font-semibold text-[#001F3F] shadow-sm transition hover:border-[#C5A24A] hover:bg-[#faf8f3]"
            >
              View all testimonials
            </Link>
          </div>
        </div>
      </section>

{/* BLOGS */}
<section id="blogs" className="py-24 px-6 lg:px-20 bg-white">

<Reveal className="max-w-7xl mx-auto text-center mb-16">

<p className="text-[#C5A24A] uppercase text-sm tracking-widest">
Insights & Guides
</p>

<h2
className="text-4xl font-bold"
style={{ fontFamily: "var(--font-playfair), serif" }}
>
Latest Real Estate Blogs
</h2>

<p className="text-gray-500 mt-4 max-w-2xl mx-auto">
Expert insights, property trends, and investment tips for Mumbai
and Navi Mumbai real estate buyers.
</p>

</Reveal>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">

{homeBlogs.length ? (
  homeBlogs.slice(0, 3).map((blog, idx)=> (

<Reveal key={blog.slug} delay={0.03 * idx}>
<Link
href={`/blogs/${blog.slug}`}
className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
>

<img
src={blog.image || "/images/Hero/3.jpg"}
alt={blog.title}
className="h-52 w-full object-cover group-hover:scale-105 transition duration-500"
/>

<div className="p-6">

<p className="text-xs text-[#C5A24A] mb-2">{blog.date || "—"}</p>

<h3 className="font-semibold text-lg mb-4 leading-snug">
{blog.title}
</h3>

<span className="text-[#C5A24A] font-medium text-sm hover:underline">
Read Article →
</span>

</div>

</Link>
</Reveal>

  ))
) : (
  <div className="md:col-span-2 lg:col-span-3 rounded-2xl border border-[#C5A24A]/15 bg-[#faf8f3] p-10 text-center text-gray-600">
    No blog posts published yet.
  </div>
)}

</div>

</section>

      {/* DEVELOPERS
      <section className="py-20 px-6 lg:px-20 bg-[#001F3F]">

        <div className="max-w-7xl mx-auto text-center">

          <h2
            className="text-4xl font-bold mb-4 gold-gradient-text"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Developers We Work With
          </h2>

          <p className="text-white/70 mb-12">
            Trusted partnerships with India’s leading real estate developers
          </p>

          <DevelopersGrid developers={developers} compact={true} />

        </div>

      </section> */}

      {/* Final CTA / Contact & Careers */}
<section id="careers" className="py-28 px-6 lg:px-20 bg-[#F7F7F7] text-center">
  <div id="contact" className="max-w-4xl mx-auto">
    <h2
      className="text-4xl lg:text-5xl font-bold mb-6 text-[#1A1A1B]"
      style={{ fontFamily: 'var(--font-playfair), serif' }}
    >
      Find Your Dream Home Today
    </h2>

    <p className="max-w-2xl mx-auto mb-10 text-[#4A4A4A] text-lg">
      Let our experts help you discover the perfect property in Mumbai or
      Navi Mumbai. Start your real estate journey with Golden Brix Properties today.
    </p>

    <div className="flex justify-center gap-4 flex-wrap">
      {/* WHATSAPP BUTTON */}
  <a
    href="https://wa.me/917738384100?text=Hello%20I%20am%20interested%20in%20properties"
    target="_blank"
    rel="noopener noreferrer"
    className="px-10 py-4 bg-[#C5A059] text-white rounded-lg font-semibold hover:bg-[#B38F4D] transition-all shadow-lg hover:shadow-xl"
  >
    Contact Us Now
  </a>

  {/* VIEW PROPERTIES BUTTON */}
  <Link href="/#projects">
    <button className="px-10 py-4 border-2 border-[#C5A059] text-[#C5A059] rounded-lg font-semibold hover:bg-[#C5A059] hover:text-white transition-all">
      View Properties
    </button>
  </Link>
    </div>
  </div>
</section>

      <Footer />

    </main>
  );
}