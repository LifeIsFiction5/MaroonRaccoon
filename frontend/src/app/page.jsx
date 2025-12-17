// "use client";
// import Hero from "../components/Hero";
// import RevealMotion from "../components/RevealMotion";


// export default function HomePage() {
//   return (
//     <RevealMotion>
//     <main style={{ padding: "2rem" }}>
//       <Hero />
//     </main>
//     </RevealMotion>
//   );
// }


"use client";
import Hero from "../components/Hero";
import { motion } from "framer-motion";


export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
    >
    <main style={{ padding: "2rem" }}>
      <Hero />
    </main>
    </motion.div>
  );
}