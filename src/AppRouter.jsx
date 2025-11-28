import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./components/About";
import About1 from "./components/About1";
import SignIn from "./components/SignIn";
import Login from "./components/Login";
import Home1 from "./components/Home1";
import Dashboard from "./components/Dashboard";   // <-- Add this

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<App isLoggedIn={isLoggedIn} />} />
        <Route path="/about" element={<About isLoggedIn={isLoggedIn} />} />
        <Route path="/about1" element={<About1 isLoggedIn={isLoggedIn} />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/home1" element={<Home1 isLoggedIn={isLoggedIn} />} />
        <Route path="/dashboard" element={<Dashboard isLoggedIn={isLoggedIn} />} />   {/* NEW */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
