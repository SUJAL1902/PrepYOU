
import React, { useState, useEffect } from "react";

const TotalFocusCard = () => {
  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [hours, setHours] = useState(0);

 
  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      count += 5;
      if (count >= 156.5) {
        count = 156.5;
        clearInterval(interval);
      }
      setHours(count.toFixed(1));
    }, 20);
  }, []);

  const handleClick = () => {
    setClicked(true);

    let newValue = Math.floor(Math.random() * 200) + 50;

    let count = 0;
    const interval = setInterval(() => {
      count += 5;
      if (count >= newValue) {
        count = newValue;
        clearInterval(interval);
      }
      setHours(count.toFixed(1));
    }, 20);

    setTimeout(() => setClicked(false), 150);
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
      <h3>Total Focus Hours</h3>

      {/* animated number */}
      <h2>{hours}h</h2>

      <p>Across all skills and sessions</p>

      <p style={styles.small}>Click to refresh</p>
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

  small: {
    fontSize: "12px",
    color: "gray",
    marginTop: "10px",
  },
};

export default TotalFocusCard;