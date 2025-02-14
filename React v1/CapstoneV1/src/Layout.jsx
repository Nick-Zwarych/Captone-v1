// src/Layout.jsx
import React from "react";
import { Outlet, NavLink } from "react-router-dom";

function Layout() {
  return (
    <div>
      {/* Header with navigation */}
      <header style={{ background: "#eee", padding: "1rem" }}>
        <nav>
          <ul style={{ display: "flex", listStyle: "none", gap: "1rem" }}>
            <li>
              <NavLink to="/" end activeStyle={{ fontWeight: "bold" }}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeStyle={{ fontWeight: "bold" }}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeStyle={{ fontWeight: "bold" }}>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/create" activeStyle={{ fontWeight: "bold" }}>
                Create Task
              </NavLink>
            </li>
            <li>
              <NavLink to="/tasks" activeStyle={{ fontWeight: "bold" }}>
                Task List
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main content area */}
      <main style={{ padding: "1rem" }}>
        <Outlet />
      </main>

      {/* Footer */}
      <footer
        style={{ background: "#eee", padding: "1rem", marginTop: "1rem" }}
      >
        <p>
          &copy; {new Date().getFullYear()} Task Company. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Layout;
