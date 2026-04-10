import type { Metadata, Viewport } from "next";
import { Poppins, Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FloatingChatbot from "@/components/FloatingChatbot";
import ScrollToTop from "@/components/ScrollToTop";

const poppins = Poppins({ 
  subsets: ["latin"], 
  variable: "--font-poppins",
  weight: ["300","400","500","600","700","800","900"]
});

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  variable: "--font-montserrat",
  weight: ["300","400","500","600","700","800","900"]
});

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair",
  weight: ["400","500","600","700","800","900"]
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://goldenbrix.com';
const baseUrl = siteUrl.replace(/\/$/, '');
const ogImageUrl = `${baseUrl}/images/logo/logo.png`;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#001F3F",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: "Golden brix | Premium Properties in Mumbai & Navi Mumbai",

  description:
    "Golden brix helps you discover premium residential and commercial properties across Mumbai and Navi Mumbai. Trusted guidance for buying, selling, and investing in real estate.",

  icons: {
    icon: "/images/logo/favicon.png",
    apple: "/images/logo/favicon.png",
  },

  openGraph: {
    title: "Golden brix | Premium Properties in Mumbai & Navi Mumbai",

    description:
      "Find your dream property with Golden brix. Explore luxury homes, apartments, and investment opportunities across Mumbai and Navi Mumbai.",

    url: baseUrl,
    siteName: "Golden brix ",
    locale: "en_IN",
    type: "website",

    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Golden brix - Premium Real Estate",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Golden brix | Premium Properties in Mumbai & Navi Mumbai",
    description:
      "Discover luxury homes, apartments, and investment opportunities in Mumbai & Navi Mumbai with Golden brix .",
    images: [ogImageUrl],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} ${montserrat.variable} ${playfair.variable} font-sans`}
        style={{ fontFamily: "var(--font-poppins), sans-serif" }}
      >
        {children}

        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-2.5">
          <ScrollToTop />
          <FloatingChatbot />
          <FloatingWhatsApp />
        </div>
      </body>
    </html>
  );
}