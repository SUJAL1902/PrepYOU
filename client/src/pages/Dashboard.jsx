import React from "react";
import Navbar from "../components/common/Navbar";

import LevelCard from "../components/dashboard/LevelCard";
import TotalFocusCard from "../components/dashboard/TotalFocusCard";
import StartSessionCard from "../components/dashboard/StartSessionCard";
import ActivityCard from "../components/dashboard/ActivityCard";
import WeeklySummaryCard from "../components/dashboard/WeeklySummaryCard";
import GraphCard from "../components/dashboard/GraphCard";

const Dashboard = () => {
  return (
    <div style={styles.page}>

      {/* FIXED NAVBAR */}
      <Navbar />

      {/* SCROLLABLE CONTENT */}
      <div style={styles.container}>

        {/* HEADER */}
        <div style={styles.header}>
          <h1>Welcome back, Alex</h1>
          <p>Here's your progress overview</p>
        </div>

        {/* TOP CARDS */}
        <div style={styles.topGrid}>
          <LevelCard />
          <TotalFocusCard />
          <StartSessionCard />
        </div>

        {/* MAIN GRID */}
        <div style={styles.mainGrid}>

          {/* LEFT SIDE */}
          <div style={styles.left}>
            <ActivityCard />
            <GraphCard />
          </div>

          {/* RIGHT SIDE */}
          <div style={styles.right}>
            <div style={styles.todayCard}>
              <h3>Today's Focus</h3>
              <h2>4h 35m</h2>
              <p>Great progress today! Keep it up.</p>
            </div>

            <WeeklySummaryCard />
          </div>

        </div>

      </div>
    </div>
  );
};

const styles = {
  page: {
    height: "100vh",
    overflow: "hidden",
    background: "#F2F2F2",
  },

  container: {
    padding: "20px",
    marginTop: "70px",          
    height: "calc(100vh - 70px)",
    overflowY: "auto",
  },

  header: {
    marginBottom: "20px",
  },

  topGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "20px",
    marginBottom: "20px",
  },

  mainGrid: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: "20px",
  },

  left: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  right: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  todayCard: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
  },
};

export default Dashboard;