import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MessageCircle, MapPin, Navigation, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import BookingWidget from "@/components/BookingWidget";
import FaqAccordion from "@/components/FaqAccordion";
import StructuredData from "@/components/StructuredData";
import { BUSINESS_INFO, POPULAR_ROUTES } from "@/data/siteData";

const route = POPULAR_ROUTES.find((r) => r.slug === "ramdevra-to-sam-sand-dunes-taxi")!;

export const metadata: Metadata = {
  title: "Ramdevra to Sam Sand Dunes Taxi | Desert Safari Cab & Resort Drop",
  description:
    "Book Ramdevra to Sam Sand Dunes taxi for desert safari, sunset camping & camel rides. Approx. 160 km in 3 hours. Direct drop at Swiss luxury tents. Call 7240372575.",
  alternates: {
    canonical: `${BUSINESS_INFO.siteUrl}/routes/ramdevra-to-sam-sand-dunes-taxi`,
  },
  keywords: [
    "Ramdevra to Sam Sand Dunes taxi",
    "Ramdevra to Sam dunes taxi booking",
    "Ramdevra to Jaisalmer desert camp taxi",
    "cab from Ramdevra to Sam sunset point",
    "Ramdevra taxi service 7240372575",
  ],
};

export default function SamDunesRoutePage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Routes", url: "/routes" },
    { name: "Ramdevra to Sam Sand Dunes Taxi", url: "/routes/ramdevra-to-sam-sand-dunes-taxi" },
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
          endPoint: "Sam Sand Dunes, Jaisalmer, Rajasthan",
        }}
      />

      <section className="page-header">
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/routes">Routes</Link>
            <span>/</span>
            <span style={{ color: "#ffffff" }}>Ramdevra to Sam Sand Dunes</span>
          </nav>
          <h1 className="page-header-title">{route.title}</h1>
          <p className="page-header-desc">
            Direct taxi transfers from Ramdevra Baba Ramdevji Temple to your luxury desert camps, Swiss tents,
            and camel safari points in Sam Sand Dunes, Jaisalmer.
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
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Route Highway</div>
                <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--primary)" }}>{route.routeHighway}</div>
              </div>
              <div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Trip Service</div>
                <div style={{ fontSize: "1.1rem", fontWeight: 900, color: "var(--accent-green)" }}>One-Way & Return</div>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2.5rem" }}>
              <div className="prose">
                <h2>Ramdevra to Sam Sand Dunes Distance & Route</h2>
                <p>
                  The road distance from <strong>Ramdevra to Sam Sand Dunes</strong> is approximately <strong>155 to 165 km</strong>.
                  By private air-conditioned taxi, the drive takes approximately <strong>3 to 3.5 hours</strong>.
                </p>
                <p>
                  You travel along NH 11 past Pokhran and Lathi towards Jaisalmer bypass, heading straight to the heart of the Thar Desert.
                  We recommend leaving Ramdevra between 11:30 AM and 1:30 PM so you reach your desert resort in time for evening tea, camel ride,
                  and golden sunset dune bashing.
                </p>

                <h2>Recommended Vehicles for Sam Sand Dunes Tour</h2>
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

                <h2>Sam Sand Dunes Desert Experiences</h2>
                <ul>
                  <li><strong>Camel Safari & Dune Sunset:</strong> Experience traditional camel trekking along golden dunes of the Thar.</li>
                  <li><strong>Jeep Safari & Dune Bashing:</strong> Thrilling 4x4 open jeep ride across sand ridges.</li>
                  <li><strong>Desert Camp Cultural Program:</strong> Kalbelia dance, Rajasthani folk music, bonfire, and buffet dinner.</li>
                  <li><strong>Kuldhara Abandoned Village:</strong> Visit the famous 300-year-old Paliwal Brahmin heritage site on the way.</li>
                </ul>
              </div>

              <div>
                <BookingWidget
                  defaultPickup="Ramdevra Temple / Railway Station"
                  defaultDrop="Sam Sand Dunes (Desert Camp Resort)"
                  title="Book Ramdevra to Sam Dunes Cab"
                />
              </div>
            </div>

            <div style={{ marginTop: "2rem" }}>
              <div className="section-title-wrap">
                <span className="section-badge">Route FAQs</span>
                <h2 className="section-title">Ramdevra to Sam Sand Dunes Taxi Questions</h2>
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
                Ready for the Thar Desert Safari?
              </h3>
              <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem" }}>
                Book your sanitized AC taxi today with Ramdevraa Taxi Service.
              </p>
              <div style={{ display: "inline-flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="btn btn-primary btn-lg">
                  <Phone size={20} />
                  <span>Call {BUSINESS_INFO.phoneFormatted}</span>
                </a>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello%20Ramdevraa%20Taxi%2C%20I%20want%20to%20book%20a%20taxi%20from%20Ramdevra%20to%20Sam%20Sand%20Dunes`}
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
