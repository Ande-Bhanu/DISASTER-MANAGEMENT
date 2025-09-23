import React from "react";
import "./SignIn.css";  // External CSS for styling
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    navigate("/Login"); // redirect to Login page
  };

  return (
    <div className="signin-container">
      <header className="header">
        <div className="logo-container">
          <img src="logo1.png" alt="Logo" className="logo" />
        </div>
        <h1>DISASTER MANAGEMENT</h1>
        <nav>
          <ul>
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/About")}>About</li>
            <li onClick={() => navigate("/SignIn")}>Sign In</li>
            <li onClick={() => navigate("/Login")}>Login</li>
            <li onClick={() => navigate("/Contacts")}>Contact</li>
          </ul>
        </nav>
      </header>

      <div className="form-container">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Create your password</label>
          <input type="password" placeholder="New password" required />

          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
