'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';
import SocialLinks from '@/components/SocialLinks';
import { SERVICE_NAV_LINKS } from '@/lib/navServices';

export default function Footer() {
  return (
    <footer className="bg-[#001F3F] border-t border-[#C5A24A]/20 text-white">

      <div className="container mx-auto px-6 lg:px-20 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>

            <Link href="/" className="flex items-center mb-6">
              <div className="relative h-14 w-48">
                <Image
                  src="/images/logo/truestarLogonew.png"
                  alt="Golden Brix"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>

            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Golden Brix is a trusted real estate advisory specializing
              in premium residential and investment opportunities across
              Mumbai and Navi Mumbai.
            </p>

            <SocialLinks variant="footer" label="Connect with us" />

          </div>

          {/* Quick Links */}
<div>

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
          <div>

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
<div>

  <h4 className="font-semibold text-white mb-5">Contact Info</h4>

  <div className="space-y-4 text-sm">

    <div className="flex items-start gap-3">
      <MapPin className="w-5 h-5 text-[#C5A24A] mt-1" />
      <p className="text-white/70 leading-relaxed">
        Shop No - 5, Madhushree CHS <br/>
        Plot No - 33, Sector 40 <br/>
        Seawoods, Navi Mumbai <br/>
        Maharashtra 400706
      </p>
    </div>

    <div className="flex items-center gap-3">
      <Phone className="w-5 h-5 text-[#C5A24A]" />
      <a
        href="tel:+917738384100"
        className="text-white/70 hover:text-[#EBD181] transition"
      >
        +91 77383 84100
      </a>
    </div>

    <div className="flex items-center gap-3">
      <Mail className="w-5 h-5 text-[#C5A24A]" />
      <a
        href="mailto:goldenbrix@gmail.com"
        className="text-white/70 hover:text-[#EBD181] transition"
      >
        goldenbrix@gmail.com
      </a>
    </div>

  </div>

</div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-white/60">

          © {new Date().getFullYear()} Golden Brix Real Estate. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}