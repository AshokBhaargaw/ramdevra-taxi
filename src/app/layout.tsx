import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import StructuredData from "@/components/StructuredData";
import { BUSINESS_INFO, GENERAL_FAQS } from "@/data/siteData";

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS_INFO.siteUrl),
  title: {
    default: "Ramdevraa Taxi Service | Book Taxi in Ramdevra (Call 7240372575)",
    template: "%s | Ramdevraa Taxi Service",
  },
  description:
    "Book reliable taxi service in Ramdevra with Ramdevraa Taxi Service. 24x7 cab booking from Ramdevra Temple & Railway Station to Jodhpur, Jaisalmer, Sam Dunes, Tanot Mata, and Bikaner. Call 7240372575.",
  keywords: [
    "Ramdevra taxi",
    "Ramdevraa Taxi Service",
    "taxi service in Ramdevra",
    "Ramdevra to Jodhpur taxi",
    "Ramdevra to Jaisalmer taxi",
    "Ramdevra to Sam Sand Dunes taxi",
    "Ramdevra to Tanot Mata taxi",
    "Ramdevra to Bikaner taxi",
    "Ramdevra to Undu Kashmir taxi",
    "Ramdevra railway station taxi",
    "Baba Ramdevji mandir taxi",
    "car rental Ramdevra",
    "cab service Ramdevra 7240372575",
    "Pokhran to Ramdevra taxi",
  ],
  authors: [{ name: "Ramdevraa Taxi Service" }],
  creator: "Ramdevraa Taxi Service",
  publisher: "Ramdevraa Taxi Service",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BUSINESS_INFO.siteUrl,
    siteName: BUSINESS_INFO.name,
    title: "Ramdevraa Taxi Service | 24x7 Cab Booking in Ramdevra (Call 7240372575)",
    description:
      "Reliable, on-time taxi service from Ramdevra Railway Station & Temple to Jodhpur, Jaisalmer, Sam Sand Dunes & Rajasthan destinations. Verified drivers, clean AC cabs.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramdevraa Taxi Service | 24x7 Cab Booking in Ramdevra",
    description:
      "Call 7240372575 to book clean AC taxis from Ramdevra to Jodhpur, Jaisalmer, Sam Dunes & Bikaner.",
  },
  alternates: {
    canonical: BUSINESS_INFO.siteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#d97706" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="google-site-verification" content="kQdxU5xw1M-fYSHR1QA1JUQ1aurLDJ6Kvjhlr5Gn9do" />
      </head>
      <body>
        <StructuredData type="home" faqs={GENERAL_FAQS} />
        <Header />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}
