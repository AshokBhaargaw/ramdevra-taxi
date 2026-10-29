import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MessageCircle, MapPin, Navigation, Clock, ArrowRight } from "lucide-react";
import RouteCard from "@/components/RouteCard";
import { POPULAR_ROUTES, BUSINESS_INFO } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Outstation Taxi Routes from Ramdevra | Distance, Route Guide & Cab Booking",
  description:
    "Find taxi distances, highway travel times, and one-way & round-trip cab services from Ramdevra to Jodhpur, Jaisalmer, Sam Sand Dunes, Tanot Mata, Bikaner, and Jaipur. Call 7240372575.",
  alternates: {
    canonical: `${BUSINESS_INFO.siteUrl}/routes`,
  },
};

const ALL_DESTINATIONS = [
  { name: "Ramdevra to Jaisalmer", distance: "120 km", time: "2 - 2.5 hrs", link: "/routes/ramdevra-to-jaisalmer-taxi" },
  { name: "Ramdevra to Jodhpur", distance: "180 km", time: "3 - 4 hrs", link: "/routes/ramdevra-to-jodhpur-taxi" },
  { name: "Ramdevra to Sam Sand Dunes", distance: "160 km", time: "3 - 3.5 hrs", link: "/routes/ramdevra-to-sam-sand-dunes-taxi" },
  { name: "Ramdevra to Tanot Mata Temple", distance: "240 km", time: "4.5 - 5.5 hrs", link: "/routes/ramdevra-to-tanot-mata-taxi" },
  { name: "Ramdevra to Bikaner", distance: "200 km", time: "3.5 - 4 hrs", link: "/routes/ramdevra-to-bikaner-taxi" },
  { name: "Ramdevra to Undu Kashmir (Barmer)", distance: "135 km", time: "2.5 - 3 hrs", link: "/routes/ramdevra-to-undu-kashmir-taxi" },
  { name: "Ramdevra to Pokhran Fort", distance: "12 km", time: "15 - 20 mins", link: "/booking?drop=Pokhran" },
  { name: "Ramdevra to Bhadariya Library & Temple", distance: "48 km", time: "1 hr", link: "/booking?drop=Bhadariya" },
  { name: "Ramdevra to Osian Mata Mandir", distance: "125 km", time: "2.5 hrs", link: "/booking?drop=Osian" },
  { name: "Ramdevra to Jodhpur Airport (JDH)", distance: "185 km", time: "3.5 - 4 hrs", link: "/routes/ramdevra-to-jodhpur-taxi" },
  { name: "Ramdevra to Jaisalmer Airport (JSA)", distance: "125 km", time: "2 - 2.5 hrs", link: "/routes/ramdevra-to-jaisalmer-taxi" },
  { name: "Ramdevra to Jaipur", distance: "510 km", time: "8.5 - 9 hrs", link: "/booking?drop=Jaipur" },
  { name: "Ramdevra to Phalodi", distance: "45 km", time: "45 mins", link: "/booking?drop=Phalodi" },
];

export default function RoutesPage() {
  return (
    <div>
      {/* Header */}
      <section className="page-header">
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span style={{ color: "#ffffff" }}>Routes</span>
          </nav>
          <h1 className="page-header-title">Taxi Routes & Outstation Destinations</h1>
          <p className="page-header-desc">
            Explore road distances, highway routes, and travel guides for all popular Rajasthan
            destinations starting from Ramdevra.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="section">
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-badge">Popular Routes</span>
            <h2 className="section-title">Major Outstation Taxi Services</h2>
            <p className="section-subtitle">
              Click on any route below to view distance details, road conditions, tourist stops, and booking options.
            </p>
          </div>

          <div className="routes-grid">
            {POPULAR_ROUTES.map((route) => (
              <RouteCard key={route.slug} route={route} />
            ))}
          </div>

          {/* Quick Distance Directory Table */}
          <div style={{ marginTop: "5rem" }}>
            <div className="section-title-wrap">
              <span className="section-badge">Quick Distance Guide</span>
              <h2 className="section-title">All Destinations from Ramdevra</h2>
              <p className="section-subtitle">
                Complete distance and estimated travel time reference for Western Rajasthan routes.
              </p>
            </div>

            <div className="table-responsive">
              <table className="custom-table">
                <thead>
                  <tr>
                    <th>Destination Route</th>
                    <th>Approx. Distance</th>
                    <th>Travel Time</th>
                    <th>Booking Action</th>
                  </tr>
                </thead>
                <tbody>
                  {ALL_DESTINATIONS.map((dest, idx) => (
                    <tr key={idx}>
                      <td>
                        <strong>{dest.name}</strong>
                      </td>
                      <td>{dest.distance}</td>
                      <td>{dest.time}</td>
                      <td>
                        <Link href={dest.link} className="btn btn-outline btn-sm">
                          <span>View / Book</span>
                          <ArrowRight size={14} />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Helpline CTA Strip */}
            <div
              style={{
                marginTop: "3rem",
                background: "var(--primary-gradient)",
                borderRadius: "var(--radius-xl)",
                padding: "2.5rem",
                color: "white",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1.5rem",
                boxShadow: "var(--gold-glow)",
              }}
            >
              <div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "0.4rem" }}>
                  Traveling to a city not listed here?
                </h3>
                <p style={{ opacity: 0.95, fontSize: "0.95rem" }}>
                  We provide custom all-Rajasthan tour packages and one-way drops to Delhi, Ahmedabad, and Gujarat.
                </p>
              </div>

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="btn btn-secondary btn-lg"
                  style={{ backgroundColor: "var(--secondary)" }}
                >
                  <Phone size={18} />
                  <span>Call {BUSINESS_INFO.phoneFormatted}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
