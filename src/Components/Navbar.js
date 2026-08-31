import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

  const [showTabs, setShowTabs] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {

    const handleScroll = () => {

      // Only apply this behavior on mobile
      if (window.innerWidth > 700) {
        setShowTabs(true);
        return;
      }

      const currentScrollY = window.scrollY;

      // At top
      if (currentScrollY <= 10) {
        setShowTabs(true);
      }

      // Scroll DOWN
      else if (currentScrollY > lastScrollY) {
        setShowTabs(false);
      }

      // Scroll UP
      else if (currentScrollY < lastScrollY) {
        setShowTabs(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, [lastScrollY]);


  return (
    <nav
      className={`navbar ${showTabs
          ? "navbar-tabs-visible"
          : "navbar-tabs-hidden"
        }`}
    >

      {/* =================================================
                WEBSITE NAME
            ================================================= */}

      <div className="navbar-logo">

        <Link to="/">
          Hussain Marble & Stones
        </Link>

      </div>


      {/* =================================================
                MOBILE TAB BOX
            ================================================= */}

      <div
        className={`navbar-links ${showTabs
            ? "tabs-visible"
            : "tabs-hidden"
          }`}
      >

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