'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { openWhatsApp } from '@/lib/whatsapp';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const shouldBeScrolled = window.scrollY > 20;
      if (isScrolled !== shouldBeScrolled) {
        setIsScrolled(shouldBeScrolled);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = (dropdown: string) => {
    // Clear any pending close timeout
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    // Set a timeout to close after 1 second
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
      closeTimeoutRef.current = null;
    }, 1000);
  };

  // About Us is now a single page, no dropdown needed

  const servicesItems = [
  { href: '/', label: 'Property Buying Assistance' },
  { href: '/', label: 'Property Selling Services' },
  { href: '/', label: 'Rental & Leasing Services' },
  { href: '/', label: 'Real Estate Investment Advisory' },
  { href: '/', label: 'Property Management' },
];
  // EMI Calculator removed but NOT deleted
  // { href: '/mortgage-calculator', label: 'Mortgage Calculator' },


  const marketInsightsItems = [
    { href: '/market-insights/trends', label: 'Dubai Real Estate Market Trends 2024–2025' },
    { href: '/market-insights/why-invest', label: 'Why Invest in Dubai' },
  ];

  const communitiesItems = [
    { href: '/communities/key-communities', label: 'Key Communities We Specialize In' },
    { href: '/communities/developers', label: 'Developer Partners' },
  ];

  // Determine if we should show white text (only on home page when not scrolled)
  const shouldShowWhiteText = isHomePage && !isScrolled;
  const shouldShowGlassEffect = isScrolled || !isHomePage;

  return (
    <header className={`fixed top-3 md:top-4 left-0 right-0 z-50 transition-all duration-300 ${
      shouldShowGlassEffect
        ? 'md:bg-white/60 md:backdrop-blur-xl md:border md:border-[#C5A24A]/20 md:shadow-sm md:mx-4 md:mt-4 md:rounded-2xl' 
        : ''
    } ${isMenuOpen ? 'bg-white' : isHomePage && !isScrolled ? 'bg-transparent' : 'bg-white'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center group">
  <div className="relative h-16 w-52 sm:h-20 sm:w-64">
    <Image
      src="/images/logo/truestarLogonew.png"
      alt="TrueStar Real Estate"
      fill
      className="object-contain"
      priority
    />
  </div>
</Link>
          
          {/* Desktop Navigation */}
<nav className="hidden md:flex items-center space-x-6">

  {/* Home */}
  <Link 
    href="/#home" 
    className={`relative font-medium transition-colors group whitespace-nowrap ${
      shouldShowGlassEffect ? 'text-[#001F3F] hover:text-[#C5A24A]' : 'text-white/90 hover:text-[#EBD181]'
    }`}
  >
    Home
    <span className="absolute inset-x-0 bottom-0 h-0.5 gold-gradient transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
  </Link>

  {/* About */}
  <Link 
    href="/#about" 
    className={`relative font-medium transition-colors group whitespace-nowrap ${
      shouldShowGlassEffect ? 'text-[#001F3F] hover:text-[#C5A24A]' : 'text-white/90 hover:text-[#EBD181]'
    }`}
  >
    About Us
    <span className="absolute inset-x-0 bottom-0 h-0.5 gold-gradient transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
  </Link>

  {/* Projects */}
  <Link 
    href="/#projects" 
    className={`relative font-medium transition-colors group whitespace-nowrap ${
      shouldShowGlassEffect ? 'text-[#001F3F] hover:text-[#C5A24A]' : 'text-white/90 hover:text-[#EBD181]'
    }`}
  >
    Projects
    <span className="absolute inset-x-0 bottom-0 h-0.5 gold-gradient transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
  </Link>

  {/* Testimonials */}
  <Link 
    href="/#testimonials" 
    className={`relative font-medium transition-colors group whitespace-nowrap ${
      shouldShowGlassEffect ? 'text-[#001F3F] hover:text-[#C5A24A]' : 'text-white/90 hover:text-[#EBD181]'
    }`}
  >
    Testimonials
    <span className="absolute inset-x-0 bottom-0 h-0.5 gold-gradient transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
  </Link>

  {/* Services Dropdown */}
  <div 
    className="relative"
    onMouseEnter={() => handleMouseEnter('services')}
    onMouseLeave={handleMouseLeave}
  >
    <button className={`relative font-medium flex items-center gap-1 transition-colors group whitespace-nowrap ${
      shouldShowGlassEffect ? 'text-gray-700 hover:text-[#C5A24A]' : 'text-white/90 hover:text-[#EBD181]'
    }`}>
      Services
      <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'services' ? 'rotate-180' : ''}`} />
      <span className="absolute inset-x-0 bottom-0 h-0.5 gold-gradient transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
    </button>

    {openDropdown === 'services' && (
      <div className={`absolute top-full left-0 mt-2 w-72 rounded-lg shadow-xl border py-2 backdrop-blur-xl ${
        shouldShowGlassEffect 
          ? 'bg-white/90 border-[#C5A24A]/20' 
          : 'bg-[#001F3F]/80 border-[#C5A24A]/30'
      }`}>
        {servicesItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`block px-4 py-2 transition-colors ${
              shouldShowGlassEffect 
                ? 'text-[#001F3F] hover:bg-[#C5A24A]/10 hover:text-[#C5A24A]' 
                : 'text-white/90 hover:bg-[#C5A24A]/20 hover:text-[#EBD181]'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    )}
  </div>

  {/* Blogs */}
  <Link 
    href="/#blogs" 
    className={`relative font-medium transition-colors group whitespace-nowrap ${
      shouldShowGlassEffect ? 'text-[#001F3F] hover:text-[#C5A24A]' : 'text-white/90 hover:text-[#EBD181]'
    }`}
  >
    Blogs
    <span className="absolute inset-x-0 bottom-0 h-0.5 gold-gradient transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
  </Link>
{/* Careers */}
  <Link 
    href="/#careers" 
    className={`relative font-medium transition-colors group whitespace-nowrap ${
      shouldShowGlassEffect ? 'text-[#001F3F] hover:text-[#C5A24A]' : 'text-white/90 hover:text-[#EBD181]'
    }`}
  >
    Careers
    <span className="absolute inset-x-0 bottom-0 h-0.5 gold-gradient transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
  </Link>
  {/* Contact */}
  <Link 
    href="/#contact" 
    className={`relative font-medium transition-colors group whitespace-nowrap ${
      shouldShowGlassEffect ? 'text-[#001F3F] hover:text-[#C5A24A]' : 'text-white/90 hover:text-[#EBD181]'
    }`}
  >
    Contact Us
    <span className="absolute inset-x-0 bottom-0 h-0.5 gold-gradient transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
  </Link>

  

  {/* Bayut Button
  <a
    href="https://www.bayut.com/l/iDL3rUtT"
    target="_blank"
    rel="noopener noreferrer"
    className={`px-3 py-1.5 rounded-md transition-all duration-300 flex items-center gap-2 group border-2 ${
      shouldShowGlassEffect 
        ? 'border-[#C5A24A] hover:bg-[#C5A24A]/10' 
        : 'border-[#EBD181] hover:bg-[#EBD181]/10'
    }`}
    title="View our listings on Bayut"
  >
    <div className="relative h-6 w-20">
      <Image
        src="/images/logo/bayutlogo.png"
        alt="Bayut"
        fill
        className="object-contain"
      />
    </div>
  </a> */}

</nav>

          {/* Mobile Menu Button */}
        <button 
            className={`md:hidden p-2 focus:outline-none transition-colors ${
              isMenuOpen 
                ? 'text-gray-700' 
                : shouldShowGlassEffect 
                  ? 'text-gray-700' 
                  : 'text-white'
            }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden py-4 space-y-4 bg-white border-t border-gray-100 mt-2">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2 text-[#001F3F] hover:text-[#C5A24A] hover:bg-white/50 font-medium transition-all"
            >
              Home
            </Link>
            
            <Link
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2 text-[#001F3F] hover:text-[#C5A24A] hover:bg-white/50 font-medium transition-all"
            >
              About Us
            </Link>
            <Link 
  href="/projects" 
  className={`relative font-medium transition-colors group whitespace-nowrap ${
    shouldShowGlassEffect ? 'text-[#001F3F] hover:text-[#C5A24A]' : 'text-white/90 hover:text-[#EBD181]'
  }`}
>
  Projects
  <span className="absolute inset-x-0 bottom-0 h-0.5 gold-gradient transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
</Link>

<Link 
  href="/testimonials" 
  className={`relative font-medium transition-colors group whitespace-nowrap ${
    shouldShowGlassEffect ? 'text-[#001F3F] hover:text-[#C5A24A]' : 'text-white/90 hover:text-[#EBD181]'
  }`}
>
  Testimonials
  <span className="absolute inset-x-0 bottom-0 h-0.5 gold-gradient transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
</Link>

            <div>
              <button 
                className="w-full text-left px-4 py-2 text-[#001F3F] hover:text-[#C5A24A] hover:bg-white/50 font-medium transition-all flex items-center justify-between"
                onClick={() => setOpenDropdown(openDropdown === 'services-mobile' ? null : 'services-mobile')}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'services-mobile' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'services-mobile' && (
                <div className="pl-8 mt-2 space-y-2">
                  {servicesItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-[#001F3F]/80 hover:text-[#C5A24A] hover:bg-white/50 font-medium transition-all"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button 
                className="w-full text-left px-4 py-2 text-[#001F3F] hover:text-[#C5A24A] hover:bg-white/50 font-medium transition-all flex items-center justify-between"
                onClick={() => setOpenDropdown(openDropdown === 'insights-mobile' ? null : 'insights-mobile')}
              >
                Market Insights
                <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'insights-mobile' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'insights-mobile' && (
                <div className="pl-8 mt-2 space-y-2">
                  {marketInsightsItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-[#001F3F]/80 hover:text-[#C5A24A] hover:bg-white/50 font-medium transition-all"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button 
                className="w-full text-left px-4 py-2 text-[#001F3F] hover:text-[#C5A24A] hover:bg-white/50 font-medium transition-all flex items-center justify-between"
                onClick={() => setOpenDropdown(openDropdown === 'communities-mobile' ? null : 'communities-mobile')}
              >
                Communities
                <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'communities-mobile' ? 'rotate-180' : ''}`} />
            </button>
              {openDropdown === 'communities-mobile' && (
                <div className="pl-8 mt-2 space-y-2">
                  {communitiesItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-[#001F3F]/80 hover:text-[#C5A24A] hover:bg-white/50 font-medium transition-all"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link 
  href="/blogs" 
  className={`relative font-medium transition-colors group whitespace-nowrap ${
    shouldShowGlassEffect ? 'text-[#001F3F] hover:text-[#C5A24A]' : 'text-white/90 hover:text-[#EBD181]'
  }`}
>
  Blogs
  <span className="absolute inset-x-0 bottom-0 h-0.5 gold-gradient transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
</Link>
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2 text-[#001F3F] hover:text-[#C5A24A] hover:bg-white/50 font-medium transition-all"
            >
              Contact Us
            </Link>

            <Link
              href="/careers"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2 text-[#001F3F] hover:text-[#C5A24A] hover:bg-white/50 font-medium transition-all"
            >
              Careers
            </Link>

            {/* <a
              href="https://www.bayut.com/l/iDL3rUtT"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-3 hover:bg-white/50 transition-all border-t border-[#C5A24A]/20"
              title="View our listings on Bayut"
            >
              <div className="relative h-6 w-24">
                <Image
                  src="/images/logo/bayutlogo.png"
                  alt="Bayut"
                  fill
                  className="object-contain"
                />
              </div>
              <svg className="w-4 h-4 text-[#001F3F]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a> */}

            <div className="px-4">
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  openWhatsApp();
                }}
                className="flex items-center justify-center gap-2 w-full px-6 py-3 gold-gradient text-white font-semibold shadow-md hover:shadow-xl transition-all duration-300 rounded-xl"
              >
                Book a Consultation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </nav>
      )}
    </header>
  );
}
