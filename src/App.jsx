import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import "./styles.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  // const navigate = useNavigate()

  const handleLogin = (email, pwd) => {
    if (email && pwd) {
      setIsLoggedIn(true);
      setUsername(email);
      console.log("Authentication successful");
      // navigate("/dashboard")
    } else {
      console.log("Authentication failed");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
  };

  return (
    <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <Login
            onLogin={handleLogin}
          />
        }
      ></Route>
      <Route
        path="/dashboard"
        element={
          isLoggedIn ? (
            <Dashboard
              user={username}
              onLogout={handleLogout}
            />
          ) : (
            <Navigate to="/" />
          )
        }
      ></Route>
    </Routes>
  </BrowserRouter>
  );
};

export default App;
