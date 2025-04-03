import React from "react";
import quotesImage from "../Images/neededImage1.png";
import "../styles/ReceiveQuoteSection.css";
import { Link } from "react-router-dom";

const ReceiveQuotesSection = () => {
  return (
    <section className="guideline-section">
      <div className="image-column">
        <img src={quotesImage} alt="Receive quotes interface" />
      </div>
      <div className="text-column">
        <h2>Receive quotes. Pick the most suitable Tasker.</h2>
        <p>
          Take a look at profiles, ratings, completion rate and reviews to pick the Tasker you’d like to work with.
          When the task is done, say thanks by releasing payment and writing a review so everyone can know what a great job they’ve done.
        </p>
        <Link to="/create" className="describe-button">
          Post your task for free
        </Link>
      </div>
    </section>
  );
};

export default ReceiveQuotesSection;