// src/components/Layout.tsx
import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";

// Styled component for the Layout container
const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensures the container takes full screen height */
  background-color: #f9f9f9;
`;

const Content = styled.main`
  flex: 1; /* Ensures the main content area takes the remaining space */
  padding: 20px;
`;

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <LayoutContainer>
      {/* Navbar - will be included on all pages */}
      <Navbar />

      {/* Content - children will be passed as the page content */}
      <Content>{children}</Content>
    </LayoutContainer>
  );
};

export default Layout;
