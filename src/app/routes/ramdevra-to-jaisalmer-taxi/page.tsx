import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MessageCircle, MapPin, Navigation, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import BookingWidget from "@/components/BookingWidget";
import FaqAccordion from "@/components/FaqAccordion";
import StructuredData from "@/components/StructuredData";
import { BUSINESS_INFO, POPULAR_ROUTES } from "@/data/siteData";

const route = POPULAR_ROUTES.find((r) => r.slug === "ramdevra-to-jaisalmer-taxi")!;

export const metadata: Metadata = {
  title: "Ramdevra to Jaisalmer Taxi | Distance, Route, Timing & Cab Booking",
  description:
    "Book Ramdevra to Jaisalmer taxi. Distance 120 km via NH 11 in 2 hours. One-way and round-trip cabs for Jaisalmer Fort, hotels & railway station. Call 7240372575.",
  alternates: {
    canonical: `${BUSINESS_INFO.siteUrl}/routes/ramdevra-to-jaisalmer-taxi`,
  },
  keywords: [
    "Ramdevra to Jaisalmer taxi",
    "Ramdevra to Jaisalmer taxi booking",
    "Ramdevra to Jaisalmer distance",
    "cab from Ramdevra to Jaisalmer fort",
    "Ramdevra taxi to Jaisalmer railway station",
    "Ramdevra taxi service 7240372575",
  ],
};

export default function JaisalmerRoutePage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Routes", url: "/routes" },
    { name: "Ramdevra to Jaisalmer Taxi", url: "/routes/ramdevra-to-jaisalmer-taxi" },
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
          endPoint: "Jaisalmer, Rajasthan",
        }}
      />

      <section className="page-header">
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/routes">Routes</Link>
            <span>/</span>
            <span style={{ color: "#ffffff" }}>Ramdevra to Jaisalmer</span>
          </nav>
          <h1 className="page-header-title">{route.title}</h1>
          <p className="page-header-desc">
            Direct, comfortable private cab service from Baba Ramdevji Temple & Ramdevra Railway Station to
            the Golden City of Jaisalmer. Swift Dzire, Ertiga, Innova Crysta, and Tempo Travellers.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2.5rem" }}>
            {/* Quick stats */}
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
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Driving Time</div>
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

            {/* Content & Widget */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2.5rem" }}>
              <div className="prose">
                <h2>Ramdevra to Jaisalmer Distance & Travel Time</h2>
                <p>
                  Traveling from <strong>Ramdevra to Jaisalmer</strong> covers a distance of roughly <strong>118 to 122 km</strong>.
                  Via the smooth <strong>National Highway 11 (NH 11)</strong>, the journey typically takes just <strong>2 to 2.5 hours</strong>.
                </p>
                <p>
                  This route is one of the most popular travel corridors in Western Rajasthan, linking the sacred temple of Baba Ramdevji
                  with the majestic Golden Fort of Jaisalmer and onward to Sam Sand Dunes.
                </p>

                <h2>Available Vehicles for Ramdevra to Jaisalmer</h2>
                <div className="table-responsive">
                  <table className="custom-table">
                    <thead>
                      <tr>
                        <th>Vehicle Type</th>
                        <th>Model</th>
                        <th>Seating Capacity</th>
                        <th>Luggage Space</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Sedan</strong></td>
                        <td>Swift Dzire / Etios</td>
                        <td>1–4 Passengers</td>
                        <td>2 Large Bags</td>
                        <td>
                          <a href={`tel:${BUSINESS_INFO.phone}`} className="btn btn-primary btn-sm">Call Now</a>
                        </td>
                      </tr>
                      <tr>
                        <td><strong>Family MUV</strong></td>
                        <td>Maruti Ertiga</td>
                        <td>1–6 Passengers</td>
                        <td>4 Bags</td>
                        <td>
                          <a href={`tel:${BUSINESS_INFO.phone}`} className="btn btn-primary btn-sm">Call Now</a>
                        </td>
                      </tr>
                      <tr>
                        <td><strong>Luxury SUV</strong></td>
                        <td>Toyota Innova Crysta</td>
                        <td>1–7 Passengers</td>
                        <td>5 Bags</td>
                        <td>
                          <a href={`tel:${BUSINESS_INFO.phone}`} className="btn btn-primary btn-sm">Call Now</a>
                        </td>
                      </tr>
                      <tr>
                        <td><strong>Group Carrier</strong></td>
                        <td>Force Trax Toofan</td>
                        <td>1–12 Passengers</td>
                        <td>8 Bags</td>
                        <td>
                          <a href={`tel:${BUSINESS_INFO.phone}`} className="btn btn-primary btn-sm">Call Now</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2>Key Attractions in Jaisalmer</h2>
                <ul>
                  <li><strong>Sonar Qila (Jaisalmer Fort):</strong> The living golden sandstone fort with ancient palaces and Jain temples.</li>
                  <li><strong>Gadisar Lake:</strong> Scenic historic water reservoir surrounded by artistic chhatris and ghats.</li>
                  <li><strong>Patwon Ki Haveli:</strong> World-renowned five-storey carved yellow sandstone cluster.</li>
                  <li><strong>Jaisalmer War Museum:</strong> Indian Army memorial commemorating valor in 1965 and 1971 wars.</li>
                </ul>
              </div>

              <div>
                <BookingWidget
                  defaultPickup="Ramdevra Temple / Railway Station"
                  defaultDrop="Jaisalmer (Fort / Hotel / Station)"
                  title="Book Ramdevra to Jaisalmer Cab"
                />
              </div>
            </div>

            {/* FAQs */}
            <div style={{ marginTop: "2rem" }}>
              <div className="section-title-wrap">
                <span className="section-badge">Route FAQs</span>
                <h2 className="section-title">Ramdevra to Jaisalmer Taxi Questions</h2>
              </div>
              <FaqAccordion items={route.faqs} />
            </div>

            {/* Bottom CTA */}
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
                Need a Taxi from Ramdevra to Jaisalmer?
              </h3>
              <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem" }}>
                Get instant confirmation over phone or WhatsApp. Call 24x7:
              </p>
              <div style={{ display: "inline-flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="btn btn-primary btn-lg">
                  <Phone size={20} />
                  <span>Call {BUSINESS_INFO.phoneFormatted}</span>
                </a>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello%20Ramdevraa%20Taxi%2C%20I%20want%20to%20book%20a%20taxi%20from%20Ramdevra%20to%20Jaisalmer`}
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
