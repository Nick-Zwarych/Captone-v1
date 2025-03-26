import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/QuickStartSection.css'; 
import QuickStartImage from '../Images/QuickStartSectionImage1.png';

export default function QuickStartSection() {
  return (
    <section className="quickstart">
      <div className="quickstart-left">
        <h2>Post your first<br />task in seconds</h2>
        <p>Save yourself hours and get your to-do list completed</p>

        <ol className="quickstart-steps">
          <li><span>1</span> Describe what you need done</li>
          <li><span>2</span> Set your budget</li>
          <li><span>3</span> Receive quotes and pick the best Tasker</li>
        </ol>

        <Link to="/create">
          <button className="quickstart-btn">Post your task</button>
        </Link>
      </div>

      <div className="quickstart-right">
        <img
          src={QuickStartImage} alt="Quick start tasks" className="quickstart-image"
        />
      </div>
    </section>
  );
}
