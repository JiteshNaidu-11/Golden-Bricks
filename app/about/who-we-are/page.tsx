import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Who We Are | TrueStar Real Estate",
  description: "Learn about TrueStar Real Estate's mission, vision, and commitment to excellence in Dubai's real estate market.",
};

export default function WhoWeAre() {
  return (
    <main className="min-h-screen bg-white text-[#1a1a1a]">
      <Header />
      
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-10 sm:mb-12 md:mb-16 text-center">
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 gold-gradient-text"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
            >
              Who We Are
            </h1>
            <div className="w-20 sm:w-24 h-1 gold-gradient mx-auto"></div>
          </div>
          
          <div className="space-y-6 sm:space-y-8 mb-10 sm:mb-12 md:mb-16">
            <p className="text-base sm:text-lg text-[#1a1a1a]/80 leading-relaxed">
              TrueStar Real Estate was founded in Dubai in 2025 by Aajay Sagar, a seasoned real estate professional with 18 years of 
              experience in the Dubai market. Born from a vision to redefine real estate advisory through trust, transparency, and 
              exceptional service, TrueStar has quickly established itself as a trusted partner for property buyers, sellers, and 
              investors across Dubai.
            </p>
            
            <p className="text-base sm:text-lg text-[#1a1a1a]/80 leading-relaxed">
              We specialize in luxury properties, off-plan investments, property management, and comprehensive advisory services. 
              Our team combines deep market knowledge with direct developer relationships, ensuring our clients have access to the 
              best opportunities and the most favorable terms.
            </p>
            
            <p className="text-base sm:text-lg text-[#1a1a1a]/80 leading-relaxed">
              What sets us apart is our commitment to long-term relationships. We don't just close deals—we build partnerships. 
              From initial consultation through property handover and beyond, we're with you every step of the way, providing 
              ongoing support, market insights, and strategic guidance.
            </p>
          </div>
          
          {/* Mission & Vision Cards */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Mission Card */}
            <div className="p-6 sm:p-8 rounded-lg border-2 border-[#C5A24A]/30 bg-gradient-to-br from-white to-[#C5A24A]/10 hover:shadow-xl transition-all">
              <div className="mb-4 sm:mb-6">
                <div className="w-12 sm:w-16 h-1 gold-gradient mb-3 sm:mb-4"></div>
                <h2 
                  className="text-2xl sm:text-3xl font-bold gold-gradient-text"
                  style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                >
                  OUR MISSION
                </h2>
              </div>
              <p className="text-[#1a1a1a]/80 leading-relaxed text-base sm:text-lg">
                To be Dubai's most trusted real estate partner by delivering exceptional service, transparent advisory, and 
                strategic solutions that help our clients achieve their property goals and build lasting wealth.
              </p>
            </div>
            
            {/* Vision Card */}
            <div className="p-6 sm:p-8 rounded-lg border-2 border-[#C5A24A]/30 bg-gradient-to-br from-white to-[#C5A24A]/10 hover:shadow-xl transition-all">
              <div className="mb-4 sm:mb-6">
                <div className="w-12 sm:w-16 h-1 gold-gradient mb-3 sm:mb-4"></div>
                <h2 
                  className="text-2xl sm:text-3xl font-bold gold-gradient-text"
                  style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                >
                  OUR VISION
                </h2>
              </div>
              <p className="text-[#1a1a1a]/80 leading-relaxed text-base sm:text-lg">
                To transform how people experience real estate in Dubai by setting new standards for trust, clarity, and 
                performance, making property investment accessible, transparent, and rewarding for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}

