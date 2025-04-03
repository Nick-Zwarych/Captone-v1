// src/pages/Contact.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../src/styles/Contact.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-page">
      <h1 className="contact-title">What can we help you with?</h1>

      <div className="contact-search">
        <input type="text" placeholder="Ask a question or type a search term here ..." />
      </div>

      <div className="browse-categories">
        <h2>Browse categories</h2>
        <div className="categories-grid">
          <Link to="/create" className="category-card">
            <div className="card-content">
              <span className="icon">🏃‍♂️</span>
              <p>I am a Tasker</p>
            </div>
          </Link>

          <Link to="/guidelines" className="category-card">
            <div className="card-content">
              <span className="icon">📘</span>
              <p>Airtasker Guidelines</p>
            </div>
          </Link>

          <Link to="/about" className="category-card">
            <div className="card-content">
              <span className="icon">🧍</span>
              <p>I am a Customer</p>
            </div>
          </Link>
        </div>
      </div>

      <div className="contact-footer">
        <h3>Contact Us</h3>
        <p>📍 Lumbung Hidup East Java</p>
        <p>✉️ Hello@Homco.com</p>
        <div className="social-icons">
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
