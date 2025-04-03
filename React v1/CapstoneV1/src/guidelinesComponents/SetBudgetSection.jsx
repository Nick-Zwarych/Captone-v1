import React from "react";
import budgetImage from "../Images/budgetImage1.png";
import "../styles/SetBudgetSection.css";
import { Link } from "react-router-dom";

const SetBudgetSection = () => {
  return (
    <section className="guideline-section">
      <div className="text-column">
        <h2>Set your budget</h2>
        <p>
          Don’t worry, you can adjust your budget later and discuss it with potential Taskers if needed.
        </p>
        <Link to="/create" className="describe-button">
          Post your task for free
        </Link>
      </div>
      <div className="image-column">
        <img src={budgetImage} alt="Budget input interface" />
      </div>
    </section>
  );
};

export default SetBudgetSection;