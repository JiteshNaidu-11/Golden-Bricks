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
      "From requirement mapping to a curated shortlist, site visits, price negotiation, and paperwork coordination—everything is handled with clarity and speed.",
    benefits: [
      "Curated listings matched to budget and lifestyle",
      "Builder / resale comparisons with pros & cons",
      "Offer strategy and negotiation support",
    ],
  },
  {
    key: "investment",
    title: "Investment Advisory",
    description:
      "A research-led approach to building a property portfolio—focused on rental demand, infrastructure catalysts, and risk-managed exit options.",
    benefits: [
      "ROI + cashflow scenario planning",
      "Micro-market and infra growth analysis",
      "Shortlist based on liquidity and resale potential",
    ],
  },
  {
    key: "loan",
    title: "Home Loan Assistance",
    description:
      "We help you choose the right lender, align documentation, and keep timelines tight—so your booking and disbursal stay stress-free.",
    benefits: [
      "Rate comparison and eligibility planning",
      "Documentation checklist and coordination",
      "Disbursal support aligned with builder milestones",
    ],
  },
  {
    key: "management",
    title: "Property Management",
    description:
      "Premium post-sale support—tenant placement, agreements, maintenance coordination, and periodic reporting so your asset remains protected.",
    benefits: [
      "Tenant screening and onboarding",
      "Maintenance coordination and vendor network",
      "Rent collection support and periodic updates",
    ],
  },
] as const;

export const TESTIMONIALS_FALLBACK: TestimonialItem[] = [
  {
    name: "Amit Kulkarni",
    location: "Kharghar",
    rating: 5,
    text: "Golden Brix gave us a shortlist that actually matched our needs. Site visits were well planned, and the negotiation guidance saved us both time and money.",
  },
  {
    name: "Sneha Patil",
    location: "Seawoods",
    rating: 5,
    text: "Transparent advice and quick responses. We appreciated how clearly they explained the project pros/cons without pushing us into a decision.",
  },
  {
    name: "Rahul Nair",
    location: "Belapur",
    rating: 5,
    text: "Very professional handling of documentation and timelines. The overall experience felt premium and stress-free.",
  },
  {
    name: "Neha Deshmukh",
    location: "Thane",
    rating: 5,
    text: "They understood our budget and suggested options with realistic appreciation. Great market knowledge and honest recommendations.",
  },
  {
    name: "Kunal Shah",
    location: "Nerul",
    rating: 5,
    text: "For an investor, the ROI breakdown and rental demand view was extremely helpful. We closed confidently with clarity on exit strategy.",
  },
  {
    name: "Pooja Joshi",
    location: "Ulwe",
    rating: 5,
    text: "The team coordinated visits and follow-ups smoothly. Loved the curated approach instead of flooding us with random listings.",
  },
  {
    name: "Siddharth Iyer",
    location: "Panvel",
    rating: 4,
    text: "Clear communication, timely updates, and good builder connect. Overall a strong advisory experience.",
  },
  {
    name: "Meera Kapoor",
    location: "Powai",
    rating: 5,
    text: "Premium service and honest guidance. They helped us shortlist quickly and handled negotiation professionally.",
  },
];

export const BLOGS_FALLBACK: BlogPost[] = [
  {
    slug: "best-areas-to-invest-mumbai-2025",
    title: "Best Areas to Invest in Mumbai (2025): A Premium Buyer’s Shortlist",
    dateLabel: "Apr 2026",
    coverImage: "/images/Hero/3.jpg",
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
    coverImage: "/images/Hero/4.jpg",
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
    coverImage: "/images/Hero/2.jpg",
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
    coverImage: "/images/Hero/1.jpg",
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
    coverImage: "/images/Hero/4.jpg",
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
    coverImage: "/images/Hero/3.jpg",
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
    coverImage: "/images/Hero/2.jpg",
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

