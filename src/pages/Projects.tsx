// src/components/Projects.tsx
import React from "react";
import styled from "styled-components";

const ProjectsContainer = styled.div`
  text-align: center;
  margin: 50px auto;
  padding: 20px;
  max-width: 1200px;
`;

const Heading = styled.h2`
  font-size: 2rem;
  color: #333;
`;

const ProjectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
`;

const ProjectCard = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  width: 300px;
  padding: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: left;

  &:hover {
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
    { title: "Project One", description: "Description of project one." },
    { title: "Project Two", description: "Description of project two." },
    { title: "Project Three", description: "Description of project three." },
  ];

  return (
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
  );
};

export default Projects;
