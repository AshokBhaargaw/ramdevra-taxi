import React from "react";
import { BUSINESS_INFO } from "@/data/siteData";

interface StructuredDataProps {
  type?: "home" | "route" | "general";
  faqs?: { question: string; answer: string }[];
  breadcrumbItems?: { name: string; url: string }[];
  routeData?: {
    name: string;
    description: string;
    startPoint: string;
    endPoint: string;
  };
}

export default function StructuredData({
  type = "home",
  faqs,
  breadcrumbItems,
  routeData,
}: StructuredDataProps) {
  // Main TaxiService / LocalBusiness Schema
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": ["TaxiService", "LocalBusiness"],
    "@id": `${BUSINESS_INFO.siteUrl}/#organization`,
    name: BUSINESS_INFO.name,
    legalName: BUSINESS_INFO.legalName,
    url: BUSINESS_INFO.siteUrl,
    telephone: BUSINESS_INFO.phoneFormatted,
    priceRange: "$$",
    image: `${BUSINESS_INFO.siteUrl}/images/taxi-service-ramdevra.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_INFO.address.street,
      addressLocality: BUSINESS_INFO.address.locality,
      addressRegion: BUSINESS_INFO.address.region,
      postalCode: BUSINESS_INFO.address.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS_INFO.geo.latitude,
      longitude: BUSINESS_INFO.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Ramdevra" },
      { "@type": "City", name: "Pokhran" },
      { "@type": "City", name: "Jaisalmer" },
      { "@type": "City", name: "Jodhpur" },
      { "@type": "City", name: "Bikaner" },
      { "@type": "City", name: "Sam Sand Dunes" },
      { "@type": "City", name: "Tanot" },
      { "@type": "State", name: "Rajasthan" },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS_INFO.rating.ratingValue,
      reviewCount: BUSINESS_INFO.rating.reviewCount,
      bestRating: BUSINESS_INFO.rating.bestRating,
    },
    sameAs: [
      BUSINESS_INFO.googleMapShareUrl,
      "https://ramdevraa.in",
    ],
  };

  // FAQ Schema if provided
  const faqSchema = faqs && faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  } : null;

  // Breadcrumbs Schema if provided
  const breadcrumbSchema = breadcrumbItems && breadcrumbItems.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${BUSINESS_INFO.siteUrl}${item.url}`,
    })),
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
    </>
  );
}
