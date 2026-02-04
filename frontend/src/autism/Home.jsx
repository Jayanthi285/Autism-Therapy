import "./Home.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Home() {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      {/* 3 DOT MENU */}
      <div className="menu-container">
        <button className="menu-btn" onClick={() => setOpenMenu(!openMenu)}>
          ⋮
        </button>

        {openMenu && (
          <div className="menu-dropdown">
            <p onClick={() => navigate("/contact")}>Contact</p>
            <p onClick={() => navigate("/therapy")}>Therapy Recommendations</p>
          </div>
        )}
      </div>

      <div className="home-container">
        
        <div className="background">
          <span className="shape s1"></span>
          <span className="shape s2"></span>
          <span className="shape s3"></span>
        </div>

        <h1>Therapy Recommendations</h1>
        <p className="subtitle">
          Explore commonly recommended therapies that support children with
          autism.
        </p>

        <div className="therapy-grid">
          <div className="therapy-card">
            <h3>🧠 Applied Behavior Analysis (ABA)</h3>
            <p>
              ABA therapy focuses on improving communication, social skills,
              learning abilities, and positive behaviors using structured
              techniques and reinforcement.
            </p>
          </div>

          <div className="therapy-card">
            <h3>🗣 Speech Therapy</h3>
            <p>
              Speech therapy helps children enhance speech clarity, language
              comprehension, and communication skills for everyday interactions.
            </p>
          </div>

          <div className="therapy-card">
            <h3>🤸 Occupational Therapy</h3>
            <p>
              Occupational therapy supports motor development, sensory
              integration, and daily living skills to improve independence.
            </p>
          </div>

          <div className="therapy-card">
            <h3>🎵 Music Therapy</h3>
            <p>
              Music therapy uses rhythm and sound to improve emotional expression,
              attention span, and social engagement in children.
            </p>
          </div>

          <div className="therapy-card">
            <h3>🎨 Art Therapy</h3>
            <p>
              Art therapy encourages creativity and emotional expression, helping
              children communicate feelings through drawing and visual activities.
            </p>
          </div>

          <div className="therapy-card">
            <h3>📚 Social Skills Training</h3>
            <p>
              Social skills training helps children develop meaningful social
              interactions, understand emotions, and build friendships in various
              settings.
            </p>
          </div>
        </div>

        <div className="form-section">
          <button className="form-btn" onClick={() => navigate("/assessment")}>
            Fill Child Assessment Form
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
