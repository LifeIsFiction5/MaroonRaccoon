import PageHero from "../../components/PageHero";
import Link from "next/link";
import Image from "next/image";

export default function ServicesPage() {
  const services = [
    {
      title: "Small Business Website",
      description: "A modern multi-page site that looks great on mobile and is easy to maintain.",
      features: [
        "Home + Services + Contact",
        "Mobile-first + fast loading",
        "SEO optimized",
        "Easy to update"
      ]
    },
    {
      title: "Landing Page",
      description: "One focused page built to convert visitors into calls, bookings, or messages.",
      features: [
        "Clear CTA + contact form",
        "Perfect for ads or promos",
        "Conversion-focused design",
        "A/B testing ready"
      ]
    },
    {
      title: "Fixes + Refresh",
      description: "Clean up an existing site: mobile issues, layout problems, speed, and polish.",
      features: [
        "Quick turnaround",
        "Prioritized improvements",
        "Performance boost",
        "Mobile optimization"
      ]
    }
  ];

  return (
    <main style={{ padding: "2rem" }}>
      <PageHero
        title="Services"
        subtitle="Clear options, transparent pricing, and a smooth process."
        primaryCtaLabel="Get a Quote"
        primaryCtaHref="/contact"
        image="/services/PacketConsultant_Transparent.png"
        imageAlt="Packet has many services for your website needs!"
        imageSize="600px"
      />

      <div style={{ maxWidth: "1200px", margin: "3rem auto", textAlign: "center" }}>
        <h1 style={{ marginBottom: "1rem" }}>What I Offer</h1>
        <p style={{ 
          fontSize: "1.25rem", 
          color: "#c6c6c6ff", 
          maxWidth: "800px", 
          margin: "0 auto 3rem",
          lineHeight: "1.6"
        }}>
          No templates. Just easy-to-maintain, fully custom websites tailored to your needs.
        </p>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* PDF Download Section */}
        <div className="services-cta">
          <h2 style={{ marginBottom: "1rem" }}>Want the Full Breakdown?</h2>
          <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem", opacity: "0.9" }}>
            Download my comprehensive services guide with detailed pricing and timelines.
          </p>
          <Link 
            href="/services/MaroonRaccoon-Web-Services-Guide.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cta-button"
          >
            Download Services PDF
          </Link>
        </div>
      </div>
    </main>
  );
}
