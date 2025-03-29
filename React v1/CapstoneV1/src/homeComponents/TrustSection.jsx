import React from "react";
import { Link } from 'react-router-dom';
import "../styles/TrustSection.css";
import trustImage from "../Images/trustSectionImage1.png"; 

const TrustSection = () => {
  return (
    <section className="trust-section">
      <div className="trust-left">
        <img src={trustImage} alt="Trust" className="trust-img" />
      </div>

      <div className="trust-right">
        <h2>Trust and safety features for your protection</h2>

        <div className="trust-item">
          <span className="icon">$</span>
          <div>
            <h4>Secure payments</h4>
            <p>Only release payment when the task is completed to your satisfaction</p>
            <a href="#">read more</a>
          </div>
        </div>

        <div className="trust-item">
          <span className="icon">★</span>
          <div>
            <h4>Trusted ratings and reviews</h4>
            <p>Pick the right person for the task based on real ratings and reviews from other users</p>
            <a href="#">read more</a>
          </div>
        </div>

        <div className="trust-item">
          <span className="icon">🛡️</span>
          <div>
            <h4>Insurance for peace of mind</h4>
            <p>We provide liability insurance for Taskers performing most task activities</p>
            <a href="#">read more</a>
          </div>
        </div>
          
        <Link to="/create">
            <button className="trust primary">Post your task for free</button>
        </Link>
        
      </div>
    </section>
  );
};

export default TrustSection;
