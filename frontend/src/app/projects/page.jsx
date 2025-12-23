export default function ProjectsPage() {
  return (
    <main style={{ padding: "2rem" }}>
        <img
            className="packet-img"
            src="/PacketTyping.png"
            alt="Packet typing on a laptop"
            loading="lazy"
        />

        <div style={{ textAlign: "center" }}>
      <span style={{color:"#610000ff", textShadow: "0 0 0.5px #e9e9e9ff, 0 0 10px #d1d1d1ff"}}><h1>Projects</h1></span>
      <br></br>
      <h3>Coming Soon: Jeff Conners Art</h3>
      <br></br>
      <h3>Coming Soon: Tetrad</h3>
      <br></br>
      <h3>Coming Soon: Swesso, the Art Discovery app</h3>
      <br></br>
      <p>You could be next on this list!</p>
        </div>
    </main>
  );
}
