import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css"; 
import About from "./components/About";
import SignIn from "./components/SignIn";
import Login from "./components/Login";
import Contacts from "./components/Contacts";

const App = ({ isLoggedIn }) => { // Receive login state as prop
  const navigate = useNavigate();

  const homeLink = isLoggedIn ? "/home1" : "/"; // dynamic Home link
  const aboutLink = isLoggedIn ? "/about1" : "/about"; // dynamic About link

  return (
    <div className="flex flex-col items-center min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/path-to-your-image.png')" }}>
      <header className="w-full p-4 flex justify-between items-center bg-black bg-opacity-50 text-white">
        <div className="logo-container">
          <img src='logo1.png' alt="Disaster Management Logo" className="logo" />
        </div>
        <h1 className="text-2xl font-bold">DISASTER MANAGEMENT</h1>
        <nav>
          <ul>
            <li><span onClick={() => navigate(homeLink)}>Home</span></li>
            <li><span onClick={() => navigate(aboutLink)}>About</span></li>
            <li><span onClick={() => navigate("/SignIn")}>Sign In</span></li>
            <li><span onClick={() => navigate("/Login")}>Login</span></li>
            <li><span onClick={() => navigate("/Contacts")}>Contacts</span></li>
          </ul>
        </nav>
      </header>

      <main className="text-center text-white mt-20 p-4">
        <p className="text-lg max-w-2xl">
          A disaster is a sudden and catastrophic event that causes significant damage, loss of life, and disruption to communities. Disasters can be natural (such as earthquakes, floods, hurricanes, wildfires, and tsunamis) or man-made (such as industrial accidents, oil spills, nuclear disasters, and terrorist attacks).
        </p>
      </main>
      <div className="module-container">
        <div className="module">Share Resources</div>
        <div className="module">Save Lives</div>
        <div className="module">Rescue Victims</div>
      </div>
    </div>
  );
};

export default App;
