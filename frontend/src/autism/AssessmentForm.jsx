import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AssessmentForm.css";

function AssessmentForm() {
   const navigate = useNavigate();
  const [formData, setFormData] = useState({
    age: "",
    gender: "",

    eyeContact: "",
    respondName: "",
    playInterest: "",
    preferAlone: "",
    facialExpressionDifficulty: "",

    meaningfulSentences: "",
    speechDelay: "",
    understandInstructions: "",
    gesturesUse: "",

    repetitiveMovements: "",
    routineUpset: "",
    repeatWords: "",

    sensorySensitivity: "",
    objectFocus: "",
    distractedByMovement: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /*const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Assessment Submitted Successfully!");
  };*/


  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    const result = await response.json();

    if (result.error) {
      alert("Error: " + result.error);
    } else {
      navigate("/result", { state: result });
    }

  } catch (error) {
    alert("Server connection failed!");
  }
};

  const options = (
    <>
      <option value="">Select</option>
      <option value="Never">Never</option>
      <option value="Rarely">Rarely</option>
      <option value="Sometimes">Sometimes</option>
      <option value="Often">Often</option>
    </>
  );

  return (
    <div className="form-page">
      <div className="form-card">
        <h1>Early Autism Screening & Therapy Recommendation</h1>
        <p className="form-desc">
          This screening tool is for children aged 4–6 years.
          It is not a medical diagnosis but an early risk assessment system.
        </p>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Age *</label>
            <input type="number" name="age" onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Gender *</label>
            <select name="gender" onChange={handleChange} required>
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className="form-group">
            <label>Does the child make eye contact while talking? *</label>
            <select name="eyeContact" onChange={handleChange} required>
              {options}
            </select>
          </div>

          <div className="form-group">
            <label>Does the child respond when their name is called? *</label>
            <select name="respondName" onChange={handleChange} required>
              {options}
            </select>
          </div>

          <div className="form-group">
            <label>Does the child show interest in playing with other children? *</label>
            <select name="playInterest" onChange={handleChange} required>
              {options}
            </select>
          </div>

          <div className="form-group">
            <label>Does the child prefer to play alone? *</label>
            <select name="preferAlone" onChange={handleChange} required>
              {options}
            </select>
          </div>

          <div className="form-group">
            <label>Does the child have difficulty understanding facial expressions or emotions? *</label>
            <select name="facialExpressionDifficulty" onChange={handleChange} required>
              {options}
            </select>
          </div>

          <div className="form-group">
            <label>Does the child speak in meaningful sentences (3–5 words)? *</label>
            <select name="meaningfulSentences" onChange={handleChange} required>
              {options}
            </select>
          </div>

          <div className="form-group">
            <label>Does the child show speech delay compared to same-age children? *</label>
            <select name="speechDelay" onChange={handleChange} required>
              {options}
            </select>
          </div>

          <div className="form-group">
            <label>Does the child understand simple instructions? *</label>
            <select name="understandInstructions" onChange={handleChange} required>
              {options}
            </select>
          </div>

          <div className="form-group">
            <label>Does the child use gestures like pointing, waving, or nodding? *</label>
            <select name="gesturesUse" onChange={handleChange} required>
              {options}
            </select>
          </div>

          <div className="form-group">
            <label>Does the child show repetitive movements (hand flapping, rocking, spinning)? *</label>
            <select name="repetitiveMovements" onChange={handleChange} required>
              {options}
            </select>
          </div>

          <div className="form-group">
            <label>Does the child become upset when routines change? *</label>
            <select name="routineUpset" onChange={handleChange} required>
              {options}
            </select>
          </div>

          <div className="form-group">
            <label>Does the child repeat the same words or phrases frequently? *</label>
            <select name="repeatWords" onChange={handleChange} required>
              {options}
            </select>
          </div>

          <div className="form-group">
            <label>Is the child unusually sensitive to sounds, lights, or touch? *</label>
            <select name="sensorySensitivity" onChange={handleChange} required>
              {options}
            </select>
          </div>

          <div className="form-group">
            <label>Does the child focus more on objects than on people? *</label>
            <select name="objectFocus" onChange={handleChange} required>
              {options}
            </select>
          </div>

          <div className="form-group">
            <label>Does the child get easily distracted by moving objects? *</label>
            <select name="distractedByMovement" onChange={handleChange} required>
              {options}
            </select>
          </div>

          <button type="submit" className="submit-btn">
            Submit Assessment
          </button>

        </form>
      </div>
    </div>
  );
}

export default AssessmentForm;