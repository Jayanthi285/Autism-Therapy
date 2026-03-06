import { useLocation, useNavigate } from "react-router-dom";
import "./AssessmentForm.css";

function Result() {

  const location = useLocation();
  const navigate = useNavigate();

  const { risk_probability, severity, therapy_recommendation } = location.state || {};

  if (!risk_probability) {
    return (
      <div className="form-page">
        <div className="form-card">
          <h2>No Result Found</h2>
          <button onClick={() => navigate("/assessment")}>
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="form-page">
      <div className="form-card">

        <h1>Assessment Result</h1>

        <h2>Autism Risk: {risk_probability}%</h2>
        <h3>Severity Level: {severity}</h3>

        <br />

        <h2>AI Therapy Recommendation</h2>

        <div
          style={{
            textAlign: "left",
            background: "#f5f5f5",
            padding: "15px",
            borderRadius: "8px",
            whiteSpace: "pre-wrap"
          }}
        >
          {therapy_recommendation}
        </div>

        <br />

        <button onClick={() => navigate("/assessment")}>
          Take Assessment Again
        </button>

      </div>
    </div>
  );
}

export default Result;