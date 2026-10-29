import React from "react";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  ShieldCheck,
  Clock,
  Compass,
  Star,
  Car,
  MapPin,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight
} from "lucide-react";
import BookingWidget from "@/components/BookingWidget";
import FleetCard from "@/components/FleetCard";
import RouteCard from "@/components/RouteCard";
import FaqAccordion from "@/components/FaqAccordion";
import {
  BUSINESS_INFO,
  FLEET_DATA,
  POPULAR_ROUTES,
  SIGHTSEEING_PACKAGES,
  TESTIMONIALS,
  GENERAL_FAQS
} from "@/data/siteData";

export default function HomePage() {
  return (
    <>
      {/* ================================================================
          HERO SECTION WITH 2-STEP INTERACTIVE BOOKING WIDGET
          ================================================================ */}
      <section className="hero-section">
        <div className="hero-pattern" />
        <div className="container hero-grid">
          {/* Left Column: Hero Copy & Value Propositions */}
          <div>
            <div className="hero-pill">
              <span className="dot" />
              <span>Official 24x7 Cab Service in Ramdevra</span>
            </div>

            <h1 className="hero-heading">
              Trusted <span className="highlight">Taxi Service</span> in Ramdevra & Rajasthan Tours
            </h1>

            <p className="hero-description">
              Welcome to <strong>{BUSINESS_INFO.name}</strong>. We provide on-time, sanitized,
              air-conditioned cabs from <strong>Ramdevra Railway Station & Temple</strong> to
              Jodhpur, Jaisalmer, Sam Sand Dunes, Tanot Mata, and all across Rajasthan.
            </p>

            {/* Quick Badges */}
            <div className="hero-trust-badges">
              <div className="trust-badge-item">
                <ShieldCheck size={18} className="trust-badge-icon" />
                <span>Zero Surge Pricing</span>
              </div>
              <div className="trust-badge-item">
                <Clock size={18} className="trust-badge-icon" />
                <span>24x7 Station Pickup</span>
              </div>
              <div className="trust-badge-item">
                <CheckCircle2 size={18} className="trust-badge-icon" />
                <span>Clean AC Fleet</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="hero-cta-actions">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="btn btn-green btn-lg"
                title={`Call ${BUSINESS_INFO.phoneFormatted}`}
              >
                <Phone size={20} />
                <span>Call {BUSINESS_INFO.phoneFormatted}</span>
              </a>

              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello%20Ramdevraa%20Taxi%20Service%2C%20I%20want%20to%20book%20a%20taxi%20from%20Ramdevra`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-lg"
                title="WhatsApp Taxi Inquiry"
              >
                <MessageCircle size={20} style={{ color: "#22c55e" }} />
                <span>WhatsApp Booking</span>
              </a>
            </div>

            {/* Rating pill */}
            <div
              style={{
                marginTop: "2rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                backgroundColor: "#ffffff",
                padding: "0.5rem 1rem",
                borderRadius: "var(--radius-full)",
                boxShadow: "var(--shadow-sm)",
                border: "1px solid #f1f5f9",
              }}
            >
              <div style={{ display: "flex", gap: "2px", color: "#f59e0b" }}>
                <Star size={16} fill="#f59e0b" />
                <Star size={16} fill="#f59e0b" />
                <Star size={16} fill="#f59e0b" />
                <Star size={16} fill="#f59e0b" />
                <Star size={16} fill="#f59e0b" />
              </div>
              <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--secondary)" }}>
                4.9/5 Rating
              </span>
              <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                based on 120+ verified Google pilgrim reviews
              </span>
            </div>
          </div>

          {/* Right Column: 2-Step Booking Calculator */}
          <div>
            <BookingWidget />
          </div>
        </div>
      </section>

      {/* ================================================================
          WHY CHOOSE US / VALUE PROPOSITIONS
          ================================================================ */}
      <section className="section" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-badge">Why Choose Ramdevraa Taxi</span>
            <h2 className="section-title">Safe, Transparent & Reliable Travel</h2>
            <p className="section-subtitle">
              Every year thousands of devotees and tourists trust Ramdevraa Taxi Service for their
              pilgrimage to Baba Ramdev Ji Temple and onward Rajasthan expeditions.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-box">
              <div className="feature-icon-wrapper">
                <Compass size={28} />
              </div>
              <h3 className="feature-box-title">Deep Local Expertise</h3>
              <p className="feature-box-desc">
                Our drivers are native to Ramdevra and Pokhran. They are intimately familiar with
                highway shortcuts, temple darshan timings, aarti schedules, and the best desert routes.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon-wrapper">
                <Clock size={28} />
              </div>
              <h3 className="feature-box-title">Guaranteed On-Time Pickup</h3>
              <p className="feature-box-desc">
                Whether arriving on midnight express trains at Ramdevra Railway Station (RDRA) or
                catching an afternoon flight from Jodhpur Airport, we guarantee punctual arrivals.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon-wrapper">
                <ShieldCheck size={28} />
              </div>
              <h3 className="feature-box-title">Safe & Sanitized Fleet</h3>
              <p className="feature-box-desc">
                All vehicles undergo strict periodic maintenance. Chilled air conditioning, spacious
                legroom, and clean comfortable interiors for an enjoyable desert ride.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon-wrapper">
                <CheckCircle2 size={28} />
              </div>
              <h3 className="feature-box-title">100% Transparent Fares</h3>
              <p className="feature-box-desc">
                No hidden charges, no surprise extra tolls or night surge tariffs. You receive a clear,
                fixed all-inclusive fare quote before your trip begins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          OUR VEHICLE FLEET (Dzire, Ertiga, Innova, Toofan, Tempo)
          ================================================================ */}
      <section className="section" id="fleet-section">
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-badge">Our Vehicle Fleet</span>
            <h2 className="section-title">Choose The Right Cab For Your Yatra</h2>
            <p className="section-subtitle">
              From economic sedans for couples to 12-seater Toofans and luxury Tempo Travellers for joint
              families and pilgrim sanghs.
            </p>
          </div>

          <div className="fleet-grid">
            {FLEET_DATA.map((vehicle) => (
              <FleetCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <p style={{ color: "var(--text-muted)", marginBottom: "1rem" }}>
              Need a customized vehicle or commercial bus for large sangh yatra?
            </p>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="btn btn-secondary">
              <Phone size={16} />
              <span>Call Us for Group Bookings: {BUSINESS_INFO.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </section>

      {/* ================================================================
          POPULAR TAXI ROUTES & DISTANCES
          ================================================================ */}
      <section className="section" style={{ backgroundColor: "#ffffff" }} id="routes-section">
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-badge">Outstation Destinations</span>
            <h2 className="section-title">Popular Outstation Routes & Destinations</h2>
            <p className="section-subtitle">
              Book affordable one-way drops or round-trip cabs from Ramdevra to top cities and tourist
              destinations in Rajasthan.
            </p>
          </div>

          <div className="routes-grid">
            {POPULAR_ROUTES.map((route) => (
              <RouteCard key={route.slug} route={route} />
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/routes" className="btn btn-outline btn-lg">
              <span>View All 15+ Rajasthan Taxi Destinations</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================
          PILGRIMAGE & LOCAL SIGHTSEEING PACKAGES
          ================================================================ */}
      <section className="section" style={{ backgroundColor: "var(--bg-sand)" }}>
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-badge">Pilgrimage Packages</span>
            <h2 className="section-title">Local Ramdevra Darshan & Desert Tours</h2>
            <p className="section-subtitle">
              Dedicated spiritual tour packages designed to ensure you do not miss any sacred spot around
              Baba Ramdevji Dham.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2rem",
            }}
          >
            {SIGHTSEEING_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                style={{
                  background: "#ffffff",
                  borderRadius: "var(--radius-xl)",
                  padding: "2rem",
                  border: "1px solid #fde68a",
                  boxShadow: "var(--shadow-md)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.75rem" }}>
                  <span
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      color: "var(--primary)",
                      background: "var(--primary-light)",
                      padding: "0.25rem 0.65rem",
                      borderRadius: "var(--radius-full)",
                    }}
                  >
                    ⏱️ {pkg.duration}
                  </span>
                  <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--accent-green)" }}>
                    ✓ Custom Yatra
                  </span>
                </div>

                <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--secondary)", marginBottom: "0.75rem" }}>
                  {pkg.title}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.5, marginBottom: "1.25rem" }}>
                  {pkg.description}
                </p>

                <div style={{ borderTop: "1px dashed var(--border-color)", paddingTop: "1rem", marginBottom: "1.5rem", flex: 1 }}>
                  <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--secondary)", marginBottom: "0.5rem" }}>
                    Places Covered:
                  </div>
                  <ul style={{ listStyle: "none" }}>
                    {pkg.places.map((place, idx) => (
                      <li
                        key={idx}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          fontSize: "0.85rem",
                          color: "var(--text-main)",
                          marginBottom: "0.4rem",
                        }}
                      >
                        <CheckCircle2 size={14} style={{ color: "var(--accent-green)", flexShrink: 0 }} />
                        <span>{place}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
                  <Link
                    href={`/booking?drop=${encodeURIComponent(pkg.title)}`}
                    className="btn btn-primary btn-sm"
                  >
                    Book Tour
                  </Link>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="btn btn-outline btn-sm">
                    <Phone size={14} />
                    <span>Inquire</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          CUSTOMER REVIEWS & TESTIMONIALS (Trust Building)
          ================================================================ */}
      <section className="section" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-badge">Devotee Feedback</span>
            <h2 className="section-title">What Our Passengers Say</h2>
            <p className="section-subtitle">
              Authentic reviews from families, solo travelers, and groups who booked Ramdevraa Taxi Service.
            </p>
          </div>

          <div className="reviews-grid">
            {TESTIMONIALS.map((rev, idx) => (
              <div key={idx} className="review-card">
                <div className="review-stars">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} size={16} fill="#f59e0b" />
                  ))}
                </div>
                <p className="review-text">“{rev.comment}”</p>
                <div className="review-author">
                  <div className="review-author-avatar">
                    {rev.name.charAt(0)}
                  </div>
                  <div className="review-author-info">
                    <span className="review-author-name">{rev.name}</span>
                    <span className="review-author-meta">{rev.source} • {rev.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <a
              href={BUSINESS_INFO.googleMapShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <span>View All Google Reviews & Add Yours ⭐️</span>
            </a>
          </div>
        </div>
      </section>

      {/* ================================================================
          FAQ SECTION
          ================================================================ */}
      <section className="section">
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-badge">Frequently Asked Questions</span>
            <h2 className="section-title">Everything You Need to Know</h2>
            <p className="section-subtitle">
              Answers regarding taxi bookings, station pickup, pricing, cancellation, and night travel.
            </p>
          </div>

          <FaqAccordion items={GENERAL_FAQS} />

          <div
            style={{
              textAlign: "center",
              marginTop: "3.5rem",
              background: "#ffffff",
              padding: "2.5rem",
              borderRadius: "var(--radius-xl)",
              border: "1px solid var(--border-color)",
              boxShadow: "var(--shadow-md)",
              maxWidth: "800px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--secondary)", marginBottom: "0.5rem" }}>
              Still have questions about your Ramdevra trip?
            </h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", marginBottom: "1.5rem" }}>
              Our 24x7 control room is always open. Call or WhatsApp our friendly dispatcher anytime.
            </p>
            <div style={{ display: "inline-flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
              <a href={`tel:${BUSINESS_INFO.phone}`} className="btn btn-primary">
                <Phone size={18} />
                <span>Call Helpline: {BUSINESS_INFO.phoneFormatted}</span>
              </a>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello%20Ramdevraa%20Taxi%20Service%2C%20I%20have%20a%20question%20about%20travel`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-green"
              >
                <MessageCircle size={18} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
