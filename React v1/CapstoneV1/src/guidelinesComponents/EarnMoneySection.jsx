import React from "react";
import "../styles/EarnMoneySection.css";
import earnImage from "../Images/earnMoneyImage1.png";
import { FaBriefcase, FaDollarSign, FaShieldAlt } from "react-icons/fa";

const EarnMoneySection = () => {
  return (
    <section className="earn-section">
      <div className="earn-image">
        <img src={earnImage} alt="Person assembling furniture" />
      </div>
      <div className="earn-text">
        <h2>Earn up to $10,750 per month completing tasks</h2>

        <div className="earn-feature">
          <FaBriefcase className="icon" />
          <div>
            <h4>All on your terms</h4>
            <p>
              Saw a job that fits your skills and timeframe? Go for it. Airtasker’s
              flexible to your schedule.
            </p>
          </div>
        </div>

        <div className="earn-feature">
          <FaDollarSign className="icon" />
          <div>
            <h4>Payments on lock</h4>
            <p>
              Nobody likes chasing money, so we secure customer payments upfront.
              When a task is marked complete, your bank account will know about it.
            </p>
          </div>
        </div>

        <div className="earn-feature">
          <FaShieldAlt className="icon" />
          <div>
            <h4>Peace of mind, insured</h4>
            <p>
              Liability insurance is sorted for Taskers performing most Tasks.
              Airtasker Insurance is provided by Chubb Insurance Australia Limited -
              one of Australia’s most reputable and innovative insurance brands'
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarnMoneySection;