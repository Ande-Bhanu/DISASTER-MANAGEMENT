import React from "react";
import { Link } from "react-router-dom";
import "./About1.css";

const About1 = () => {
  // Check login status
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
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
            <li><Link to="/">Home</Link></li>
            <li><Link to={aboutLink}>About</Link></li> {/* Dynamic About link */}
            <li><Link to="/donation">Donation</Link></li>
            <li><Link to="/report">Report</Link></li>
            <li><Link to="/volunteers">Volunteers</Link></li>
            <li><Link to="/contacts">Contact</Link></li>
            <li><Link to="/profile">Profile</Link></li>
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
          The system tracks and manages essential supplies, ensuring proper distribution to
          affected areas while coordinating volunteers and emergency personnel for effective
          deployment. Real-time alerts and location-based notifications keep communities informed
          about disaster warnings, evacuation plans, and safety measures. Additionally, data
          analytics support decision-making and post-disaster recovery planning, making the
          platform a crucial tool for disaster preparedness, response, and resilience.
        </p>
      </div>
    </div>
  );
};

export default About1;
