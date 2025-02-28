import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="projects/one" className="nav-link">
              Project One
            </Link>
            <li className="nav-item">
              <Link to="projects/two" className="nav-link">
                Project Two
              </Link>
            </li>
            <li className="nav-item">
              <Link to="projects/three" className="nav-link">
                Project Three
              </Link>
            </li>
            <li className="nav-item">
              <Link to="./Contact" className="nav-link">
                Contact Me
              </Link>
            </li>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
