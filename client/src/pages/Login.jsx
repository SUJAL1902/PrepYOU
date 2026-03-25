import React from "react";
import Navbar from "../components/Navbar";

const Login = () => {
  return (
    <div style={styles.container}>
    <h2 style={styles.h2}>PrepYOU</h2>
    <p>Welcome Back</p>

      <div style={styles.card}>
        <h2 style={styles.title}>Login</h2>
       <label htmlFor="em" style={styles.label}>Email</label>
        <input
        id="em"
        type="email"
        placeholder="Enter your email"
        style={styles.input}
        />

        <label htmlFor="pass" style={styles.label}>Password</label>
        <input
        id="pass"
        type="password"
        placeholder="Enter your password"
        style={styles.input}
        />

        <button style={styles.button}>Login</button>

        <p style={styles.text}>
          Don’t have an account? <span style={styles.link}>Sign Up</span>
        </p>
      </div>
    </div>
  );
};

const styles = {
    h2:{
        color:"#4f46e5",
        textAlign: "center",
        marginTop:"40px",
    },
    p:{
        color:"#969696",
        textAlign: "center",
    },
  container: {
    minHeight: "100vh",
    backgroundColor: "#F2F2F2",
  },

  card: {
    maxWidth: "400px",
    margin: "80px auto",
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
  },

  title: {
    marginBottom: "20px",
  },

  label: {
  display: "block",
  textAlign: "left",
  marginBottom: "5px",
  color: "#000",
  fontWeight: "500",
},

input: {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  border: "1px solid #ccc",
  borderRadius: "6px",
  backgroundColor: "#F2F2F2", 
  color: "#000",              
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