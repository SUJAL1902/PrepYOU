
import React, { useState, useEffect } from "react";

const LevelCard = () => {
  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [progressWidth, setProgressWidth] = useState("0%"); 

  useEffect(() => {
    
    setTimeout(() => {
      setProgressWidth("70%");
    }, 300);
  }, []);

  const handleClick = () => {
    setClicked(true);

   
    setProgressWidth("0%");
    setTimeout(() => {
      setProgressWidth("70%");
    }, 100);

    setTimeout(() => setClicked(false), 150);
  };

  return (
    <div
      style={{
        ...styles.card,
        ...(hover ? styles.cardHover : {}),
        ...(clicked ? styles.clicked : {}),
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleClick}
    >
      <h3>Level 12</h3>
      <p>8,450 / 10,000 XP</p>

      <div style={styles.progressBar}>
        <div
          style={{
            ...styles.progress,
            width: progressWidth, 
          }}
        ></div>
      </div>
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

  cardHover: {
    transform: "translateY(-5px)",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
  },

  clicked: {
    transform: "scale(0.96)",
    backgroundColor: "#eef2ff",
  },

  progressBar: {
    height: "8px",
    background: "#ddd",
    borderRadius: "10px",
    marginTop: "10px",
    overflow: "hidden",
  },

  progress: {
    height: "100%",
    background: "#4f46e5",
    borderRadius: "10px",
    transition: "width 1s ease", 
  },
};

export default LevelCard;