import React, { useState } from "react";




const style = {
  signupContainer: {
    maxWidth: "400px",
    margin: "40px auto",
    padding: "30px",
    backgroundColor: "rgba(38, 38, 105, 1)",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    fontFamily: "monospace",
    color: "#000000",
  },

  sectionContainer: {
    maxWidth: "500px",
    margin: "40px auto",
    backgroundColor: "rgb(125, 125, 175)",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
    color: "#0a0a0a",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "70vh", // ✅ Center vertically
  },

  heading: {
    marginTop: "30px",
    marginBottom: "10px",
    color: "#ffffff",
    textAlign: "center",
  },

  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
    color: "#ffffff",
  },

  input: {
    width: "100%", // ✅ Full width
    padding: "10px",
    marginBottom: "20px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "14px",
    boxSizing: "border-box",
  },

  button: {
    backgroundColor: "rgb(150, 150, 224)",
    color: "white",
    padding: "12px 20px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    display: "block",
    width: "100%",
  },
};

function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for signing up!, ${formData.fullName}`);

    // ✅ Clear form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      password: "",
    });
  };

  return (
    <div style={style.sectionContainer}>
      <form onSubmit={handleSubmit} style={style.signupContainer}>
        <h1 style={style.heading}>Gym Membership Form</h1>

        <label style={style.label}>Name:</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          style={style.input}
          required
        />

        <label style={style.label}>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={style.input}
          required
        />

        <label style={style.label}>Phone Number:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          style={style.input}
          required
        />

        <label style={style.label}>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          style={style.input}
          required
        />

        <button type="submit" style={style.button}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
