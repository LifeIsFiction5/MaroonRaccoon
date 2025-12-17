"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("thank you for your message!  I will get back to you shortly.");
    //Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div style={{ padding: "4rem 2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Contact Us</h1>
      <p style={{ fontSize: "1.1rem", marginBottom: "2rem", color: "#666" }}>
        You say the word, and we'll get to coding!
        </p>


      <form onSubmit={handleSumbit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <div>
          <label htmlFor="name" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600"}}>
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
                fontSize: "1rem"}}
            />
        </div>

        <div>
          <label htmlFor="email" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600" }}>
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
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
        </div>

        <button
          type="submit"
          style={{
            background: "#530000ff",
            color: "white",
            padding: "1rem 2rem",
            border: "none",
            borderRadius: "5px",
            fontSize: "1.1rem",
            cursor: "pointer",
            alignSelf: "flex-start"
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}