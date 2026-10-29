import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MessageCircle, MapPin, Navigation, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import BookingWidget from "@/components/BookingWidget";
import FaqAccordion from "@/components/FaqAccordion";
import StructuredData from "@/components/StructuredData";
import { BUSINESS_INFO, POPULAR_ROUTES } from "@/data/siteData";

const route = POPULAR_ROUTES.find((r) => r.slug === "ramdevra-to-tanot-mata-taxi")!;

export const metadata: Metadata = {
  title: "Ramdevra to Tanot Mata Temple Taxi | Distance, Border Tour & Cab Booking",
  description:
    "Book Ramdevra to Tanot Mata Temple & Longewala War Memorial taxi. Distance 240 km. Safe border highway yatra with experienced local drivers. Call 7240372575.",
  alternates: {
    canonical: `${BUSINESS_INFO.siteUrl}/routes/ramdevra-to-tanot-mata-taxi`,
  },
  keywords: [
    "Ramdevra to Tanot Mata taxi",
    "Ramdevra to Tanot Mata distance",
    "Ramdevra to Longewala taxi booking",
    "Tanot Mata border temple cab",
    "Ramdevra taxi service 7240372575",
  ],
};

export default function TanotMataRoutePage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Routes", url: "/routes" },
    { name: "Ramdevra to Tanot Mata Taxi", url: "/routes/ramdevra-to-tanot-mata-taxi" },
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
          endPoint: "Tanot Mata Temple, Indo-Pak Border, Rajasthan",
        }}
      />

      <section className="page-header">
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/routes">Routes</Link>
            <span>/</span>
            <span style={{ color: "#ffffff" }}>Ramdevra to Tanot Mata</span>
          </nav>
          <h1 className="page-header-title">{route.title}</h1>
          <p className="page-header-desc">
            Sacred border pilgrimage from Baba Ramdevji Mandir to the miraculous Tanot Mata Temple and Longewala
            War Memorial along the India-Pakistan border.
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
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Trip Service</div>
                <div style={{ fontSize: "1.1rem", fontWeight: 900, color: "var(--accent-green)" }}>One-Way & Return</div>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2.5rem" }}>
              <div className="prose">
                <h2>Ramdevra to Tanot Mata Temple Road Journey</h2>
                <p>
                  The pilgrimage route from <strong>Ramdevra to Tanot Mata Temple</strong> covers roughly <strong>235 to 245 kilometers</strong>.
                  Due to the remote border location, a comfortable private taxi takes approximately <strong>4.5 to 5.5 hours</strong>.
                </p>
                <p>
                  You travel through Jaisalmer and Ramgarh before reaching the desert expanse towards Tanot.
                  The temple is managed with great devotion and discipline by the Border Security Force (BSF).
                  Pilgrims often combine this trip with a visit to the <strong>Longewala War Memorial</strong> (scene of the famous 1971 battle).
                </p>

                <h2>Recommended Vehicles for Tanot Mata & Longewala</h2>
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

                <h2>Key Highlights of Tanot Mata Tour</h2>
                <ul>
                  <li><strong>Tanot Mata Temple:</strong> Revere the deity whose divine aura shielded the temple against over 3,000 enemy shells in 1965.</li>
                  <li><strong>Unexploded Shells Museum:</strong> View preserved wartime bombs and military historical archives.</li>
                  <li><strong>Longewala War Memorial:</strong> Captured enemy tanks, war audio-visual theater, and heroic soldier memorials.</li>
                  <li><strong>Desert Border Highway:</strong> Majestic rolling desert views along one of India&apos;s most peaceful border routes.</li>
                </ul>
              </div>

              <div>
                <BookingWidget
                  defaultPickup="Ramdevra Temple / Railway Station"
                  defaultDrop="Tanot Mata Temple & Longewala"
                  title="Book Tanot Mata Yatra Cab"
                />
              </div>
            </div>

            <div style={{ marginTop: "2rem" }}>
              <div className="section-title-wrap">
                <span className="section-badge">Route FAQs</span>
                <h2 className="section-title">Ramdevra to Tanot Mata Taxi Questions</h2>
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
                Book Your Tanot Mata Border Yatra
              </h3>
              <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem" }}>
                Our drivers are licensed, experienced, and have all requisite permissions for border tourism routes.
              </p>
              <div style={{ display: "inline-flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="btn btn-primary btn-lg">
                  <Phone size={20} />
                  <span>Call {BUSINESS_INFO.phoneFormatted}</span>
                </a>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello%20Ramdevraa%20Taxi%2C%20I%20want%20to%20book%20a%20taxi%20from%20Ramdevra%20to%20Tanot%20Mata`}
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
