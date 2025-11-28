import React from "react";
import { Link } from "react-router-dom";
import "./Home1.css";

const Home1 = ({ isLoggedIn }) => {
  const homeLink = isLoggedIn ? "/home1" : "/";
  const aboutLink = isLoggedIn ? "/about1" : "/about";

  return (
    <div className="home-container" style={{ backgroundImage: "url('/background_image.jpg')" }}>
      <div className="header">
        <nav className="navbar">
          <div className="logo">
            <img src="logo1.png" alt="Logo" />
            <h1 className="text-2xl font-bold">DISASTER MANAGEMENT</h1>
          </div>

          <ul className="nav-links">
            <li><Link to={homeLink}>Home</Link></li>
            <li><Link to={aboutLink}>About</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li> {/* Added dashboard */}
          </ul>
        </nav>
      </div>

      <div className="hero-content">
        <p className="hero-text">
          A disaster is a sudden and catastrophic event that causes significant damage, loss of life, and disruption to communities.
        </p>
      </div>

      <div className="action-cards-container">
        <div className="action-card">
          <span className="card-text">Share Resources</span>
        </div>
        <div className="action-card">
          <span className="card-text">Save Lives</span>
        </div>
        <div className="action-card">
          <span className="card-text">Rescue Victims</span>
        </div>
      </div>
    </div>
  );
};

export default Home1;
