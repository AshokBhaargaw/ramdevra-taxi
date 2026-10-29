import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MessageCircle, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";
import BookingWidget from "@/components/BookingWidget";
import { BUSINESS_INFO } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Online Taxi Booking in Ramdevra | 24x7 Cab Service (Call 7240372575)",
  description:
    "Book your taxi online in Ramdevra in 60 seconds. Guaranteed on-time pickup from Ramdevra Railway Station & Baba Ramdev Ji Mandir to Jodhpur, Jaisalmer, Sam Dunes & Bikaner. Call 7240372575.",
  alternates: {
    canonical: `${BUSINESS_INFO.siteUrl}/booking`,
  },
};

export default function BookingPage() {
  return (
    <div>
      {/* Header */}
      <section className="page-header">
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span style={{ color: "#ffffff" }}>Online Booking</span>
          </nav>
          <h1 className="page-header-title">Online Taxi Booking in Ramdevra</h1>
          <p className="page-header-desc">
            Reserve your private air-conditioned cab in 2 easy steps. On-time station pickup, zero cancellation fees,
            and 24/7 customer support.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section" style={{ backgroundColor: "#fdfbf7" }}>
        <div className="container" style={{ maxWidth: "1000px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2.5rem" }}>
            {/* Booking Form Widget */}
            <BookingWidget title="Complete Your Taxi Reservation" />

            {/* Support Strip */}
            <div
              style={{
                background: "#ffffff",
                padding: "2rem",
                borderRadius: "var(--radius-xl)",
                border: "1px solid var(--border-color)",
                boxShadow: "var(--shadow-md)",
              }}
            >
              <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--secondary)", marginBottom: "1rem" }}>
                Need Immediate Taxi at Ramdevra Railway Station?
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                If your train has just arrived or you need a cab in the next 15–30 minutes, skip the form and call
                our 24x7 station dispatcher directly at <strong>{BUSINESS_INFO.phoneFormatted}</strong>. We will assign
                the nearest available vehicle immediately.
              </p>

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="btn btn-green">
                  <Phone size={18} />
                  <span>Call Station Control: {BUSINESS_INFO.phoneFormatted}</span>
                </a>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Urgent%20Taxi%20Pickup%20Required%20at%20Ramdevra`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <MessageCircle size={18} />
                  <span>Urgent WhatsApp Dispatch</span>
                </a>
              </div>
            </div>

            {/* Guarantees */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "1.5rem",
              }}
            >
              <div style={{ background: "#ffffff", padding: "1.5rem", borderRadius: "var(--radius-lg)", border: "1px solid #e2e8f0" }}>
                <Clock size={24} style={{ color: "var(--primary)", marginBottom: "0.5rem" }} />
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--secondary)", marginBottom: "0.25rem" }}>
                  Flight & Train Tracking
                </h3>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                  Provide your train or flight number and our driver tracks delays so you never wait outside.
                </p>
              </div>

              <div style={{ background: "#ffffff", padding: "1.5rem", borderRadius: "var(--radius-lg)", border: "1px solid #e2e8f0" }}>
                <ShieldCheck size={24} style={{ color: "var(--accent-green)", marginBottom: "0.5rem" }} />
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--secondary)", marginBottom: "0.25rem" }}>
                  Honest & Transparent
                </h3>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                  Clear trip itinerary, verified drivers, and zero sudden cancellations or surge surprises.
                </p>
              </div>

              <div style={{ background: "#ffffff", padding: "1.5rem", borderRadius: "var(--radius-lg)", border: "1px solid #e2e8f0" }}>
                <CheckCircle2 size={24} style={{ color: "var(--primary)", marginBottom: "0.5rem" }} />
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--secondary)", marginBottom: "0.25rem" }}>
                  Temple Darshan Assistance
                </h3>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                  Local drivers assist elderly passengers with luggage and guidance on temple timings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
