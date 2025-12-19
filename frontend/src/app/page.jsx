"use client";
import HomeHero from "../components/HomeHero";
import AboutSection from "../components/AboutSection";
import RevealMotion from "../components/RevealMotion";
import HowItWorks from "../components/HowItWorks";


export default function HomePage() {
  return (
    <main style={{ padding: "2rem" }}>
      <section>
      <HomeHero />
      </section>
      <RevealMotion>
      <section style={{ padding: "2rem" }} id="about">
        <AboutSection />
      </section>
      </RevealMotion>
      <RevealMotion>
      <section style={{ padding: "2rem" }} id="how-it-works">
        <HowItWorks />
      </section>
      </RevealMotion>
    </main>
  );
}

