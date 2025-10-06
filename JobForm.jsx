import React, { useState } from "react";

const styles = {
  mainContainer: {
    maxWidth: "700px",
    margin: "40px auto",
    padding: "30px",
    backgroundColor: "rgb(204, 204, 224)",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    fontFamily: "monospace",
    color: "#000000"
  },
  sectionContainer: {
    maxWidth: "700px",
    margin: "40px auto",
    padding: "30px",
    backgroundColor: "rgb(125, 125, 175)",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
    color: "#0a0a0a"
  },
  heading: {
    marginTop: "30px",
    marginBottom: "10px",
    color: "#000000"
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
    color: "#000000"
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "20px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "14px",
    boxSizing: "border-box"
  },
  button: {
    backgroundColor: "rgb(150, 150, 224)",
    color: "white",
    padding: "12px 20px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px"
  },
  dropContainer: {
    height: "100px",
    border: "5px dashed rgb(150, 150, 224)",
    paddingTop: "20px",
    margin: "20px",
    borderRadius: "10px",
    textAlign: "center",
    cursor: "pointer",
    fontSize: "16px"
  }
};

function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    email: "",
    phone: "",
    jobTitle: "",
    employmentType: "",
    location: "",
    industry: "",
    salaryExpectations: "",
    date: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = true;
    if (!formData.email.includes("@")) newErrors.email = true;
    if (!formData.phone.trim()) newErrors.phone = true;
    if (!formData.address.trim()) newErrors.address = true;
    if (!formData.jobTitle.trim()) newErrors.jobTitle = true;
    if (!formData.employmentType.trim()) newErrors.employmentType = true;
    if (!formData.location.trim()) newErrors.location = true;
    if (!formData.industry.trim()) newErrors.industry = true;
    if (!formData.salaryExpectations.trim()) newErrors.salaryExpectations = true;
    if (!formData.date) newErrors.date = true;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      alert("Please fix the highlighted fields before submitting.");
      return;
    }
    alert(`Job Application submitted successfully for ${formData.fullName}`);
  };

  return (
    <div style={styles.mainContainer}>
      <h1>JOB APPLICATION</h1>
      <form onSubmit={handleSubmit}>
        <h2 style={styles.heading}>1. Personal Information</h2>
        <div style={styles.sectionContainer}>
          <label style={styles.label}>Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            style={{
              ...styles.input,
              borderColor: errors.fullName ? "purple" : "#ccc"
            }}
          />

          <label style={styles.label}>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            style={{
              ...styles.input,
              borderColor: errors.address ? "purple" : "#ccc"
            }}
          />

          <label style={styles.label}>Phone Number:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            style={{
              ...styles.input,
              borderColor: errors.phone ? "purple" : "#ccc"
            }}
          />

          <label style={styles.label}>Email Address:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{
              ...styles.input,
              borderColor: errors.email ? "purple" : "#ccc"
            }}
          />
        </div>

        <h2 style={styles.heading}>2. Job Preferences</h2>
        <div style={styles.sectionContainer}>
          <label style={styles.label}>Job Title:</label>
          <input
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            style={{
              ...styles.input,
              borderColor: errors.jobTitle ? "purple" : "#ccc"
            }}
          />

          <label style={styles.label}>Employment Type:</label>
          <input
            type="text"
            name="employmentType"
            value={formData.employmentType}
            onChange={handleChange}
            style={{
              ...styles.input,
              borderColor: errors.employmentType ? "purple" : "#ccc"
            }}
          />

          <label style={styles.label}>Location Preference:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            style={{
              ...styles.input,
              borderColor: errors.location ? "purple" : "#ccc"
            }}
          />

          <label style={styles.label}>Industry:</label>
          <input
            type="text"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            style={{
              ...styles.input,
              borderColor: errors.industry ? "purple" : "#ccc"
            }}
          />

          <label style={styles.label}>Salary Expectations:</label>
          <input
            type="text"
            name="salaryExpectations"
            value={formData.salaryExpectations}
            onChange={handleChange}
            style={{
              ...styles.input,
              borderColor: errors.salaryExpectations ? "purple" : "#ccc"
            }}
          />

          <label style={styles.label}>Start Date Availability:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            style={{
              ...styles.input,
              borderColor: errors.date ? "purple" : "#ccc"
            }}
          />
        </div>

        <h2 style={styles.heading}>3. Cover Letter</h2>
        <div style={styles.sectionContainer}>
          <div style={styles.dropContainer}>
            <h1>Drop a file</h1>
          </div>
          <input type="file" name="myFile" style={styles.input} />
        </div>

        <button type="submit" style={styles.button}>
          Submit Application
        </button>
      </form>
    </div>
  );
}

export default App;
