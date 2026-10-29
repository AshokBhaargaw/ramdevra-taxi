import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MessageCircle, ShieldCheck, Heart, Users, MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import { BUSINESS_INFO } from "@/data/siteData";

export const metadata: Metadata = {
  title: "About Us | Ramdevraa Taxi Service — Trusted Cab Service in Ramdevra",
  description:
    "Learn about Ramdevraa Taxi Service, the premier pilgrimage and tourist taxi provider in Ramdevra, Rajasthan. Dedicated 24x7 service, verified local drivers, and clean AC fleet. Call 7240372575.",
  alternates: {
    canonical: `${BUSINESS_INFO.siteUrl}/about`,
  },
};

export default function AboutPage() {
  return (
    <div>
      {/* Header */}
      <section className="page-header">
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span style={{ color: "#ffffff" }}>About Us</span>
          </nav>
          <h1 className="page-header-title">About {BUSINESS_INFO.name}</h1>
          <p className="page-header-desc">
            Helping visitors and devotees travel comfortably, safely, and affordably throughout Ramdevra,
            Pokhran, Jaisalmer, Jodhpur, and the desert landmarks of Rajasthan.
          </p>
        </div>
      </section>

      {/* Main Story */}
      <section className="section">
        <div className="container" style={{ maxWidth: "1000px" }}>
          <div className="prose" style={{ fontSize: "1.05rem" }}>
            <h2>Our Mission & Story</h2>
            <p>
              <strong>{BUSINESS_INFO.name}</strong> was founded with a sincere goal: to ensure every devotee,
              tourist, and family traveling to the sacred land of Baba Ramdevji experiences seamless, respectful,
              and stress-free transportation.
            </p>
            <p>
              Every year, hundreds of thousands of pilgrims arrive in Ramdevra from across Gujarat, Maharashtra,
              Madhya Pradesh, Delhi, and Rajasthan. Many arrive late at night or early in the morning by train at
              <strong> Ramdevra Railway Station (RDRA)</strong>, often accompanied by elderly parents and young children.
              Finding an honest, clean, and reliable private vehicle at odd hours used to be a challenge.
            </p>
            <p>
              We bridged this gap by creating a professional, round-the-clock taxi service operated by local drivers
              who consider serving pilgrims (yatris) as a sacred duty. With zero surge pricing and transparent billing,
              we have grown to become Ramdevra&apos;s most recommended cab operator. We work in association with{" "}
              <a
                href="https://ramdevraa.in"
                target="_blank"
                rel="noopener"
                style={{ color: "var(--primary)", fontWeight: 700, textDecoration: "underline" }}
                title="Ramdevraa.in - Baba Ramdevji Dham Pilgrimage Portal"
              >
                Ramdevraa.in
              </a>
              , the dedicated online portal for Baba Ramdevji Temple darshan timings, dharamshala accommodations, and pilgrimage guidance.
            </p>

            <div
              style={{
                margin: "3rem 0",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1.5rem",
              }}
            >
              <div style={{ background: "#ffffff", padding: "1.75rem", borderRadius: "var(--radius-xl)", border: "1px solid #e2e8f0", boxShadow: "var(--shadow-sm)" }}>
                <Heart size={28} style={{ color: "var(--primary)", marginBottom: "0.75rem" }} />
                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--secondary)", marginBottom: "0.4rem" }}>
                  Devotion & Hospitality
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", margin: 0 }}>
                  We treat every passenger as our guest in Baba&apos;s holy courtyard (अतिथि देवो भव).
                </p>
              </div>

              <div style={{ background: "#ffffff", padding: "1.75rem", borderRadius: "var(--radius-xl)", border: "1px solid #e2e8f0", boxShadow: "var(--shadow-sm)" }}>
                <ShieldCheck size={28} style={{ color: "var(--accent-green)", marginBottom: "0.75rem" }} />
                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--secondary)", marginBottom: "0.4rem" }}>
                  Passenger Safety First
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", margin: 0 }}>
                  Verified commercial tourist permits, experienced desert highway drivers, and sanitized cabins.
                </p>
              </div>

              <div style={{ background: "#ffffff", padding: "1.75rem", borderRadius: "var(--radius-xl)", border: "1px solid #e2e8f0", boxShadow: "var(--shadow-sm)" }}>
                <Users size={28} style={{ color: "var(--primary)", marginBottom: "0.75rem" }} />
                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--secondary)", marginBottom: "0.4rem" }}>
                  Diverse Vehicle Options
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", margin: 0 }}>
                  Sedans for couples, MUVs and SUVs for families, and 12–20 seater vehicles for large sanghs.
                </p>
              </div>
            </div>

            <h2>Comprehensive Travel Solutions</h2>
            <p>Our fleet is available 24 hours a day for a full spectrum of travel needs:</p>
            <ul>
              <li><strong>Railway Station Transfers:</strong> Prompt pickups at Ramdevra (RDRA) & Pokhran (POK) stations.</li>
              <li><strong>Airport Transfers:</strong> Connecting to Jodhpur Airport (JDH) and Jaisalmer Airport (JSA).</li>
              <li><strong>Outstation Drops:</strong> One-way and round trips to Jodhpur, Jaisalmer, Bikaner, Jaipur, and Ahmedabad.</li>
              <li><strong>Desert Safaris & Camping:</strong> Transfers to luxury tent resorts in Sam Sand Dunes and Khuri.</li>
              <li><strong>Pilgrimage Circuits:</strong> Yatra to Baba Ramdevji Janam Sthan in Undu Kashmir, Tanot Mata, and Kolayat.</li>
            </ul>

            <h2>Committed to the Local Community</h2>
            <p>
              All our chauffeurs are residents of Ramdevra and Pokhran. They take immense pride in sharing the folklore
              of Baba Ramdevji, local traditions, Rajasthani cuisine recommendations, and helping devotees navigate
              temple entry queues and aarti schedules with ease.
            </p>
          </div>

          {/* Contact Strip */}
          <div
            style={{
              marginTop: "4rem",
              background: "#ffffff",
              padding: "2.5rem",
              borderRadius: "var(--radius-xl)",
              border: "1px solid var(--border-color)",
              boxShadow: "var(--shadow-md)",
              textAlign: "center",
            }}
          >
            <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--secondary)", marginBottom: "0.5rem" }}>
              Experience the Ramdevraa Taxi Service Difference
            </h3>
            <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem" }}>
              Have questions or need a custom quote? Call our 24x7 helpline now.
            </p>
            <div style={{ display: "inline-flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
              <a href={`tel:${BUSINESS_INFO.phone}`} className="btn btn-primary btn-lg">
                <Phone size={20} />
                <span>Call {BUSINESS_INFO.phoneFormatted}</span>
              </a>
              <Link href="/booking" className="btn btn-outline btn-lg">
                <span>Book Taxi Online</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
