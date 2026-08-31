import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when navigating
  const handleNavigation = () => {
    setMenuOpen(false);
  };

  return (

    <nav className="navbar">

      {/* =========================
                LOGO
      ========================= */}

      <div className="logo">

        <h2>
          <Link
            to="/"
            onClick={handleNavigation}
          >
            Hussain Marble & Stones
          </Link>
        </h2>

      </div>


      {/* =========================
                HAMBURGER
      ========================= */}

      <button
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >

        <span></span>
        <span></span>
        <span></span>

      </button>


      {/* =========================
                NAVIGATION
      ========================= */}

      <div
        className={`right ${menuOpen ? "menu-open" : ""}`}
      >

        {/* =========================
                    HOME
        ========================= */}

        <Link
          to="/"
          onClick={handleNavigation}
        >
          Home
        </Link>


        {/* =========================
                    PROJECTS
        ========================= */}

        <Link
          to="/projects"
          onClick={handleNavigation}
        >
          Projects
        </Link>


        {/* =========================
                    ABOUT
        ========================= */}

        <Link
          to="/about"
          onClick={handleNavigation}
        >
          About
        </Link>


        {/* =========================
                    CONTACT
        ========================= */}

        <Link
          to="/contact"
          onClick={handleNavigation}
        >
          Contact
        </Link>

      </div>

    </nav>

  );
}

export default Navbar;