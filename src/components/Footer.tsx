import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, Mail, MapPin, Clock, ShieldCheck, Star } from "lucide-react";
import { BUSINESS_INFO, POPULAR_ROUTES, FLEET_DATA } from "@/data/siteData";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Company Profile */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem" }}>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  background: "var(--primary-gradient)",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                }}
              >
                R
              </div>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#ffffff" }}>
                {BUSINESS_INFO.name}
              </h3>
            </div>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.6, color: "#94a3b8", marginBottom: "1.25rem" }}>
              Premier taxi and car rental service in Ramdevra (Rajasthan). Providing reliable, safe, and comfortable
              one-way and round-trip transfers for Baba Ramdevji pilgrims, desert tourists, railway station transfers,
              and airport travel across Rajasthan.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "#fbbf24", fontSize: "0.85rem" }}>
              <Star size={16} fill="#fbbf24" />
              <Star size={16} fill="#fbbf24" />
              <Star size={16} fill="#fbbf24" />
              <Star size={16} fill="#fbbf24" />
              <Star size={16} fill="#fbbf24" />
              <span style={{ color: "#ffffff", fontWeight: 700, marginLeft: "0.25rem" }}>
                {BUSINESS_INFO.rating.ratingValue} / 5
              </span>
              <span style={{ color: "#94a3b8" }}>({BUSINESS_INFO.rating.reviewCount}+ Google Reviews)</span>
            </div>
          </div>

          {/* Column 2: Popular Outstation Routes */}
          <div>
            <h4 className="footer-heading">Top Taxi Routes</h4>
            <ul className="footer-links-list">
              {POPULAR_ROUTES.map((route) => (
                <li key={route.slug}>
                  <Link href={`/routes/${route.slug}`} className="footer-link">
                    {route.shortTitle} Taxi
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/routes" className="footer-link" style={{ color: "#fbbf24", fontWeight: 700 }}>
                  View All Rajasthan Routes →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Vehicles & Services */}
          <div>
            <h4 className="footer-heading">Our Taxi Fleet</h4>
            <ul className="footer-links-list">
              {FLEET_DATA.map((car) => (
                <li key={car.id}>
                  <Link href="/fleet" className="footer-link">
                    {car.name} ({car.category})
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/booking" className="footer-link">
                  Ramdevra Railway Station Pickup
                </Link>
              </li>
              <li>
                <Link href="/booking" className="footer-link">
                  Jodhpur / Jaisalmer Airport Cab
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: 24/7 Helpline & Contact */}
          <div>
            <h4 className="footer-heading">24x7 Taxi Helpline</h4>
            <div className="footer-contact-item">
              <Phone size={18} className="footer-contact-icon" />
              <div>
                <div style={{ fontSize: "0.78rem", textTransform: "uppercase", color: "#94a3b8" }}>Call for Booking</div>
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  style={{ color: "#ffffff", fontWeight: 800, fontSize: "1.1rem" }}
                >
                  {BUSINESS_INFO.phoneFormatted}
                </a>
              </div>
            </div>

            <div className="footer-contact-item">
              <MessageCircle size={18} className="footer-contact-icon" style={{ color: "#22c55e" }} />
              <div>
                <div style={{ fontSize: "0.78rem", textTransform: "uppercase", color: "#94a3b8" }}>Instant WhatsApp</div>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello%20Ramdevraa%20Taxi%20Service%2C%20I%20want%20to%20book%20a%20taxi`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#4ade80", fontWeight: 700 }}
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="footer-contact-item">
              <MapPin size={18} className="footer-contact-icon" />
              <div>
                <a
                  href={BUSINESS_INFO.googleMapShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#cbd5e1" }}
                  className="footer-link"
                >
                  Near Baba Ramdev Ji Mandir & Railway Station, Ramdevra, Pokhran, Rajasthan 345023
                </a>
              </div>
            </div>

            <div className="footer-contact-item">
              <Clock size={18} className="footer-contact-icon" />
              <span style={{ color: "#cbd5e1" }}>Open 24 Hours / 7 Days a Week</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© 2026 {BUSINESS_INFO.name}. All Rights Reserved.</p>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            <Link href="/about" className="footer-link">About Us</Link>
            <Link href="/routes" className="footer-link">Destinations</Link>
            <Link href="/fleet" className="footer-link">Fleet Pricing</Link>
            <Link href="/contact" className="footer-link">Contact</Link>
            <a
              href={BUSINESS_INFO.googleMapShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              style={{ color: "#fbbf24" }}
            >
              Google Maps Location 📍
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
