import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Projects from "./pages/Projects.tsx";
import Contact from "./pages/Contact.tsx";
import Resume from "./pages/Resume.tsx";

const App: React.FC = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> |<Link to="/projects">Projects</Link> |
        <Link to="/contact">Contact</Link> |<Link to="/resume">Resume</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
};

export default App;
