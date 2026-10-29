import React from "react";
import Link from "next/link";
import { Navigation, Clock, ArrowRight, ShieldCheck } from "lucide-react";
import { RouteDetail } from "@/data/siteData";

interface RouteCardProps {
  route: RouteDetail;
}

export default function RouteCard({ route }: RouteCardProps) {
  return (
    <div className="route-card">
      <div className="route-meta-strip">
        <span className="route-pill">
          <Navigation size={12} />
          <span>{route.routeHighway}</span>
        </span>
        <span className="route-distance" title="Total Road Distance">
          <span>{route.distance}</span>
        </span>
      </div>

      <h3 className="route-title">
        <Link href={`/routes/${route.slug}`} style={{ color: "inherit" }}>
          {route.shortTitle}
        </Link>
      </h3>

      <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "0.85rem" }}>
        <Clock size={14} style={{ color: "var(--primary)" }} />
        <span>Approx. Travel Time: {route.travelTime}</span>
      </div>

      <p className="route-desc">{route.overview}</p>

      {/* Route Highlights */}
      <div style={{ background: "#f8fafc", borderRadius: "var(--radius-md)", padding: "0.85rem", marginBottom: "1.25rem", border: "1px solid #edf2f7" }}>
        <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontWeight: 700, textTransform: "uppercase", marginBottom: "0.35rem" }}>
          Highlights:
        </div>
        <div style={{ fontSize: "0.85rem", color: "var(--secondary)", fontWeight: 600, lineHeight: 1.4 }}>
          {route.highlights.slice(0, 2).join(" • ")}
        </div>
      </div>

      {/* Action CTA */}
      <div className="route-card-actions">
        <Link href={`/routes/${route.slug}`} className="btn btn-outline btn-sm">
          <span>Route Guide</span>
          <ArrowRight size={14} />
        </Link>
        <Link
          href={`/booking?pickup=Ramdevra&drop=${encodeURIComponent(route.destination)}`}
          className="btn btn-primary btn-sm"
        >
          Book Taxi
        </Link>
      </div>
    </div>
  );
}
