import React, { useState } from "react";
import "../../styles/components/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="images/smallLabLogo.png" alt="Lab Logo" />
      </div>
      <button
        className="navbar-toggle"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {/* Hamburger icon: three bars */}
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li>
          <a href="#hero-section-container" onClick={() => setMenuOpen(false)}>
            Home
          </a>
        </li>
        <li>
          <a
            href="#current-research-projects"
            onClick={() => setMenuOpen(false)}
          >
            Research
          </a>
        </li>
        <li>
          <a
            href="#recent-publications-section"
            onClick={() => setMenuOpen(false)}
          >
            Publications
          </a>
        </li>
        <li>
          <a href="#meet-the-team" onClick={() => setMenuOpen(false)}>
            Team
          </a>
        </li>
        <li>
          <a href="#news" onClick={() => setMenuOpen(false)}>
            News
          </a>
        </li>
        <li>
          <a href="#footer-container" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
