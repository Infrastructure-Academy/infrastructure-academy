import { useAuth } from "@/_core/hooks/useAuth";

export default function Home() {
  // The userAuth hooks provides authentication state
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0a1628", color: "#ffffff" }}>
      {/* Header */}
      <header style={{ backgroundColor: "#0f2a52", padding: "30px 40px", borderBottom: "3px solid #ffd700" }}>
        <h1 style={{ fontSize: "2.5rem", color: "#ffd700", fontFamily: "Georgia, serif", marginBottom: "10px", letterSpacing: "2px" }}>
          INFRASTRUCTURE ACADEMY
        </h1>
        <p style={{ fontSize: "1rem", color: "#b0b0b0" }}>An Infrastructure Odyssey: Book 1 - Calories to Consciousness</p>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 style={{ fontSize: "2.2rem", color: "#ffd700", fontFamily: "Georgia, serif", marginBottom: "20px", letterSpacing: "1px" }}>
            THE COMPLETE STRUCTURE
          </h2>
          <p style={{ fontSize: "1.1rem", marginBottom: "40px", color: "#e0e0e0", lineHeight: "1.8" }}>
            Infrastructure Academy is a digital archive preserving the complete intellectual assets of "An Infrastructure Odyssey" - a civilizational masterclass spanning 12,000 years of human infrastructure development. This website ensures that knowledge is preserved eternally, accessible to scholars, engineers, and learners worldwide.
          </p>
        </div>

        {/* Navigation Links */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px", marginBottom: "60px" }}>
          <div style={{ padding: "30px", border: "2px solid #ffd700", backgroundColor: "rgba(255, 215, 0, 0.05)", borderRadius: "8px" }}>
            <h3 style={{ fontSize: "1.8rem", color: "#ffd700", fontFamily: "Georgia, serif", marginBottom: "15px", textTransform: "uppercase", letterSpacing: "1px" }}>
              📋 EXEC PRÉCIS
            </h3>
            <p style={{ color: "#b0b0b0", marginBottom: "20px" }}>Cinematic Overview</p>
            <p style={{ fontSize: "0.95rem", color: "#e0e0e0", marginBottom: "20px", lineHeight: "1.8" }}>
              Complete overview of the infrastructure odyssey with relay navigation
            </p>
            <a href="/executive-precis.html" style={{ display: "inline-block", padding: "10px 20px", backgroundColor: "#ffd700", color: "#0a1628", textDecoration: "none", fontWeight: "bold", borderRadius: "4px", cursor: "pointer" }}>
              VIEW
            </a>
          </div>

          <div style={{ padding: "30px", border: "2px solid #ffd700", backgroundColor: "rgba(255, 215, 0, 0.05)", borderRadius: "8px" }}>
            <h3 style={{ fontSize: "1.8rem", color: "#ffd700", fontFamily: "Georgia, serif", marginBottom: "15px", textTransform: "uppercase", letterSpacing: "1px" }}>
              📖 BOOK 1
            </h3>
            <p style={{ color: "#b0b0b0", marginBottom: "20px" }}>Earthbound Foundations</p>
            <p style={{ fontSize: "0.95rem", color: "#e0e0e0", marginBottom: "20px", lineHeight: "1.8" }}>
              Complete with Perspective, Guide, and Supplements
            </p>
            <a href="/volumes/volume1/index.html" style={{ display: "inline-block", padding: "10px 20px", backgroundColor: "#ffd700", color: "#0a1628", textDecoration: "none", fontWeight: "bold", borderRadius: "4px", cursor: "pointer" }}>
              READ
            </a>
          </div>

          <div style={{ padding: "30px", border: "2px solid #ffd700", backgroundColor: "rgba(255, 215, 0, 0.05)", borderRadius: "8px" }}>
            <h3 style={{ fontSize: "1.8rem", color: "#ffd700", fontFamily: "Georgia, serif", marginBottom: "15px", textTransform: "uppercase", letterSpacing: "1px" }}>
              🌐 BOOK 2
            </h3>
            <p style={{ color: "#b0b0b0", marginBottom: "20px" }}>The Gray Arena</p>
            <p style={{ fontSize: "0.95rem", color: "#e0e0e0", marginBottom: "20px", lineHeight: "1.8" }}>
              Cybernetics, AI, and intelligent systems
            </p>
            <button style={{ padding: "10px 20px", backgroundColor: "#666", color: "#ccc", border: "none", borderRadius: "4px", cursor: "not-allowed", fontWeight: "bold" }} disabled>
              COMING SOON
            </button>
          </div>

          <div style={{ padding: "30px", border: "2px solid #ffd700", backgroundColor: "rgba(255, 215, 0, 0.05)", borderRadius: "8px" }}>
            <h3 style={{ fontSize: "1.8rem", color: "#ffd700", fontFamily: "Georgia, serif", marginBottom: "15px", textTransform: "uppercase", letterSpacing: "1px" }}>
              🚀 BOOK 3
            </h3>
            <p style={{ color: "#b0b0b0", marginBottom: "20px" }}>Cosmic Scale</p>
            <p style={{ fontSize: "0.95rem", color: "#e0e0e0", marginBottom: "20px", lineHeight: "1.8" }}>
              Planetary, solar, and galactic stewardship
            </p>
            <button style={{ padding: "10px 20px", backgroundColor: "#666", color: "#ccc", border: "none", borderRadius: "4px", cursor: "not-allowed", fontWeight: "bold" }} disabled>
              COMING SOON
            </button>
          </div>
        </div>

        {/* About Section */}
        <div style={{ padding: "30px", border: "2px solid #ffd700", backgroundColor: "rgba(255, 215, 0, 0.05)", borderRadius: "8px", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "1.8rem", color: "#ffd700", fontFamily: "Georgia, serif", marginBottom: "20px", textTransform: "uppercase", letterSpacing: "1px" }}>
            ABOUT THIS ARCHIVE
          </h2>
          <p style={{ fontSize: "1rem", color: "#e0e0e0", lineHeight: "1.9", marginBottom: "15px" }}>
            Infrastructure Academy is a digital archive preserving the complete intellectual assets of "An Infrastructure Odyssey" - a civilizational masterclass spanning 12,000 years of human infrastructure development. This website ensures that knowledge is preserved eternally, accessible to scholars, engineers, and learners worldwide.
          </p>
          <p style={{ fontSize: "1rem", color: "#e0e0e0", lineHeight: "1.9" }}>
            All content, visualizations, and frameworks are integrated here for easy navigation and discovery. This is the eternal record of mankind's rise from Calories to Consciousness, etched by the pen into digital eternity.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: "40px", borderTop: "2px solid #ffd700", color: "#b0b0b0", fontSize: "0.9rem", marginTop: "60px" }}>
        <p>© 2026 Infrastructure Academy. All rights reserved.</p>
      </footer>
    </div>
  );
}
