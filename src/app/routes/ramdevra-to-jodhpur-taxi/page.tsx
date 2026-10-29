import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MessageCircle, MapPin, Navigation, Clock, ShieldCheck, Check, ArrowRight } from "lucide-react";
import BookingWidget from "@/components/BookingWidget";
import FaqAccordion from "@/components/FaqAccordion";
import StructuredData from "@/components/StructuredData";
import { BUSINESS_INFO, POPULAR_ROUTES } from "@/data/siteData";

const route = POPULAR_ROUTES.find((r) => r.slug === "ramdevra-to-jodhpur-taxi")!;

export const metadata: Metadata = {
  title: "Ramdevra to Jodhpur Taxi | Distance, Route, Travel Time & Booking",
  description:
    "Book Ramdevra to Jodhpur taxi for one-way, round-trip, Jodhpur Airport (JDH) or Railway Station transfer. Approx. 180 km in 3-4 hours. Direct booking & instant quote. Call 7240372575.",
  alternates: {
    canonical: `${BUSINESS_INFO.siteUrl}/routes/ramdevra-to-jodhpur-taxi`,
  },
  keywords: [
    "Ramdevra to Jodhpur taxi",
    "Ramdevra to Jodhpur cab service",
    "Ramdevra to Jodhpur distance",
    "taxi from Ramdevra to Jodhpur railway station",
    "Ramdevra to Jodhpur airport taxi",
    "Ramdevra taxi service 7240372575",
  ],
};

export default function JodhpurRoutePage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Routes", url: "/routes" },
    { name: "Ramdevra to Jodhpur Taxi", url: "/routes/ramdevra-to-jodhpur-taxi" },
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
          endPoint: "Jodhpur, Rajasthan",
        }}
      />

      {/* Header */}
      <section className="page-header">
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/routes">Routes</Link>
            <span>/</span>
            <span style={{ color: "#ffffff" }}>Ramdevra to Jodhpur</span>
          </nav>
          <h1 className="page-header-title">{route.title}</h1>
          <p className="page-header-desc">
            Comfortable, on-time private cab service connecting Baba Ramdevji Temple & Ramdevra Railway Station
            directly to Jodhpur Railway Station (JU), Jodhpur Airport (JDH), and hotels.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2.5rem" }}>
              {/* Top Quick Facts */}
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
                  <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Route Highway</div>
                  <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--primary)" }}>{route.routeHighway}</div>
                </div>
                <div>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Trip Service</div>
                  <div style={{ fontSize: "1.1rem", fontWeight: 900, color: "var(--accent-green)" }}>One-Way & Return</div>
                </div>
              </div>

              {/* Two Column Section: Content & Booking Form */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "2.5rem",
                }}
              >
                {/* Prose Content */}
                <div className="prose">
                  <h2>Ramdevra to Jodhpur Distance & Highway Route</h2>
                  <p>
                    The road distance between <strong>Ramdevra and Jodhpur</strong> is approximately <strong>175 to 185 kilometers</strong>.
                    By private air-conditioned cab, the journey usually takes between <strong>3 to 4 hours</strong> depending on traffic
                    and brief refreshment stops.
                  </p>
                  <p>
                    The highway route follows <strong>NH 11 and NH 125</strong>, passing through Pokhran, Dechhu, Balesar, and Agolai.
                    The highway is well-paved, offering a smooth driving experience across the Thar desert landscapes into the Blue City.
                  </p>

                  <h2>Recommended Vehicles for Ramdevra to Jodhpur</h2>
                  <p>
                    We offer dedicated, well-maintained air-conditioned vehicles for all group sizes with zero surge pricing:
                  </p>

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
                          <td><strong>Luxury SUV</strong></td>
                          <td>Toyota Innova Crysta</td>
                          <td>1–7 Pax</td>
                          <td>5 Bags</td>
                          <td>
                            <a href={`tel:${BUSINESS_INFO.phone}`} className="btn btn-primary btn-sm">Call Now</a>
                          </td>
                        </tr>
                        <tr>
                          <td><strong>Group Carrier</strong></td>
                          <td>Force Trax Toofan</td>
                          <td>1–12 Pax</td>
                          <td>8 Bags</td>
                          <td>
                            <a href={`tel:${BUSINESS_INFO.phone}`} className="btn btn-primary btn-sm">Call Now</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h2>Direct Drops at Jodhpur Airport (JDH) & Railway Station</h2>
                  <p>
                    Planning your journey back home after Baba Ramdevji darshan? Most pilgrims connect through:
                  </p>
                  <ul>
                    <li><strong>Jodhpur Railway Station (JU):</strong> Major junction connecting trains to Mumbai, Delhi, Ahmedabad, Kolkata, and Bangalore.</li>
                    <li><strong>Jodhpur Airport (JDH):</strong> Daily commercial flights to Mumbai, Delhi, Ahmedabad, Indore, and Hyderabad.</li>
                    <li><strong>Hotels & Heritage Haveli Stays:</strong> Door-to-door drops across Ratanada, Sardarpura, and Mehrangarh old city.</li>
                  </ul>

                  <h2>Why Choose Ramdevraa Taxi Service for Jodhpur Travel?</h2>
                  <ul>
                    <li><strong>24/7 Doorstep Pickup:</strong> Pickups directly from your dharamsala, hotel, or Ramdevra Railway Station platform.</li>
                    <li><strong>Experienced Highway Drivers:</strong> Trained drivers who know family-friendly highway restaurants with clean restrooms.</li>
                    <li><strong>Clean Sanitized AC Cars:</strong> Every cab is thoroughly washed and sanitized before dispatch.</li>
                    <li><strong>Zero Hidden Costs:</strong> Inclusive of fuel, toll taxes, and driver allowance.</li>
                  </ul>
                </div>

                {/* Pre-filled Booking Widget */}
                <div>
                  <BookingWidget
                    defaultPickup="Ramdevra Temple / Railway Station"
                    defaultDrop="Jodhpur (Airport / Railway Station / Hotel)"
                    title="Book Ramdevra to Jodhpur Taxi"
                  />
                </div>
              </div>

              {/* FAQs Section */}
              <div style={{ marginTop: "2rem" }}>
                <div className="section-title-wrap">
                  <span className="section-badge">Route FAQs</span>
                  <h2 className="section-title">Ramdevra to Jodhpur Taxi Questions</h2>
                </div>
                <FaqAccordion items={route.faqs} />
              </div>

              {/* Bottom CTA Box */}
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
                  Ready to travel from Ramdevra to Jodhpur?
                </h3>
                <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem" }}>
                  Call our 24x7 control room for instant cab dispatch and trip assistance.
                </p>
                <div style={{ display: "inline-flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="btn btn-primary btn-lg">
                    <Phone size={20} />
                    <span>Call {BUSINESS_INFO.phoneFormatted}</span>
                  </a>
                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello%20Ramdevraa%20Taxi%2C%20I%20want%20to%20book%20a%20taxi%20from%20Ramdevra%20to%20Jodhpur`}
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
        </div>
      </section>
    </div>
  );
}
