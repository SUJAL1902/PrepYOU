import React from "react";

const SkillCard = ({ title, description }) => {
  return (
    <div style={styles.card}>
      <div style={styles.icon}>🔵</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const styles = {
  card: {
    width: "250px",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    textAlign: "center",
    backgroundColor:"#fff",
  },
  icon: {
    fontSize: "24px",
    marginBottom: "10px",
  },
};

export default SkillCard;