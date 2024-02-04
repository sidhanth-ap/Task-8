import React, { useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate()
  const handleLogin = (event) => {
    event.preventDefault();

    if ( !username || !password ) {
      setError("Unable to login")
      return;
    }
    setError("")
    console.log("Logging in with:", username, password);
    onLogin(username, password);
    navigate("/dashboard")
  };
  return (
    <div className="container">
      <h1 className="title">Login</h1>
      <div className="box">
        <form>
          {error && <p className="error">{error}</p>}
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
