import Image from "next/image";
import Link from "next/link";


export default function HowItWorks() {
    const steps = [
        {
            title: "Quick Call",
            text: "We talk through your goals, your audience, and what you need the site to do.",
            img: "/how-it-works/step1.png",
            alt: "Packet planning a project"
        },
        {
            title: "Quote & Timeline",
            text: "You get a clear package/price and a realistic timeline- no surprises.",
            img: "/how-it-works/step2.png",
            alt: "Packet sending a quote"
        },
        {
            title: "Design & Feedback",
            text: "I build the first version fast, then we refine it with your feedback.",
            img: "/how-it-works/step3.png",
            alt: "Packet reviewing design"
        },
        {
            title: "Launch & Handoff",
            text: "I deploy your new website, ensure it works on mobile, and show you what's next.",
            img: "/how-it-works/step4.png",
            alt: "Packet launching the project"
        }
    ];

    return (
        <div style={{maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
            <h1>How It Works</h1>
            <h2 style={{color: "#8b0000ff", marginBottom: "2rem" }}>
                Clear steps.  No confusion.  Just great websites.
            </h2>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: "1rem",
                    textAlign: "left"
                }}
            >
                {steps.map((steps, index) => (
                    <div
                        key={steps.title}
                        style={{
                            border: "1px solid #ddd",
                            borderRadius: "12px",
                            padding: "1.25rem",
                            background: "white"
                        }}
                    >
                        <div style={{ fontWeight: 700, marginBottom: "0.5rem" }}>
                            {index + 1}. {steps.title}
                        </div>

                        <Image
                            src={steps.img}
                            alt={steps.alt}
                            width={220}
                            height={220}
                            className="hitw-img"
                            priority={index=== 0}
                            />


                            <div style={{ color: "#444", lineHeight: "1.5" }}>{steps.text}</div>
                        </div>
                    ))}
                </div>
                <div style={{ marginTop: "1.5rem"}}>
                    <Link href="/contact" style={{ textDecoration: "underline" }}>
                    Ready to get started? Contact me →
                    </Link>
                </div>
            </div>
        );
    }