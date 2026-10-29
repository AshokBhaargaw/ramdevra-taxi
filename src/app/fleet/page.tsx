import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MessageCircle, Check, Users, Briefcase, Wind, ArrowRight } from "lucide-react";
import FleetCard from "@/components/FleetCard";
import { FLEET_DATA, BUSINESS_INFO } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Taxi Fleet & Cab Options in Ramdevra | Dzire, Ertiga, Innova Crysta, Toofan",
  description:
    "Explore our well-maintained air-conditioned taxi fleet in Ramdevra: Swift Dzire, Maruti Ertiga, Toyota Innova Crysta, Force Toofan, and Tempo Travellers. Compare passenger and luggage capacity. Call 7240372575.",
  alternates: {
    canonical: `${BUSINESS_INFO.siteUrl}/fleet`,
  },
};

export default function FleetPage() {
  return (
    <div>
      {/* Header */}
      <section className="page-header">
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span style={{ color: "#ffffff" }}>Fleet</span>
          </nav>
          <h1 className="page-header-title">Our Taxi Fleet & Vehicle Options</h1>
          <p className="page-header-desc">
            Clean, sanitized, air-conditioned vehicles for solo pilgrims, families, and large tour groups.
            Find the perfect ride for your Rajasthan yatra.
          </p>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="section">
        <div className="container">
          <div className="fleet-grid">
            {FLEET_DATA.map((vehicle) => (
              <FleetCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>

          {/* Vehicle Comparison Table */}
          <div style={{ marginTop: "4.5rem" }}>
            <div className="section-title-wrap">
              <span className="section-badge">Fleet Guide</span>
              <h2 className="section-title">Vehicle Comparison & Specifications</h2>
              <p className="section-subtitle">
                Clear guidelines to help you choose the right vehicle for your luggage and passenger count.
              </p>
            </div>

            <div className="table-responsive">
              <table className="custom-table">
                <thead>
                  <tr>
                    <th>Vehicle Model</th>
                    <th>Category</th>
                    <th>Seating Capacity</th>
                    <th>Luggage Space</th>
                    <th>Air Conditioning</th>
                    <th>Availability</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {FLEET_DATA.map((v) => (
                    <tr key={v.id}>
                      <td>
                        <strong>{v.name}</strong>
                      </td>
                      <td>{v.category}</td>
                      <td>{v.seats}</td>
                      <td>{v.luggage}</td>
                      <td>{v.ac ? "Dual / Chilled AC" : "Standard"}</td>
                      <td style={{ fontWeight: 700, color: "var(--accent-green)" }}>24x7 Available</td>
                      <td>
                        <Link
                          href={`/booking?vehicle=${encodeURIComponent(v.name)}`}
                          className="btn btn-primary btn-sm"
                        >
                          Book Now
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Standard Inclusions Box */}
            <div
              style={{
                marginTop: "2.5rem",
                background: "#ffffff",
                padding: "2rem",
                borderRadius: "var(--radius-xl)",
                border: "1px solid var(--border-color)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--secondary)", marginBottom: "1rem" }}>
                What is Included in Every Taxi Booking?
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: "1.25rem",
                }}
              >
                <div style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                  <Check size={18} style={{ color: "var(--accent-green)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong style={{ fontSize: "0.9rem", color: "var(--secondary)" }}>Commercial Tourist Permit</strong>
                    <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Fully legal tourist taxis with all-Rajasthan permits.</p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                  <Check size={18} style={{ color: "var(--accent-green)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong style={{ fontSize: "0.9rem", color: "var(--secondary)" }}>Experienced Uniformed Driver</strong>
                    <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Courteous, non-smoking, drug-tested local drivers.</p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                  <Check size={18} style={{ color: "var(--accent-green)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong style={{ fontSize: "0.9rem", color: "var(--secondary)" }}>24x7 Customer Support</strong>
                    <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Direct helpline to control room during your entire trip.</p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                  <Check size={18} style={{ color: "var(--accent-green)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong style={{ fontSize: "0.9rem", color: "var(--secondary)" }}>Fuel & Maintenance</strong>
                    <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>All petrol/diesel and routine upkeep included in quotes.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Call Out */}
            <div style={{ textAlign: "center", marginTop: "3.5rem" }}>
              <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--secondary)", marginBottom: "0.5rem" }}>
                Ready to book your ride?
              </h3>
              <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem" }}>
                Speak with our dispatcher directly for custom yatra routes.
              </p>
              <div style={{ display: "inline-flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="btn btn-primary btn-lg">
                  <Phone size={20} />
                  <span>Call {BUSINESS_INFO.phoneFormatted}</span>
                </a>
                <Link href="/booking" className="btn btn-outline btn-lg">
                  <span>Online Booking Form</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
