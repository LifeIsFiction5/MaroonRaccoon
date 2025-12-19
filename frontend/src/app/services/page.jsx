import PageHero from "../../components/PageHero";
import Link from "next/link";


export default function ServicesPage() {
  return (
    <main style={{ padding: "2rem" }}>
      <PageHero
      title ="Services"
      subtitle="Clear options, transparent pricing, and a smooth process."
      primaryCtaLabel="Get a Quote"
      primaryCtaHref="/contact"
      />
      <h1>What I Offer</h1>
      <p style={{ fontSize: "1.5rem", color: "#c6c6c6ff", marginTop: "-0.5rem" }}>
      No templates. Just easy-to-maintain, fully custom websites tailored to your needs.
      </p>

      <div style={{
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "1rem",
  marginTop: "1rem"
}}>
  <div style={{ border: "1px solid #b7b7b7ff", borderRadius: "12px", padding: "1.25rem", background: "transparent" }}>
    <h3 style={{ marginTop: 0 }}>Small Business Website</h3>
    <p style={{ color: "#c8c8c8ff" }}>A modern multi-page site that looks great on mobile and is easy to maintain.</p>
    <ul style={{ color: "#c8c8c8ff" }}>
      <li>Home + Services + Contact</li>
      <li>Mobile-first + fast loading</li>
    </ul>
  </div>

  <div style={{ border: "1px solid #b7b7b7ff", borderRadius: "12px", padding: "1.25rem", background: "transparent" }}>
    <h3 style={{ marginTop: 0 }}>Landing Page</h3>
    <p style={{ color: "#c8c8c8ff" }}>One focused page built to convert visitors into calls, bookings, or messages.</p>
    <ul style={{ color: "#c8c8c8ff" }}>
      <li>Clear CTA + contact form</li>
      <li>Perfect for ads or promos</li>
    </ul>
  </div>

  <div style={{ border: "1px solid #b7b7b7ff", borderRadius: "12px", padding: "1.25rem", background: "transparent" }}>
    <h3 style={{ marginTop: 0 }}>Fixes + Refresh</h3>
    <p style={{ color: "#c8c8c8ff" }}>Clean up an existing site: mobile issues, layout problems, speed, and polish.</p>
    <ul style={{ color: "#cdcdcdff" }}>
      <li>Quick turnaround</li>
      <li>Prioritized improvements</li>
    </ul>
  </div>
</div>

      <br></br>
      <p>
        Want the full breakdown?
        <Link href="/services/MaroonRaccoon-Web-Services-Guide.pdf" target="_blank" rel="noopener noreferrer">
        Download my services PDF
        </Link>
      </p>
    </main>
  );
}
