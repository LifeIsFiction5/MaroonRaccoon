import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section style={{ padding: "4rem 2rem" }}>
      <div className="hero-container">
        <div className="hero-text">
          <span className="eyebrow">Web design &amp; development</span>
          <h1>
            Hand-built websites with <span className="accent">actual bite.</span>
          </h1>
          <p className="lede">
            I design and build fast, modern sites for small businesses and
            creatives — no templates, no runaround, no surprise costs.
          </p>
          <div className="button-row">
            <Link href="/contact" className="cta-button">
              Start a project
            </Link>
            <Link href="/projects" className="btn-ghost">
              See my work →
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <Image
            src="/MaroonRaccoonLogo.png"
            alt="Maroon Raccoon logo"
            width={480}
            height={480}
            loading="eager"
            priority
            className="hero-logo"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
}
