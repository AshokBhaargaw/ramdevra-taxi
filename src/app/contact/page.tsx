import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, Mail, MapPin, Clock, Send, ShieldCheck } from "lucide-react";
import { BUSINESS_INFO } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Contact Ramdevraa Taxi Service | 24x7 Helpline: 7240372575",
  description:
    "Contact Ramdevraa Taxi Service in Ramdevra, Rajasthan. Call 7240372575 or WhatsApp for 24x7 taxi booking at Ramdevra Railway Station & Baba Ramdev Ji Mandir.",
  alternates: {
    canonical: `${BUSINESS_INFO.siteUrl}/contact`,
  },
};

export default function ContactPage() {
  return (
    <div>
      {/* Header */}
      <section className="page-header">
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span style={{ color: "#ffffff" }}>Contact</span>
          </nav>
          <h1 className="page-header-title">Contact {BUSINESS_INFO.name}</h1>
          <p className="page-header-desc">
            We are available 24 hours a day, 7 days a week. Connect with our dispatcher for immediate
            railway station pickups, outstation quotes, and Rajasthan desert tour bookings.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "3rem",
            }}
          >
            {/* Top Contact Cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {/* Phone Card */}
              <div
                style={{
                  background: "#ffffff",
                  padding: "2rem",
                  borderRadius: "var(--radius-xl)",
                  border: "1px solid var(--border-color)",
                  boxShadow: "var(--shadow-md)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "var(--radius-lg)",
                    background: "var(--primary-light)",
                    color: "var(--primary-hover)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.25rem",
                  }}
                >
                  <Phone size={24} />
                </div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 700 }}>
                  24x7 Call Helpline
                </div>
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  style={{ fontSize: "1.35rem", fontWeight: 900, color: "var(--secondary)", margin: "0.25rem 0 0.75rem 0" }}
                >
                  {BUSINESS_INFO.phoneFormatted}
                </a>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.25rem", flex: 1 }}>
                  Instant phone support for railway station transfers & emergencies.
                </p>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="btn btn-primary btn-sm" style={{ width: "100%" }}>
                  Call Now
                </a>
              </div>

              {/* WhatsApp Card */}
              <div
                style={{
                  background: "#ffffff",
                  padding: "2rem",
                  borderRadius: "var(--radius-xl)",
                  border: "1px solid var(--border-color)",
                  boxShadow: "var(--shadow-md)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "var(--radius-lg)",
                    background: "#dcfce7",
                    color: "#16a34a",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.25rem",
                  }}
                >
                  <MessageCircle size={24} />
                </div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 700 }}>
                  WhatsApp Dispatch
                </div>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello%20Ramdevraa%20Taxi%20Service`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "1.35rem", fontWeight: 900, color: "var(--secondary)", margin: "0.25rem 0 0.75rem 0" }}
                >
                  +{BUSINESS_INFO.whatsappNumber}
                </a>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.25rem", flex: 1 }}>
                  Share your live location, train number, and get driver contact details.
                </p>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello%20Ramdevraa%20Taxi%20Service%2C%20I%20want%20to%20book%20a%20taxi`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-green btn-sm"
                  style={{ width: "100%" }}
                >
                  WhatsApp Now
                </a>
              </div>

              {/* Location Card */}
              <div
                style={{
                  background: "#ffffff",
                  padding: "2rem",
                  borderRadius: "var(--radius-xl)",
                  border: "1px solid var(--border-color)",
                  boxShadow: "var(--shadow-md)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "var(--radius-lg)",
                    background: "#f1f5f9",
                    color: "var(--secondary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.25rem",
                  }}
                >
                  <MapPin size={24} />
                </div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 700 }}>
                  Office Location
                </div>
                <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--secondary)", margin: "0.25rem 0 0.5rem 0" }}>
                  Ramdevra, Rajasthan
                </div>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.25rem", flex: 1 }}>
                  Near Baba Ramdev Ji Mandir & Railway Station, Pokhran Tehsil, Pin: 345023
                </p>
                <a
                  href={BUSINESS_INFO.googleMapShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                  style={{ width: "100%" }}
                >
                  View on Google Maps 📍
                </a>
              </div>
            </div>

            {/* Physical Counter Office Showcase */}
            <div className="office-showcase-box">
              <div style={{ position: "relative", minHeight: "260px" }}>
                <Image
                  src="/images/shop-office.jpg"
                  alt="Ramdevra Taxi Service Physical Office Counter near Baba Ramdev Ji Mandir"
                  width={1280}
                  height={960}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
              <div style={{ padding: "1.75rem" }}>
                <span className="section-badge">Physical Office</span>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--secondary)", marginBottom: "0.75rem" }}>
                  Visit Our Local Booking Office
                </h3>
                <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "1.25rem" }}>
                  We are physically located near <strong>Baba Ramdev Ji Mandir & Railway Station, Ramdevra</strong>. Whether you need immediate taxi dispatch upon getting off your train or want to plan your Rajasthan itinerary in person, our local counter is open 24x7 to assist you.
                </p>
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="btn btn-green">
                    <Phone size={16} />
                    <span>Call {BUSINESS_INFO.phoneFormatted}</span>
                  </a>
                  <a href={BUSINESS_INFO.googleMapShareUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                    <MapPin size={16} />
                    <span>Get Directions 📍</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Email & Operational Details */}
            <div
              style={{
                background: "var(--bg-sand)",
                borderRadius: "var(--radius-xl)",
                padding: "2.5rem",
                border: "1px solid #fde68a",
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "2rem",
              }}
            >
              <div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--secondary)", marginBottom: "0.75rem" }}>
                  Business Information & Support Desk
                </h2>
                <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                  Have an inquiry regarding bulk bookings for pilgrimage groups, tour operator partnerships, or multi-day
                  Rajasthan desert itineraries? You can also email us directly or visit our office.
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: "1.25rem",
                  }}
                >
                  <div>
                    <strong style={{ fontSize: "0.85rem", textTransform: "uppercase", color: "var(--primary)" }}>
                      📧 Official Email:
                    </strong>
                    <div style={{ fontSize: "1rem", fontWeight: 700, color: "var(--secondary)", marginTop: "0.2rem" }}>
                      <a href={`mailto:${BUSINESS_INFO.email}`}>{BUSINESS_INFO.email}</a>
                    </div>
                  </div>

                  <div>
                    <strong style={{ fontSize: "0.85rem", textTransform: "uppercase", color: "var(--primary)" }}>
                      ⏰ Operating Hours:
                    </strong>
                    <div style={{ fontSize: "1rem", fontWeight: 700, color: "var(--secondary)", marginTop: "0.2rem" }}>
                      Open 24 Hours / 7 Days
                    </div>
                  </div>

                  <div>
                    <strong style={{ fontSize: "0.85rem", textTransform: "uppercase", color: "var(--primary)" }}>
                      📍 Google Profile:
                    </strong>
                    <div style={{ fontSize: "1rem", fontWeight: 700, color: "var(--secondary)", marginTop: "0.2rem" }}>
                      <a href={BUSINESS_INFO.googleMapShareUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>
                        Verified Google Business
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
