import React, { useState } from "react";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import SignupForm from "./SignupForm";

const Login = ({ onLogin }) => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showSignUpForm, setShowSignUpForm] = useState(false)
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
    navigate(`/dashboard/${username}`, { replace : true })
  };
  const handleSignupClick = () => {
    setShowSignUpForm(true)
  }
  return (
    <div className="container">
      <h1 className="title">Login</h1>
      <div className="card">
        <div className="box-1">
          {showSignUpForm ? (
            <SignupForm />
          ) : (
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
              <button
                className="primary-btn"
                type="button"
                onClick={handleLogin}
              >
                Login
              </button>
              <p>
                Don't have an account ?{" "}
                <Link to={"/signup"} className="singup-link" onClick={handleSignupClick}>
                  Sign up
                </Link>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
export default Login;
