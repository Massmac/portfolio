import React from "react";
import "./Projects.css";

const projectsData = [
  {
    title: "Mass Enterprise Inventory System",
    imageSrc: "../assets/projects/projectOne.jpg", // Replace with your image path
    summary:
      "A brief summary of what this project is about, its goals, and technologies used.",
    caseStudyLink: ".../pages/projects/ProjectOne",
  },
  {
    title: "Pressure Washing - Mobile Application",
    imageSrc: "./assets/projects/massEn.jpeg", // Replace with your image path
    summary:
      "This project focuses on solving a specific problem using advanced techniques and tools.",
    caseStudyLink: "/pages/projects/ProjectTwo",
  },
  {
    title: "Pressure Washing - Web Application",
    imageSrc: "/assets/projects/projectThree.jpg", // Replace with your image path
    summary:
      "An innovative project that addresses real-world challenges in an efficient way.",
    caseStudyLink: "./pages/projects/ProjectThree",
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
            <a href={project.caseStudyLink} className="case-study-link">
              View Case Study
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
