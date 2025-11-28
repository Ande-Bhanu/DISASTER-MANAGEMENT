import React, { useState } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [incident, setIncident] = useState("");
  const [area, setArea] = useState("");
  const [reports, setReports] = useState(1);
  const [error, setError] = useState("");

  const handleReport = () => {
    // Validations
    if (incident.trim() === "" || area.trim() === "") {
      setError("Please fill all the details before submitting the report.");
      return;
    }

    // If valid, increment reports
    setReports(reports + 1);

    // Reset Inputs and error
    setIncident("");
    setArea("");
    setError("");
  };

  return (
    <div className="dashboard-container" style={{ backgroundImage: "url('/background_image.jpg')" }}>
      <header className="header">
        <div className="logo-title">
          <img src="/logo1.png" alt="logo" className="logo" />
          <h1>DISASTER MANAGEMENT</h1>
        </div>

        <nav>
          <ul className="nav-links">
            <li><Link to="/home1">Home</Link></li>
            <li><Link to="/about1">About</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </nav>
      </header>

      {/* report box */}
      <div className="report-box">
        <label>Incident</label>
        <input
          value={incident}
          onChange={(e) => setIncident(e.target.value)}
          placeholder="Enter incident type"
        />

        <label>Area</label>
        <input
          value={area}
          onChange={(e) => setArea(e.target.value)}
          placeholder="Enter location / area"
        />

        {/* error message */}
        {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}

        <button onClick={handleReport}>Report</button>
      </div>

      {/* Place this OUTSIDE box */}
      <div className="report-count">
        <p>No. of Reports</p>
        <input className="count-box" type="text" value={reports} readOnly />
      </div>
    </div>
  );
};

export default Dashboard;
