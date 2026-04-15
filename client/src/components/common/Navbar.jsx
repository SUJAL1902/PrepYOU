
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav style={styles.nav}>
      <h2 style={styles.h2}>PrepYOU</h2>

      <div style={styles.links}>
        <span onClick={() => navigate("/dashboard")} style={styles.link}>Dashboard</span>
        <span onClick={() => navigate("/focus")} style={styles.link}>Focus</span>
        <span onClick={() => navigate("/skills")} style={styles.link}>Skills</span>
        <span onClick={() => navigate("/progress")} style={styles.link}>Progress</span>
        <span onClick={() => navigate("/leaderboard")} style={styles.link}>Leaderboard</span>
        <span onClick={() => navigate("/profile")} style={styles.link}>Profile</span>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    position: "fixed",  
    top: 0,
    left: 0,
    width: "100%",
    height: "70px",
    background: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 30px",
    borderBottom: "1px solid #ddd",
    zIndex: 1000,
  },

  h2: {
    color: "#4f46e5",
  },

  links: {
    display: "flex",
    gap: "20px",
  },

  link: {
    cursor: "pointer",
    color: "#555",
    fontWeight: "500",
  },
};

export default Navbar;