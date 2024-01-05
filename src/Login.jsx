import React, { useState } from "react";
import "./styles.css";
import { Navigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    const email = document.querySelector(".input-email").value;
    const pwd = document.querySelector(".input-pwd").value;
    const error = document.querySelector(".error");
    if (email === "" || pwd === "") {
      error.style.display = "block";
      return;
    } else {
      error.style.display = "none";
    }
    onLogin(username, password);
    setIsLoggedIn(true)
  };
  return (
    <div className="container">
      <h1 className="title">Login</h1>
      <div className="box">
        <form>
          <p className="error">Error: Invalid username or password</p>
          <p className="label">Username</p>
          <input
            className="input-email"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            
          />
          <br />
          <p className="label">Password</p>
          <input
            className="input-pwd"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button className="primary-btn" type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
