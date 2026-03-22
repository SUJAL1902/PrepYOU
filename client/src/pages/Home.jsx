import React from "react";
import Navbar from "../components/Navbar";
import SkillCard from "../components/SkillCard";
import LeaderboardItem from "../components/ProgressChart";

const Home = () => {
    return (
  <div style={{ width: "100%", minHeight: "100vh", backgroundColor:"#F2F2F2"  }}>
    <Navbar />

      {/* HERO SECTION */}
      <section style={styles.hero}>
        <h1>Turn Focus into Measurable <br/> <br/>Growth</h1>
        <p style={styles.p}>
          PrepYOU is a productivity enhancement platform where focused study time converts <br/>into tangible growth. Track your progress, level up your skills, and measure your <br/> dedication.
        </p>
        <button style={styles.btn}>Start Focusing</button>
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
            description="Begin a distraction-free focus session. Choose your skill and mode, then concentrate."
          />
          <SkillCard
            title="Earn XP & Track Growth"
            description="Every minute counts. Gain experience points, level up, and visualize your journey."
          />
        </div>
      </section>

      {/* LEADERBOARD */}
      <section style={styles.section}>
        <h2>Join the Community</h2>

        <div style={styles.leaderboard}>
          <h3>🏆 Weekly Leaderboard</h3>

          <div style={styles.item}>
            <LeaderboardItem rank="1" name="Sarah Chen" xp="42.5h" />
          </div>

          <div style={styles.item}>
            <LeaderboardItem rank="2" name="Michael Ross" xp="38.2h" />
          </div>

          <div style={styles.item}>
            <LeaderboardItem rank="3" name="Emma Wilson" xp="35.8h" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
      <span>PrepYOU. Focus on what matters.</span>
      <span style={styles.ft}>
        <a>Privacy</a> &nbsp;
        <a>Terms</a> &nbsp;
        <a>Contact</a>
      </span>
    </footer>
    </div>
  );
};

const styles = {
 p:{
  fontSize:"15px",
},
 hero: {
    textAlign: "center",
    padding: "80px 20px",
    width: "100%",
    
  },
  section: {
    textAlign: "center",
    padding: "35px 10px",
    width: "100%",
  },
  btn: {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#4f46e5",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
  },
  
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px",
    fontSize:"10px",
  },
  leaderboard: {
    width: "100%",
    margin: "auto",
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    display: "flex",          
    flexDirection: "column",  
    gap: "10px", 
    maxWidth:"500px",
    backgroundColor:"#fff",
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    background:"#F2F2F2",
    borderRadius: "10px",
    gap:"10px",
    color:"black",
    height:"100px",
  },
  footer: {
  display: "flex",                 
  justifyContent: "space-between", 
  alignItems: "center",
  padding: "20px",
  borderTop: "1px solid #ddd",
},

ft: {
  display: "flex",
  gap: "15px",                     
},
};

export default Home;