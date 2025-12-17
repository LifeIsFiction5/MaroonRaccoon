import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Maroon Raccoon",
  description: "Web development services and portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: "1rem 2rem", borderBottom: "1px solid #333" }}>
          <nav style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <Link href="/" style={{ display: "flex", alignItems: "center"}}>
              <Image
                src="/MaroonRaccoonLogo.png"
                alt="Maroon Raccoon Logo"
                width={40}
                height={40}
                className="navbar-logo"
                style={{ cursor: "pointer",
                  height: "auto",
                  width: "auto"
                 }}
              />
            </Link>
            <Link href="/#about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
