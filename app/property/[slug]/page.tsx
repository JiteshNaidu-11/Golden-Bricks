import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PropertyClient from './PropertyClient';

const properties = {

  "harbour-view-residences": {
    name: "Harbour View Residences",
    location: "Seawoods, Navi Mumbai",
    price: "₹ 82L – ₹ 1.9 Cr",
    bhk: "1, 2, 3 BHK",
    size: "750 – 1450 SqFt",
    beds: "2",
    baths: "2",
    image: "/images/properties/p1.jpg",

    overview: "Premium waterfront-inspired residences located in Seawoods offering modern architecture, landscaped podium gardens, and seamless connectivity to key business districts.",

    description:
      "Harbour View Residences is designed for families looking for comfort and connectivity in Navi Mumbai. The project offers spacious homes with contemporary interiors, large balconies, and access to premium lifestyle amenities. Residents enjoy proximity to Seawoods Grand Central Mall, Palm Beach Road, and upcoming infrastructure developments.",

    amenities: [
      "Infinity Swimming Pool",
      "Clubhouse",
      "Gymnasium",
      "Children's Play Area",
      "Landscaped Gardens",
      "24×7 Security"
    ],

    highlights: [
      "5 mins from Seawoods Grand Central Mall",
      "10 mins from Palm Beach Road",
      "Near upcoming Navi Mumbai Airport",
      "Close to reputed schools & hospitals"
    ]
  },

  "urban-crest-towers": {
    name: "Urban Crest Towers",
    location: "Kharghar, Navi Mumbai",
    price: "₹ 74L – ₹ 1.6 Cr",
    bhk: "2, 3 BHK",
    size: "900 – 1500 SqFt",
    beds: "2",
    baths: "2",
    image: "/images/properties/p2.jpg",

    overview:
      "Modern high-rise residences located in Kharghar offering spacious homes with city views and easy connectivity to business hubs.",

    description:
      "Urban Crest Towers provides contemporary living with thoughtfully designed apartments and lifestyle amenities. Located in Kharghar, the project offers access to educational institutions, golf courses, and major highways, making it ideal for professionals and families.",

    amenities: [
      "Clubhouse",
      "Swimming Pool",
      "Fitness Center",
      "Jogging Track",
      "Indoor Games Room",
      "Multi-purpose Hall"
    ],

    highlights: [
      "Close to Kharghar Golf Course",
      "10 mins from Central Park",
      "Near Mumbai-Pune Expressway",
      "Access to metro connectivity"
    ]
  },

  "crystal-bay-heights": {
    name: "Crystal Bay Heights",
    location: "Ulwe, Navi Mumbai",
    price: "₹ 68L – ₹ 1.3 Cr",
    bhk: "1, 2 BHK",
    size: "650 – 1200 SqFt",
    beds: "2",
    baths: "2",
    image: "/images/properties/p3.jpg",

    overview:
      "Affordable luxury residences in Ulwe offering modern apartments with easy connectivity to the upcoming Navi Mumbai International Airport.",

    description:
      "Crystal Bay Heights combines comfort and value with thoughtfully designed apartments and lifestyle amenities. Located in Ulwe, the project benefits from upcoming infrastructure projects including the Navi Mumbai Airport and improved transport connectivity.",

    amenities: [
      "Rooftop Garden",
      "Gymnasium",
      "Children Play Area",
      "Yoga Deck",
      "Indoor Games",
      "Security Surveillance"
    ],

    highlights: [
      "Near Navi Mumbai International Airport",
      "Close to Bamandongri Railway Station",
      "Upcoming metro connectivity",
      "Rapidly developing residential hub"
    ]
  },

  "skyline-prime-residences": {
    name: "Skyline Prime Residences",
    location: "Panvel, Navi Mumbai",
    price: "₹ 79L – ₹ 1.7 Cr",
    bhk: "2, 3 BHK",
    size: "850 – 1500 SqFt",
    beds: "2",
    baths: "2",
    image: "/images/properties/p4.jpg",

    overview:
      "Elegant residential towers offering spacious apartments with scenic views and premium lifestyle amenities.",

    description:
      "Skyline Prime Residences offers modern apartments designed for comfortable urban living. Located in Panvel, the project provides excellent connectivity to Mumbai and Pune along with proximity to schools, malls, and entertainment hubs.",

    amenities: [
      "Swimming Pool",
      "Clubhouse",
      "Gymnasium",
      "Yoga Lawn",
      "Children Play Zone",
      "24×7 Security"
    ],

    highlights: [
      "Near Mumbai-Pune Expressway",
      "10 mins from Panvel Railway Station",
      "Upcoming Navi Mumbai Airport access",
      "Close to shopping centers"
    ]
  },

  "palm-grove-apartments": {
    name: "Palm Grove Apartments",
    location: "Nerul, Navi Mumbai",
    price: "₹ 72L – ₹ 1.5 Cr",
    bhk: "1, 2 BHK",
    size: "700 – 1100 SqFt",
    beds: "2",
    baths: "2",
    image: "/images/properties/p5.jpg",

    overview:
      "Peaceful residential community surrounded by greenery in Nerul offering comfortable homes for families.",

    description:
      "Palm Grove Apartments is designed for residents seeking tranquility while staying connected to the city. With landscaped surroundings and convenient access to schools, shopping, and transport, the project offers balanced urban living.",

    amenities: [
      "Garden Area",
      "Fitness Center",
      "Children Play Area",
      "Community Hall",
      "Indoor Games",
      "Security"
    ],

    highlights: [
      "Near Palm Beach Road",
      "Close to Nerul Railway Station",
      "Schools and hospitals nearby",
      "Well developed neighborhood"
    ]
  },

  "blue-horizon-towers": {
    name: "Blue Horizon Towers",
    location: "Belapur, Navi Mumbai",
    price: "₹ 1.1 Cr – ₹ 2.4 Cr",
    bhk: "2, 3 BHK",
    size: "1000 – 1800 SqFt",
    beds: "3",
    baths: "2",
    image: "/images/properties/p6.jpg",

    overview:
      "Luxury high-rise residences in Belapur offering panoramic city views and premium lifestyle facilities.",

    description:
      "Blue Horizon Towers features spacious apartments with modern interiors and top-class amenities. Located in CBD Belapur, the project provides proximity to corporate offices, schools, and entertainment zones.",

    amenities: [
      "Infinity Pool",
      "Sky Lounge",
      "Gymnasium",
      "Jogging Track",
      "Kids Play Area",
      "Security System"
    ],

    highlights: [
      "Located in CBD Belapur",
      "Close to railway station",
      "Near corporate offices",
      "Excellent road connectivity"
    ]
  },

  "west-bay-residences": {
    name: "West Bay Residences",
    location: "Andheri West, Mumbai",
    price: "₹ 1.8 Cr – ₹ 3.6 Cr",
    bhk: "2, 3 BHK",
    size: "1200 – 2100 SqFt",
    beds: "3",
    baths: "3",
    image: "/images/properties/p7.jpg",

    overview:
      "Premium residences in Andheri West offering luxurious homes in one of Mumbai’s most vibrant neighborhoods.",

    description:
      "West Bay Residences offers spacious apartments with elegant interiors and premium facilities. Located in Andheri West, residents enjoy easy access to metro stations, entertainment hubs, and business districts.",

    amenities: [
      "Rooftop Pool",
      "Fitness Studio",
      "Yoga Room",
      "Kids Play Area",
      "Lounge Area",
      "Security"
    ],

    highlights: [
      "Near Andheri Metro Station",
      "Close to Lokhandwala Market",
      "Easy access to business hubs",
      "Excellent social infrastructure"
    ]
  },

  "aurora-heights": {
    name: "Aurora Heights",
    location: "Powai, Mumbai",
    price: "₹ 2.2 Cr – ₹ 4.8 Cr",
    bhk: "3, 4 BHK",
    size: "1500 – 2800 SqFt",
    beds: "3",
    baths: "3",
    image: "/images/properties/p8.jpg",

    overview:
      "Luxury residences overlooking Powai Lake offering spacious homes and premium lifestyle amenities.",

    description:
      "Aurora Heights offers elegant homes with lake views and world-class amenities. Located in Powai, residents enjoy proximity to business districts, educational institutions, and premium retail destinations.",

    amenities: [
      "Infinity Pool",
      "Gymnasium",
      "Spa",
      "Yoga Deck",
      "Clubhouse",
      "24×7 Security"
    ],

    highlights: [
      "Near Powai Lake",
      "Close to Hiranandani Gardens",
      "Easy access to business hubs",
      "Premium lifestyle neighborhood"
    ]
  },

  "lakeview-signature-homes": {
    name: "Lakeview Signature Homes",
    location: "Thane West, Mumbai",
    price: "₹ 95L – ₹ 2.2 Cr",
    bhk: "2, 3 BHK",
    size: "900 – 1600 SqFt",
    beds: "2",
    baths: "2",
    image: "/images/properties/p9.jpg",

    overview:
      "Elegant residential apartments in Thane West offering scenic views and modern lifestyle amenities.",

    description:
      "Lakeview Signature Homes combines comfort and luxury with spacious homes, landscaped gardens, and modern facilities. Located in Thane West, the project offers excellent connectivity to Mumbai and nearby commercial hubs.",

    amenities: [
      "Swimming Pool",
      "Clubhouse",
      "Gymnasium",
      "Jogging Track",
      "Children Play Area",
      "Security"
    ],

    highlights: [
      "Close to Thane Railway Station",
      "Near major highways",
      "Shopping malls nearby",
      "Well connected residential hub"
    ]
  }
};

export function generateStaticParams() {
  return Object.keys(properties).map((slug) => ({
    slug,
  }));
}

export default async function PropertyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {

  const { slug } = await params;
  const property = properties[slug as keyof typeof properties];

  if (!property) return <div>Property not found</div>;

  return (
    <>
      <Header />
      <PropertyClient property={property} />
      <Footer />
    </>
  );
}