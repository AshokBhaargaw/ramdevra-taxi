import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MessageCircle, MapPin, Navigation, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import BookingWidget from "@/components/BookingWidget";
import FaqAccordion from "@/components/FaqAccordion";
import StructuredData from "@/components/StructuredData";
import { BUSINESS_INFO, POPULAR_ROUTES } from "@/data/siteData";

const route = POPULAR_ROUTES.find((r) => r.slug === "ramdevra-to-bikaner-taxi")!;

export const metadata: Metadata = {
  title: "Ramdevra to Bikaner Taxi | Distance, Fares, Route & Cab Booking",
  description:
    "Book Ramdevra to Bikaner taxi starting at ₹3,600. Distance 200 km via NH 11 in 3.5 hours. One-way and round-trip transfers for Bikaner Jn, Junagarh Fort & Karni Mata Temple. Call 7240372575.",
  alternates: {
    canonical: `${BUSINESS_INFO.siteUrl}/routes/ramdevra-to-bikaner-taxi`,
  },
  keywords: [
    "Ramdevra to Bikaner taxi",
    "Ramdevra to Bikaner distance",
    "Ramdevra to Bikaner taxi fare",
    "taxi from Ramdevra to Karni Mata Deshnoke",
    "Ramdevra to Bikaner railway station cab",
    "Ramdevra taxi service 7240372575",
  ],
};

export default function BikanerRoutePage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Routes", url: "/routes" },
    { name: "Ramdevra to Bikaner Taxi", url: "/routes/ramdevra-to-bikaner-taxi" },
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
          endPoint: "Bikaner, Rajasthan",
        }}
      />

      <section className="page-header">
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/routes">Routes</Link>
            <span>/</span>
            <span style={{ color: "#ffffff" }}>Ramdevra to Bikaner</span>
          </nav>
          <h1 className="page-header-title">{route.title}</h1>
          <p className="page-header-desc">
            Reliable, air-conditioned taxi service from Ramdevra Baba Ramdevji Temple & Railway Station to
            Bikaner Junction, Junagarh Fort, and Deshnoke Karni Mata Mandir.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2.5rem" }}>
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
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Sedan Starting Fare</div>
                <div style={{ fontSize: "1.35rem", fontWeight: 900, color: "var(--accent-green)" }}>{route.sedanFare}</div>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2.5rem" }}>
              <div className="prose">
                <h2>Ramdevra to Bikaner Distance & Highway Route</h2>
                <p>
                  The road distance between <strong>Ramdevra and Bikaner</strong> is approximately <strong>195 to 205 kilometers</strong>.
                  Via <strong>National Highway 11 (NH 11)</strong>, the journey takes around <strong>3.5 to 4 hours</strong>.
                </p>
                <p>
                  Along the way, the highway passes through Phalodi (the salt city), Bap, and the sacred pilgrimage lake of Kolayat
                  (associated with Maharishi Kapil Muni). You can request an optional darshan stop at Kolayat before proceeding to Bikaner.
                </p>

                <h2>Ramdevra to Bikaner Taxi Fare Chart</h2>
                <div className="table-responsive">
                  <table className="custom-table">
                    <thead>
                      <tr>
                        <th>Vehicle Type</th>
                        <th>Seating Capacity</th>
                        <th>Fare</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Swift Dzire (Sedan)</strong></td>
                        <td>1–4 Pax</td>
                        <td style={{ fontWeight: 800, color: "var(--primary)" }}>{route.sedanFare}</td>
                        <td><a href={`tel:${BUSINESS_INFO.phone}`} className="btn btn-primary btn-sm">Book Call</a></td>
                      </tr>
                      <tr>
                        <td><strong>Maruti Ertiga (MUV)</strong></td>
                        <td>1–6 Pax</td>
                        <td style={{ fontWeight: 800, color: "var(--primary)" }}>{route.suvFare}</td>
                        <td><a href={`tel:${BUSINESS_INFO.phone}`} className="btn btn-primary btn-sm">Book Call</a></td>
                      </tr>
                      <tr>
                        <td><strong>Toyota Innova Crysta</strong></td>
                        <td>1–7 Pax</td>
                        <td style={{ fontWeight: 800, color: "var(--primary)" }}>{route.innovaFare}</td>
                        <td><a href={`tel:${BUSINESS_INFO.phone}`} className="btn btn-primary btn-sm">Book Call</a></td>
                      </tr>
                      <tr>
                        <td><strong>Force Toofan / Cruiser</strong></td>
                        <td>1–12 Pax</td>
                        <td style={{ fontWeight: 800, color: "var(--primary)" }}>{route.toofanFare}</td>
                        <td><a href={`tel:${BUSINESS_INFO.phone}`} className="btn btn-primary btn-sm">Book Call</a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2>Key Attractions in Bikaner</h2>
                <ul>
                  <li><strong>Junagarh Fort:</strong> Unconquered royal fortress with exquisite gold-leaf paintings and ornate palaces.</li>
                  <li><strong>Karni Mata Temple (Deshnoke):</strong> Sacred temple located 30 km south of Bikaner, famous for thousands of holy white and black rats (Kabas).</li>
                  <li><strong>National Research Centre on Camel:</strong> Asia&apos;s only camel breeding and research center with camel dairy products.</li>
                  <li><strong>Lalgarh Palace:</strong> Royal red sandstone heritage palace and museum.</li>
                </ul>
              </div>

              <div>
                <BookingWidget
                  defaultPickup="Ramdevra Temple / Railway Station"
                  defaultDrop="Bikaner (Railway Station / Hotel)"
                  title="Book Ramdevra to Bikaner Cab"
                />
              </div>
            </div>

            <div style={{ marginTop: "2rem" }}>
              <div className="section-title-wrap">
                <span className="section-badge">Route FAQs</span>
                <h2 className="section-title">Ramdevra to Bikaner Taxi Questions</h2>
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
                Book Your Cab to Bikaner Today
              </h3>
              <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem" }}>
                Call our 24/7 hotline or connect via WhatsApp for immediate confirmation.
              </p>
              <div style={{ display: "inline-flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="btn btn-primary btn-lg">
                  <Phone size={20} />
                  <span>Call {BUSINESS_INFO.phoneFormatted}</span>
                </a>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello%20Ramdevraa%20Taxi%2C%20I%20want%20to%20book%20a%20taxi%20from%20Ramdevra%20to%20Bikaner`}
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
