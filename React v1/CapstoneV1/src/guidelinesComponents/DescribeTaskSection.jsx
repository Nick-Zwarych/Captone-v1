import React from "react";
import "../styles/DescribeTaskSection.css"; 
import taskImage from "../Images/describeImage1.png"; 
import { Link } from "react-router-dom";

const DescribeTaskSection = () => {
  return (
    <section className="describe-task-section">
      <div className="describe-task-left">
        <img src={taskImage} alt="Describe your task" />
      </div>

      <div className="describe-task-right">
        <h2>Describe what you need done</h2>
        <p>
          Describe what you need done in a few sentences. Keep it simple and
          clear to attract the best Taskers.
        </p>
        <Link to="/create" className="describe-button">
          Post your task for free
        </Link>
      </div>
    </section>
  );
};

export default DescribeTaskSection;