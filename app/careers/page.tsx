'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Briefcase, Users, TrendingUp, Award, X } from 'lucide-react';
import { openWhatsApp } from '@/lib/whatsapp';

export default function Careers() {
  const [showJobDetails, setShowJobDetails] = useState(false);
  const [selectedJob, setSelectedJob] = useState<string>('');
  const benefits = [
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Clear progression paths with ongoing training and mentorship"
    },
    {
      icon: Award,
      title: "Competitive Rewards",
      description: "Attractive commission structure and performance bonuses"
    },
    {
      icon: Users,
      title: "Supportive Team",
      description: "Work with experienced professionals in a collaborative environment"
    },
    {
      icon: Briefcase,
      title: "Industry Leaders",
      description: "Access to premium listings and top developer partnerships"
    }
  ];

  const jobPositions = [
    {
      id: "real-estate-agent",
      title: "Real Estate Agent",
      type: "Full-time",
      location: "Mumbai / Navi Mumbai, India",
      shortDescription:
        "Join Golden Brix Properties and build a rewarding career in Mumbai and Navi Mumbai’s premium real estate market. We’re looking for motivated individuals with strong customer service skills.",
    },
    // {
    //   id: "property-consultant",
    //   title: "Property Consultant",
    //   type: "Full-time",
    //   location: "Mumbai / Navi Mumbai, India",
    //   shortDescription: "Seeking experienced consultants with excellent communication skills to guide clients through property investments and deliver exceptional service.",
    // }
  ];

  return (
    <main className="min-h-screen bg-white text-[#001F3F]">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-gradient-to-b from-[#001F3F] to-[#003366] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#EBD181] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#C5A24A] rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl text-center relative z-10">
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Build Your Career with{" "}
            <span className="gold-gradient-text">Golden Brix Properties</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            Join a premium real estate team and unlock strong earning potential in one of India’s most dynamic property markets.
          </p>
          <a
            href="mailto:goldenbrix@gmail.com"
            className="inline-block px-8 py-4 gold-gradient text-white font-bold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 text-lg hover:scale-105 transform"
          >
            Get in Touch About Opportunities
          </a>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 gold-gradient-text"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Why Join Golden Brix Properties?
            </h2>
            <p className="text-lg text-[#001F3F]/70 max-w-2xl mx-auto">
              We invest in our people and create an environment where talent thrives
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-white to-[#C5A24A]/5 rounded-2xl p-8 border-2 border-[#C5A24A]/20 hover:border-[#C5A24A] transition-all duration-300 hover:shadow-xl hover:scale-105 transform text-center"
                >
                  <div className="w-16 h-16 gold-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 
                    className="text-xl font-bold mb-3 text-[#001F3F]"
                    style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                  >
                    {benefit.title}
                  </h3>
                  <p className="text-[#001F3F]/70 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-gradient-to-b from-white to-[#C5A24A]/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 gold-gradient-text"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Open Positions
            </h2>
            <p className="text-lg text-[#001F3F]/70 max-w-2xl mx-auto">
              Explore current opportunities to join our growing team
            </p>
          </div>

          <div className="space-y-6">
            {jobPositions.map((position) => (
              <div 
                key={position.id}
                className="bg-white rounded-2xl p-8 border-2 border-[#C5A24A]/20 hover:border-[#C5A24A] transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex-1">
                    <h3 
                      className="text-2xl font-bold mb-2 text-[#001F3F]"
                      style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                    >
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="px-3 py-1 bg-[#C5A24A]/10 text-[#C5A24A] rounded-full text-sm font-medium">
                        {position.type}
                      </span>
                      <span className="px-3 py-1 bg-[#001F3F]/10 text-[#001F3F] rounded-full text-sm font-medium flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {position.location}
                      </span>
                    </div>
                    <p className="text-[#001F3F]/70 leading-relaxed">
                      {position.shortDescription}
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <button
                      onClick={() => {
                        setSelectedJob(position.id);
                        setShowJobDetails(true);
                      }}
                      className="px-6 py-3 border-2 border-[#C5A24A] text-[#C5A24A] font-bold rounded-lg hover:bg-[#C5A24A] hover:text-white transition-all duration-300 whitespace-nowrap hover:scale-105 transform"
                    >
                      View Details
                    </button>
                    <a
                      href="mailto:goldenbrix@gmail.com?subject=Application for Real Estate Position&body=Dear Golden Brix Properties Team,%0D%0A%0D%0AI am interested in applying for the position. Please find my details below:%0D%0A%0D%0A"
                      className="px-6 py-3 gold-gradient text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap hover:scale-105 transform text-center"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-[#001F3F] to-[#003366] rounded-3xl p-10 sm:p-16 text-white text-center shadow-2xl">
            <h2 
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Don't See the Right Role?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your CV and let's discuss how you can be part of our success story.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <a 
                href="tel:+917738384100"
                className="flex items-center gap-2 text-[#EBD181] hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="font-medium">+91 77383 84100</span>
              </a>
              <a 
                href="mailto:goldenbrix@gmail.com"
                className="flex items-center gap-2 text-[#EBD181] hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="font-medium">goldenbrix@gmail.com</span>
              </a>
            </div>

            <button
              onClick={() => openWhatsApp()}
              className="px-8 py-4 bg-white text-[#001F3F] font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform"
            >
              Contact Us on WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Job Details Modal */}
      {showJobDetails && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 sm:p-10 relative shadow-2xl border-4 border-[#C5A24A]/30 my-8">
            <button
              onClick={() => setShowJobDetails(false)}
              className="absolute top-6 right-6 text-[#001F3F]/50 hover:text-[#C5A24A] transition-all hover:scale-110 hover:rotate-90 duration-300"
            >
              <X className="w-7 h-7" />
            </button>

            <h2 
              className="text-3xl sm:text-4xl font-bold mb-6 gold-gradient-text"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              {selectedJob === 'real-estate-agent' ? 'Real Estate Agent' : 'Property Consultant'} - Job Description
            </h2>

            {/* About Us */}
            <div className="mb-8">
              <h3 
                className="text-2xl font-bold mb-4 text-[#001F3F]"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
              >
                About Us:
              </h3>
              <p className="text-[#001F3F]/80 leading-relaxed">
                Golden Brix Properties is a premium real estate advisory based in Mumbai and Navi Mumbai. We work with reputed developers and verified resale inventory to offer a wide range of real estate solutions. Our team is dedicated to providing exceptional customer service and helping clients find their dream home or investment.
              </p>
            </div>

            {/* Role Description */}
            <div className="mb-8">
              <h3 
                className="text-2xl font-bold mb-4 text-[#001F3F]"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
              >
                Role Description:
              </h3>
              <p className="text-[#001F3F]/80 leading-relaxed mb-4">
                This is a full-time on-site role for a {selectedJob === 'real-estate-agent' ? 'Real Estate Agent' : 'Property Consultant'} at Golden Brix Properties in Mumbai / Navi Mumbai. Your day-to-day tasks will include assisting clients in buying, selling, and renting properties, conducting site visits, negotiating deals, and providing excellent customer service. You will also be responsible for maintaining strong knowledge of local micro-markets and staying updated on industry trends.
              </p>
              <p className="text-[#001F3F]/80 leading-relaxed">
                Are you ready to elevate your career in a dynamic and supportive environment? Join Golden Brix Properties and leverage our expertise and resources to further your career in real estate. We are committed to fostering a collaborative and growth-oriented workplace where your success is our priority.
              </p>
            </div>

            {/* Responsibilities */}
            <div className="mb-8">
              <h3 
                className="text-2xl font-bold mb-4 text-[#001F3F]"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
              >
                Responsibilities:
              </h3>
              <ul className="space-y-3 text-[#001F3F]/80">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#C5A24A] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Conduct home tours, attend open houses, and market properties</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#C5A24A] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Proactively find and engage new prospects</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#C5A24A] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Match clients with properties that meet their needs and criteria</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#C5A24A] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Negotiate terms and close rental and sales deals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#C5A24A] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Offer consultation to clients on market conditions, prices, and related matters</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#C5A24A] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Stay informed on local real estate market trends, sales, and new projects</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#C5A24A] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Perform comparative market analysis to estimate property values</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#C5A24A] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Build and maintain professional networks</span>
                </li>
              </ul>
            </div>

            {/* Requirements */}
            <div className="mb-8">
              <h3 
                className="text-2xl font-bold mb-4 text-[#001F3F]"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
              >
                Requirements:
              </h3>
              <ul className="space-y-3 text-[#001F3F]/80">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#C5A24A] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Bachelor's degree in Business or Marketing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#C5A24A] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Minimum 6 months of experience in real estate (Mumbai / Navi Mumbai preferred)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#C5A24A] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Fluency in English, additional language would be an advantage (Arabic, Russian, French, Spanish, Mandarin)</span>
                </li>
              </ul>
            </div>

            {/* Skills */}
            <div className="mb-8">
              <h3 
                className="text-2xl font-bold mb-4 text-[#001F3F]"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
              >
                Skills:
              </h3>
              <ul className="space-y-3 text-[#001F3F]/80">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#C5A24A] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Self-motivated with an entrepreneurial spirit</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#C5A24A] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Experience in Customer Service and Sales</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#C5A24A] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Knowledge of Real Estate and Real Property</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#C5A24A] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Excellent communication and negotiation skills</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#C5A24A] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Ability to multitask and prioritize</span>
                </li>
              </ul>
            </div>

            {/* Apply Button */}
            <div className="flex justify-center mt-8 pt-6 border-t border-[#C5A24A]/20">
              <a
                href="mailto:goldenbrix@gmail.com?subject=Application for Real Estate Position&body=Dear Golden Brix Properties Team,%0D%0A%0D%0AI am interested in applying for the position. Please find my details below:%0D%0A%0D%0A"
                className="px-8 py-4 gold-gradient text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform"
              >
                Apply Now via Email
              </a>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}

