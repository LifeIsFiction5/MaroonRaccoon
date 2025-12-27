import Link from "next/link";
import Image from "next/image";

export default function PageHero({
  title,
  subtitle,
  primaryCtaLabel = "Contact",
  primaryCtaHref = "/contact",
  image = null,
  imageAlt = "",
  imageSize = "400px"  // New prop to control image size
}) {
  return (
    <section style={{ padding: "3rem 2rem" }}>
      <div className="page-hero-container">
        {/* Left side: Text content */}
        <div className="page-hero-text">
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "0.75rem" }}>
            {title}
          </h1>

          {subtitle && (
            <p style={{ fontSize: "1.15rem", marginBottom: "1.5rem", color: "#c6c6c6ff" }}>
              {subtitle}
            </p>
          )}

          <Link href={primaryCtaHref} className="cta-button">
            {primaryCtaLabel}
          </Link>
        </div>

        {/* Right side: Image (only if provided) */}
        {image && (
          <div className="page-hero-image" style={{ maxWidth: imageSize }}>
            <Image src={image} alt={imageAlt} width={800} height={800} />
          </div>
        )}
      </div>
    </section>
  );
}
