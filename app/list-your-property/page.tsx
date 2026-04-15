'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Home, Megaphone, Search, Tag, User, Mail, Phone, MapPin, Building, Bed, Ruler, Hash, Send, Loader2 } from 'lucide-react';
import Image from 'next/image';
import { useEffect } from 'react';
import { countryCodes } from '@/lib/countryCodes';
import { useLeadSubmit } from '@/hooks/useLeadSubmit';
import ServicesShowcase from '@/components/services/ServicesShowcase';

export default function ListYourProperty() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+971',
    phone: '',
    propertyFor: 'Sell',
    location: '',
    propertyType: '',
    bed: 'Studio',
    sizeSqft: '',
    unitNo: '',
    price: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [countrySearch, setCountrySearch] = useState('');
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const lead = useLeadSubmit();

  // EmailJS removed; submissions go to Supabase `leads`.

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isCountryDropdownOpen) {
        const target = event.target as HTMLElement;
        if (!target.closest('.country-dropdown-container')) {
          setIsCountryDropdownOpen(false);
          setCountrySearch('');
        }
      }
    };

    if (isCountryDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isCountryDropdownOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const fullPhone = formData.phone
        ? `${formData.countryCode} ${formData.phone}`
        : '';

      await lead.submit({
        source: 'list_your_property',
        page: '/list-your-property',
        name: formData.name,
        email: formData.email,
        phone: fullPhone,
        location: formData.location,
        message: [
          'Property Listing Request',
          `Property For: ${formData.propertyFor}`,
          `Location: ${formData.location || '—'}`,
          `Property Type: ${formData.propertyType || '—'}`,
          `Bedrooms: ${formData.bed || '—'}`,
          `Size (SQFT): ${formData.sizeSqft || '—'}`,
          `Unit No.: ${formData.unitNo || '—'}`,
          `Expected Price: ${formData.price || '—'}`,
        ].join('\n'),
      });

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        countryCode: '+971',
        phone: '',
        propertyFor: 'Sell',
        location: '',
        propertyType: '',
        bed: 'Studio',
        sizeSqft: '',
        unitNo: '',
        price: '',
      });
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const services = [
    {
      icon: Home,
      title: 'HOME VISIT',
      description:
        "Schedule a complimentary visit and we’ll coordinate photography, layout details, and presentation—so your listing feels premium from day one.",
      benefits: [
        "Professional photography coordination and key highlights",
        "Layout + unit details organized for buyers/tenants",
        "Premium-first presentation guidance",
      ],
      why: "First impressions sell—make the listing feel premium instantly.",
    },
    {
      icon: Megaphone,
      title: 'MARKETING',
      description:
        "We amplify your property across high-intent channels and our network—ensuring the right visibility without making it feel ‘mass market’.",
      benefits: [
        "High-quality listing copy + media placement",
        "Targeted outreach to serious prospects",
        "Lead screening to reduce time-wasters",
      ],
      why: "Visibility with filtering—attract serious buyers, not noise.",
    },
    {
      icon: Search,
      title: 'VIEWING',
      description:
        "Viewings curated like a premium walkthrough—highlighting layout flow, light, ventilation, and the ‘arrival experience’ that drives stronger offers.",
      benefits: [
        "Curated walkthrough flow and talking points",
        "Highlighting light, views, and liveability cues",
        "Feedback captured for quick iteration",
      ],
      why: "A better viewing experience leads to faster closures.",
    },
    {
      icon: Tag,
      title: 'SELL / RENT',
      description:
        "From offer alignment to documentation coordination, we manage the closure with structure—so timelines stay tight and expectations stay clear.",
      benefits: [
        "Offer alignment + negotiation support",
        "Documentation coordination and timeline tracking",
        "Handover support for a smooth finish",
      ],
      why: "Smooth execution protects value—and avoids last-minute surprises.",
    },
  ];

  const propertyTypes = ['Villa', 'Apartment', 'Townhouse', 'Penthouse', 'Studio', 'Duplex', 'Land', 'Commercial'];
  const bedOptions = ['Studio', '1', '2', '3', '4', '5', '6','7','8','9'];

  // Filter countries based on search
  const filteredCountries = countryCodes.filter((country) => {
    const searchLower = countrySearch.toLowerCase();
    const countryName = country.name.toLowerCase();
    const countryCode = country.code.toLowerCase();
    const isoCode = (country.iso || '').toLowerCase();
    return countryName.includes(searchLower) || 
           countryCode.includes(searchLower) || 
           isoCode.includes(searchLower);
  });

  // Get selected country display
  const selectedCountry = countryCodes.find(c => c.code === formData.countryCode) || countryCodes[0];

  return (
    <main className="min-h-screen bg-white text-[#001F3F]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-linear-to-b from-[#001F3F] to-[#003366] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#EBD181] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#C5A24A] rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl text-center relative z-10">
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            LIST YOUR PROPERTY IN{" "}
            <span className="gold-gradient-text">MUMBAI / NAVI MUMBAI</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Maximize your property's potential with our comprehensive listing services and expert support
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-white">
        <div className="container mx-auto max-w-7xl">
          <ServicesShowcase
            eyebrow="Listing services"
            heading="A premium listing experience"
            subheading="A structured approach to presentation, marketing, and closure—built to protect your time and maximize outcomes."
            embedded
            variant="light"
            items={services.map((s, idx) => {
              const imageSrc =
                idx % 2 === 0
                  ? "/properties/westwoods-platinum.jpg"
                  : "/properties/one-platinum.jpg";
              const iconKey =
                s.title === "HOME VISIT"
                  ? ("home" as const)
                  : s.title === "MARKETING"
                    ? ("megaphone" as const)
                    : s.title === "VIEWING"
                      ? ("search" as const)
                      : ("tag" as const);
              return {
                key: String(s.title),
                title: s.title,
                description: s.description,
                benefits: s.benefits,
                why: s.why,
                href: "/contact",
                imageSrc,
                iconKey,
              };
            })}
          />
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-linear-to-b from-white to-[#C5A24A]/5">
        <div className="container mx-auto max-w-6xl">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg border border-gray-200">
            {/* Tell Us About Yourself */}
            <div className="mb-12">
              <h2 
                className="text-2xl sm:text-3xl font-bold mb-8 text-[#C5A24A]"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
              >
                TELL US ABOUT YOURSELF
              </h2>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#C5A24A]" />
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="NAME"
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:border-[#C5A24A] focus:outline-none transition-colors bg-white text-[#001F3F]"
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#C5A24A]" />
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="EMAIL"
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:border-[#C5A24A] focus:outline-none transition-colors bg-white text-[#001F3F]"
                  />
                </div>
                <div className="flex gap-2">
                  <div className="relative w-36">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#C5A24A] z-10" />
                    <div className="relative country-dropdown-container">
                      <button
                        type="button"
                        onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                        className="w-full pl-10 pr-3 py-3.5 rounded-lg border border-gray-300 focus:border-[#C5A24A] focus:outline-none transition-colors bg-white text-sm text-[#001F3F] font-medium text-left flex items-center justify-between"
                      >
                        <span>{selectedCountry.flag} {selectedCountry.code} {selectedCountry.iso || ''}</span>
                        <svg className={`w-4 h-4 transition-transform ${isCountryDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {isCountryDropdownOpen && (
                        <>
                          <div 
                            className="fixed inset-0 z-40" 
                            onClick={() => setIsCountryDropdownOpen(false)}
                          ></div>
                          <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-64 overflow-hidden">
                            <div className="p-2 border-b border-gray-200">
                              <input
                                type="text"
                                placeholder="Search country, code, or ISO..."
                                value={countrySearch}
                                onChange={(e) => setCountrySearch(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-[#C5A24A] focus:outline-none text-sm"
                                autoFocus
                              />
                            </div>
                            <div className="overflow-y-auto max-h-56 scrollbar-hide">
                              {filteredCountries.length > 0 ? (
                                filteredCountries.map((country) => (
                                  <button
                                    key={country.name}
                                    type="button"
                                    onClick={() => {
                                      setFormData({ ...formData, countryCode: country.code });
                                      setIsCountryDropdownOpen(false);
                                      setCountrySearch('');
                                    }}
                                    className={`w-full text-left px-3 py-2 hover:bg-[#C5A24A]/10 transition-colors text-sm ${
                                      formData.countryCode === country.code ? 'bg-[#C5A24A]/20 font-semibold' : ''
                                    }`}
                                  >
                                    <span className="flex items-center gap-2">
                                      <span>{country.flag}</span>
                                      <span className="font-medium">{country.code}</span>
                                      <span className="text-gray-500 text-xs">{country.iso || ''}</span>
                                      {/* <span className="ml-auto text-gray-700 text-xs font-medium">{country.name.substring(0, 3).toUpperCase()}</span> */}
                                    </span>
                                  </button>
                                ))
                              ) : (
                                <div className="px-3 py-2 text-sm text-gray-500">No countries found</div>
                              )}
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="relative flex-1">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="PHONE NUMBER"
                      className="w-full pl-4 pr-4 py-3 rounded-lg border border-gray-300 focus:border-[#C5A24A] focus:outline-none transition-colors bg-white text-[#001F3F]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Tell Us About Your Property */}
            <div>
              <h2 
                className="text-2xl sm:text-3xl font-bold mb-8 text-[#C5A24A]"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
              >
                TELL US ABOUT YOUR PROPERTY
              </h2>
              
              {/* Property For Buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                {['Sell', 'Rent', 'Manage'].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setFormData({ ...formData, propertyFor: option })}
                    className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                      formData.propertyFor === option
                        ? 'bg-[#C5A24A] text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {option.toUpperCase()}
                  </button>
                ))}
              </div>

              {/* Property Details */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#C5A24A]" />
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="LOCATION"
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:border-[#C5A24A] focus:outline-none transition-colors bg-white text-[#001F3F]"
                  />
                </div>
                <div className="relative">
                  <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#C5A24A]" />
                  <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:border-[#C5A24A] focus:outline-none transition-colors bg-white appearance-none text-[#001F3F]"
                  >
                    <option value="">PROPERTY TYPE</option>
                    {propertyTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div className="relative">
                  <Bed className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#C5A24A]" />
                  <select
                    name="bed"
                    value={formData.bed}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:border-[#C5A24A] focus:outline-none transition-colors bg-white appearance-none text-[#001F3F]"
                  >
                    {bedOptions.map((bed) => (
                      <option key={bed} value={bed}>{bed}</option>
                    ))}
                  </select>
                </div>
                <div className="relative">
                  <Ruler className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#C5A24A]" />
                  <input
                    type="text"
                    name="sizeSqft"
                    value={formData.sizeSqft}
                    onChange={handleChange}
                    placeholder="SIZE SQFT"
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:border-[#C5A24A] focus:outline-none transition-colors bg-white text-[#001F3F]"
                  />
                </div>
                <div className="relative">
                  <Hash className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#C5A24A]" />
                  <input
                    type="text"
                    name="unitNo"
                    value={formData.unitNo}
                    onChange={handleChange}
                    placeholder="UNIT NO."
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:border-[#C5A24A] focus:outline-none transition-colors bg-white text-[#001F3F]"
                  />
                </div>
                <div className="relative">
                  {/* <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#C5A24A]" /> */}
                  <div className="absolute bg-black left-4 top-1/2 transform -translate-y-1/2 z-10">
                    <Image
                      src="/images/dhirumsign.jpeg"
                      alt="INR"
                      width={20}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                  <input
                    type="text"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="PRICE"
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:border-[#C5A24A] focus:outline-none transition-colors bg-white text-[#001F3F]"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-8">
                {submitStatus === 'success' && (
                  <div className="p-4 rounded-lg bg-green-50 border-2 border-green-200 text-green-800 mb-6">
                    <p className="font-semibold">Thank you for your listing request!</p>
                    <p className="text-sm mt-1">We have received your property details and will contact you soon.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 rounded-lg bg-red-50 border-2 border-red-200 text-red-800 mb-6">
                    <p className="font-semibold">Error submitting form</p>
                    <p className="text-sm mt-1">{errorMessage}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 gold-gradient text-white font-bold rounded-lg hover:shadow-xl hover:shadow-[#C5A24A]/50 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                  style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      SEND
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}

