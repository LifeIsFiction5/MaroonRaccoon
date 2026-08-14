import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main style={{ padding: "5rem 2rem", maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
      <Image
        src="/PacketTyping.png"
        alt="Packet the raccoon searching at his laptop"
        width={380}
        height={253}
        priority
        style={{ maxWidth: "100%", height: "auto", margin: "0 auto 2rem", display: "block" }}
      />

      <span className="eyebrow">Error 404</span>
      <h1>
        This page got <span className="accent">raided.</span>
      </h1>
      <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", marginBottom: "2.25rem" }}>
        Packet rummaged through every bin on the server and came up empty —
        the page you&apos;re looking for moved or never existed.
      </p>

      <div className="button-row" style={{ justifyContent: "center" }}>
        <Link href="/" className="cta-button">
          Back to home
        </Link>
        <Link href="/contact" className="btn-ghost">
          Report a broken link
        </Link>
      </div>
    </main>
  );
}
