
import React from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/common/HomeNavbar";
import SkillCard from "../components/home/SkillCard";   
import LeaderboardItem from "../components/home/LeaderboardItem"; 

const Home = () => {
  const navigate = useNavigate();  

  return (
    <div style={{ width: "100%", minHeight: "100vh", backgroundColor: "#F2F2F2" }}>
      
      <Navbar />

      {/* HERO SECTION */}
      <section style={styles.hero}>
        <h1>Turn Focus into Measurable <br /><br />Growth</h1>
        <p style={styles.p}>
          PrepYOU is a productivity enhancement platform where focused study time converts <br />
          into tangible growth. Track your progress, level up your skills, and measure your <br />
          dedication.
        </p>

        {/*NAVIGATION ADDED */}
        <button 
          style={styles.btn}
          onClick={() => navigate("/login")}
        >
          Start Focusing
        </button>
      </section>

      {/* HOW IT WORKS */}
      <section style={styles.section}>
        <h2>How PrepYOU Works</h2>

        <div style={styles.cardContainer}>
          <SkillCard
            title="Create Skills"
            description="Define the areas you want to improve. Each skill tracks your progress independently."
          />
          <SkillCard
            title="Start Focus Session"
            description="Begin a distraction-free focus session."
          />
          <SkillCard
            title="Earn XP & Track Growth"
            description="Gain experience points and level up."
          />
        </div>
      </section>

      {/* LEADERBOARD */}
      <section style={styles.section}>
        <h2>Join the Community</h2>

        <div style={styles.leaderboard}>
          <h3>🏆 Weekly Leaderboard</h3>

          <LeaderboardItem rank="1" name="Sarah Chen" xp="42.5h" />
          <LeaderboardItem rank="2" name="Michael Ross" xp="38.2h" />
          <LeaderboardItem rank="3" name="Emma Wilson" xp="35.8h" />
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <span>PrepYOU. Focus on what matters.</span>

        <span style={styles.ft}>
          <a>Privacy</a>
          <a>Terms</a>
          <a>Contact</a>
        </span>
      </footer>
    </div>
  );
};

const styles = {
  p: { fontSize: "15px" },

  hero: {
    textAlign: "center",
    padding: "80px 20px",
  },

  section: {
    textAlign: "center",
    padding: "35px 10px",
  },

  btn: {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#4f46e5",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },

  cardContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px",
  },

  leaderboard: {
    maxWidth: "500px",
    margin: "auto",
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  footer: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    borderTop: "1px solid #ddd",
    marginTop: "30px",
  },

  ft: {
    display: "flex",
    gap: "15px",
  },
};

export default Home;