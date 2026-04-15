
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", hours: 4 },
  { day: "Tue", hours: 6 },
  { day: "Wed", hours: 5 },
  { day: "Thu", hours: 7 },
  { day: "Fri", hours: 5 },
  { day: "Sat", hours: 3 },
  { day: "Sun", hours: 4 },
];

const GraphCard = () => {
  return (
    <div style={styles.card}>
      <h3 style={styles.title}>Weekly Focus Hours</h3>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>

          {/* GRID */}
          <CartesianGrid stroke="#eee" strokeDasharray="3 3" />

          {/* AXIS */}
          <XAxis dataKey="day" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />

          {/* TOOLTIP */}
          <Tooltip
            contentStyle={{
              borderRadius: "8px",
              border: "none",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          />

          {/* BARS */}
          <Bar
            dataKey="hours"
            fill="#4f46e5"
            radius={[6, 6, 0, 0]} 
          />

        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

const styles = {
  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
  },

  title: {
    marginBottom: "15px",
  },
};

export default GraphCard;