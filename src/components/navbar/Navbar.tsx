import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import closeNav from "../../assets/nav/closeIcon.png";
import menuIcon from "../../assets/nav/menuIcon.png";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Menu Toggle Button */}
        <img
          className="menu-btn"
          src={isMenuOpen ? closeNav : menuIcon}
          alt="menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />

        {/* Navigation Menu */}
        <ul
          className={`nav-menu ${isMenuOpen ? "menu-open" : ""}`}
          onClick={() => setIsMenuOpen(false)}
        >
          <li className="nav-item1">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects/one" className="nav-link">
              Project One
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects/two" className="nav-link">
              Project Two
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects/three" className="nav-link">
              Project Three
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
