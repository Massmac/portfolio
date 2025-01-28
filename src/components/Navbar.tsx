// src/components/Navbar.tsx
import React from "react";
import styled from "styled-components";

// Create styled components
const NavbarContainer = styled.nav`
  background-color: #333;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  margin: 0 1rem;
  font-size: 1.2rem;

  &:hover {
    color: #ddd;
  }
`;

const Navbar: React.FC = () => (
  <NavbarContainer>
    <div>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/projects">Projects</NavLink>
    </div>
  </NavbarContainer>
);

export default Navbar;
