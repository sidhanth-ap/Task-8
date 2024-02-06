import React, { useEffect, useState } from "react";
import "./styles.css";

const Dashboard = ({ user, onLogout }) => {
  console.log("Dashboard rendering...");
  let greet;
  const d = new Date();
  const hours = d.getHours();
  if (hours >= 1 && hours < 12) {
    greet = "🌤️ Good Morning";
  } else if (hours >= 12 && hours <= 15) {
    greet = "😩 Good Afternoon";
  } else if (hours >= 16 && hours <= 18) {
    greet = "😄 Good Evening";
  } else {
    greet = "💤 Good Night";
  }
  const handleLogout = () => {
    onLogout()
  }

  return (
    <div>
      <div className="container">
        <h1 className="title">Dashboard</h1>
        <div className="box box-border">
          <h2 className="greet">{greet}</h2>
          <h2 className="user">
            <span className="hey">👋 Hey,  </span>
            {user}
          </h2>
          <button className="primary-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
