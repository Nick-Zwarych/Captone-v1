// src/pages/About.jsx
import React, { useState } from "react";
import "../src/styles/About.css";
import aboutImage from "../src/Images/AboutImage1.png"; // Replace with your actual image

const faqData = [
  { question: "What is Airtasker?", answer: "Airtasker is a trusted community platform that connects people who need to outsource tasks with people ready to work." },
  { question: "How do I get paid?", answer: "You get paid securely through the platform after the task is marked as complete." },
  { question: "Who will I be working with?", answer: "You’ll work with reliable, reviewed, and verified users within the community." },
  { question: "How much does it cost?", answer: "Prices vary depending on the task type, complexity, and market rate." },
  { question: "Is there insurance?", answer: "Yes, eligible tasks are covered by liability insurance for peace of mind." },
];

const About = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-text">
          <h2>We're making a difference to people's lives</h2>
          <p>
            Creating a way to connect people ready to work, with people who need work done
          </p>
        </div>
        <div className="about-image">
          <img src={aboutImage} alt="Happy Taskers" />
        </div>
      </section>

      <section className="about-quote">
        <div className="quote-text">
          <h3>“The only way to do great work is to love what you do”</h3>
        </div>
        <div className="quote-desc">
          <p>
            Need to outsource tasks and find local services, with people who are looking to earn money and ready to work. 
          </p>
          <p>
            From Simple to Complicated Tasks, Airtasker can help you complete your home cleaning, handyman jobs, admin work, photography, graphic design or even build a website.
          </p>
        </div>
        
      </section>

      <section className="about-faq">
        <h3>Got Questions</h3>
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? "open" : ""}`}>
              <button onClick={() => toggleFAQ(index)}>{item.question}</button>
              {openIndex === index && <div className="faq-answer">{item.answer}</div>}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
