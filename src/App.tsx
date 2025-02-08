import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProjectOne from "./pages/projects/ProjectOne";
import ProjectTwo from "./pages/projects/ProjectTwo";
import ProjectThree from "./pages/projects/ProjectThree";
import Contacts from "./pages/contact/Contact";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contacts />} />
          <Route path="projects" element={<ProjectOne />} />
          <Route path="projects" element={<ProjectTwo />} />
          <Route path="projects" element={<ProjectThree />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
