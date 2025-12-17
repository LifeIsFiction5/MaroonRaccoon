"use client";

import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  // Formspree hook (replace with your form hashid)
  const [state, handleSubmit] = useForm("xgvggoza");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // If successful, show a nice confirmation state
  if (state.succeeded) {
    return (
      <div style={{ padding: "4rem 2rem", maxWidth: "800px", margin: "0 auto" }}>
        <h1>Message sent ✅</h1>
        <p style={{ fontSize: "1.1rem", color: "#666" }}>
          Thanks — I’ll get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <div style={{ padding: "4rem 2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Contact Us</h1>
      <p style={{ fontSize: "1.1rem", marginBottom: "2rem", color: "#666" }}>
        You say the word, and we&apos;ll get to coding!
      </p>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
      >
        {/* Optional: Honeypot anti-spam field */}
        <input
          type="text"
          name="_gotcha"
          tabIndex="-1"
          autoComplete="off"
          style={{ display: "none" }}
        />
        {/* Optional: override email subject in what Formspree sends you */}
        <input type="hidden" name="_subject" value={`Maroon Raccoon: ${formData.subject || "New message"}`} />

        <div>
          <label htmlFor="name" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600" }}>
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "0.75rem",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "1rem"
            }}
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>

        <div>
          <label htmlFor="email" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600" }}>
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="_replyto"
            required
            value={formData.email}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "0.75rem",
              border: "1px solid #ccc",
              borderRadius: "5px",
              fontSize: "1rem"
            }}
          />
          <ValidationError prefix="Email" field="_replyto" errors={state.errors} />
        </div>

        <div>
          <label htmlFor="subject" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600" }}>
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "0.75rem",
              border: "1px solid #ccc",
              borderRadius: "5px",
              fontSize: "1rem"
            }}
          />
        </div>

        <div>
          <label htmlFor="message" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600" }}>
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows="6"
            value={formData.message}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "0.75rem",
              border: "1px solid #ccc",
              borderRadius: "5px",
              fontSize: "1rem",
              resize: "vertical"
            }}
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          style={{
            background: "#530000ff",
            color: "white",
            padding: "1rem 2rem",
            border: "none",
            borderRadius: "5px",
            fontSize: "1.1rem",
            cursor: state.submitting ? "not-allowed" : "pointer",
            opacity: state.submitting ? 0.7 : 1,
            alignSelf: "flex-start"
          }}
        >
          {state.submitting ? "Sending..." : "Send Message"}
        </button>

        {/* General (non-field-specific) errors */}
        <ValidationError errors={state.errors} />
      </form>
    </div>
  );
}
