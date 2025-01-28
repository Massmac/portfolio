// src/components/Resume.tsx
import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

// Styled components for the Resume section
const ResumeContainer = styled.div`
  text-align: center;
  padding: 50px 20px;
  background-color: #f4f4f4;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  color: #333;
`;

const SectionTitle = styled.h3`
  font-size: 1.8rem;
  color: #444;
  margin-top: 30px;
  text-decoration: underline;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
`;

const ListItem = styled.li`
  font-size: 1.1rem;
  color: #555;
  margin: 10px 0;
  text-align: left;
`;

const PdfContainer = styled.div`
  width: 100%;
  height: 600px;
  margin-top: 20px;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const Resume: React.FC = () => {
  return (
    <Layout>
      <ResumeContainer>
        <Heading>My Resume</Heading>

        {/* PDF Viewer Section */}
        <PdfContainer>
          <iframe src="/resume.pdf" title="Resume"></iframe>
        </PdfContainer>

        {/* Skills Section */}
        <SectionTitle>Skills</SectionTitle>
        <List>
          <ListItem>
            Proficient in Java, C#, PHP, TypeScript, JavaScript, Kotlin
          </ListItem>
          <ListItem>
            Experienced with front-end technologies (HTML, CSS, React)
          </ListItem>
          <ListItem>
            Strong database management skills (MySQL, PostgreSQL)
          </ListItem>
          <ListItem>
            Skilled in software development and web application design
          </ListItem>
          <ListItem>Familiar with version control (Git, GitHub)</ListItem>
          <ListItem>Strong problem-solving and debugging skills</ListItem>
        </List>

        {/* Education Section */}
        <SectionTitle>Education</SectionTitle>
        <List>
          <ListItem>
            <strong>Holland College</strong> – Bachelor of Computer Information
            Systems, 2024
          </ListItem>
        </List>

        {/* Work Experience Section */}
        <SectionTitle>Work Experience</SectionTitle>
        <List>
          <ListItem>
            <strong>Software Developer Intern</strong> – XYZ Corp. (2023 - 2024)
          </ListItem>
          <ListItem>
            <strong>Junior Web Developer</strong> – ABC Technologies (2022 -
            2023)
          </ListItem>
        </List>

        {/* Certifications Section */}
        <SectionTitle>Certifications</SectionTitle>
        <List>
          <ListItem>Certified Java Developer (2023)</ListItem>
          <ListItem>Certified Web Developer (2022)</ListItem>
        </List>
      </ResumeContainer>
    </Layout>
  );
};

export default Resume;
