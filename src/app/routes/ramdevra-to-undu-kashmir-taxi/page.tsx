import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, MapPin, Navigation, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import BookingWidget from "@/components/BookingWidget";
import FaqAccordion from "@/components/FaqAccordion";
import StructuredData from "@/components/StructuredData";
import { BUSINESS_INFO, POPULAR_ROUTES } from "@/data/siteData";

const route = POPULAR_ROUTES.find((r) => r.slug === "ramdevra-to-undu-kashmir-taxi")!;

export const metadata: Metadata = {
  title: "Ramdevra to Undu Kashmir Taxi | Baba Ramdevji Birthplace Yatra",
  description:
    "Book Ramdevra to Undu Kashmir (Barmer) taxi for visiting Baba Ramdevji Janam Sthan Mandir. Approx. 135 km in 2.5 hours. Round trip with driver waiting. Call 7240372575.",
  alternates: {
    canonical: `${BUSINESS_INFO.siteUrl}/routes/ramdevra-to-undu-kashmir-taxi`,
  },
  keywords: [
    "Ramdevra to Undu Kashmir taxi",
    "Ramdevra to Undu Kashmir distance",
    "Baba Ramdevji birthplace taxi",
    "Undu Kashmir Barmer taxi booking",
    "Ramdevra taxi service 7240372575",
  ],
};

export default function UnduKashmirRoutePage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Routes", url: "/routes" },
    { name: "Ramdevra to Undu Kashmir Taxi", url: "/routes/ramdevra-to-undu-kashmir-taxi" },
  ];

  return (
    <div>
      <StructuredData
        type="route"
        faqs={route.faqs}
        breadcrumbItems={breadcrumbItems}
        routeData={{
          name: route.title,
          description: route.description,
          startPoint: "Ramdevra, Rajasthan",
          endPoint: "Undu Kashmir, Barmer, Rajasthan",
        }}
      />

      <section className="page-header">
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/routes">Routes</Link>
            <span>/</span>
            <span style={{ color: "#ffffff" }}>Ramdevra to Undu Kashmir</span>
          </nav>
          <h1 className="page-header-title">{route.title}</h1>
          <p className="page-header-desc">
            The holiest pilgrimage route: Travel from Baba Ramdevji&apos;s Samadhi Sthal in Ramdevra to his
            divine birthplace (Janam Sthan) at Undu Kashmir in Barmer district.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2.5rem" }}>
            {/* Route Poster Hero Graphic */}
            {route.image && (
              <div className="route-hero-banner">
                <Image
                  src={route.image}
                  alt={`${route.title} - Ramdevraa Taxi Service`}
                  width={1080}
                  height={600}
                  priority
                />
              </div>
            )}

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1.25rem",
                background: "#ffffff",
                padding: "1.5rem",
                borderRadius: "var(--radius-xl)",
                border: "1px solid var(--border-color)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Road Distance</div>
                <div style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--secondary)" }}>{route.distance}</div>
              </div>
              <div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Travel Time</div>
                <div style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--secondary)" }}>{route.travelTime}</div>
              </div>
              <div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Highway Route</div>
                <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--primary)" }}>{route.routeHighway}</div>
              </div>
              <div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Trip Service</div>
                <div style={{ fontSize: "1.1rem", fontWeight: 900, color: "var(--accent-green)" }}>One-Way & Return</div>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2.5rem" }}>
              <div className="prose">
                <h2>Spiritual Significance of Undu Kashmir</h2>
                <p>
                  <strong>Undu Kashmir</strong> (located in Shiv Tehsil, Barmer district) is revered as the divine birthplace of
                  <strong>Baba Ramdevji (Ramu Avatar)</strong>. According to holy scriptures and folk history, Lord Krishna reincarnated
                  here as the child of Raja Ajmalji and Rani Mainadevi.
                </p>
                <p>
                  Devotees from all over India who visit Ramdevra for Samadhi darshan consider their pilgrimage truly complete when they
                  also bow their head at the Janambhoomi temple in Undu Kashmir.
                </p>

                <h2>Distance and Travel Duration</h2>
                <p>
                  The road distance from <strong>Ramdevra to Undu Kashmir</strong> is about <strong>130 to 140 km</strong>.
                  The drive takes about <strong>2.5 to 3 hours</strong> each way. Most pilgrims book a convenient <strong>same-day round-trip taxi</strong>,
                  departing Ramdevra in the morning, spending 2 hours for darshan and prasadi at Undu Kashmir, and returning by late afternoon.
                </p>

                <h2>Recommended Vehicles for Undu Kashmir Yatra</h2>
                <div className="table-responsive">
                  <table className="custom-table">
                    <thead>
                      <tr>
                        <th>Vehicle Category</th>
                        <th>Model</th>
                        <th>Seating Capacity</th>
                        <th>Luggage Space</th>
                        <th>Booking</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Sedan</strong></td>
                        <td>Swift Dzire / Etios</td>
                        <td>1–4 Pax</td>
                        <td>2 Large Bags</td>
                        <td>
                          <a href={`tel:${BUSINESS_INFO.phone}`} className="btn btn-primary btn-sm">Call Now</a>
                        </td>
                      </tr>
                      <tr>
                        <td><strong>Family MUV</strong></td>
                        <td>Maruti Ertiga</td>
                        <td>1–6 Pax</td>
                        <td>4 Bags</td>
                        <td>
                          <a href={`tel:${BUSINESS_INFO.phone}`} className="btn btn-primary btn-sm">Call Now</a>
                        </td>
                      </tr>
                      <tr>
                        <td><strong>Premium SUV</strong></td>
                        <td>Toyota Innova Crysta</td>
                        <td>1–7 Pax</td>
                        <td>5 Bags</td>
                        <td>
                          <a href={`tel:${BUSINESS_INFO.phone}`} className="btn btn-primary btn-sm">Call Now</a>
                        </td>
                      </tr>
                      <tr>
                        <td><strong>Large Group Cruiser</strong></td>
                        <td>Force Toofan / Cruiser</td>
                        <td>9–12 Pax</td>
                        <td>Roof Luggage Carrier</td>
                        <td>
                          <a href={`tel:${BUSINESS_INFO.phone}`} className="btn btn-primary btn-sm">Call Now</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2>What to See at Undu Kashmir</h2>
                <ul>
                  <li><strong>Baba Ramdevji Janam Sthan Mandir:</strong> Sanctum sanctorum commemorating the divine cradle and incarnation.</li>
                  <li><strong>Holy Sarovar & Footprints (Paglya):</strong> Sacred symbols venerated by generations of Marwar pilgrims.</li>
                  <li><strong>Rural Marwar Hospitality:</strong> Authentic village warmth and tranquil desert atmosphere.</li>
                </ul>
              </div>

              <div>
                <BookingWidget
                  defaultPickup="Ramdevra Temple / Railway Station"
                  defaultDrop="Undu Kashmir (Baba Ramdevji Janam Sthan)"
                  title="Book Undu Kashmir Yatra Cab"
                />
              </div>
            </div>

            <div style={{ marginTop: "2rem" }}>
              <div className="section-title-wrap">
                <span className="section-badge">Route FAQs</span>
                <h2 className="section-title">Ramdevra to Undu Kashmir Taxi Questions</h2>
              </div>
              <FaqAccordion items={route.faqs} />
            </div>

            <div
              style={{
                background: "#ffffff",
                padding: "2.5rem",
                borderRadius: "var(--radius-xl)",
                border: "1px solid var(--border-color)",
                textAlign: "center",
                boxShadow: "var(--shadow-md)",
              }}
            >
              <h3 style={{ fontSize: "1.45rem", fontWeight: 800, color: "var(--secondary)", marginBottom: "0.5rem" }}>
                Book Your Undu Kashmir Janam Sthan Darshan
              </h3>
              <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem" }}>
                Experienced drivers with full waiting time included during your temple darshan.
              </p>
              <div style={{ display: "inline-flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="btn btn-primary btn-lg">
                  <Phone size={20} />
                  <span>Call {BUSINESS_INFO.phoneFormatted}</span>
                </a>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello%20Ramdevraa%20Taxi%2C%20I%20want%20to%20book%20a%20taxi%20from%20Ramdevra%20to%20Undu%20Kashmir`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-green btn-lg"
                >
                  <MessageCircle size={20} />
                  <span>WhatsApp Booking</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
