import { useState } from "react";
import "./AssessmentForm.css";

function AssessmentForm() {
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    sleepQuality: "",
    smallSounds: "",
    wholePicture: "",
    socialGroup: "",
    activities: "",
    conversation: "",
    storyFeelings: "",
    newFriends: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="form-page">
      <div className="form-card">
        <h1>Therapy Recommendation System for Autism</h1>
        <p className="form-desc">
          This form collects details of children facing autism-related issues in
          daily life. The data helps train the ML model and provide therapy
          recommendations for early-stage autism.
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
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          <div className="form-group">
            <label>Sleep Quality *</label>
            <select name="sleepQuality" onChange={handleChange} required>
              <option value="">Select</option>
              <option>Good</option>
              <option>Moderate</option>
              <option>Poor</option>
            </select>
          </div>

          <div className="form-group">
            <label>She/he often notices small sounds when others do not *</label>
            <select name="smallSounds" onChange={handleChange} required>
              <option value="">Select</option>
              <option>Often</option>
              <option>Sometimes</option>
              <option>Never</option>
            </select>
          </div>

          <div className="form-group">
            <label>
              She/he usually concentrates more on the whole picture rather than
              small details *
            </label>
            <select name="wholePicture" onChange={handleChange} required>
              <option value="">Select</option>
              <option>Often</option>
              <option>Sometimes</option>
              <option>Never</option>
            </select>
          </div>

          <div className="form-group">
            <label>
              In a social group, she/he can easily keep track of several
              people's conversations *
            </label>
            <select name="socialGroup" onChange={handleChange} required>
              <option value="">Select</option>
              <option>Often</option>
              <option>Sometimes</option>
              <option>Never</option>
            </select>
          </div>

          <div className="form-group">
            <label>
              She/he finds it easy to go back and forth between different
              activities *
            </label>
            <select name="activities" onChange={handleChange} required>
              <option value="">Select</option>
              <option>Often</option>
              <option>Sometimes</option>
              <option>Never</option>
            </select>
          </div>

          <div className="form-group">
            <label>
              She/he doesn’t know how to keep a conversation going with peers *
            </label>
            <select name="conversation" onChange={handleChange} required>
              <option value="">Select</option>
              <option>Often</option>
              <option>Sometimes</option>
              <option>Never</option>
            </select>
          </div>

          <div className="form-group">
            <label>
              When read a story, she/he finds it difficult to work out the
              character’s feelings *
            </label>
            <select name="storyFeelings" onChange={handleChange} required>
              <option value="">Select</option>
              <option>Often</option>
              <option>Sometimes</option>
              <option>Never</option>
            </select>
          </div>

          <div className="form-group">
            <label>She/he finds it hard to make new friends *</label>
            <select name="newFriends" onChange={handleChange} required>
              <option value="">Select</option>
              <option>Yes</option>
              <option>No</option>
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
