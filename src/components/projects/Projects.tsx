import React from "react";
import "./Projects.css";
import massEn from "../../assets/projects/massEnterprise.png";
import pressureWashing from "../../assets/projects/pWashing.png";
import massMobile from "../../assets/projects/Mobile.jpg";
import { Link } from "react-router-dom";

const projectsData = [
  {
    title: "Mass Enterprise Inventory System",
    imageSrc: massEn,
    summary:
      "A web-based inventory management system for Mass Enterprise, designed to streamline the management of electronic products." +
      "The application provides business owners with an intuitive interface to add, update, and delete products, customers, and orders, track inventory levels in real time, and process secure online payments." +
      "Additionally, the system offers monthly income tracking, detailed reporting, and role-based access control for Admins and Employees.",
    techUsed:
      "Technologies used: Java, Spring Boot, MySQL, Spring Security, TypeScript, React, HTML, CSS ",
    caseStudyLink: "/projects/one",
  },
  {
    title: "Pressure Washing - Mobile Application",
    imageSrc: massMobile,
    summary:
      "An Android mobile application counterpart the Pressure Washing Service Platform, enabling users to book and manage residential and commercial pressure washing services. " +
      "The app integrates seamlessly with the web platform, providing features for selection, booking management, payment processing, and an admin dashboard for monitoring revenue and client requests.",
    techUsed: "Technologies: Kotlin, Android Studio, REST APIs",
    caseStudyLink: "/projects/two",
  },
  {
    title: "Pressure Washing - Web Application",
    imageSrc: pressureWashing,
    summary:
      "A web Application enabling users to schedule and manage residential and commercial pressure washing services. " +
      "The application supports service selection, views, and updates appointment booking. " +
      "It includes an admin dashboard for business owners to monitor requests, client details, and revenue, with a feature to calculate monthly income based on bookings and discounts.",
    techUsed:
      "Technologies: Java, Spring Boot, MySQL, HTML, CSS, JDBC, File I/O ",
    caseStudyLink: "/projects/three",
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
            <p>{project.techUsed}</p>
            <Link to={project.caseStudyLink} className="case-study-link">
              View Case Study
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
