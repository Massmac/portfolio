// src/components/Projects.tsx
import React, { useState } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import htmlcssLogo from "../assets/htmlcssLogo.png";
import massEnterpriseLogo from "../assets/massEn.jpeg";
import pressureWashingLogo from "../assets/pWashing.png";

const ProjectsContainer = styled.div`
  text-align: center;
  margin-top: 50px;
  padding: 20px;
  background: linear-gradient(
    135deg,
    rgb(63, 71, 78),
    rgb(45, 95, 150)
  ); /* Blue gradient */
  color: white;
  border-radius: 15px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  max-width: 1100px;
  margin: 50px auto;
`;

const Heading = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #ffdd40;
`;

const ProjectList = styled.div`
  display: flex;
  flex-direction: column; /* Stack items vertically */
  gap: 20px;
  align-items: center; /* Center items horizontally */
  margin-top: 20px;
`;

const ProjectCard = styled.div`
  background: rgb(81, 116, 148);
  border: 1px solid #ddd;
  border-radius: 10px;
  width: 100%;
  max-width: 700px;
  padding: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
`;

const ProjectDescription = styled.p<{ isExpanded: boolean }>`
  font-size: 1rem;
  color: white;
  max-height: ${(props) => (props.isExpanded ? "none" : "100px")};
  overflow: hidden;
  text-overflow: ellipsis;
  transition: max-height 0.3s ease;
`;

const ProjectImage = styled.img`
  width: 60%;
  max-width: 400px;
  height: auto;
  margin-top: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ReadMoreButton = styled.button`
  background-color: #ffdd40;
  border: none;
  padding: 10px 20px;
  margin-top: 15px;
  color: white;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0c144;
  }
`;

const Projects: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const projectData = [
    {
      title: "Pressure Washing Service Platform - Android Mobile App",
      description:
        "An Android mobile application counterpart the Pressure Washing Service Platform, enabling users to book and manage residential and commercial pressure washing services." +
        "The app integrates seamlessly with the web platform, providing features for service selection, booking management, payment processing, and an admin dashboard for monitoring revenue and client requests",
      image: pressureWashingLogo, // Placeholder for image
    },
    {
      title: "Mass Enterprise Inventory Management System - Web Application",
      description: "" + "" + "" + "" + "",
      image: massEnterpriseLogo, // Placeholder for image
    },
    {
      title: "Pressure Washing Service Platform - Web Application",
      description: "" + "" + "" + "" + "",
      image: htmlcssLogo, // Placeholder for image
    },
  ];

  const handleToggleDescription = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <Layout>
      <ProjectsContainer>
        <Heading>Projects</Heading>
        <ProjectList>
          {projectData.map((project, index) => (
            <ProjectCard key={index}>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectDescription isExpanded={expandedIndex === index}>
                {project.description}
              </ProjectDescription>
              <ReadMoreButton onClick={() => handleToggleDescription(index)}>
                {expandedIndex === index ? "Show Less" : "Read More"}
              </ReadMoreButton>
            </ProjectCard>
          ))}
        </ProjectList>
      </ProjectsContainer>
    </Layout>
  );
};

export default Projects;
