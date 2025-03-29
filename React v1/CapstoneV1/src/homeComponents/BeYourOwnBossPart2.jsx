import React from "react";
import "../styles/BeYourOwnBossPart2.css";
import bossImage2 from "../Images/BeYourOwnBossImage2.png"; 

const BeYourOwnBossSection2 = () => {
  return (
    <section className="boss-section2">
      <div className="boss-left2">
        <img src={bossImage2} alt="Hassan" className="boss-img" />
      </div>

      <div className="boss-right2">
        <h2 className="boss-name">HASSAN</h2>

        <div className="boss-metrics">
          <div className="rating">
            <span className="star">5 ★</span>
            <div className="label">Overall rating</div>
            <div className="subtext">73 ratings</div>
          </div>
          <div className="completion">
            <span className="percent">97%</span>
            <div className="label">Completion Rate</div>
            <div className="subtext">73 ratings</div>
          </div>
        </div>

        <hr />

        <p className="specialties">
          <strong>Specialities:</strong> 24/7 emergency plumbing, gas fitting, renovations
        </p>

        <p className="bio">
          Hassan has been in the plumbing industry for 11 years, and joined Airtasker for better work life balance.
          He enjoys the opportunity to connect with customers from many different areas and backgrounds.
        </p>

        <div className="badges">
          <span className="badge">💳 Digital iD</span>
          <span className="badge">💸 Payment Method</span>
          <span className="badge">📞 Mobile</span>
        </div>

        <hr />

        <div className="review">
          <p className="review-title"><strong>What the reviews say</strong></p>
          <p className="quote">
            A+++ for Hassan! I was left in quite a dilemma with a shower leak and he was there within the hour.
            Highly professional, punctual and he did it all with a friendly smile.
          </p>
          <p className="review-author">– Nic K.</p>
        </div>
      </div>
    </section>
  );
};

export default BeYourOwnBossSection2;