/**
 * Golden Brix — portfolio projects for landing grid + property detail pages.
 * Source: project brief (21 listings). Replace `image` with local paths under /public when ready.
 */

export type CatalogProperty = {
  slug: string;
  name: string;
  location: string;
  price: string;
  bhk: string;
  image: string;
  /** Extra photos for the property detail gallery (public/ paths). */
  images?: string[];
  /** Optional area line for the property detail “Area” stat card. */
  size?: string;
  builder: string;
  propertyType: string;
  possession: string;
  overview: string;
  highlights: string[];
  amenities: string[];
};

/** Renders under /public/Palm beach/ — encode space for reliable static hosting */
const PALM_BEACH = "/Palm%20beach";
const aatmanGallery = Array.from({ length: 14 }, (_, i) => `${PALM_BEACH}/${i + 1}.jpeg`);

/** Mayuresh Planet — `public/Mayuresh/` (JPEG assets) */
const MAYURESH_PLANET_GALLERY = Array.from(
  { length: 6 },
  (_, i) => `/Mayuresh/${i + 1}.jpeg`,
);

const LOCAL_CARD_IMAGE_BY_SLUG: Record<string, string> = {
  "aatman-balaji-corporation": "/properties/aatman-balaji-palm-beach.jpeg",
  "cadbury-junction-thane-west": "/properties/cadbury-junction-thane-west.jpg",
  "codename-panoramic-mayuresh-group": "/properties/codename-panoramic-cbd-belapur.jpg",
  "mayuresh-planet-cbd-belapur": "/properties/mayuresh-planet-cbd-belapur.jpeg",
  "9pbr-adani-realty": "/properties/9pbr-adani-realty.jpg",
  "elysium-platinum": "/properties/elysium-platinum.jpg",
  "sai-world-one": "/properties/sai-world-one.jpg",
  "dream-ikon": "/properties/dream-ikon.jpg",
  "oakwoods-platinum": "/properties/oakwoods-platinum.jpg",
  "platinum-juinagar-midc": "/properties/platinum-juinagar-midc.jpg",
  "codename-growth": "/properties/codename-growth.jpeg",
  "platinum-the-reserve": "/properties/platinum-the-reserve.jpeg",
  "cyber-square": "/properties/cyber-square.jpeg",
  "mensionz-platinum": "/properties/mensionz-platinum.jpg",
  "k-raheja-corp-homes": "/properties/k-raheja-corp-homes.jpg",
  "one-platinum": "/properties/one-platinum.jpg",
  "praksyde-platinum": "/properties/praksyde-platinum.jpeg",
  "westwoods-platinum": "/properties/westwoods-platinum.jpg",
  "goodwill-wisteria": "/properties/goodwill-wisteria.jpeg",
  "esquire-platinum": "/properties/esquire-platinum.jpg",
  "code-name-green-gold": "/properties/code-name-green-gold.webp",
  "platinum-juinagar-new-launch": "/properties/platinum-juinagar-new-launch.webp",
  "9pbr-palm-beachroad": "/properties/9pbr-palm-beachroad.jpg",
  "emperia-c2-turbhe": "/properties/emperia-c2-turbhe.jpg",
  "birla-estate-airoli": "/properties/birla-estate-airoli.webp",
};

const DEFAULT_PROPERTY_CARD_IMAGE = "/properties/sai-world-one.jpg";

const RAW_PROPERTIES_CATALOG: CatalogProperty[] = [
  {
    slug: "aatman-balaji-corporation",
    name: "Aatman by Balaji Corporation",
    location: "Palmside, Navi Mumbai",
    price: "From ₹2.90 Cr* onwards",
    bhk: "2, 3, 4 & 5 BHK sea-facing residences",
    image: `${PALM_BEACH}/1.jpeg`,
    images: aatmanGallery,
    builder: "Balaji Corporation",
    propertyType: "Residential",
    possession: "Under Construction",
    overview: `Aatman by Balaji Corporation presents Navi Mumbai's most prestigious address on the Palmside.

Experience an exclusive collection of 2, 3, 4 & 5 BHK sea-facing residences, meticulously crafted with luxurious layouts, modern interiors, and breath-taking views of the sea and cityscape — plus world-class amenities that set a new benchmark for premium living.

Come elevate your lifestyle with us.`,
    highlights: [
      "2 BHK starting at ₹2.90 Cr+*",
      "3 BHK starting at ₹4.22 Cr+*",
      "4 BHK — pricing on request",
      "5 BHK sea-facing residences — on request",
      "Elite community & upscaled neighbourhood",
      "State-of-the-art amenities across the development",
      "Excellent connectivity to NMI Airport, Seawoods railway station, major highways, schools, hospitals, and shopping centres",
      "Rapid access to Navi Mumbai's business and entertainment hubs",
    ],
    amenities: [
      "Sea & cityscape-facing residences",
      "Landscaped courtyards & palm-lined outdoor spaces",
      "Clubhouse / grand indoor amenity spaces",
      "Swimming pool & deck",
      "Multi-purpose sports court",
      "Premium entrance & tower design",
      "Strong road & rail connectivity — airport & Seawoods",
    ],
  },
  {
    slug: "cadbury-junction-thane-west",
    name: "Cadbury Junction — Thane West",
    location: "Cadbury Junction, Thane West (opposite Korum Mall)",
    price: "EOI open · Pricing on request",
    bhk: "Premium office spaces · 1,200–7,000 sq.ft. carpet (Jodi options)",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    builder: "Connect for developer & investment brief (EOI)",
    propertyType: "Commercial",
    possession: "Pre-launch · EOI phase underway",
    overview: `We are excited to introduce our upcoming landmark commercial development at Cadbury Junction, Thane West — strategically located opposite Korum Mall.

Thane is witnessing ₹4 Lakh Crore+ government investment in infrastructure, transforming the region into Mumbai's next major business district.

This development is designed to be one of the most premium commercial destinations in Thane, combining large floor plates, luxury amenities, and excellent infrastructure connectivity.

The EOI phase has begun. If you are looking for large office spaces or investment opportunities, connect with Golden Brix for more details.`,
    highlights: [
      "Strategic address: Cadbury Junction, Thane West — opposite Korum Mall",
      "52-acre mixed-asset master plan; Phase 1 — commercial tower on ~3.5 acres",
      "45 storeys | ~200 m height | ~47,000 sq.ft. large floor plate",
      "Office spaces from 1,200–7,000 sq.ft. carpet; Jodi options available",
      "Configuration: G+3 basements | G+1 retail | 7 podium levels | 8th service floor | offices from 9th floor onwards",
      "~5-acre natural lake within the land parcel",
      "Mumbai–Ahmedabad bullet train with stop at Diva (~30 minutes from project)",
      "Borivali–Thane twin tunnel — stronger Western suburbs ↔ Thane link",
      "GMLR (Goregaon–Mulund Link Road) — WEH to Eastern suburbs",
      "Thane internal ring metro",
      "Eastern Freeway extension",
      "Coastal Road extension from Balkum to Gaimukh",
      "Metro Line 4 — Wadala to Gaimukh",
      "Anand Nagar–Saket elevated road",
      "World-class Thane Railway Station (RLDA redevelopment)",
    ],
    amenities: [
      "Grand entrance lobby",
      "Guest lounge",
      "Lake-facing cafeteria",
      "30–40 high-speed elevators",
      "Pickleball court",
      "Fine-dine restaurant",
      "Boutique offices",
      "Banquet facilities",
      "Pet & kids crèche",
      "Fitness centre",
      "Rooftop lounge",
      "Retail outlets",
      "Sports bar",
    ],
  },
  {
    slug: "codename-panoramic-mayuresh-group",
    name: "Codename Panoramic — Mayuresh Group",
    location: "Sector 15, CBD Belapur, Navi Mumbai",
    price: "Early access · limited units · pricing on request",
    bhk: "2, 3 & 4 BHK waterfront residences",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80",
    builder: "Mayuresh Group",
    propertyType: "Residential",
    possession: "RERA timeline · December 2028",
    overview: `A waterfront residential landmark in the heart of CBD Belapur — an address that balances calm, space, and connection.

Codename Panoramic by Mayuresh Group sits at a strategic Navi Mumbai address, shaped by light, openness, and quiet sophistication. Overlooking expansive waterfront views, it offers a lifestyle that feels removed from the city — yet deeply connected to it.

Where panoramic views meet everyday convenience: a peaceful environment with excellent connectivity and thoughtfully designed amenities that enhance daily living.

Limited units are open for early access. Connect with Golden Brix to know more.`,
    highlights: [
      "Sector 15 — CBD Belapur, Navi Mumbai",
      "G+16 residences across 3 wings",
      "~1.5-acre corner plot (~6,000 sq.m)",
      "Curated retail boulevard within and around the development",
      "3-level basement parking plus surface parking",
      "Wide, tree-lined access roads on both sides of the plot",
      "RERA possession timeline — December 2028",
      "2 BHK — approx. 800–900 sq.ft.",
      "3 BHK — approx. 1,100–1,200 sq.ft.",
      "Classic 3 BHK — approx. 1,500–1,600 sq.ft.",
      "Classic 4 BHK — 1,700+ sq.ft.",
      "Waterfront-facing living with premium CBD Belapur positioning",
    ],
    amenities: [
      "Waterfront & panoramic view-oriented design",
      "Curated retail boulevard",
      "Multi-level parking (basement + surface)",
      "Landscaped & tree-lined arrival experience",
      "Thoughtful lifestyle amenities (details on enquiry)",
      "Strong CBD Belapur connectivity",
    ],
  },
  {
    slug: "mayuresh-planet-cbd-belapur",
    name: "Mayuresh Planet",
    location: "Sector 15, CBD Belapur, Navi Mumbai",
    price: "Price on Request",
    bhk: "Grade-A office spaces & retail shops",
    image: "/Mayuresh/1.jpeg",
    images: MAYURESH_PLANET_GALLERY,
    size: "Up to 2,76,000 sq.ft. built-up",
    builder: "Mayuresh Group",
    propertyType: "Commercial",
    possession: "Ready to move",
    overview: `Mayuresh Planet is a Grade A commercial development offering office spaces and retail shops in the prime business district of CBD Belapur, Navi Mumbai.

Strategically located with excellent connectivity, the project sits among corporate hubs and is designed for modern businesses seeking presence in one of Navi Mumbai's most established CBD addresses.

Scale: up to 2,76,000 sq.ft. built-up. RERA: P51700011665.

Connect with Golden Brix for layouts, availability, and investment options.`,
    highlights: [
      "Prime Sector 15 — CBD Belapur, Navi Mumbai",
      "Grade A commercial — offices & retail shops",
      "Up to 2,76,000 sq.ft. built-up",
      "Excellent connectivity; surrounded by business hubs",
      "Modern infrastructure and amenities",
      "RERA P51700011665",
      "Ready to move",
    ],
    amenities: [
      "24/7 security",
      "CCTV surveillance",
      "Power backup",
      "Fire safety systems",
      "Multi-level parking",
      "Conference rooms",
      "Business centre",
      "Cafeteria",
    ],
  },
  {
    slug: "9pbr-adani-realty",
    name: "9PBR - Adani Realty",
    location: "Palm Beach Road, Nerul, Navi Mumbai",
    price: "Price on Request",
    bhk: "3 BHK Luxury Residences",
    image:
      "https://sunitarealestate.com/wp-content/uploads/2025/06/Cam-2-Semi-Aerial-1-2-scaled.jpg",
    builder: "Adani Realty",
    propertyType: "Residential",
    possession: "Under Construction",
    overview: `LIVE INFINITELY. NERUL, NAVI MUMBAI. WHERE YOUR HORIZON EXTENDS TO INFINITY. Palm Beach Road, Nerul. Navi Mumbai, a crown jewel among the world's largest planned cities, offers an infinite canvas of modern living. Renowned as India's fourth cleanest city, it has undergone a remarkable transformation into a sought-after destination for both residential and commercial enterprises. The Palm Beach Road, an epitome of luxury, provides an endless vista of the Arabian Sea and a lifestyle of unparalleled convenience.`,
    highlights: [
      "Double Height Lobby",
      "Banquet Hall",
      "Swimming Pool",
      "Jogging Track",
      "Gym",
      "Landscaped Garden",
      "Toddler's Play Area",
      "Games Room",
      "Energy Efficient Led Lights In Common & External Areas",
      "Recreational Space",
      "CCTV Surveillance",
      "Access Controlled Lobbies",
    ],
    amenities: [
      "Swimming Pool",
      "Gym",
      "Landscaped Garden",
      "Jogging Track",
      "Games Room",
      "Banquet Hall",
    ],
  },
  {
    slug: "elysium-platinum",
    name: "Elysium Platinum",
    location: "Nerul, Navi Mumbai",
    price: "Price on Request",
    bhk: "2 and 3 BHK Residences",
    image: "https://theplatinumgroup.co.in/assets/img/ongoing/01.jpg",
    builder: "Platinum Group",
    propertyType: "Residential",
    possession: "Under Construction",
    overview: `The Icon Of Timeless Sophistication. Experience life with a touch of brilliance at Platinum Elysium. Crafted like a masterpiece, the ethereal landmark represents excellence in construction standards and finesse in design, welcoming you into a world of timeless sophistication at Nerul.`,
    highlights: [
      "The Icon Of Timeless Sophistication",
      "Spacious Sophisticated Homes",
      "CIDCO Tender Plot",
      "Super Sized 2, 3 & 4 Bed Residences",
      "Exclusive Neighbourhood",
      "Quality & Ease Of Living",
      "Large Viewing Decks",
      "Podium Floor Amenities",
    ],
    amenities: [
      "Lavish Swimming Pool with Kids Pool & Changing Rooms",
      "Fully Equipped Gymnasium",
      "Magnificent Clubhouse for Indoor Games",
      "Expansive Outdoor Kids Play Area",
    ],
  },
  {
    slug: "sai-world-one",
    name: "Sai World One",
    location: "Nerul, Navi Mumbai",
    price: "Price on Request",
    bhk: "Residences, Offices and Retail",
    image:
      "https://sunitarealestate.com/wp-content/uploads/2025/07/Screenshot-2025-07-04-141319.webp",
    builder: "Sai World Developers",
    propertyType: "Mixed Use",
    possession: "Under Construction",
    overview: `ONE LIFE. ONE WORLD. ONE OPPORTUNITY. A World-class Business Ecosystem For Unparalleled Success. Sai World One brings together RESIDENCES | OFFICES | RETAIL in a landmark Nerul, Navi Mumbai destination for elevated lifestyle and business success.`,
    highlights: [
      "2 MAGNIFICENT TOWERS OF G+36 STOREYED",
      "AMPLE VEHICLE PARKING SPACES",
      "BESPOKE LIFESTYLE AMENITIES ON PODIUM",
      "DESIGNER ENTRANCE LOBBY AND LIFTS",
      "VERY CLOSE TO D.Y. PATIL STADIUM",
      "2 & 3 BED WORLD LUXURY HOMES",
      "G+38 STOREY BUSINESS LANDMARK",
      "MOUNTAIN VIEW AND SEA VIEW OFFICE SPACES",
      "30 OFFICES PER FLOOR",
      "LOUNGE WITH GRAND DOUBLE-HEIGHT CEILINGS",
      "BEST-IN-CLASS FACILITIES AND BUILDING MAIN",
      "A world-class business ecosystem for unparalleled success",
    ],
    amenities: [
      "G+38 STOREY BUSINESS LANDMARK",
      "MOUNTAIN VIEW AND SEA VIEW OFFICE SPACES",
      "30 OFFICES PER FLOOR",
      "LOUNGE WITH GRAND DOUBLE-HEIGHT CEILINGS",
      "BEST-IN-CLASS FACILITIES AND BUILDING MAIN",
      "2 MAGNIFICENT TOWERS OF G+36 STOREYED",
      "AMPLE VEHICLE PARKING SPACES",
      "BESPOKE LIFESTYLE AMENITIES ON PODIUM",
      "DESIGNER ENTRANCE LOBBY AND LIFTS",
    ],
  },
  {
    slug: "dream-ikon",
    name: "Dream Ikon",
    location: "Nerul, Navi Mumbai",
    price: "Price on Request",
    bhk: "Premium Commercial Office Spaces",
    image:
      "https://sunitarealestate.com/wp-content/uploads/2025/07/Screenshot-2025-07-04-142534.png",
    builder: "Dream Group",
    propertyType: "Commercial",
    possession: "Under Construction",
    overview: `Hallmarks that make truly ikonic. Dream Ikon offers limited edition small, medium & large business spaces in a contemporary 31 storied corporate high-rise at Nerul, Navi Mumbai — with car parks across G+5 podium levels, breathtaking sea views & cityscapes, podium floor amenities, and a strategic location opposite D.Y. Patil Stadium.`,
    highlights: [
      "Limited edition small, medium & large business spaces",
      "Contemporary 31 storied corporate high-rise",
      "Car parks across G+5 podium levels",
      "Breathtaking sea views & cityscapes",
      "Podium floor amenities",
      "Strategically located right opp. D.Y. Patil Stadium",
    ],
    amenities: [
      "Double-height welcome lobby",
      "Reception & waiting lounge",
      "Cafe with exotic beverages",
      "Breathtaking arabian sea views & cityscapes",
      "Provision to join Multiple Offices for Bigger Floor Plate",
      "Demarcated Work Stations & Director Cabins",
      "Provision for Pantry & Restrooms",
    ],
  },
  {
    slug: "oakwoods-platinum",
    name: "Oakwoods Platinum",
    location: "Nerul, Navi Mumbai",
    price: "Price on Request",
    bhk: "Premium Residences",
    image: "https://theplatinumgroup.co.in/assets/img/ongoing/07.jpg",
    builder: "Platinum Group",
    propertyType: "Residential",
    possession: "Under Construction",
    overview: `A Universe Of Luxury And Inspiration. Thoughtfully Designed To Captivate And Inspire. Platinum Oakwoods is a statement of refined living, where impeccable design meets modern luxury. Every residence is meticulously planned to offer expansive spaces, premium finishes, and an effortless sense of grandeur.`,
    highlights: [
      "Grandiose G+16 Storeyed Tower",
      "Multi-Level Amenities At The Podium & Rooftop Level",
      "Grandeur Entrance Lobby",
      "High Speed Elevators",
      "Sound Reduction Windows",
      "CIDCO Tender Plot",
      "Centrally Located For Quality And Ease Of Living",
      "Ultra-luxurious 2,3 & 4 Bed Residences",
      "Large Viewing Decks",
      "Rooftop And Podium Floor Amenities",
    ],
    amenities: [
      "Exquisite Swimming Pool",
      "High-End Gymnasium",
      "Elegant Multipurpose Hall",
      "Ultimate Clubhouse for Indoor Games",
      "Exciting Kids Play Area",
      "Majestic Stepped Seating with Trellis",
      "Toddlers' Fun Play Area",
      "Enchanting Party Lawn",
      "Tranquil Senior Citizen Corner",
      "Stellar Star Gazing Deck",
    ],
  },
  {
    slug: "platinum-juinagar-midc",
    name: "Platinum Juinagar MIDC",
    location: "Juinagar MIDC, Navi Mumbai",
    price: "Price on Request",
    bhk: "2, 3 and 4 BHK Apartments",
    image:
      "https://sunitarealestate.com/wp-content/uploads/2025/06/Cam-2-Semi-Aerial-1-2-scaled.jpg",
    builder: "Platinum Group",
    propertyType: "Residential",
    possession: "Pre-launch",
    overview: `Platinum Juinagar MIDC - Pre Launch. Introducing PLATINUM GROUP's most exclusive offering: A Luxurious Estate spanning 5 Acres in the Heart of Juinagar, MIDC with Unparalleled Amenities for work-life balance. UBER-LUXE 2, 3, & 4 BED RESIDENCES. NEXT-GEN SMART IT OFFICES.`,
    highlights: [
      "Platinum Juinagar MIDC - Pre Launch",
      "WHERE YOUR HORIZON EXTENDS TO INFINITY",
      "Platinum Juinagar Midc Upcoming Project | 2 / 3 / 4 BHK",
      "UBER-LUXE 2, 3, & 4 BED RESIDENCES",
      "NEXT-GEN SMART IT OFFICES",
      "Booking Open Platinum Juinagar Midc",
    ],
    amenities: [
      "Double Height Lobby",
      "Banquet Hall",
      "Swimming Pool",
      "Jogging Track",
      "Gym",
      "Landscaped Garden",
      "Toddler's Play Area",
      "Games Room",
      "Energy Efficient Led Lights In Common & External Areas",
      "Recreational Space",
      "CCTV Surveillance",
      "Access Controlled Lobbies",
    ],
  },
  {
    slug: "codename-growth",
    name: "Codename Growth",
    location: "Nerul, Navi Mumbai",
    price: "Price on Request",
    bhk: "Commercial Offices",
    image:
      "https://sunitarealestate.com/wp-content/uploads/2025/07/Screenshot-2025-07-04-183718.png",
    builder: "Kamdhenu Group",
    propertyType: "Commercial",
    possession: "Under Construction",
    overview: `The Next Business Land Of Nerul. Codename Growth is a premier commercial opportunity in Nerul, Navi Mumbai — positioned for enterprises seeking visibility and connectivity in one of Navi Mumbai's most dynamic corridors.`,
    highlights: [
      "The Next Business Land Of Nerul",
      "Strategic Nerul commercial address",
      "Strong road and landmark connectivity",
    ],
    amenities: [
      "Premium commercial workspace design",
      "Landmark-adjacent Nerul location",
      "Suited for offices and business presence",
    ],
  },
  {
    slug: "platinum-the-reserve",
    name: "Platinum The Reserve",
    location: "Kharghar, Navi Mumbai",
    price: "Price on Request",
    bhk: "Luxury Residences",
    image: "https://theplatinumgroup.co.in/assets/img/ongoing/04.jpg",
    builder: "Platinum Group",
    propertyType: "Residential",
    possession: "Under Construction",
    overview: `Unveiling The Epitome Of Opulence. Step into your home with unmatched style, greeted by a double-height grand entrance and a VIP waiting lounge. Each residence boasts grand sundecks for the most discerning individuals.`,
    highlights: [
      "Unveiling The Epitome Of Opulence",
      "Deep Dive Into A World Of Immersive And Indulgent Experiences",
      "Witness An Address Of Sheer Magnificence",
      "Belong To The Most Sought-After Address",
    ],
    amenities: [
      "Luxurious Recreational Space with Coffee Lounge",
      "Lavish Banquet Hall with Separate Entry & Exit",
      "Fully Professionally Run Gym",
      "Exciting Indoor Games with Library",
      "Vibrant Kids Play Area",
      "Exciting Box Cricket",
      "Versatile Multi Play Court",
      "Lush Multi Purpose Lawn",
      "Scenic Jogging Track",
      "Mesmerizing Infinity Swimming Pool/Kids Pool",
      "Serene Landscaped Garden With Trellis Sitouts For Elderly",
    ],
  },
  {
    slug: "cyber-square",
    name: "Cyber Square",
    location: "Nerul, Navi Mumbai",
    price: "Price on Request",
    bhk: "Premium Commercial Spaces",
    image:
      "https://sunitarealestate.com/wp-content/uploads/2025/07/Screenshot-2025-07-04-143023.png",
    builder: "Greenscape Group",
    propertyType: "Commercial",
    possession: "Under Construction",
    overview: `A Legacy of Trust and Design Excellence. The Greenscape Group is a premium real estate company headquartered in Navi Mumbai, renowned for blending luxury, ingenuity and experiential living for over two decades.`,
    highlights: [
      "A Legacy of Trust and Design Excellence",
      "Arrival Experience, As Distinguished As Your League",
      "Strategic Location. Seamless Connectivity",
    ],
    amenities: [
      "Thoughtfully designed for modern enterprises and professionals",
      "Premium finishes, elegant double-height lobbies",
      "Flexible floor plates ideal for premium enterprises and large corporates",
      "Smart building management systems and energy-efficient design",
      "High-speed elevators, multi-tier security, and seamless access",
      "Ample parking availability with seamlessly integrated EV charging infrastructure",
    ],
  },
  {
    slug: "mensionz-platinum",
    name: "Mensionz Platinum",
    location: "Seawoods, Navi Mumbai",
    price: "Price on Request",
    bhk: "Premium Residences",
    image: "https://theplatinumgroup.co.in/assets/img/ongoing/06.jpg",
    builder: "Platinum Group",
    propertyType: "Residential",
    possession: "Under Construction",
    overview: `A Lifestyle Larger Than Life Curated For Selective Experiences. Platinum Mansionz offers spacious sophisticated homes on a CIDCO tender plot with super sized 2, 3 & 4 bed residences, an exclusive neighbourhood, quality and ease of living, large viewing decks, and podium floor amenities — all in Seawoods, Navi Mumbai.`,
    highlights: [
      "A Lifestyle Larger Than Life Curated For Selective Experiences",
      "A Selection Of World-Class Indulgences To Work, Play & Live",
      "Experience A Signature Lifestyle",
      "An Address Where Getting Around Is As Effortless As Getting Ahead",
    ],
    amenities: [
      "Lavish Swimming Pool",
      "Fully Equipped Gymnasium",
      "Joyful Kids Play Area",
      "Serene Jogging Track",
      "Peaceful Yoga Room",
      "Engaging Indoor Games Room",
      "Recreational Rooftop Amenities With Lush Greenery",
    ],
  },
  {
    slug: "k-raheja-corp-homes",
    name: "K Raheja Corp Homes",
    location: "Juinagar, Navi Mumbai",
    price: "Price on Request",
    bhk: "Premium Residences",
    image:
      "https://sunitarealestate.com/wp-content/uploads/2025/06/Screenshot-2025-06-26-110203.png",
    builder: "K Raheja Corp",
    propertyType: "Residential",
    possession: "Under Construction",
    overview: `Infrastructure That Drives Economic Growth. Multi-modal Connectivity That Catalyses It. K Raheja Corp Homes at Jade City, Juinagar, brings a great residential hub defined by strategic location and accessibility, long-term growth from NMIA and major infrastructure, high appreciation potential, and an attractive residential choice with peaceful yet connected living.`,
    highlights: [
      "STRATEGIC LOCATION & ACCESSIBILITY — Quick access via Sion-Panvel Highway to CBD Belapur, Turbhe, Airoli, Ghansoli and upcoming BKC 2 (Kharghar), Navi Mumbai SEZ",
      "LONG TERM GROWTH — NMIA and infrastructure set to elevate real estate values; Juinagar a prime investment corridor",
      "HIGH APPRECIATION POTENTIAL — Strong ROI and rental yield outlook",
      "ATTRACTIVE RESIDENTIAL CHOICE — Quiet, decongested location with impeccable connectivity",
    ],
    amenities: [
      "Khargarh-Turbhe Link Road access",
      "Navi Mumbai Aerocity proximity",
      "Outdoor Entertainment Arena",
      "Navi Mumbai Integrated Industrial Area connectivity",
      "Atal Setu (MTHL)",
      "Navi Mumbai International Airport (NMIA) on the horizon",
    ],
  },
  {
    slug: "one-platinum",
    name: "One Platinum",
    location: "CBD Belapur, Navi Mumbai",
    price: "Price on Request",
    bhk: "Commercial Spaces",
    image: "https://theplatinumgroup.co.in/assets/img/completed/01.jpg",
    builder: "Platinum Group",
    propertyType: "Commercial",
    possession: "Under Construction",
    overview: `Our landmarks epitomize opulent living with their luxurious amenities and fine construction standards, offering a harmonious blend of sophistication and comfort. Revel In The Lap Of Pristine Comfort — the iconic CBD Belapur address.`,
    highlights: [
      "Located At CBD Belapur, Navi Mumbai",
      "Exclusive Premium Office Spaces",
      "Commecement Date May 2018",
      "Completion Date December 2022",
      "Rooftop Cafeteria With Lush Greenery",
      "CIDCO Tender Plot",
    ],
    amenities: [
      "Exclusive premium office floor plates",
      "Rooftop cafeteria with lush greenery",
      "Premium entrance and lift experience",
      "Landmark Platinum Group construction quality",
    ],
  },
  {
    slug: "praksyde-platinum",
    name: "Praksyde Platinum",
    location: "Kharghar, Navi Mumbai",
    price: "Price on Request",
    bhk: "Premium Residences",
    image: "https://theplatinumgroup.co.in/assets/img/ongoing/03.jpg",
    builder: "Platinum Group",
    propertyType: "Residential",
    possession: "Under Construction",
    overview: `Revel In The Lap Of Pristine Comfort. The iconic Kharghar address has been crafted in a way that will sweep you off your feet at first glance. From curated privileges to exquisite indulgences, everything here is meant for a life unparalleled. Located amidst the serene environs of Kharghar with outstanding connectivity.`,
    highlights: [
      "Revel In The Lap Of Pristine Comfort",
      "An Ultimate Retreat For Unmatched Indulgences",
      "Take A Closer Glimpse At The Marvel",
      "Located Amidst The Serene Environs Of Kharghar",
      "Private Entrance Lobby For Owners",
      "Super Sized 2 & 3.5 BHK Flats",
      "CIDCO Tender Plot",
    ],
    amenities: [
      "Charming Swing Seat Trellis",
      "Expansive Lawn",
      "Sparkling Swimming Pool",
      "Sun-Kissed Deck",
      "Panoramic Viewing Gallery With Binocular",
      "Majestic Focal Tree Cluster",
      "Scenic Jogging Track",
      "Modern Changing Room",
      "Versatile Multipurpose Hall",
      "State-Of-The-Art Gymnasium",
      "Lively Indoor Games Arena",
      "Enchanting Kids Play Area",
    ],
  },
  {
    slug: "westwoods-platinum",
    name: "Westwoods Platinum",
    location: "Seawoods, Navi Mumbai",
    price: "Price on Request",
    bhk: "Luxury Residences",
    image: "https://theplatinumgroup.co.in/assets/img/ongoing/05.jpg",
    builder: "Platinum Group",
    propertyType: "Residential",
    possession: "Under Construction",
    overview: `Revel In The Lap Of Pristine Comfort. Premium Seawoods living with Platinum Westwoods — Majestic G+15 Storeyed Tower, Uber Luxe 3 & 4 Bed Residences, impressive entrance lobby, exquisite clubhouse, CIDCO tender plot.`,
    highlights: [
      "Majestic G+15 Storeyed Tower",
      "Conveniently Located in Seawoods",
      "Uber Luxe 3 & 4 Bed Residences",
      "Impressive Entrance Lobby",
      "Exquisite Clubhouse",
      "CIDCO Tender Plot",
      "Enhance Your Lifestyle With Exclusive Amenities",
      "Where Opulence Is A Way Of Life",
      "Embrace Unrivaled Connectivity At Seawoods's Premier Location",
    ],
    amenities: [
      "Refreshing Swimming Pool with Kids Pool",
      "Fully Equipped Gymnasium",
      "Lavish Clubhouse for Indoor Games",
      "Entertaining Outdoor Kids Play Area",
    ],
  },
  {
    slug: "goodwill-wisteria",
    name: "GoodWill Wisteria",
    location: "Vashi, Navi Mumbai",
    price: "Price on Request",
    bhk: "Premium Apartments",
    image:
      "https://sunitarealestate.com/wp-content/uploads/2025/07/Screenshot-2025-07-08-160954-1.png",
    builder: "GoodWill Developers",
    propertyType: "Residential",
    possession: "Under Construction",
    overview: `WORTH THE WAIT. WORTHY OF YOU. GoodWill Wisteria delivers grand 3, 3.5 & 4.5 sky residences with corner plot advantage, spacious sundecks with sea, hill & city views, 30+ E-Deck amenities, lavish clubhouse with infinity pool, bright cross-ventilated homes, and floor to ceiling height of 10.9 feet — a landmark address near Vashi and Palm Beach Road.`,
    highlights: [
      "Corner Plot Surrounded By 3 Roads",
      "Spacious Sundecks With Sea, Hill & City Views",
      "30+ E-Deck Amenities",
      "Lavish Clubhouse With Infinity Pool",
      "G+23 Storeyed Tower",
      "Grand 3, 3.5 & 4.5 Sky Residences",
      "Bright & Cross Ventilated Residences",
      "Floor To Ceiling Height Of 10.9 Feet",
    ],
    amenities: [
      "Lavish Clubhouse With Infinity Pool",
      "30+ E-Deck Amenities",
      "Grand sky residences with premium specifications",
      "Corner plot with three-road frontage",
    ],
  },
  {
    slug: "esquire-platinum",
    name: "Esquire Platinum",
    location: "Nerul, Navi Mumbai",
    price: "Price on Request",
    bhk: "Premium Residences",
    image: "https://theplatinumgroup.co.in/assets/img/ongoing/02.jpg",
    builder: "Platinum Group",
    propertyType: "Residential",
    possession: "Under Construction",
    overview: `A Nest Where Your Dreams Reside And Thrive. Welcome to a residential address that offers you a way of life, punctuated with indulgences and experiences that will leave you in awe. At Platinum Esquire the thin line between dreams and realities doesn't exist.`,
    highlights: [
      "A Nest Where Your Dreams Reside And Thrive",
      "Revel To Your Heart's Content Amidst Blissful Indulgences",
      "Discover A Realm Of True Luxury",
      "Supersized 2 & 3 Bed Residences",
      "G+14 Storeyed Building",
      "Rooftop Amenities Amidst Lush Greenery",
      "CIDCO Tender Plot",
    ],
    amenities: [
      "Inviting Swimming Pool",
      "State-Of-The-Art Gym",
      "Vibrant Children's Play Area",
      "Dynamic Indoor Games Area",
      "Tranquil Senior Citizen's Area",
      "Massive Multipurpose Hall",
      "Picturesque Jogging Track",
    ],
  },
  {
    slug: "code-name-green-gold",
    name: "Code Name Green Gold",
    location: "Nerul, Navi Mumbai",
    price: "Price on Request",
    bhk: "3, 4 and 6 BHK Residences",
    image: "https://sunitarealestate.com/wp-content/uploads/2026/01/green-gold-1.jpg",
    builder: "Shree Sai Developers",
    propertyType: "Residential",
    possession: "Under Construction",
    overview: `Where the Midas Touch of Nature Meets Modern Grandeur. Codename Green Gold, Nerul — Signature Collection by Sai Developers: biophilic 3, 4 & 6 Bed Signature Deck Residences in a G+29 tower with G+3 parking, grand podium lifestyle zone, panoramic sea views, booking open. Just off Palm Beach Road, Navi Mumbai.`,
    highlights: [
      "G+29 Storeyed Tower with G+3 levels of dedicated parking",
      "3, 4 & 6 Bed Signature Deck Residences",
      "20,500 sq. ft. lifestyle podium — wellness, recreation, serenity",
      "Biophilic architecture with integrated lush greenery",
      "Grand double-height lobby and designer entrance",
      "Booking Open — RERA Registration: Coming Soon",
    ],
    amenities: [
      "Nature Café",
      "Creche & Kids Play Area",
      "Business Centre",
      "Swimming Pool",
      "Signature lifestyle podium amenities",
    ],
  },
  {
    slug: "platinum-juinagar-new-launch",
    name: "Platinum Juinagar New Launch",
    location: "Juinagar, Navi Mumbai",
    price: "Price on Request",
    bhk: "2, 3 and 4 BHK Apartments",
    image:
      "https://sunitarealestate.com/wp-content/uploads/2026/01/platinumjuinagarlaunch.jpg",
    builder: "Reputed Navi Mumbai Developers",
    propertyType: "Residential",
    possession: "Pre-launch",
    overview: `PLATINUM NEW LAUNCH AT JUINAGAR MIDC. Platinum Juinagar is an iconic G+30 storey high-rise with premium 2, 3 and 4 BHK residences on a large MIDC Juinagar land parcel — biophilic design, 7-star lifestyle positioning, smart layouts and strong connectivity to Juinagar station, Sion-Panvel Highway, Nexus Seawoods, NMIA and Atal Setu.`,
    highlights: [
      "PLATINUM NEW LAUNCH AT JUINAGAR MIDC",
      "G+30 storey high-rise | biophilic design",
      "Luxurious 2, 3 & 4 BHK Apartments",
      "DOWN PAYMENT PLAN | INVESTOR OFFER | OFFERS & DISCOUNTS",
      "OFFICES Starting At — Call For Price",
      "Juinagar Railway Station 2–5 mins | Sion-Panvel Expressway 3–5 mins",
    ],
    amenities: [
      "Rooftop garden & sky-level amenities (per launch positioning)",
      "State-of-the-art fitness centre & kids' play area",
      "Elegant entrance lobby & 24/7 security",
      "40+ lifestyle amenities — Singapore-themed podium (per site)",
    ],
  },
  {
    slug: "9pbr-palm-beachroad",
    name: "9PBR Palm Beachroad",
    location: "Palm Beach Road, Nerul, Navi Mumbai",
    price: "Price on Request",
    bhk: "3 BHK Uber Luxury Residences",
    image: "https://sunitarealestate.com/wp-content/uploads/2026/01/9-pbr.jpg",
    builder: "Sai Developers",
    propertyType: "Residential",
    possession: "Under Construction",
    overview: `Discover a life of unparalleled luxury at 9PBR—an architectural collaboration between Mistry Construction and Adani Realty at Palm Beach Road, Nerul. Spread across a sprawling ~6.7-acre low-density parcel, the development offers bespoke 2.5, 3, and 4 BHK residences with sea-facing vistas, privacy-forward floor plans, and 20+ lifestyle amenities across a two-acre podium.`,
    highlights: [
      "Joint venture: Adani Realty & Mistry Construction; iconic Palm Beach Road, Nerul",
      "~6.7-acre land parcel; RERA registered; 3 premium towers (G+12 to G+15 storeys)",
      "Low-density living with approximately 147–149 exclusive residences",
      "3 BHK uber-luxury homes from ₹3.25 Cr* onwards; 2.5–4 BHK configurations (sizes on request)",
      "~2-acre podium with 20+ amenities: infinity pool, gym, mini theatre, skydeck, jogging track",
      "EV charging, gas leak detectors, video door phones, CCTV & access-controlled lobbies",
      "Connectivity: Atal Setu to South Mumbai; NMIA ~15–20 min; Nerul & Seawoods stations nearby",
      "Panoramic Arabian Sea & mangrove views; Nexus Seawoods Mall, DPS & Apollo within minutes",
    ],
    amenities: [
      "Infinity-edged & temperature-controlled swimming pools",
      "Well-equipped gymnasium & wellness spaces",
      "~2-acre landscaped podium with jogging track",
      "Mini theatre, skydeck, banquet hall & automated car wash",
      "Children's play area & landscaped gardens",
      "EV charging stations & fiber-ready wiring",
      "3-tier security: CCTV, video door phones, access-controlled lobbies",
      "Gas leak detectors integrated with alert systems",
      "Ample parking; many 3 BHK units with two car parks",
    ],
  },
  {
    slug: "emperia-c2-turbhe",
    name: "Emperia C2 Turbhe",
    location: "Turbhe, Navi Mumbai",
    price: "Price on Request",
    bhk: "Premium Retail and Office Spaces",
    image: "https://sunitarealestate.com/wp-content/uploads/2026/02/em-su.jpg",
    builder: "Emperia Projects",
    propertyType: "Commercial",
    possession: "Under Construction",
    overview: `Emperia C2 Turbhe is a premier commercial development beside the IKEA showroom in Turbhe, Navi Mumbai. Across a ~2.5-acre land parcel, the project delivers spacious, modern office and retail spaces with contemporary architecture designed for both sophistication and productivity.`,
    highlights: [
      "Spot booking offers, early-buy discounts & flexible payment plans (as per developer)",
      "~2.5-acre land parcel; high-rise tower with 31 floors; 600+ premium office spaces",
      "Premium retail & office spaces from ₹77.90 Lacs* ++ taxes",
      "11 ft office height; ~60,000 sq. ft. podium spaces; 1000+ car parking",
      "High-end retail | Grand entrance lobby | Five levels of parking (project-specific)",
      "Steps from IKEA Turbhe; strong rail & road links to Vashi, Belapur, Seawoods & beyond",
      "NH4 & Mumbai–Pune Expressway access; Navi Mumbai International Airport ~25 min (marketing claims)",
    ],
    amenities: [
      "Business lounge & executive lounge",
      "Spa/salon & yoga deck",
      "Indoor sports area",
      "Swimming pool & outdoor seating",
      "Retail frontage & high-speed elevators",
      "Landscaped gardens, wide verandas & podium greens",
      "Ample parking & 24x7 security infrastructure",
    ],
  },
  {
    slug: "birla-estate-airoli",
    name: "Birla Estate Airoli",
    location: "Airoli, Navi Mumbai",
    price: "Price on Request",
    bhk: "Premium 2 and 3 BHK Homes",
    image: "https://sunitarealestate.com/wp-content/uploads/2026/02/al-sinita.jpg",
    builder: "Birla Estates",
    propertyType: "Residential",
    possession: "Under Construction",
    overview: `Welcome to Birla Taranya—luxury living at the Thane–Airoli junction by Birla Estates. This landmark new launch spans an expansive ~14-acre integrated township that blends modern lifestyle, seamless connectivity, and long-term investment potential. Phase 1 introduces premium 2 and 3 BHK smartly designed residences across six planned towers (two launching first), with low-density planning and a dedicated ~4-acre commercial zone for everyday convenience.`,
    highlights: [
      "~14-acre integrated township | 6 premium residential towers (Phase 1: 2 towers launching)",
      "2 & 3 BHK residences | Low-density living with fewer flats per floor",
      "~10 acres premium residential | ~4 acres planned commercial development",
      "50+ lifestyle amenities | Spot booking offers (as per developer)",
      "Homes from ₹1.34 Cr. onwards ++ taxes",
      "Prime connectivity to Thane, Airoli IT hubs, Ghansoli, Vashi & Kopar Khairane",
      "Backed by Birla Estates and the Aditya Birla Group legacy",
    ],
    amenities: [
      "Clubhouse & multi-purpose lifestyle spaces",
      "Swimming pool & landscaped parks",
      "Modern gymnasium & sports facilities (incl. cricket ground references on site)",
      "Children's play & open green pockets",
      "Gated community planning with multi-tier security",
      "Rainwater harvesting & energy-efficient design cues (per marketing)",
    ],
  },
];

export const PROPERTIES_CATALOG: CatalogProperty[] = RAW_PROPERTIES_CATALOG.map(
  (p) => {
    const local = LOCAL_CARD_IMAGE_BY_SLUG[p.slug];
    const image = local ?? p.image ?? DEFAULT_PROPERTY_CARD_IMAGE;
    const images =
      p.images && p.images.length > 0 ? p.images : image ? [image] : [];
    return { ...p, image, images };
  },
);

/** Digits from BHK / "bed" style configuration lines, sorted unique. */
function extractBhkBedTokens(bhk: string): string[] | null {
  const h = bhk.trim();
  const lower = h.toLowerCase();
  if (!lower.includes("bhk") && !/\bbed\b/i.test(h)) return null;
  const nums = h.match(/\d+(?:\.\d+)?/g);
  if (!nums?.length) return null;
  return [...new Set(nums)].sort((a, b) => parseFloat(a) - parseFloat(b));
}

/** Human-readable typology from configuration + property type (no empty "—"). */
export function deriveTypologyLabel(bhk: string, propertyType: string): string {
  const t = propertyType.toLowerCase();
  const h = bhk.trim();

  if (t.includes("commercial")) {
    if (/retail/i.test(h) && /office/i.test(h)) return "Retail & office spaces";
    if (/retail/i.test(h)) return "Premium retail spaces";
    if (/office/i.test(h)) return "Grade-A office spaces";
    return "Commercial spaces";
  }

  if (t.includes("mixed")) {
    return "Residences · offices · retail";
  }

  const sorted = extractBhkBedTokens(h);
  if (sorted?.length) {
    if (sorted.length === 1) return `${sorted[0]} BHK`;
    if (sorted.length === 2) return `${sorted[0]} & ${sorted[1]} BHK`;
    return `${sorted.slice(0, -1).join(", ")} & ${sorted[sorted.length - 1]} BHK`;
  }

  return h.length > 0 ? h : "Premium residences";
}

/**
 * Compact line for the property detail "Bedrooms" stat (from catalog BHK + type).
 */
export function deriveBedroomsCardValue(
  bhk: string,
  propertyType: string,
): string {
  const t = propertyType.toLowerCase();
  const h = bhk.trim();

  if (t.includes("commercial")) {
    if (/retail/i.test(h) && /office/i.test(h)) return "Retail & offices";
    if (/retail/i.test(h)) return "Retail spaces";
    if (/office/i.test(h)) return "Office spaces";
    return "Commercial units";
  }

  if (t.includes("mixed")) {
    return "Homes, offices & retail";
  }

  const sorted = extractBhkBedTokens(h);
  if (sorted?.length) {
    if (sorted.length === 1) return `${sorted[0]} BHK`;
    if (sorted.length === 2) return `${sorted[0]}–${sorted[1]} BHK`;
    return `${sorted.slice(0, -1).join(", ")} & ${sorted[sorted.length - 1]} BHK`;
  }

  return deriveTypologyLabel(bhk, propertyType);
}

/**
 * Bathrooms stat: uses BHK-derived counts when possible; otherwise friendly copy (no "—").
 */
export function deriveBathroomsCardValue(
  bhk: string,
  propertyType: string,
): string {
  const t = propertyType.toLowerCase();
  const h = bhk.trim();
  if (
    t.includes("commercial") ||
    /commercial|office|retail|business/i.test(h)
  ) {
    return "As per workspace layout";
  }
  if (t.includes("mixed")) {
    return "Varies by unit (floor plan)";
  }

  const sorted = extractBhkBedTokens(h);
  if (sorted?.length) {
    const min = parseFloat(sorted[0]);
    const max = parseFloat(sorted[sorted.length - 1]);
    if (min === max) {
      if (max <= 1) return "1–2 baths typical";
      if (max === 2) return "2 baths typical";
      return `2–${Math.ceil(max)} baths typical`;
    }
    return `${Math.ceil(min)}–${Math.ceil(max)} baths typical`;
  }

  return "Premium specs · per floor plan";
}

/** Alias for older call sites / cached code that still references `deriveBathroomsLabel`. */
export const deriveBathroomsLabel = deriveBathroomsCardValue;

export function catalogToDetailRecord(
  items: CatalogProperty[],
): Record<
  string,
  {
    name: string;
    location: string;
    price: string;
    bhk: string;
    size: string;
    beds: string;
    baths: string;
    image: string;
    images?: string[];
    overview: string;
    description: string;
    amenities: string[];
    highlights: string[];
  }
> {
  return Object.fromEntries(
    items.map((p) => [
      p.slug,
      {
        name: p.name,
        location: p.location,
        price: p.price,
        bhk: p.bhk,
        size: p.size?.trim() ? p.size.trim() : "As per project plan",
        beds: deriveBedroomsCardValue(p.bhk, p.propertyType),
        baths: deriveBathroomsCardValue(p.bhk, p.propertyType),
        image: p.image,
        ...(p.images?.length ? { images: p.images } : {}),
        overview: p.overview,
        description: p.overview,
        amenities: p.amenities,
        highlights: p.highlights,
      },
    ]),
  );
}
