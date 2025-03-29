import React from "react";
import "../styles/BlogSection.css";
import { Link } from 'react-router-dom';
import blogImg1 from "../Images/BlogSectionImage1.png"; 
import blogImg2 from "../Images/BlogSectionImage2.png";
import blogImg3 from "../Images/BlogSectionImage3.png";

const BlogSection = () => {
  return (
    <section className="blog-section">
      <div className="blog-header">
        <h2>Articles, stories and more</h2>
        <Link to="/about">
            <button className="blog-btn">Visit our blog</button>
        </Link>
      </div>

      <div className="blog-grid">
        <img src={blogImg1} alt="Blog 1" className="blog-img" />
        <img src={blogImg2} alt="Blog 2" className="blog-img" />
        <img src={blogImg3} alt="Blog 3" className="blog-img" />
      </div>
    </section>
  );
};

export default BlogSection;