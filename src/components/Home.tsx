import React from "react";
import Hero from "./hero/Hero";
import About from "./about/About";
import Skills from "./skills/Skills";
import Experience from "./experience/Experience";
import Projects from "./projects/Projects";

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
    </div>
  );
};

export default Home;
