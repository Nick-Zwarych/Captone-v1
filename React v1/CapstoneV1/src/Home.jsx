// src/Home.jsx
import React from "react";
import '../src/styles/Home.css';
import heroImage from '../src/Images/heroImage1.png';

const Home = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">GET MORE DONE</h1>
        <p className="hero-subtext">Post any task. Pick the best person. Get it done.</p>
        <div className="hero-buttons">
          <button className="btn primary">Post your task for free →</button>
          <button className="btn secondary">Earn money as a Tasker →</button>
        </div>
        <div className="hero-stats">
          <div><span>👥</span> 1M+ customers</div>
          <div><span>🛡️</span> 2.5M+ tasks done</div>
          <div><span>⭐</span> 4M+ user reviews</div>
        </div>
      </div>

      <div className="hero-image">
        <img src={heroImage} alt="Hero" className="hero-img" />
      </div>
    </div>
  );
};

export default Home;
