'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';
import SocialLinks from '@/components/SocialLinks';
import { SERVICE_NAV_LINKS } from '@/lib/navServices';

export default function Footer() {
  return (
    <footer className="bg-[#001F3F] border-t border-[#C5A24A]/20 text-white">

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 py-12 sm:py-14 lg:py-16">

        <div className="grid min-w-0 gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="min-w-0">

            <Link href="/" className="flex items-center mb-6">
              <div className="flex flex-col items-center leading-none select-none">
                <span
                  className="font-bold tracking-[0.13em] text-[1.3rem] sm:text-[1.55rem] bg-gradient-to-r from-[#B8891E] via-[#EBD181] via-[55%] to-[#B8891E] bg-clip-text text-transparent"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  GOLDEN BRIX
                </span>
                <div className="flex items-center gap-1.5 mt-[3px]">
                  <span className="h-px w-4 sm:w-5 bg-gradient-to-r from-transparent to-[#C5A24A]/60" />
                  <span className="text-[8px] sm:text-[9px] tracking-[0.45em] font-extrabold text-white">
                    REALTY
                  </span>
                  <span className="h-px w-4 sm:w-5 bg-gradient-to-l from-transparent to-[#C5A24A]/60" />
                </div>
              </div>
            </Link>

            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-sm">
              Golden Brix is a trusted real estate advisory specializing
              in premium residential and investment opportunities across
              Navi Mumbai.
            </p>

            <SocialLinks variant="footer" label="Connect with us" />

          </div>

          {/* Quick Links */}
<div className="min-w-0">

  <h4 className="font-semibold text-white mb-5">Quick Links</h4>

  <ul className="space-y-3 text-sm">

    <li>
      <Link href="/" className="text-white/70 hover:text-[#EBD181]">
        Home
      </Link>
    </li>

    <li>
      <Link href="/about" className="text-white/70 hover:text-[#EBD181]">
        About Us
      </Link>
    </li>

    <li>
      <Link href="/properties" className="text-white/70 hover:text-[#EBD181]">
        Properties
      </Link>
    </li>

    <li>
      <Link href="/projects" className="text-white/70 hover:text-[#EBD181]">
        Projects
      </Link>
    </li>

    <li>
      <Link href="/testimonials" className="text-white/70 hover:text-[#EBD181]">
        Testimonials
      </Link>
    </li>

    <li>
      <Link href="/services" className="text-white/70 hover:text-[#EBD181]">
        Services
      </Link>
    </li>

    <li>
      <Link href="/blogs" className="text-white/70 hover:text-[#EBD181]">
        Blogs
      </Link>
    </li>

    {/*
    <li>
      <Link href="/careers" className="text-white/70 hover:text-[#EBD181]">
        Careers
      </Link>
    </li>
    */}

    <li>
      <Link href="/contact" className="text-white/70 hover:text-[#EBD181]">
        Contact Us
      </Link>
    </li>

    {/*
    <li>
      <Link href="/list-your-property" className="text-white/70 hover:text-[#EBD181]">
        List Your Property
      </Link>
    </li>
    */}

    <li>
      <Link href="/emi-calculator" className="text-white/70 hover:text-[#EBD181]">
        EMI Calculator
      </Link>
    </li>

  </ul>

</div>

          {/* Services */}
          <div className="min-w-0">

            <h4 className="font-semibold text-white mb-5">Services</h4>

            <ul className="space-y-3 text-sm">
              {SERVICE_NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/70 hover:text-[#EBD181]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

          </div>

          {/* Contact Info */}
<div className="min-w-0">

  <h4 className="font-semibold text-white mb-5">Contact Info</h4>

  <div className="space-y-4 text-sm">

    <div className="flex items-start gap-3">
      <MapPin className="w-5 h-5 text-[#C5A24A] mt-1" />
      <p className="text-white/70 leading-relaxed break-words">
        Shop No - 5, Madhushree CHS <br/>
        Plot No - 33, Sector 40 <br/>
        Seawoods, Navi Mumbai <br/>
        Maharashtra 400706
      </p>
    </div>

    <div className="flex items-center gap-3">
      <Phone className="w-5 h-5 text-[#C5A24A]" />
      <a
        href="tel:+919819893359"
        className="text-white/70 hover:text-[#EBD181] transition break-all"
      >
        +91 98198 93359
      </a>
    </div>

    <div className="flex items-center gap-3">
      <Mail className="w-5 h-5 text-[#C5A24A]" />
      <a
        href="mailto:goldenbrix05@gmail.com"
        className="text-white/70 hover:text-[#EBD181] transition break-all"
      >
        goldenbrix05@gmail.com
      </a>
    </div>

  </div>

</div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-10 sm:mt-12 pt-6 text-center text-xs sm:text-sm text-white/60">

          (c) {new Date().getFullYear()} Golden Brix Real Estate. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}

