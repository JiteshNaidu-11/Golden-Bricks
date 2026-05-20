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
    "Golden Brix Realty is a premium real estate advisory focused on curated residential opportunities across Navi Mumbai. We combine on-ground market intelligence with a client-first process—so every recommendation is clear, data-backed, and aligned with your lifestyle and long-term value.",
  mission:
    "To simplify home buying and investing with transparent advice, verified inventory, and a service experience that feels calm, premium, and dependable—every step of the way.",
  vision:
    "To become the most trusted real estate partner for Navi Mumbai families and investors by raising the standard for research, service, and post-sale support.",
  why: [
    "Curated shortlists instead of overwhelming listings",
    "Verified project fundamentals: connectivity, neighborhood, developer track record",
    "Negotiation support and documentation guidance",
    "Clear ROI lens for investors: rental demand, infra catalysts, exit strategy",
    "After-sales support for handover, renting, and resale planning",
  ],
  stats: [
    { label: "Years of experience", value: "20+" },
    { label: "Happy families", value: "500+" },
    { label: "Properties sold", value: "120+" },
  ],
  team: [
    {
      name: "Nitin Sonawale",
      title: "Principal Advisor, Navi Mumbai",
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
    slug: "hidden-cost-of-buying-wrong-home",
    title: "The Hidden Cost of Buying the Wrong Home",
    dateLabel: "May 2026",
    coverImage: "/Blogs/b1.png",
    excerpt:
      "A beautiful apartment with poor connectivity. A cheaper property with no future appreciation. The real cost of buying the wrong home often comes much later.",
    content: [
      "## It’s more than just budget",
      "Most people think buying a home is only about budget. But the real cost often comes later — a beautiful apartment with poor connectivity, a cheaper property with no future appreciation, or a home that looks luxurious online but feels cramped in reality. These are mistakes many buyers regret after purchasing.",
      "",
      "## Location growth matters more than you think",
      "One of the biggest mistakes buyers make is ignoring location growth potential. Areas with upcoming infrastructure, business hubs, metro connectivity, and social development usually deliver better long-term returns. This is why property investment in Navi Mumbai is becoming increasingly attractive for both families and investors. Projects like Platinum Elysium are gaining attention because they combine strategic location with lifestyle-driven living.",
      "",
      "## Space planning and lifestyle",
      "Another hidden cost is the absence of smart space planning. Photos can make a home look big, but in reality it may not work for daily living. Smart layouts, ventilation, natural light, and usable spaces matter far more than fancy interiors. Imagine living in a place with no amenities, no open spaces, no comfort of community — over time, it takes a larger toll on quality of life than people realize.",
      "",
      "## Ask yourself before deciding",
      "A home should make you feel emotionally safe and proud. Before making a decision, ask yourself: Will this property grow in value? Does this location improve my lifestyle? Can I imagine my future here? The right home is not an expense — it’s a long-term investment in your happiness and future.",
      "",
      "## Discover the right home",
      "Discover thoughtfully designed homes at Platinum Westwoods and make a choice your future self will thank you for.",
    ].join("\n"),
  },
  {
    slug: "why-luxury-amenities-are-no-longer-a-luxury",
    title: "Why Luxury Amenities Are No Longer a \"Luxury\"",
    dateLabel: "May 2026",
    coverImage: "/Blogs/b2.png",
    excerpt:
      "After long working hours and stressful commutes, people now want homes that help them relax, recharge, and live better — and amenities are at the heart of that shift.",
    content: [
      "## From extra to essential",
      "There was a time when amenities were considered extra. Today, they’ve become essential. After long working hours, stressful commutes, and fast-paced lifestyles, people now want homes that help them relax, recharge, and live better. Modern homebuyers are actively searching for projects that offer comfort beyond the apartment itself.",
      "",
      "## What modern buyers want",
      "People no longer want to travel far for fitness, recreation, or family time. They want everything within their residential community — gyms, swimming pools, gardens, walking tracks, indoor games, kids’ play zones, co-working spaces, and peaceful seating areas. Projects like Platinum The Reserve are designed around this modern lifestyle shift.",
      "",
      "## The emotional and financial impact",
      "A jogging track encourages healthier habits. A landscaped garden creates peace after stressful days. A clubhouse helps families socialize. A children’s play area creates happier childhood memories. That emotional comfort matters — and modern buyers are finding that projects with premium amenities typically command higher resale value and better long-term appreciation.",
      "",
      "## Safety, privacy, and community",
      "Another growing trend is gated communities. Safety, privacy, and community living have become top priorities, especially for families and working professionals. Buyers want a safe environment where children can grow up free and families can spend quality time together.",
      "",
      "## Experience smarter living",
      "Today, a home isn’t just a place to sleep — it’s the start of your lifestyle. Explore premium developments like Platinum The Reserve and experience a smarter way of living.",
    ].join("\n"),
  },
  {
    slug: "rent-or-buy-question-every-young-professional",
    title: "Rent or Buy? The Question Every Young Professional is Asking",
    dateLabel: "Apr 2026",
    coverImage: "/Blogs/b6.png",
    excerpt:
      "Rising rents, unstable housing costs, and changing lifestyles are making young professionals reconsider their long-term plans — and the answer might surprise you.",
    content: [
      "## The dilemma every professional faces",
      "\"Should I keep paying rent or finally buy a home?\" This question is dominating conversations among young professionals across Mumbai and Navi Mumbai. Rising rents, unstable housing costs, and changing lifestyles are making many people reconsider their long-term plans. At first, renting feels flexible and convenient. But over time, monthly rent payments start feeling like money disappearing with no ownership or future value.",
      "",
      "## Long-term vision is the key",
      "The answer depends on one important factor — long-term vision. With rapid infrastructure growth and increasing demand, real estate in Navi Mumbai is becoming one of the strongest investment opportunities for young buyers. Areas with upcoming connectivity and commercial development are expected to witness strong appreciation in coming years.",
      "",
      "## What buying really gives you",
      "When you buy a home, you’re not just purchasing property. You’re building stability. You’re creating ownership. You’re investing in your future lifestyle. There’s also an emotional side that renting can never fully provide — the feeling of having a place that truly belongs to you. A home where you can build memories, personalize spaces, and create long-term security for your family.",
      "",
      "## EMI vs rent",
      "Many buyers prefer to pay EMI for ownership instead of paying rent monthly with no financial returns. Buying a home early can be one of the smartest financial moves you make — if you plan for it. The key is finding the right project, location, and developer. A premium property with good amenities and future growth potential can give you emotional satisfaction and strong returns on investment.",
      "",
      "## Take your first step",
      "If you’re thinking about your next big move, now could be the perfect time to explore modern homes built for the future. Visit Golden Brix Realty and take the first step toward owning more than just a home — own your future.",
    ].join("\n"),
  },
  {
    slug: "smart-investors-choosing-navi-mumbai",
    title: "Why Smart Investors Are Looking Beyond Mumbai and Choosing Navi Mumbai",
    dateLabel: "Apr 2026",
    coverImage: "/Blogs/b4.png",
    excerpt:
      "High prices, overcrowding, and limited growth potential are pushing investors toward Navi Mumbai — a planned urban hub with serious future upside.",
    content: [
      "## The shift is already happening",
      "For years, Mumbai was seen as the ultimate destination for property investment. But today, smart investors are shifting focus. The biggest issue with saturated markets is limited growth potential. High prices, overcrowding, traffic, and lack of open spaces are pushing both investors and homebuyers toward emerging urban hubs. Navi Mumbai offers something rare — planned infrastructure with future expansion opportunities.",
      "",
      "## Why Navi Mumbai makes sense",
      "Areas connected to business districts, upcoming metro routes, and commercial zones are witnessing increasing demand. Investors are now prioritizing locations that promise long-term appreciation instead of short-term hype. Projects like Platinum Juinagar MIDC are gaining attention because they combine strategic location advantages with modern urban development.",
      "",
      "## What today’s buyers want",
      "Another reason investors are shifting is lifestyle demand. Today’s buyers want better connectivity, less congestion, modern amenities, larger homes, and cleaner surroundings. Navi Mumbai checks all these boxes. Families are tired of living in chaos — they want a better quality of life without sacrificing opportunity and convenience.",
      "",
      "## The timing advantage",
      "Experts believe that upcoming infrastructure projects and the increasing presence of corporate entities will drive demand for property in Navi Mumbai in the future. The best investments are usually made before the market peak. If you are thinking of investing in a place with huge future potential, now is the time to explore premium developments and be part of the next growth story of Navi Mumbai.",
    ].join("\n"),
  },
  {
    slug: "why-homes-location-changes-your-lifestyle",
    title: "Why Your Home’s Location Can Change Your Entire Lifestyle",
    dateLabel: "Mar 2026",
    coverImage: "/Blogs/b3.png",
    excerpt:
      "Long commutes, poor connectivity, traffic stress — over time, these small inconveniences quietly reduce quality of life. Location is everything.",
    content: [
      "## Most people underestimate location",
      "Most people underestimate how much location affects daily life — until they experience the wrong one. Long commutes, poor connectivity, traffic stress, lack of nearby essentials — over time, these small inconveniences quietly reduce quality of life. This is why experienced buyers now prioritize location before anything else.",
      "",
      "## What the right location gives you",
      "People want homes near business hubs, schools, hospitals, highways, railway stations, metro connectivity, and entertainment zones. The goal is simple — save time and improve lifestyle. Imagine spending less time in traffic and more time with your family. Imagine stress-free mornings instead of rushed commutes. Imagine living in a neighborhood where everything feels accessible. That convenience gradually changes everyday life.",
      "",
      "## Location drives future value",
      "Location also plays a direct role in future property value. As infrastructure grows and commerce picks up, appreciation and demand tend to strengthen over time. Today’s buyers are more research-oriented — they’re not just buying homes, they’re investing in the quality of their future living.",
      "",
      "## The right location changes everything",
      "The right location is more than a time-saver. It changes the way you live your life every day. Explore thoughtfully located premium residences at Golden Brix Realty and experience the difference a great location can make.",
    ].join("\n"),
  },
] as const;

