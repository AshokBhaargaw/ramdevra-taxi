"use client";

import React, { useState, useEffect } from "react";
import { Phone, MessageCircle, ArrowRight, ArrowLeft, CheckCircle2, Car, Calendar, Clock, MapPin, Users, Briefcase } from "lucide-react";
import { BUSINESS_INFO } from "@/data/siteData";

interface BookingWidgetProps {
  defaultPickup?: string;
  defaultDrop?: string;
  defaultVehicle?: string;
  title?: string;
}

export default function BookingWidget({
  defaultPickup = "Ramdevra Temple / Railway Station",
  defaultDrop = "",
  defaultVehicle = "Sedan (Swift Dzire) - 1-4 Pax",
  title = "Instant Taxi Booking"
}: BookingWidgetProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [tripType, setTripType] = useState<"One Way" | "Round Trip" | "Sightseeing">("One Way");
  
  // Step 1 Form Data
  const [pickup, setPickup] = useState(defaultPickup);
  const [drop, setDrop] = useState(defaultDrop);
  const [date, setDate] = useState("2026-10-29");

  useEffect(() => {
    try {
      const today = new Date();
      setDate(today.toISOString().split("T")[0]);
    } catch {
      // fallback
    }
  }, []);

  const [time, setTime] = useState("09:00");
  const [vehicle, setVehicle] = useState(defaultVehicle);
  const [luggage, setLuggage] = useState("1-2 Bags");

  // Step 2 Form Data
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pickup.trim()) {
      alert("Please provide a pickup location");
      return;
    }
    if (!drop.trim() && tripType !== "Sightseeing") {
      alert("Please provide a drop location");
      return;
    }
    setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      alert("Please enter your name");
      return;
    }
    if (!phone.trim()) {
      alert("Please enter your mobile phone number");
      return;
    }

    setSubmitted(true);

    // Build formatted message for WhatsApp
    const message = `*NEW TAXI BOOKING REQUEST - ${BUSINESS_INFO.name}*%0A%0A` +
      `*Trip Type:* ${tripType}%0A` +
      `*Pickup:* ${pickup}%0A` +
      `*Drop:* ${drop || "Local Ramdevra Sightseeing"}%0A` +
      `*Date:* ${date}%0A` +
      `*Time:* ${time}%0A` +
      `*Vehicle:* ${vehicle}%0A` +
      `*Luggage:* ${luggage}%0A%0A` +
      `*Customer Name:* ${name}%0A` +
      `*Phone Number:* ${phone}%0A` +
      (note ? `*Special Request:* ${note}%0A` : "") +
      `%0A_Sent via Ramdevraa Taxi Service online portal_`;

    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${message}`;
    
    // Open WhatsApp in a new tab
    if (typeof window !== "undefined") {
      window.open(whatsappUrl, "_blank");
    }
  };

  return (
    <div className="booking-card" id="booking-form">
      <div className="booking-card-header">
        <h2 className="booking-card-title">
          <Car size={24} style={{ color: "var(--primary)" }} />
          <span>{title}</span>
        </h2>
        <p className="booking-card-subtitle">
          Confirm your cab in 2 easy steps • Best prices & Zero hidden charges
        </p>

        {/* 2-Step indicator */}
        <div className="booking-step-indicator">
          <div className={`step-node ${step >= 1 ? "active" : ""}`}>
            <span className="step-number">1</span>
            <span>Trip Details</span>
          </div>
          <div style={{ flex: 1, height: "2px", background: step === 2 ? "var(--primary)" : "#e2e8f0" }} />
          <div className={`step-node ${step === 2 ? "active" : ""}`}>
            <span className="step-number">2</span>
            <span>Passenger Info</span>
          </div>
        </div>
      </div>

      {submitted ? (
        <div style={{ textAlign: "center", padding: "1.5rem 0" }}>
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              background: "#dcfce7",
              color: "#16a34a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1.25rem auto",
            }}
          >
            <CheckCircle2 size={36} />
          </div>
          <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--secondary)", marginBottom: "0.5rem" }}>
            Thank You, {name}!
          </h3>
          <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
            Your taxi booking details have been submitted. Our dispatcher is preparing your vehicle.
            For instant confirmation, you can also connect via call directly.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="btn btn-primary">
              <Phone size={18} />
              <span>Call: {BUSINESS_INFO.phone}</span>
            </a>
            <button
              type="button"
              className="btn btn-outline"
              onClick={() => {
                setSubmitted(false);
                setStep(1);
              }}
            >
              Book Another Ride
            </button>
          </div>
        </div>
      ) : step === 1 ? (
        <form onSubmit={handleContinue}>
          {/* Trip Type Selector */}
          <div className="trip-type-toggle">
            {(["One Way", "Round Trip", "Sightseeing"] as const).map((type) => (
              <button
                key={type}
                type="button"
                className={`trip-type-btn ${tripType === type ? "active" : ""}`}
                onClick={() => setTripType(type)}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Locations */}
          <div className="form-grid-2">
            <div className="form-group">
              <label className="form-label" htmlFor="pickup-loc">
                📍 Pickup Location *
              </label>
              <input
                id="pickup-loc"
                type="text"
                className="form-input"
                placeholder="e.g. Ramdevra Mandir / Railway Station"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="drop-loc">
                🏁 Drop Location {tripType === "Sightseeing" ? "(Optional)" : "*"}
              </label>
              <input
                id="drop-loc"
                type="text"
                className="form-input"
                placeholder="e.g. Jaisalmer / Jodhpur / Sam Sand Dunes"
                value={drop}
                onChange={(e) => setDrop(e.target.value)}
                required={tripType !== "Sightseeing"}
              />
            </div>
          </div>

          {/* Date & Time */}
          <div className="form-grid-2">
            <div className="form-group">
              <label className="form-label" htmlFor="pickup-date">
                📅 Pickup Date *
              </label>
              <input
                id="pickup-date"
                type="date"
                className="form-input"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="pickup-time">
                ⏰ Pickup Time *
              </label>
              <input
                id="pickup-time"
                type="time"
                className="form-input"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Vehicle & Luggage */}
          <div className="form-grid-2">
            <div className="form-group">
              <label className="form-label" htmlFor="vehicle-select">
                🚗 Passengers & Vehicle *
              </label>
              <select
                id="vehicle-select"
                className="form-select"
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value)}
              >
                <option value="Sedan (Swift Dzire) - 1-4 Pax">1–4 Passengers - Sedan (Swift Dzire)</option>
                <option value="MUV (Maruti Ertiga) - 1-6 Pax">1–6 Passengers - MUV (Maruti Ertiga)</option>
                <option value="Luxury SUV (Innova Crysta) - 1-7 Pax">1–7 Passengers - SUV (Innova Crysta)</option>
                <option value="Budget MUV (Eeco) - 1-6 Pax">1–6 Passengers - Budget (Maruti Eeco)</option>
                <option value="Large Group (Force Toofan) - 1-12 Pax">1–12 Passengers - Force Toofan / Cruiser</option>
                <option value="Tempo Traveller - 1-16 / 20 Pax">1–16/20 Passengers - Luxury Tempo Traveller</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="luggage-select">
                🧳 Luggage Estimate
              </label>
              <select
                id="luggage-select"
                className="form-select"
                value={luggage}
                onChange={(e) => setLuggage(e.target.value)}
              >
                <option value="1-2 Bags">1–2 Bags (Normal)</option>
                <option value="3-4 Bags">3–4 Bags (Medium)</option>
                <option value="5-6 Bags">5–6 Bags (Large)</option>
                <option value="7+ Bags / Heavy Luggage">7+ Bags (Heavy / Carrier required)</option>
              </select>
            </div>
          </div>

          <div className="step-actions">
            <button type="submit" className="btn btn-primary btn-continue">
              <span>Continue to Passenger Details</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </form>
      ) : (
        <form onSubmit={handleSubmit}>
          {/* Summary Box */}
          <div
            style={{
              backgroundColor: "var(--bg-sand)",
              padding: "0.85rem 1rem",
              borderRadius: "var(--radius-md)",
              marginBottom: "1.25rem",
              fontSize: "0.85rem",
              color: "var(--secondary)",
              border: "1px solid #fde68a",
            }}
          >
            <div>
              <strong>{tripType}</strong>: {pickup} → {drop || "Local Sightseeing"}
            </div>
            <div style={{ color: "var(--text-muted)", marginTop: "0.2rem" }}>
              📅 {date} at {time} • 🚗 {vehicle}
            </div>
          </div>

          <div className="form-grid-2">
            <div className="form-group">
              <label className="form-label" htmlFor="cust-name">
                👤 Full Name *
              </label>
              <input
                id="cust-name"
                type="text"
                className="form-input"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="cust-phone">
                📞 Mobile Phone Number *
              </label>
              <input
                id="cust-phone"
                type="tel"
                className="form-input"
                placeholder="10-digit mobile number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-group" style={{ marginBottom: "1.25rem" }}>
            <label className="form-label" htmlFor="cust-note">
              📝 Special Requests / Train Number (Optional)
            </label>
            <textarea
              id="cust-note"
              className="form-textarea"
              placeholder="e.g. Train arrival time, hotel address, elderly passenger assistance"
              rows={2}
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>

          <div className="step-actions">
            <button
              type="button"
              className="btn btn-back"
              onClick={() => setStep(1)}
            >
              <ArrowLeft size={16} />
              <span>Back</span>
            </button>
            <button type="submit" className="btn btn-green btn-continue">
              <MessageCircle size={18} />
              <span>Confirm & Dispatch on WhatsApp</span>
            </button>
          </div>

          <p style={{ textAlign: "center", fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "0.85rem" }}>
            Or call our 24x7 control room directly at{" "}
            <a href={`tel:${BUSINESS_INFO.phone}`} style={{ fontWeight: 800, color: "var(--primary)" }}>
              {BUSINESS_INFO.phoneFormatted}
            </a>
          </p>
        </form>
      )}
    </div>
  );
}
