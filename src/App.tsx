import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/navbar/Layout";
import Home from "./components/Home";
import Contacts from "./components/contact/Contact";
import ProjectOne from "./pages/ProjectOne";
import ProjectTwo from "./pages/ProjectTwo";
import ProjectThree from "./pages/ProjectThree";
import Footer from "./components/footer/Footer";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Wrap all routes inside Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* Default Route */}
          <Route path="contact" element={<Contacts />} />
          <Route path="projects/one" element={<ProjectOne />} />
          <Route path="projects/two" element={<ProjectTwo />} />
          <Route path="projects/three" element={<ProjectThree />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
