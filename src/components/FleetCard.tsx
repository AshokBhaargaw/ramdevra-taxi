import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Users, Briefcase, Wind, Check, Phone } from "lucide-react";
import { Vehicle, BUSINESS_INFO } from "@/data/siteData";

interface FleetCardProps {
  vehicle: Vehicle;
}

export default function FleetCard({ vehicle }: FleetCardProps) {
  return (
    <div className={`fleet-card ${vehicle.popular ? "featured-card" : ""}`}>
      {vehicle.popular && (
        <span className="fleet-header-badge">Most Popular</span>
      )}

      <div className="fleet-car-visual">
        {vehicle.image ? (
          <Image
            src={vehicle.image}
            alt={`${vehicle.name} Taxi Service in Ramdevra`}
            width={480}
            height={270}
            className="fleet-car-img"
            loading="lazy"
          />
        ) : (
          <div className="fleet-car-avatar">
            <span style={{ fontSize: "2rem" }}>
              {vehicle.category === "Sedan" ? "🚗" : vehicle.category === "Group" ? "🚐" : "🚙"}
            </span>
          </div>
        )}
      </div>

      <div className="fleet-card-body">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <h3 className="fleet-name">{vehicle.name}</h3>
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              textTransform: "uppercase",
              padding: "0.2rem 0.5rem",
              borderRadius: "4px",
              background: "#f1f5f9",
              color: "var(--secondary)",
            }}
          >
            {vehicle.category}
          </span>
        </div>

        <p className="fleet-tagline">{vehicle.description}</p>

        {/* Specs */}
        <div className="fleet-specs-row">
          <div className="fleet-spec-badge" title="Passenger Capacity">
            <Users size={14} style={{ color: "var(--primary)" }} />
            <span>{vehicle.seats}</span>
          </div>

          <div className="fleet-spec-badge" title="Luggage Capacity">
            <Briefcase size={14} style={{ color: "var(--primary)" }} />
            <span>{vehicle.luggage}</span>
          </div>

          {vehicle.ac && (
            <div className="fleet-spec-badge" title="Air Conditioned">
              <Wind size={14} style={{ color: "#0284c7" }} />
              <span>Chilled AC</span>
            </div>
          )}
        </div>

        {/* Features */}
        <ul className="fleet-features-list">
          {vehicle.features.slice(0, 3).map((feat, idx) => (
            <li key={idx} className="fleet-feature-item">
              <Check size={14} />
              <span>{feat}</span>
            </li>
          ))}
        </ul>

        {/* Availability */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem", padding: "0.5rem 0", borderTop: "1px dashed var(--border-color)" }}>
          <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--accent-green)" }}>
            ✓ 24x7 Available
          </span>
          <span style={{ fontSize: "0.82rem", color: "var(--text-muted)", fontWeight: 600 }}>
            Quote on Call / WhatsApp
          </span>
        </div>

        {/* Action Buttons */}
        <div className="fleet-card-actions">
          <Link href={`/booking?vehicle=${encodeURIComponent(vehicle.name)}`} className="btn btn-primary btn-sm">
            Book Now
          </Link>
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="btn btn-outline btn-sm"
            title={`Call ${BUSINESS_INFO.phoneFormatted}`}
          >
            <Phone size={14} />
            <span>Call</span>
          </a>
        </div>
      </div>
    </div>
  );
}
