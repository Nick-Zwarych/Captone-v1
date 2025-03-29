import React from 'react';
import '../styles/BeYourOwnBossPart1.css';
import { Link } from 'react-router-dom';
import bossImage1 from '../Images/BeYourOwnBossImage1.png';

const BeYourOwnBossPart1 = () => {
  return (
    <section className="boss-section">
      <div className="boss-left">
        <h2>Be your own boss</h2>
        <p>
          Whether you’re a genius spreadsheet guru or a diligent carpenter, find your next job on Airtasker.
        </p>
        <ul className="boss-benefits">
          <li>✔ &nbsp;&nbsp;Free access to thousands of job opportunities</li>
          <li>✔ &nbsp;&nbsp;No subscription or credit fees</li>
          <li>✔ &nbsp;&nbsp;Earn extra income on a flexible schedule</li>
          <li>✔ &nbsp;&nbsp;Grow your business and client base</li>
        </ul>
        
        <button className="btn secondary">Earn money as a Tasker</button>
        
      </div>

      <div className="boss-right">
        <img src={bossImage1} alt="Be your own boss" className="boss-img" />
      </div>
    </section>
  );
};

export default BeYourOwnBossPart1;