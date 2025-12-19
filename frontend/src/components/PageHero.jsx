import Link from "next/link";

export default function PageHero({
  title,
  subtitle,
  primaryCtaLabel = "Contact",
  primaryCtaHref = "/contact",
}) {
  return (
    <section style={{ padding: "3rem 2rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "0.75rem" }}>
          {title}
        </h1>

        {subtitle && (
          <p style={{ fontSize: "1.15rem", marginBottom: "1.5rem", color: "#666" }}>
            {subtitle}
          </p>
        )}

        <Link href={primaryCtaHref}>
          <button
            style={{
              background: "#530000ff",
              color: "white",
              padding: "0.9rem 1.4rem",
              border: "none",
              borderRadius: "8px",
              fontSize: "1.05rem",
              cursor: "pointer",
            }}
          >
            {primaryCtaLabel}
          </button>
        </Link>
      </div>
    </section>
  );
}
