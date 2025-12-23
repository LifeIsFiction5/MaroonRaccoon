import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section style={{ padding: "4rem 2rem" }}>
      <div className="hero-container">
        <div className="hero-text">
          <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1rem" }}>
            Welcome to Maroon Raccoon
          </h1>
          <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
            Professional web development services and creative solutions for your business needs.
          </p>
          <Link href="/contact" passHref className="cta-button">
            Get Started
          </Link>
        </div>
        <div className="hero-image">
          <Image
            src="/MaroonRaccoonLogo.png"
            alt="Maroon Raccoon Logo"
            width={600}
            height={600}
            loading="eager"
            priority
            className="hero-logo"
            style={{ maxWidth: "100%", height: "auto", width: "auto" }}
          />
        </div>
      </div>
    </section>
  );
}