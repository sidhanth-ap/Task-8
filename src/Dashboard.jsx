import React, { useState } from "react";
import "./styles.css";
import { Link, Navigate } from "react-router-dom";

const Dashboard = ({ user, onLogout }) => {
  console.log("Dashboard rendering...");
  let greet;
  const d = new Date();
  const hours = d.getHours();
  if (hours >= 1 && hours < 12) {
    greet = "Good Morning";
  } else if (hours >= 12 && hours <= 15) {
    greet = "Good Afternoon";
  } else if (hours >= 16 && hours <= 18) {
    greet = "Good Evening";
  } else {
    greet = "Good Night";
  }
  // const [isLoggedIn, setIsLoggedIn] = useState(true);
  const handleLogout = () => {
    onLogout()
    // setIsLoggedIn(false)
  }
  return (
    <div>
      <div className="container">
        <h1 className="title">Dashboard</h1>
        <div className="box">
          <h2 className="greet">{greet}</h2>
          <h2 className="user">
            <span className="hey">Hey 👋 </span>
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
