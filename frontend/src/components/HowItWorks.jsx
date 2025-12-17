export default function HowItWorks() {
    const steps = [
        {
            title: "Quick Call",
            text: "We talk through your goals, your audience, and what you need the site to do."
        },
        {
            title: "Quote & Timeline",
            text: "You get a clear package/price and a realistic timeline- no surprises."
        },
        {
            title: "Design & Feedback",
            text: "I build the first version fast, then we refine it with your feedback."
        },
        {
            title: "Launch & Handoff",
            text: "I deploy your new website, ensure it works on mobile, and show you what's next."
        }
    ];

    return (
        <div style={{maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
            <h1>How It Works</h1>
            <p style={{color: "#8b0000ff", marginBottom: "2rem" }}>
                A simple process that keeps things clear, fast, and stress-free!
            </p>

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
                            <div style={{ color: "#444", lineHeight: "1.5" }}>{steps.text}</div>
                    
                        </div>
                    ))}
                </div>
            </div>
        );
    }