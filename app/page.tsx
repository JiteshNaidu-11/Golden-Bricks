'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DevelopersGrid from '@/components/DevelopersGrid';
import { Star, CheckCircle, Home as HomeIcon, Building2, TrendingUp, Quote } from 'lucide-react';
import Link from "next/link";
import { PROPERTIES_CATALOG } from "@/lib/propertiesCatalog";
import PropertyListingCard from "@/components/PropertyListingCard";

const FEATURED_PROPERTIES_ON_HOME = 6;

const FORMSUBMIT_AJAX = "https://formsubmit.co/ajax/sunitaestate@gmail.com";

export default function Home() {
  const [guideSubmitting, setGuideSubmitting] = useState(false);

  const heroImages = [
    "/images/Hero/1.jpg",
    "/images/Hero/2.jpg",
    "/images/Hero/3.jpg",
    "/images/Hero/4.jpg"
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const handleGuideSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setGuideSubmitting(true);
    try {
      const res = await fetch(FORMSUBMIT_AJAX, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      const data = (await res.json().catch(() => null)) as {
        success?: boolean;
        message?: string;
      } | null;
      if (res.ok && data?.success !== false) {
        alert("Thank you! We will contact you shortly.");
        form.reset();
      } else {
        alert(
          data?.message?.trim() ||
            "Something went wrong. Please try again in a moment.",
        );
      }
    } catch {
      alert("Something went wrong. Please check your connection and try again.");
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
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ${
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

  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_template" value="table" />
  <input type="hidden" name="_subject" value="Free Property Investment Guide — Home" />

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
<section id="about" className="py-24 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-[#faf8f3] via-[#f3efe6] to-[#ece6da] relative overflow-hidden">

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

      <button className="mt-10 px-8 py-4 bg-[#C5A24A] text-white rounded-lg font-semibold hover:scale-105 transition shadow-lg">
        Learn More About Us
      </button>

    </div>

    {/* IMAGE */}
    <div className="relative group">

      <img
        src="/images/Hero/1.jpg"
        alt="Luxury property"
        className="rounded-xl shadow-2xl w-full h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
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
      <section id="services" className="py-24 px-6 lg:px-20 bg-[#0c1b2a] text-white">

  <div className="max-w-7xl mx-auto text-center mb-16">

    <p className="text-[#C5A24A] tracking-widest text-sm uppercase">
      What We Offer
    </p>

    <h2
      className="text-4xl lg:text-5xl font-bold mt-4"
      style={{ fontFamily: 'var(--font-playfair), serif' }}
    >
      Our Services
    </h2>

  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">

    {[
      {
        title: "Buy / Sell / Rent",
        desc: "Complete end-to-end support for buying, selling, or renting residential properties."
      },
      {
        title: "Residential Properties",
        desc: "Discover luxury apartments, villas, and premium residences in top locations."
      },
      {
        title: "Commercial Properties",
        desc: "Find the perfect office, retail space, or investment property."
      },
      {
        title: "Investment Advisory",
        desc: "Data-driven property investment strategies to maximize ROI."
      }
    ].map((service, i) => (

      <div
        key={i}
        className="bg-white/5 border border-white/10 rounded-xl p-8 hover:border-[#C5A24A] hover:-translate-y-2 transition-all"
      >

        <h3 className="text-xl font-semibold mb-4">
          {service.title}
        </h3>

        <p className="text-white/70 text-sm leading-relaxed">
          {service.desc}
        </p>

      </div>

    ))}

  </div>

</section>

      {/*Enhanced TESTIMONIALS */}
      <section id="testimonials" className="py-24 px-6 lg:px-20 bg-[#f6f4ef]">

  <div className="max-w-7xl mx-auto text-center mb-16">

    <p className="text-[#C5A24A] uppercase text-sm tracking-widest">
      Testimonials
    </p>

    <h2
      className="text-4xl font-bold"
      style={{ fontFamily: 'var(--font-playfair), serif' }}
    >
      What Our Clients Say
    </h2>

  </div>

  <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">

    {[
      {
        name: "Amit Kulkarni",
        text: "Golden Brix  Properties helped us find a perfect 2BHK in Kharghar. Their team was very responsive and explained every step of the buying process clearly."
      },
      {
        name: "Sneha Patil",
        text: "We were looking for an investment property in Navi Mumbai and the team suggested great options. Very professional and transparent service."
      },
      {
        name: "Rahul Nair",
        text: "Great experience working with Golden Brix Properties. They helped us finalize our apartment in Seawoods and handled the paperwork smoothly."
      }
    ].map((t, i) => (

      <div
        key={i}
        className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition"
      >

        <p className="text-gray-600 mb-6 leading-relaxed">
          "{t.text}"
        </p>

        <p className="font-semibold">
          {t.name}
        </p>

      </div>

    ))}

  </div>

</section>

{/* BLOGS */}
<section id="blogs" className="py-24 px-6 lg:px-20 bg-white">

<div className="max-w-7xl mx-auto text-center mb-16">

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

</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">

{[
{
title: "Top 5 Areas To Invest In Navi Mumbai In 2025",
image: "/images/properties/p1.jpg",
date: "March 2026"
},
{
title: "Things To Check Before Buying A Property",
image: "/images/properties/p5.jpg",
date: "February 2026"
},
{
title: "Why Navi Mumbai Is A Real Estate Hotspot",
image: "/images/Hero/3.jpg",
date: "January 2026"
}
].map((blog,i)=> (

<div
key={i}
className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition group"
>

<img
src={blog.image}
className="h-52 w-full object-cover group-hover:scale-105 transition duration-500"
/>

<div className="p-6">

<p className="text-xs text-[#C5A24A] mb-2">{blog.date}</p>

<h3 className="font-semibold text-lg mb-4 leading-snug">
{blog.title}
</h3>

<Link
href="/#blogs"
className="text-[#C5A24A] font-medium text-sm hover:underline"
>
Read Article →
</Link>

</div>

</div>

))}

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