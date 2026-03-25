import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav style={styles.nav}>
      <h2 style={styles.h2}>PrepYOU</h2>

      <div>
        <button
          style={styles.login}
          onClick={() => navigate("/login")}
        >
          Login
        </button>

        <button style={styles.signup}>
          Get Started
        </button>
      </div>
    </nav>
  );
};

const styles = {
  h2:{
    color:"#4f46e5",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 30px",
    borderBottom: "1px solid #ddd",
    width:"100%",
    background:"#fff"
  },
  login: {
    marginRight: "10px",
    background: "none",
    border: "none",
    cursor: "pointer",
  },
  signup: {
    backgroundColor: "#4f46e5",
    color: "#fff",
    border: "none",
    padding: "8px 15px",
    borderRadius: "6px",
  },
};

export default Navbar;