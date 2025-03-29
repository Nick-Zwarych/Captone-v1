// src/Layout.jsx
import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import '../src/styles/Layout.css';

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Header with navigation */}
      <header className="header">
        <nav className="nav">
          <div className="nav-top">
            <span className="logo">Tasker App</span>

            <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
              ☰
            </button>
          </div>  

            <div className="nav-center">
              <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li><NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
                <li><NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink></li>
                <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink></li>
                <li><NavLink to="/create" className={({ isActive }) => isActive ? "active" : ""}>Create Task</NavLink></li>
                <li><NavLink to="/tasks" className={({ isActive }) => isActive ? "active" : ""}>Task List</NavLink></li>
              </ul>
            </div>
        </nav>
      </header>

      {/* Main content area */}
      <main style={{ padding: "1rem" }}>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/create">Create</Link>
          <Link to="/tasks">Task List</Link>
        </div>
        <p>&copy; {new Date().getFullYear()} Task Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

