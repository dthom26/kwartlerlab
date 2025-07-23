import React, { useState } from "react";
import "../../styles/components/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/images/smallLabLogo.png" alt="Lab Logo" />
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
          <a href="#hero-section-container" onClick={() => setMenuOpen(false)}>Home</a>
        </li>
        <li>
          <a href="#about-pi-section" onClick={() => setMenuOpen(false)}>Faculty Bio</a>
        </li>
        <li>
          <a href="#team-section-container" onClick={() => setMenuOpen(false)}>Group Members</a>
        </li>
        <li>
          <a href="#recent-publications-section" onClick={() => setMenuOpen(false)}>Publications</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
