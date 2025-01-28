// src/components/Home.tsx
import React from "react";
import styled from "styled-components";

// Styled components for the Home page
const HomeContainer = styled.div`
  text-align: center;
  margin-top: 50px;
  padding: 20px;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  color: #333;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
  }
`;

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Heading>Welcome to My Portfolio</Heading>
      <Description>
        I'm a passionate developer, and this is my portfolio site. Explore my
        projects, skills, and experience!
      </Description>
      <Button>Contact Me</Button>
    </HomeContainer>
  );
};

export default Home;
