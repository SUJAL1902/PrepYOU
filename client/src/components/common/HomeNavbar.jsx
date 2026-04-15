import React from "react";
import { useNavigate } from "react-router-dom";

const HomeNavbar = () => {
  const navigate = useNavigate();

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>PrepYOU</h2>

      <div>
        <button
          style={styles.login}
          onClick={() => navigate("/login")}
        >
          Login
        </button>

        <button
          style={styles.signup}
          onClick={() => navigate("/login")}
        >
          Get Started
        </button>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 30px",
    background: "#fff",
    borderBottom: "1px solid #ddd",
  },

  logo: {
    color: "#4f46e5",
  },

  login: {
    marginRight: "10px",
    border: "none",
    background: "none",
    cursor: "pointer",
  },

  signup: {
    background: "#4f46e5",
    color: "#fff",
    border: "none",
    padding: "8px 15px",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default HomeNavbar;