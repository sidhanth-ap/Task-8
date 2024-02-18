import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignupForm = ({ onSignup }) => {
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");
    const [error , setError] = useState("")
    const navigate = useNavigate()
    const handleSignUp = (event) => {
      event.preventDefault();
      if (!email || !username || !password || !cpassword) {
        setError("Please enter the details");
        if (password !== cpassword) {
          setError("Passwords should match");
        }
        return;
      }
      
      setError("")
      onSignup(username, password);
      navigate("/dashboard", { replace: true });
    };
    return (
      <div className="container">
        <h1 className="title">Sign Up</h1>
        <div className="card">
          <div className="box-1">
            <form>
              {error && <p className="error">{error}</p>}
              <p className="label">Email</p>
              <input
                className="input-email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                
              />
              <br />
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
              <p className="label">Confirm Password</p>
              <input
                className="input-pwd"
                type="password"
                value={cpassword}
                onChange={(e) => setCPassword(e.target.value)}
                
              />
              <br />
              <button
                className="primary-btn"
                type="button"
                onClick={handleSignUp}
              >
                Sign Up
              </button>
              <p>
                Already have an account ?{" "}
                <Link to={"/"} className="singup-link">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
}
export default SignupForm