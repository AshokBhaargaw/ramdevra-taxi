"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, MessageCircle, MapPin, Menu, X, Car, ShieldCheck } from "lucide-react";
import { BUSINESS_INFO } from "@/data/siteData";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Notification Bar */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-left">
            <span className="top-link">
              <MapPin size={14} style={{ color: "var(--primary)" }} />
              <span>Ramdevra Temple & Railway Station, Rajasthan</span>
            </span>
            <span className="top-link" style={{ display: "none" }}>
              <ShieldCheck size={14} style={{ color: "#22c55e" }} />
              <span>Verified Drivers • 24x7 Available</span>
            </span>
          </div>
          <div className="top-bar-right">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="top-link" title="Call for Taxi Booking">
              <Phone size={14} style={{ color: "#22c55e" }} />
              <strong>24x7 Helpline: {BUSINESS_INFO.phoneFormatted}</strong>
            </a>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello%20Ramdevraa%20Taxi%20Service%2C%20I%20want%20to%20inquire%20about%20taxi%20booking`}
              target="_blank"
              rel="noopener noreferrer"
              className="top-link"
              title="Chat on WhatsApp"
            >
              <MessageCircle size={14} style={{ color: "#22c55e" }} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="main-header">
        <div className="container header-inner">
          <Link href="/" className="brand-logo" title="Ramdevraa Taxi Service Home">
            <div className="brand-icon-box">
              <Car size={26} />
            </div>
            <div className="brand-text">
              <span className="brand-name">{BUSINESS_INFO.name}</span>
              <span className="brand-tagline">Baba Ramdevji Dham Cab & Tour Service</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="nav-links" aria-label="Main Navigation">
            <Link href="/" className="nav-item">Home</Link>
            <Link href="/booking" className="nav-item">Book Taxi</Link>
            <Link href="/routes" className="nav-item">Popular Routes</Link>
            <Link href="/fleet" className="nav-item">Our Fleet</Link>
            <Link href="/about" className="nav-item">About Us</Link>
            <Link href="/contact" className="nav-item">Contact</Link>
          </nav>

          {/* Action CTAs */}
          <div className="header-cta-group">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="header-call-btn"
              title={`Call ${BUSINESS_INFO.phone} for Taxi`}
            >
              <Phone size={16} />
              <span className="header-call-text">Call: {BUSINESS_INFO.phone}</span>
            </a>

            <button
              type="button"
              className="btn btn-outline btn-sm mobile-menu-toggle"
              style={{ display: "inline-flex", minWidth: "42px", padding: "0.5rem" }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            style={{
              backgroundColor: "#ffffff",
              borderBottom: "1px solid #e2e8f0",
              padding: "1rem 1.25rem 1.5rem 1.25rem",
              boxShadow: "var(--shadow-lg)",
            }}
          >
            <nav style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              <Link
                href="/"
                className="nav-item"
                onClick={() => setMobileMenuOpen(false)}
                style={{ fontSize: "1.05rem", padding: "0.4rem 0" }}
              >
                🏠 Home
              </Link>
              <Link
                href="/booking"
                className="nav-item"
                onClick={() => setMobileMenuOpen(false)}
                style={{ fontSize: "1.05rem", padding: "0.4rem 0" }}
              >
                🚖 Online Taxi Booking
              </Link>
              <Link
                href="/routes"
                className="nav-item"
                onClick={() => setMobileMenuOpen(false)}
                style={{ fontSize: "1.05rem", padding: "0.4rem 0" }}
              >
                🗺️ Popular Routes
              </Link>
              <Link
                href="/fleet"
                className="nav-item"
                onClick={() => setMobileMenuOpen(false)}
                style={{ fontSize: "1.05rem", padding: "0.4rem 0" }}
              >
                🚗 Our Vehicles (Dzire, Ertiga, Innova)
              </Link>
              <Link
                href="/about"
                className="nav-item"
                onClick={() => setMobileMenuOpen(false)}
                style={{ fontSize: "1.05rem", padding: "0.4rem 0" }}
              >
                ℹ️ About Ramdevraa Taxi
              </Link>
              <Link
                href="/contact"
                className="nav-item"
                onClick={() => setMobileMenuOpen(false)}
                style={{ fontSize: "1.05rem", padding: "0.4rem 0" }}
              >
                📞 Contact & Location
              </Link>
            </nav>

            <div style={{ marginTop: "1.25rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="btn btn-primary"
                style={{ fontSize: "0.88rem", padding: "0.65rem 0.5rem" }}
              >
                <Phone size={15} />
                <span>Call Now</span>
              </a>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello%20Ramdevraa%20Taxi%20Service%2C%20I%20want%20to%20book%20a%20taxi`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-green"
                style={{ fontSize: "0.88rem", padding: "0.65rem 0.5rem" }}
              >
                <MessageCircle size={15} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
