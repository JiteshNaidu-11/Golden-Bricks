import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DevelopersGrid from '@/components/DevelopersGrid';

export const metadata: Metadata = {
  title: "Developer Partners | Golden Brix Properties",
  description:
    "Golden Brix Properties works with reputed developers across Mumbai and Navi Mumbai for verified inventory and priority access to premium opportunities.",
};

export default function Developers() {
  const developers = [
    { name: "EMAAR", description: "Reputed developer known for landmark, master-planned communities" },
    { name: "MERAAS", description: "Design-led developments focused on lifestyle and placemaking" },
    { name: "NAKHEEL", description: "Large-scale community developer with iconic waterfront projects" },
    { name: "DAMAC", description: "Luxury-focused developer with a strong premium portfolio" },
    { name: "SOBHA REALTY", description: "Premium developer known for quality craftsmanship" },
    { name: "OMNIYAT", description: "Ultra-luxury bespoke developments" },
    { name: "ALDAR", description: "Institutional-grade developer with diversified assets" },
    { name: "ELLINGTON", description: "Boutique lifestyle properties with thoughtful design" },
    { name: "NSHAMA", description: "Family-focused communities with strong value positioning" },
    { name: "ARADA", description: "Award-winning developer creating vibrant communities" },
    { name: "BINGHATTI", description: "Contemporary architecture and design excellence" },
    { name: "AZIZI", description: "Developer with a diverse residential portfolio" },
    { name: "SAMANA", description: "Contemporary living spaces and hospitality-led projects" },
    { name: "DEYAAR", description: "Urban living solutions across key micro-markets" },
    { name: "DANUBE PROPERTIES", description: "Affordable luxury developments" },
    { name: "SELECT GROUP", description: "Boutique luxury developments" },
    { name: "AL HABTOOR", description: "Diversified real estate conglomerate" },
    // { name: "AL FUTTAIM", description: "Iconic developments and master communities" },
    { name: "MAJID AL FUTTAIM", description: "Master developer of mixed-use communities" },
    { name: "UNION PROPERTIES", description: "Mixed-use developer with established communities" },
    { name: "DB PROPERTIES", description: "Developer with a diverse residential and commercial portfolio" },
    { name: "WASL", description: "Community-centric projects with strong delivery track record" },
    { name: "BNW", description: "Emerging developer with innovative projects" },
    { name: "OBJECT 1", description: "Premium waterfront developments" },
    { name: "IMAN", description: "Innovative luxury real estate developer" },
  ];

  return (
    <main className="min-h-screen bg-white text-[#1a1a1a]">
      <Header />
      
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-16">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gold-gradient-text"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
            >
              Developer Partners
            </h1>
            <div className="w-24 h-1 gold-gradient mx-auto mb-4"></div>
            <p className="text-xl text-[#1a1a1a]/70 max-w-3xl mx-auto">
              We work closely with developer teams to secure priority access and verified inventory
              across Mumbai and Navi Mumbai.
            </p>
          </div>
          
          {/* Developer Logos Grid */}
          <DevelopersGrid developers={developers} />
          
          {/* Benefits Section */}
          <div className="bg-gradient-to-br from-[#C5A24A]/10 to-[#EBD181]/10 p-8 rounded-lg mb-16">
            <h2 
              className="text-3xl font-bold mb-6 text-center"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
            >
              Benefits of Our Developer Relationships
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full gold-gradient mt-2 flex-shrink-0"></div>
                    <p className="text-[#1a1a1a]/80">Priority access to new launches and exclusive inventory</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full gold-gradient mt-2 flex-shrink-0"></div>
                    <p className="text-[#1a1a1a]/80">Best prices and favorable payment plans</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full gold-gradient mt-2 flex-shrink-0"></div>
                    <p className="text-[#1a1a1a]/80">Early-bird discounts and developer incentives</p>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full gold-gradient mt-2 flex-shrink-0"></div>
                    <p className="text-[#1a1a1a]/80">First choice of units and floor plans</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full gold-gradient mt-2 flex-shrink-0"></div>
                    <p className="text-[#1a1a1a]/80">Direct communication with developer teams</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full gold-gradient mt-2 flex-shrink-0"></div>
                    <p className="text-[#1a1a1a]/80">Streamlined processes and faster transactions</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Main Message */}
          <div className="text-center mb-16">
            <p className="text-xl text-[#1a1a1a]/80 leading-relaxed max-w-3xl mx-auto">
              We work directly with top developers to secure priority access and exclusive inventory. 
              Our relationships ensure you get the best opportunities, prices, and terms available in the market.
            </p>
          </div>
          
          {/* CTA */}
          <div className="text-center">
            <a
              href="/contact"
              className="inline-block px-8 py-4 gold-gradient text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-[#C5A24A]/50 transition-all"
            >
              Access verified developer inventory
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}

