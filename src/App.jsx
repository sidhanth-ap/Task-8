import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import "./styles.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const handleLogin = (email, pwd) => {
    if (email && pwd) {
      const user = {
        isLoggedIn: true,
        username: email,
      }
      setIsLoggedIn(true);
      localStorage.setItem("user", JSON.stringify(user))
      setUsername(email);
      console.log("Authentication successful");
    } else {
      console.log("Authentication failed");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("user")
    setUsername("");
  };
  const checkLoggedStatus = () => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      const user = JSON.parse(storedUser)
      setIsLoggedIn(user.isLoggedIn)
      setUsername(user.username)
    } else {

      setIsLoggedIn(false)
    }
  }
  useEffect(() => {
    checkLoggedStatus();
  }, []);  


  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Navigate to="/dashboard" replace={false}/>
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            isLoggedIn ? (
              <Dashboard user={username} onLogout={handleLogout} />
            ) : (
              <Navigate to="/" replace={false}/>
            )
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
