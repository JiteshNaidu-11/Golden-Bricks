export type TeamMember = {
  name: string;
  title: string;
  bio: string;
};

export type TestimonialItem = {
  name: string;
  location: string;
  rating: 4 | 5;
  text: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  dateLabel: string;
  coverImage: string;
  excerpt: string;
  content: string;
};

export const ABOUT_COPY = {
  intro:
    "Golden Brix Properties is a premium real estate advisory focused on curated residential opportunities across Mumbai and Navi Mumbai. We combine on-ground market intelligence with a client-first process—so every recommendation is clear, data-backed, and aligned with your lifestyle and long-term value.",
  mission:
    "To simplify home buying and investing with transparent advice, verified inventory, and a service experience that feels calm, premium, and dependable—every step of the way.",
  vision:
    "To become the most trusted real estate partner for Mumbai & Navi Mumbai families and investors by raising the standard for research, service, and post-sale support.",
  why: [
    "Curated shortlists instead of overwhelming listings",
    "Verified project fundamentals: connectivity, neighborhood, developer track record",
    "Negotiation support and documentation guidance",
    "Clear ROI lens for investors: rental demand, infra catalysts, exit strategy",
    "After-sales support for handover, renting, and resale planning",
  ],
  stats: [
    { label: "Years of experience", value: "15+" },
    { label: "Happy families", value: "500+" },
    { label: "Properties sold", value: "120+" },
  ],
  team: [
    {
      name: "Nitin Sonawale",
      title: "Principal Advisor, Mumbai & Navi Mumbai",
      bio: "Leads client strategy across primary and resale markets. Known for sharp negotiation, builder network depth, and a practical ROI lens for end-users and investors.",
    },
    {
      name: "Sunita Sonawale",
      title: "Client Success & Documentation",
      bio: "Owns the end-to-end client experience—from requirements to site visits to documentation coordination—ensuring the process stays smooth, responsive, and transparent.",
    },
    {
      name: "Aarav Mehta",
      title: "Investment & Research",
      bio: "Tracks micro-markets, upcoming infrastructure, and absorption trends to build clear shortlists with risk checks and realistic appreciation expectations.",
    },
    {
      name: "Riya Kulkarni",
      title: "Leasing & Property Management",
      bio: "Supports post-purchase leasing, tenant onboarding, and rental optimization with a premium-first approach to maintenance and tenant quality.",
    },
  ] as TeamMember[],
} as const;

export const SERVICES_COPY = [
  {
    key: "buying",
    title: "Property Buying Assistance",
    description:
      "A curated, end-to-end buying journey—from requirement mapping and shortlist creation to site visits, negotiation strategy, and documentation coordination. Clear steps, calm execution.",
    benefits: [
      "Curated shortlist matched to budget, lifestyle, and timeline",
      "Builder vs resale comparisons with clear trade-offs",
      "Negotiation guidance for pricing, inclusions, and terms",
      "Documentation coordination so timelines stay tight",
    ],
    why: "Move faster with clarity—without missing critical checks.",
  },
  {
    key: "investment",
    title: "Investment Advisory",
    description:
      "Research-led recommendations built around rental demand, infrastructure catalysts, and realistic upside—so every decision has a clear thesis and an exit plan.",
    benefits: [
      "ROI + cashflow scenarios (yield, vacancy, upside)",
      "Micro-market intelligence + infrastructure timeline lens",
      "Shortlist built on liquidity, comparables, and resale strength",
      "Risk checks: price bands, delivery track record, demand depth",
    ],
    why: "Invest with a clear thesis, not hype—protect your downside.",
  },
  {
    key: "loan",
    title: "Home Loan Assistance",
    description:
      "A white-glove loan journey—lender shortlisting, eligibility planning, and documentation alignment—so booking and disbursal stay predictable and stress-free.",
    benefits: [
      "Rate comparison and eligibility strategy before you commit",
      "Documentation checklist + coordination across stakeholders",
      "Disbursal planning aligned with builder milestones",
      "Fast resolution support for clarifications and follow-ups",
    ],
    why: "Remove friction—keep approvals and disbursals on schedule.",
  },
  {
    key: "management",
    title: "Property Management",
    description:
      "Premium post-sale care—tenant placement, agreements, maintenance, and periodic updates—so your asset stays protected, presentable, and rental-ready.",
    benefits: [
      "Tenant screening, onboarding, and agreement coordination",
      "Maintenance coordination with a reliable vendor network",
      "Rent collection support + periodic reporting",
      "Asset readiness checks before leasing or resale planning",
    ],
    why: "Protect long-term value with consistent, premium upkeep.",
  },
] as const;

export const TESTIMONIALS_FALLBACK: TestimonialItem[] = [
  {
    name: "Manish Yadav",
    location: "Navi Mumbai",
    rating: 5,
    text: "Nitin Sonawale from Golden Brix gave a great experience. Nitin ji was very professional and helpful throughout the process. He helped me find a good apartment in Navi Mumbai at a great price and made the entire buying process smooth. I highly recommend him.",
  },
  {
    name: "Surajnath Upadhyay",
    location: "Navi Mumbai",
    rating: 5,
    text: "Very good experience with Golden Brix. Mr. Nitin Sonawale is polite, professional, and very helpful. He understands client requirements well and provides the right property options. The entire process was smooth and well managed.",
  },
  {
    name: "Shreyas",
    location: "Navi Mumbai",
    rating: 5,
    text: "I recently purchased a house through Nitin P. Sonawale at Golden Brix in Navi Mumbai, and I couldn't be happier with the experience. He secured the best possible deal for me and made the transaction hassle-free.",
  },
  {
    name: "Nivedita Sawale",
    location: "Navi Mumbai",
    rating: 5,
    text: "Had a really good experience with Golden Brix. Nitin ji was extremely helpful and supportive throughout. He genuinely understood my requirement and helped me get a great shop in a Wadhwa Group project.",
  },
  {
    name: "Dhruvil Parikh",
    location: "Navi Mumbai",
    rating: 5,
    text: "I bought a luxurious 3BHK flat at L&T West Square through Golden Brix. Nitin Sonawale sir helped me a lot in the buying process. Best real estate advisor in Navi Mumbai market.",
  },
  {
    name: "Rohit Darne",
    location: "Navi Mumbai",
    rating: 5,
    text: "Mr. Nitin P Sonawale has been extremely helpful, supportive, and dedicated in his work. He provides access to multiple inventories across commercial and residential real estate in Navi Mumbai.",
  },
  {
    name: "Sandeep Bhilare",
    location: "Seawoods",
    rating: 5,
    text: "We had a smooth and transparent experience with Golden Brix for L&T West Square Seawoods. Honest guidance and deep knowledge of the Navi Mumbai real estate market.",
  },
  {
    name: "Sachin Awasthi",
    location: "Navi Mumbai",
    rating: 5,
    text: "Golden Brix provides very good service and Nitin Bhai is very experienced. It has the best real estate services in Navi Mumbai.",
  },
  {
    name: "Ganesh Borge",
    location: "Navi Mumbai",
    rating: 5,
    text: "Most professional transparent communication and deep local knowledge. Thank you Nitin Sonawale sir for helping in purchasing a property.",
  },
  {
    name: "Manish Pandey",
    location: "Navi Mumbai",
    rating: 5,
    text: "I truly appreciate Nitin Sonawale's dedication and professionalism during my property purchase. Clear communication and genuine advice made the entire process hassle-free.",
  },
  {
    name: "Amit Bhise",
    location: "Palm Beach Road",
    rating: 5,
    text: "Bought my dream home at NRI Complex, Palm Beach Road, thanks to Golden Brix and Nitin P Sonawale. Highly professional and trusted property consultants.",
  },
  {
    name: "Om Pawar",
    location: "Navi Mumbai",
    rating: 5,
    text: "Golden Brix is very helpful for clients. Nitin P Sonawale demonstrates deep market knowledge and helped secure the best deal possible.",
  },
  {
    name: "Shubham Salunkhe",
    location: "Nerul",
    rating: 5,
    text: "Found a perfect 2BHK rental at NRI Complex Palm Beach Road through Golden Brix. Quick coordination and smooth move-in process.",
  },
  {
    name: "Pankaj Mandhare",
    location: "Nerul",
    rating: 5,
    text: "Very happy with my new home at NRI Complex, Palm Beach Road Nerul. Big thanks to Golden Brix and Nitin P Sonawale for helping me get the best deal.",
  },
  {
    name: "Akshay Pardule",
    location: "Nerul",
    rating: 5,
    text: "Purchased my flat at NRI Complex, Palm Beach Road through Golden Brix. Nitin P Sonawale provided genuine advice and excellent support.",
  },
  {
    name: "Pravin Parihar",
    location: "Navi Mumbai",
    rating: 5,
    text: "Very professional and knowledgeable broker. They guided me through the entire process, shared genuine listings, and made the whole process stress-free.",
  },
  {
    name: "Sushil Kumar",
    location: "Navi Mumbai",
    rating: 5,
    text: "I had an amazing experience with Golden Brix owned by Mr. Nitin Sir. Highly professional, knowledgeable, and dedicated team.",
  },
  {
    name: "Tejas Dundle",
    location: "Navi Mumbai",
    rating: 5,
    text: "Trustworthy and efficient. Mr. Nitin Sonawale Sir helped me find the best property at a great price. Best real estate agent in Navi Mumbai.",
  },
  {
    name: "Aniket Shinde",
    location: "Seawoods",
    rating: 5,
    text: "Best broker in Seawoods Navi Mumbai. Transparent dealing, soft spoken team, and excellent property options. Highly recommended.",
  },
  {
    name: "Satish Pange",
    location: "Navi Mumbai",
    rating: 5,
    text: "They provided expert guidance throughout the entire process of buying, selling, and renting properties in Navi Mumbai. Transparency and smooth transactions made everything stress-free.",
  },
];

export const BLOGS_FALLBACK: BlogPost[] = [
  {
    slug: "best-areas-to-invest-mumbai-2025",
    title: "Best Areas to Invest in Mumbai (2025): A Premium Buyer’s Shortlist",
    dateLabel: "Apr 2026",
    coverImage: "/properties/westwoods-platinum.jpg",
    excerpt:
      "A practical, premium-first shortlist of Mumbai micro-markets based on connectivity, end-user demand, and long-term appreciation catalysts.",
    content: [
      "## The premium investor lens",
      "In Mumbai, the best investment areas usually share three fundamentals: strong connectivity, consistent end-user demand, and a clear infrastructure or employment catalyst. When one of these is missing, liquidity and resale can suffer.",
      "",
      "## 1) Powai–Hiranandani belt",
      "A mature premium ecosystem with stable tenant demand, excellent amenities, and strong corporate catchments. Ideal for end-users who want lifestyle plus long-term stability.",
      "",
      "## 2) Andheri–Jogeshwari corridor",
      "For buyers who value commute efficiency and liquidity. Look for projects with good internal planning and parking—these typically hold value better.",
      "",
      "## 3) Thane (select pockets)",
      "Thane has grown into a premium end-user market. Focus on projects with strong neighborhood infrastructure and proven developer delivery.",
      "",
      "## What we recommend",
      "- Prefer projects with clean access roads and future-ready social infrastructure",
      "- Keep an exit strategy: resale inventory, comparable transactions, and tenant profile",
      "- Avoid over-stretching on price; prioritize layout quality and long-term liveability",
    ].join("\n"),
  },
  {
    slug: "luxury-living-trends-2026",
    title: "Luxury Living Trends: What Premium Buyers Expect in 2026",
    dateLabel: "Mar 2026",
    coverImage: "/properties/9pbr-palm-beachroad.jpg",
    excerpt:
      "From wellness-led amenities to quieter layouts—here’s what defines premium homes today and why it matters for resale.",
    content: [
      "## Premium is no longer just about finishes",
      "Premium buyers now evaluate day-to-day liveability: sound insulation, natural light, efficient layouts, and well-managed common areas.",
      "",
      "## Key trends",
      "- Wellness amenities (fitness, spa, meditation zones)\n- Work-from-home friendly layouts\n- Better parking and arrival experience\n- High-quality community management",
      "",
      "## Why it matters",
      "Homes that feel calm and functional retain desirability—especially during resale. Premium isn’t only visible; it’s experienced daily.",
    ].join("\n"),
  },
  {
    slug: "roi-real-estate-simple-framework",
    title: "ROI in Real Estate: A Simple Framework for Smart Decisions",
    dateLabel: "Feb 2026",
    coverImage: "/properties/one-platinum.jpg",
    excerpt:
      "A clean, practical framework to evaluate ROI: rental yield, appreciation catalysts, liquidity, and risk checks.",
    content: [
      "## ROI = Yield + Appreciation + Liquidity",
      "Most buyers focus only on appreciation. A better framework includes rental yield and how quickly you can exit if needed.",
      "",
      "## The 4-point checklist",
      "1) Tenant demand and rent range\n2) Comparable transactions in the area\n3) Infrastructure catalysts and timelines\n4) Developer delivery + legal clarity",
      "",
      "## Our recommendation",
      "If any one factor is weak, negotiate harder—or choose a better micro-market.",
    ].join("\n"),
  },
  {
    slug: "documents-checklist-property-buying",
    title: "Property Buying Documents Checklist (Mumbai/Navi Mumbai): What to Verify",
    dateLabel: "Jan 2026",
    coverImage: "/properties/sai-world-one.jpg",
    excerpt:
      "A practical checklist to reduce risk: approvals, title checks, payment schedules, and handover documentation—explained clearly.",
    content: [
      "## The premium buyer rule: verify before you commit",
      "In premium real estate, the cost of a delay or dispute is high—financially and mentally. A clean documentation checklist is non-negotiable.",
      "",
      "## For new projects",
      "- RERA registration details and timelines\n- Approved plans and unit configuration\n- Payment schedule and milestone definitions\n- Possession clauses and penalties (if applicable)",
      "",
      "## For resale homes",
      "- Clear title chain and society NOC\n- Maintenance dues status\n- Parking allotment clarity\n- Agreement for Sale review and timeline plan",
      "",
      "## Our recommendation",
      "Shortlist first for layout, location, and long-term value—but verify documentation before paying token/booking amounts.",
    ].join("\n"),
  },
  {
    slug: "ready-to-move-vs-under-construction",
    title: "Ready-to-Move vs Under Construction: Which is Better for You?",
    dateLabel: "Dec 2025",
    coverImage: "/properties/9pbr-palm-beachroad.jpg",
    excerpt:
      "A calm decision framework based on possession timeline, budget flexibility, risk appetite, and rental plans.",
    content: [
      "## The decision is not just price",
      "Ready-to-move gives certainty. Under-construction can offer better pricing and flexible payment—but requires patience and timeline comfort.",
      "",
      "## Choose ready-to-move if",
      "- You need immediate possession\n- You value certainty over discount\n- You plan to rent immediately",
      "",
      "## Choose under-construction if",
      "- You can wait for possession\n- You want newer planning and amenities\n- You prefer staggered payments",
      "",
      "## Premium tip",
      "Pick projects with strong connectivity and proven developer delivery—these tend to retain desirability in resale.",
    ].join("\n"),
  },
  {
    slug: "site-visit-checklist-premium-buyers",
    title: "Site Visit Checklist for Premium Buyers: What to Look for in 30 Minutes",
    dateLabel: "Nov 2025",
    coverImage: "/properties/westwoods-platinum.jpg",
    excerpt:
      "A quick on-site checklist: approach roads, building arrival, daylight, layout efficiency, and long-term livability cues.",
    content: [
      "## Arrive like an end-user",
      "Premium is felt the moment you enter: approach roads, parking access, and the overall arrival experience.",
      "",
      "## The 30-minute checklist",
      "- Noise and ventilation\n- Natural light and window placement\n- Storage and dead space\n- Lift lobby and common areas\n- Parking movement and safety",
      "",
      "## Our rule",
      "If the layout feels calm and functional today, it usually stays desirable at resale.",
    ].join("\n"),
  },
  {
    slug: "navi-mumbai-growth-corridors",
    title: "Navi Mumbai Growth Corridors: Where Premium Demand is Moving",
    dateLabel: "Oct 2025",
    coverImage: "/properties/one-platinum.jpg",
    excerpt:
      "A premium-focused view of connectivity, business nodes, and livability—without hype. How to pick micro-markets with real demand.",
    content: [
      "## The premium demand pattern",
      "Demand follows commute efficiency, lifestyle infrastructure, and a clear business or connectivity node.",
      "",
      "## How to evaluate a corridor",
      "1) Daily commute to key nodes\n2) School + healthcare + retail ecosystem\n3) Rental tenant profile\n4) Resale comparables",
      "",
      "## Recommendation",
      "Choose areas with both end-user depth and investor liquidity—this combination protects long-term value.",
    ].join("\n"),
  },
] as const;

