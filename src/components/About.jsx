import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  // Check login status
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const aboutLink = isLoggedIn ? "/about1" : "/about";

  return (
    <div className="about-container">
      <div className="header">
        <nav className="navbar">
          <div className="logo">
            <img src="logo1.png" alt="Logo" />
            <h1 className="text-2xl font-bold">DISASTER MANAGEMENT</h1>
          </div>

          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to={aboutLink}>About</Link></li> {/* Dynamic About link */}
            <li><Link to="/signin">Sign In</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>

      <div className="about-content">
        <p>
          The <strong>Disaster Management System</strong> website is a robust platform designed to
          streamline emergency response and relief efforts by integrating real-time data,
          resource management, and volunteer coordination. It allows users to report
          disasters, enabling authorities to assess situations quickly and allocate resources
          efficiently.
          <br /><br />
          The system tracks and manages essential supplies, ensuring proper distribution to
          affected areas while coordinating volunteers and emergency personnel for effective
          deployment. Real-time alerts and location-based notifications keep communities informed
          about disaster warnings, evacuation plans, and safety measures.
        </p>
      </div>
    </div>
  );
};

export default About;
