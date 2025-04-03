import React from "react";
import "../src/styles/AirtaskerGuidelines.css";
import backgroundImg from "../src/Images/heroImage2.png";
import DescribeTaskSection from "./guidelinesComponents/DescribeTaskSection";
import SetBudgetSection from "./guidelinesComponents/SetBudgetSection";
import ReceiveQuotesSection from "./guidelinesComponents/ReceiveQuoteSection";
import RatingsReviewsSection from "./guidelinesComponents/RatingsReviewSection";
import EarnMoneySection from "./guidelinesComponents/EarnMoneySection";

const AirtaskerGuidelines = () => {
  return (
    <div className="guidelines-page">
      <section
        className="guidelines-hero"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <div className="hero-overlay">
          <div className="hero-left">
            <h1>Find an experienced <br /> business consultant near you</h1>
            <p>
              Fill in a short form and get free quotes for business consulting
              services
            </p>
            <div className="rating">Excellent rating - 4.3/5 (10900+ reviews)</div>
          </div>

          <div className="hero-box">
            <h2>Need a professional business consultant?</h2>
            <ul>
              <li>&nbsp;&nbsp;&nbsp;&nbsp;Small business consultant</li>
              <li>&nbsp;&nbsp;&nbsp;&nbsp;Financial consultant</li>
              <li>&nbsp;&nbsp;&nbsp;&nbsp;Business attorney</li>
              <li>&nbsp;&nbsp;&nbsp;&nbsp;Business plan consultants</li>
              <li>&nbsp;&nbsp;&nbsp;&nbsp;Business management</li>
              <li>&nbsp;&nbsp;&nbsp;&nbsp;... or anything else</li>
            </ul>
            <button className="hero-btn">Find a business consultant near me →</button>
            <p className="hero-note">It only takes 2 minutes. And it’s free.</p>
          </div>
        </div>
      </section>

      <DescribeTaskSection/>
      <SetBudgetSection/>
      <ReceiveQuotesSection/>
      <RatingsReviewsSection/>
      <EarnMoneySection/>
    </div>
  );
};

export default AirtaskerGuidelines;