// src/components/Resume.tsx
import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

// Styled components for the Resume section
const ResumeContainer = styled.div`
  text-align: center;
  padding: 50px 20px;
  background-color: rgb(63, 71, 78);
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

const Resume: React.FC = () => {
  return (
    <Layout>
      <ResumeContainer>
        <Heading>Michael Tettey Tamatey</Heading>

        {/* Summary Section */}
        <SectionTitle>Summary</SectionTitle>
        <p>
          Driven and detail-oriented Computer Information Systems student at
          Holland College with hands-on experience in software development,
          database management, and web application design. Proficient in Java,
          C#, PHP, MySQL, and front-end technologies (HTML, CSS, JavaScript).
        </p>

        {/* Skills Section */}
        <SectionTitle>Skills</SectionTitle>
        <List>
          <ListItem>JavaScript, C#, Java, HTML/CSS, MySQL, PHP, React</ListItem>
          <ListItem>Critical Thinking, Problem-Solving</ListItem>
          <ListItem>Package Handling, Production Documentation</ListItem>
          <ListItem>PowerPoint</ListItem>
        </List>

        {/* Education Section */}
        <SectionTitle>Education</SectionTitle>
        <List>
          <ListItem>
            Diploma: Computer Information Systems - Holland College (Expected
            04/2025)
          </ListItem>
        </List>

        {/* Projects Section */}
        <SectionTitle>Projects</SectionTitle>
        <List>
          <ListItem>
            <strong>Pressure Washing Service Platform (Mobile App)</strong> -
            Java, Firebase
          </ListItem>
          <ListItem>
            <strong>Mass Enterprise Inventory Management System</strong> - Java,
            Spring Boot, MySQL
          </ListItem>
          <ListItem>
            <strong>Windows Forms Database Management System</strong> - C#, .NET
          </ListItem>
          <ListItem>
            <strong>Dynamic Website with User Authentication</strong> - PHP,
            MySQL
          </ListItem>
          <ListItem>
            <strong>Product Showcase Webpage</strong> - HTML, CSS, JavaScript
          </ListItem>
        </List>

        {/* Experience Section */}
        <SectionTitle>Experience</SectionTitle>
        <List>
          <ListItem>
            <strong>Package Handler</strong> - FedEx (09/2023 - Present)
          </ListItem>
          <ListItem>
            <strong>Cashier</strong> - HartStores (09/2023 - Present)
          </ListItem>
          <ListItem>
            <strong>Housekeeping Attendant</strong> - UPEI (04/2023 - 09/2023)
          </ListItem>
          <ListItem>
            <strong>Manager</strong> - Mass Enterprise (02/2022 - 11/2022)
          </ListItem>
        </List>

        {/* Referees Section */}
        <SectionTitle>Referees</SectionTitle>
        <List>
          <ListItem>Sunday Agyekum - Senior Manager, Federal Express</ListItem>
          <ListItem>
            Donnie McKinnon - Learning Manager, Holland College
          </ListItem>
          <ListItem>Candace Ripley - Store Manager, HartStores</ListItem>
        </List>
      </ResumeContainer>
    </Layout>
  );
};

export default Resume;
