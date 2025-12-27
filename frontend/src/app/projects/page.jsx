import PageHero from "@/components/PageHero";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Jeff Conners Art",
      description: "Jeff Conners Art is a personal portfolio showcasing the artistic works of Jeff Conners. The website aims to provide an immersive experience for art enthusiasts and potential clients.",
      status: "In Development",
      timeline: "Q1 2026"
    },
    {
      title: "Tetrad",
      description: "Tetrad is a business devoted to quality constrution and fiber optic solutions. Their website will reflect their commitment to excellence and innovation in the construction industry.",
      status: "Planning",
      timeline: "Q1 2026"
    },
    {
      title: "Swesso, the Art Discovery app",
      description: "Swesso is an innovative art discovery app designed to connect users with new and exciting artworks. The app aims to enhance the art exploration experience through personalized recommendations and interactive features.",
      status: "Coming Soon",
      timeline: "TBA"
    }
  ];

  return (
    <main style={{ padding: "2rem" }}>
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <PageHero
          title="Projects"
          subtitle="Bringing creative visions to life through thoughtful design and development."
          image="/PacketTyping.png"
          imageAlt="Packet typing on a laptop"
          imageSize="600px"
        />
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-status-badge">{project.status}</div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-timeline">Expected: {project.timeline}</div>
          </div>
        ))}
      </div>

      <div className="cta-section">
        <h2 style={{ marginBottom: "1rem" }}>Ready to Start Your Project?</h2>
        <p style={{ fontSize: "1.3rem", fontWeight: "400", marginBottom: "1.5rem" }}>
          You could be next on this list!
        </p>
        <a href="/contact" className="cta-button">
          Let's Work Together
        </a>
      </div>
    </main>
  );
}
