
import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate(); 

  return (
    <div style={styles.container}>
      
      <h2 style={styles.h2}>PrepYOU</h2>
      <p>Welcome Back</p>

      <div style={styles.card}>
        <h2 style={styles.title}>Login</h2>

        <label style={styles.label}>Email</label>
        <input type="email" placeholder="Enter your email" style={styles.input} />

        <label style={styles.label}>Password</label>
        <input type="password" placeholder="Enter your password" style={styles.input} />

        {/* ✅ NAVIGATION ADDED */}
        <button 
          style={styles.button}
          onClick={() => navigate("/dashboard")}
        >
          Login
        </button>

        <p style={styles.text}>
          Don’t have an account? <span style={styles.link}>Sign Up</span>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#F2F2F2",
  },

  h2: {
    color: "#4f46e5",
    textAlign: "center",
    marginTop: "40px",
  },

  card: {
    maxWidth: "400px",
    margin: "80px auto",
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
  },

  title: {
    marginBottom: "20px",
  },

  label: {
    display: "block",
    textAlign: "left",
    marginBottom: "5px",
  },

  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    backgroundColor: "#F2F2F2",
  },

  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#4f46e5",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },

  text: {
    marginTop: "15px",
    fontSize: "14px",
  },

  link: {
    color: "#4f46e5",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default Login;