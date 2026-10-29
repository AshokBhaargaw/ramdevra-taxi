"use client";

import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/data/siteData";

export default function MobileBottomBar() {
  return (
    <div className="mobile-bottom-bar" role="navigation" aria-label="Mobile Quick Actions">
      {/* Direct Phone Call Button */}
      <a
        href={`tel:${BUSINESS_INFO.phone}`}
        className="mobile-bar-btn call-btn"
        title="Direct Call for Taxi"
      >
        <Phone size={18} style={{ color: "#fbbf24" }} />
        <span>Call Now</span>
      </a>

      {/* WhatsApp Chat Button */}
      <a
        href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello%20Ramdevraa%20Taxi%20Service%2C%20I%20want%20to%20book%20a%20taxi%20from%20Ramdevra.`}
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-bar-btn whatsapp-btn"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={18} />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
