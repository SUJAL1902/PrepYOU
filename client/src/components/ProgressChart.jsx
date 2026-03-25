import React from "react";

const LeaderboardItem = ({ rank, name, xp }) => {
  return (
    <div style={styles.item}>
      
      <div style={styles.left}>
        <span style={styles.rank}>{rank}.</span>
        <span style={styles.name}>{name}</span>
      </div>

      <span style={styles.xp}>{xp}</span>

    </div>
  );
};

const styles = {
  item: {
    display: "flex",
    alignItems: "center",
    padding: "12px 15px",
    background: "#F2F2F2",
    borderRadius: "10px",
    width: "100%", 
    height:"10px",           
  },

  left: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  rank: {
    fontWeight: "bold",
    marginTop:"60px",
  },

  name: {
    fontWeight: "bold",
    marginTop:"60px",
  },

  xp: {
    marginLeft: "auto",       
    color: "gray",
    fontWeight: "500",
    marginTop:"60px",
  },
};

export default LeaderboardItem;