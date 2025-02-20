import React from "react";
import "./Projects.css";
import massEn from "../../assets/projects/massEn.jpeg";
import pressureWashing from "../../assets/projects/pWashing.png";

const projectsData = [
  {
    title: "Mass Enterprise Inventory System",
    imageSrc: massEn, // Replace with your image path
    summary:
      "This is a web application that enables users to schedule and managed" +
      "residential and commercial pressure washing services.",
    caseStudyLink: "projects/one",
  },
  {
    title: "Pressure Washing - Mobile Application",
    imageSrc: pressureWashing, // Replace with your image path
    summary:
      "This project focuses on solving a specific problem using advanced techniques and tools.",
    caseStudyLink: "projects/two",
  },
  {
    title: "Pressure Washing - Web Application",
    imageSrc: pressureWashing, // Replace with your image path
    summary:
      "An innovative project that addresses real-world challenges in an efficient way.",
    caseStudyLink: "projects/three",
  },
];

const Projects: React.FC = () => {
  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.imageSrc}
              alt={project.title}
              className="project-image"
            />
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <a href={project.caseStudyLink || ""} className="case-study-link">
              View Case Study
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
