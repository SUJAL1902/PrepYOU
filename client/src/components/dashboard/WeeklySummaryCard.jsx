
import React, { useState } from "react";

const WeeklySummaryCard = () => {
  const [hover, setHover] = useState(false);
  const [activeRow, setActiveRow] = useState(null);

  const data = [
    { label: "Total Hours", value: "37.1h" },
    { label: "Sessions", value: "23" },
    { label: "XP Earned", value: "11,130" },
    { label: "Avg. Session", value: "1h 37m" },
  ];

  return (
    <div
      style={{
        ...styles.card,
        ...(hover ? styles.hover : {}),
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <h3>Weekly Summary</h3>

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
          <span>{item.label}</span>
          <span>{item.value}</span>
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
    transition: "all 0.3s ease",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    cursor: "pointer",
  },

  hover: {
    transform: "translateY(-5px)",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
  },

  row: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
    padding: "8px",
    borderRadius: "6px",
    transition: "all 0.2s ease",
  },

  rowHover: {
    background: "#eef2ff",
    transform: "translateX(5px)",
  },
};

export default WeeklySummaryCard;