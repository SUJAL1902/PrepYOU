
import React, { useState } from "react";

const StartSessionCard = () => {
  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 150);

    alert("Session Started 🚀"); 
  };

  return (
    <div
      style={{
        ...styles.card,
        ...(hover ? styles.hover : {}),
        ...(clicked ? styles.clicked : {}),
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleClick}
    >
      <h3>Start Focus Session</h3>
      <p>Begin a new focus session</p>

      <button
        style={{
          ...styles.btn,
          ...(hover ? styles.btnHover : {}),
        }}
      >
        Start Session
      </button>
    </div>
  );
};

const styles = {
  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },

  hover: {
    transform: "translateY(-5px)",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
  },

  clicked: {
    transform: "scale(0.96)",
    backgroundColor: "#eef2ff",
  },

  btn: {
    marginTop: "10px",
    padding: "10px",
    background: "#4f46e5",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    width: "100%",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },

  btnHover: {
    background: "#4338ca",
  },
};

export default StartSessionCard;