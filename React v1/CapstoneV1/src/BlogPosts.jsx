// src/pages/BlogPosts.jsx
import React from "react";
import "../src/styles/BlogPosts.css";
import blogPost1 from "../src/Images/BlogSectionImage1.png"; 
import blogPost2 from "../src/Images/BlogSectionImage2.png";
import blogPost3 from "../src/Images/BlogSectionImage3.png";

const BlogPosts = () => {
  return (
    <div className="blog-posts-page">
      <h1 className="page-title">Blog Posts</h1>

      <div className="blog-header">
        <div className="blog-intro">
          <h2>Helping you <br /> get more done</h2>
          <p>
            Show me <span className="link">all topics ▼</span> ordered by <span className="link">popularity ▼</span>
          </p>
        </div>
        <div className="blog-search">
          <input type="text" placeholder="Search ..." />
        </div>
      </div>

      <div className="article-section">
        <p className="article-count">We found 793 articles for you</p>
        <div className="article-grid">
          <img src={blogPost1} alt="article1" />
          <img src={blogPost2} alt="article2" />
          <img src={blogPost3} alt="article3" />
        </div>
      </div>

      <div className="blog-form-section">
        <form className="blog-form" onSubmit={(e) => e.preventDefault()}>
          <h3>Create Your Blog Post</h3>
          <input type="text" placeholder="Enter Your Name Here" />
          <input type="email" placeholder="Enter Your Email Here" />
          <textarea placeholder="Blog Post Description Here" rows="5" />
          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
};

export default BlogPosts;