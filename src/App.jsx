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
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = (email, pwd) => {
    if (email && pwd) {
      setIsLoggedIn(true);
      setUsername(email);
      navigate("/dashboard");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    navigate("/");
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
            <Dashboard
              user={username}
              onLogout={handleLogout}
            />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
