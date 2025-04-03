import React from "react";
import ratingImage from "../Images/ratingsImage1.png";
import "../styles/RatingsReviewSection.css";

const RatingsReviewsSection = () => {
  return (
    <section className="guideline-section">
      <div className="image-column">
        <img src={ratingImage} alt="Tasker rating display" />
      </div>
      <div className="text-column">
        <h2>Ratings & reviews</h2>
        <p>
          Review Tasker’s portfolios, skills, badges on their profile, and see their transaction verified ratings,
          reviews & completion rating (to see their reliability) on tasks they’ve previously completed.
        </p>
      </div>
    </section>
  );
};

export default RatingsReviewsSection;