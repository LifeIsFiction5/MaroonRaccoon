import Link from "next/link";
import Image from "next/image";

export function Hero() {
    return(
        <section style={{ padding:"3rem 2rem" }}>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1.2fr 0.8fr",
                    gap: "2rem",
                    alignItems: "center",
                }}
            >
              <div> 
                <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
                    Modern websites for small businesses.
                    </h1>
                    <p style={{ marginTop: "1rem", fontSize: "1.1rem", lineHeight: "1.6" }}>
                        Fast, clean, and easy to maintain.  Built with Next.js and deployed on Vercel.
                    </p>
                    <div style={{ marginTop: "2rem", display: "flex", gap: ".75rem" }}>
                        <Link href="/projects">See Projects</Link>
                        <Link href="/contact">Contact Me</Link>
                    </div>
                </div>

                <div style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid #333"}}>
                <Image
                    src="/MaroonRacdoonLogo.png"
                    alt="Maroon Raccoon Logo"
                    width={800}
                    height={600}
                    style={{ width: "100%", height: "auto"}}
                    priority
                />
                </div>
            </div>
        </section>
    );
}