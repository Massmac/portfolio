// src/components/Projects.tsx
import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const ProjectsContainer = styled.div`
  text-align: center;
  margin-top: 50px;
  padding: 20px;
  background: linear-gradient(
    135deg,
    rgb(0, 0, 255),
    rgb(0, 128, 255)
  ); /* Blue gradient */
  color: white;
  border-radius: 15px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  max-width: 1100px;
  margin: 50px auto;
`;

const Heading = styled.h2`
  font-size: 2rem;
  color: #333;
`;

const ProjectList = styled.div`
  display: flex;
  flex-direction: column; /* Stack items vertically */
  gap: 20px;
  align-items: center; /* Center items horizontally */
  margin-top: 20px;
`;

const ProjectCard = styled.div`
  background: #fff;
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
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

const Projects: React.FC = () => {
  const projectData = [
    {
      title: "Pressure Washing Service Platform - Android Mobile App",
      description:
        "An Android mobile application counterpart the Pressure Washing Service Platform, enabling users to book and manage residential and commercial pressure washing services from the convenience of their mobile devices.",
    },
    { title: "Project Two", description: "Description of project two." },
    { title: "Project Three", description: "Description of project three." },
    { title: "Project Four", description: "Description of project four." },
  ];

  return (
    <Layout>
      <ProjectsContainer>
        <Heading>Projects</Heading>
        <ProjectList>
          {projectData.map((project, index) => (
            <ProjectCard key={index}>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
            </ProjectCard>
          ))}
        </ProjectList>
      </ProjectsContainer>
    </Layout>
  );
};

export default Projects;
