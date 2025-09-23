import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh

    // 1️⃣ Set login status in localStorage
    localStorage.setItem("isLoggedIn", "true");

    // 2️⃣ Redirect to Home1 page after login
    navigate("/home1");
  };

  // Determine About link based on login status
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const aboutLink = isLoggedIn ? "/about1" : "/about";

  return (
    <div className="login-container">
      {/* Header with Navigation */}
      <header className="header">
        <div className="logo-container">
          <img src="logo1.png" alt="Logo" className="logo" />
        </div>
        <h1>DISASTER MANAGEMENT</h1>
        <nav>
          <ul>
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate(aboutLink)}>About</li>
            <li onClick={() => navigate("/signin")}>Sign In</li>
            <li onClick={() => navigate("/login")}>Login</li>
            <li onClick={() => navigate("/contacts")}>Contact</li>
          </ul>
        </nav>
      </header>

      {/* Login Form */}
      <div className="form-container">
        <h2>Log In</h2>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />

          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
