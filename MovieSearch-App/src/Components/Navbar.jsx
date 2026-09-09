import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav-bar">
      <h1>🍿 Movie Search</h1>
      <div className="nav-links">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/about">
          About
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;