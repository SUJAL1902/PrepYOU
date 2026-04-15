
import React, { useState } from "react";

const ActivityCard = () => {
  const [hoverCard, setHoverCard] = useState(false);
  const [clickedCard, setClickedCard] = useState(false);
  const [activeRow, setActiveRow] = useState(null);

  const data = [
    { name: "Data Structures", time: "2h 15m" },
    { name: "Algorithms", time: "1h 40m" },
    { name: "System Design", time: "3h 10m" },
  ];

  const handleCardClick = () => {
    setClickedCard(true);
    setTimeout(() => setClickedCard(false), 150);
  };

  return (
    <div
      style={{
        ...styles.card,
        ...(hoverCard ? styles.hover : {}),
        ...(clickedCard ? styles.clicked : {}),
      }}
      onMouseEnter={() => setHoverCard(true)}
      onMouseLeave={() => setHoverCard(false)}
      onClick={handleCardClick}
    >
      <h3>Recent Activity</h3>

      {data.map((item, index) => (
        <div
          key={index}
          style={{
            ...styles.row,
            ...(activeRow === index ? styles.rowHover : {}),
          }}
          onMouseEnter={() => setActiveRow(index)}
          onMouseLeave={() => setActiveRow(null)}
        >
          <span>{item.name}</span>
          <span>{item.time}</span>
        </div>
      ))}
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
    transform: "scale(0.97)",
    backgroundColor: "#eef2ff",
  },

  row: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
    padding: "10px",
    background: "#F2F2F2",
    borderRadius: "8px",
    transition: "all 0.2s ease",
  },

  rowHover: {
    background: "#e0e7ff",
    transform: "translateX(5px)",
  },
};

export default ActivityCard;