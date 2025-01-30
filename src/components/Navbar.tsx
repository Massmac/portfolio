import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Styled component for the Navbar container
const NavbarContainer = styled.nav`
  position: sticky;
  top: 0;
  background: linear-gradient(135deg, rgb(77, 81, 85), rgb(97, 111, 126));
  padding: 15px 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  z-index: 100;
  transition: background 0.3s ease;
`;

// Styled component for the Navbar content
const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
`;

// Styled component for the Navbar links container
const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    margin-top: 20px;
    position: absolute;
    top: 70px;
    left: 0;
    background-color: rgb(63, 69, 75);
    width: 100%;
    height: 100vh;
    transform: ${(props) =>
      props.isOpen ? "translateX(0)" : "translateX(-100%)"};
    transition: transform 0.3s ease;
  }
`;

// Styled component for each link
const NavLink = styled(Link)`
  color: white;
  font-size: 1.1rem;
  font-weight: 500;
  text-decoration: none;
  padding: 8px 15px;
  border-radius: 25px;
  transition: all 0.3s ease;
  text-transform: uppercase;

  &:hover {
    background-color: #ffdd40;
    color: #333;
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  &:active {
    background-color: #e6c100;
    transform: translateY(0);
  }
`;

// Styled component for the hamburger menu (mobile only)
const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    width: 30px;
    height: 25px;
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 200;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    height: 3px;
    width: 100%;
    background-color: white;
    border-radius: 5px;
    transition: transform 0.3s ease;
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
  }

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 3px;
    width: 100%;
    background-color: white;
    border-radius: 5px;
  }

  &:hover::before {
    transform: rotate(45deg);
  }

  &:hover::after {
    transform: rotate(-45deg);
  }
`;

const Navbar: React.FC = () => {
  // State for managing the mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer>
      <NavbarContent>
        {/* Logo */}
        <NavLink to="/">My Portfolio</NavLink>

        {/* Hamburger Menu for Mobile */}
        <Hamburger onClick={toggleMenu}>
          <span></span>
        </Hamburger>

        {/* Navbar Links */}
        <NavLinks isOpen={isOpen}>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </NavLinks>
      </NavbarContent>
    </NavbarContainer>
  );
};

export default Navbar;
