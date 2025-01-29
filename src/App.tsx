import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Projects from "./pages/Projects.tsx";
import Contact from "./pages/Contact.tsx";
import Resume from "./pages/Resume.tsx";
import { createGlobalStyle } from "styled-components";

// Global style for the entire page (body)
const GlobalStyle = createGlobalStyle`
  body {
    background-color: rgb(25, 0, 255);  /* Solid blue background */
    margin: 0;
    font-family: Arial, sans-serif;
  }
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle /> {/* Apply global styles */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
