import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

  return (
    <nav className="navbar">

      {/* Website Name */}

      <div className="navbar-logo">
        <Link to="/">
          Hussain Marble & Stones
        </Link>
      </div>


      {/* Navigation Tabs */}

      <div className="navbar-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/projects">
          Projects
        </Link>

        <Link to="/about">
          About
        </Link>

        <Link to="/contact">
          Contact
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;