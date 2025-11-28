import React from "react";
import { Link } from "react-router-dom";
import "./About1.css";

const About1 = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  // Dynamic navigation links
  const homeLink = isLoggedIn ? "/home1" : "/";
  const aboutLink = isLoggedIn ? "/about1" : "/about";

  return (
    <div className="about-container" style={{ backgroundImage: "url('/background_image.jpg')" }}>
      <header className="header">
        <div className="logo">
          <img src="logo1.png" alt="Logo" />
          <h1 className="title">DISASTER MANAGEMENT</h1>
        </div>

        <nav className="nav-links">
          <ul>
            <li><Link to={homeLink}>Home</Link></li>
            <li><Link to={aboutLink}>About</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </nav>
      </header>

      <div className="about-content">
        <p>
          The <strong>Disaster Management System</strong> website is a robust platform designed to
          streamline emergency response and relief efforts by integrating real-time data,
          resource management, and volunteer coordination. It allows users to report
          disasters, enabling authorities to assess situations quickly and allocate resources
          efficiently.
          <br /><br />
          Real-time alerts and location-based notifications keep communities informed
          about warnings, evacuation plans, and safety measures. Additionally, data
          analytics support recovery planning, making the platform crucial for preparedness
          and resilience.
        </p>
      </div>
    </div>
  );
};

export default About1;
