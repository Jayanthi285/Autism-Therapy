import { useNavigate } from "react-router-dom";
import "../index.css";

function LogoPage() {
  const navigate = useNavigate();
 

  return (
    <div className="logo-container">
      {/* Background animation */}
      <div className="background">
        <span className="shape s1"></span>
        <span className="shape s2"></span>
        <span className="shape s3"></span>
        <span className="shape s4"></span>
      </div>

      {/* Main content */}
      <div className="logo-card">
        <img src="/autism-logo.png" alt="Autism Logo" className="autism-logo" />
        <h1>Therapy Recommendation System</h1>
        <p>Supporting children with autism</p>

        <div className="button-group">
          <button className="login-btn" onClick={() => navigate("/login")}>
            Login
          </button>
          <button className="signup-btn" onClick={() => navigate("/signup")}>
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogoPage;
