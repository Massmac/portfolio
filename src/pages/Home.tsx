import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

// Styled components for the Home page
const HomeContainer = styled.div`
  text-align: center;
  margin-top: 50px;
  padding: 20px;
  background: linear-gradient(135deg, #007bff, #0056b3);
  color: white;
  border-radius: 15px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  max-width: 1200px;
  margin: 50px auto;
`;

const Heading = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #ffdd40;
`;

const ProfileCard = styled.div`
  background: rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.4);
  margin-bottom: 40px;
  display: inline-block;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 4px solid #ffdd40;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;

const ProfileName = styled.h3`
  font-size: 1.5rem;
  color: #ffdd40;
  margin-top: 20px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #f0f0f0;
  margin-bottom: 40px;
  line-height: 1.6;
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  margin: 20px 0;
  transition: transform 0.3s ease;
  text-align: left;

  &:hover {
    transform: scale(1.05);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.6rem;
  color: #ffdd40;
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  font-size: 1.1rem;
  color: #f0f0f0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
`;

const Button = styled.button`
  background-color: #ffdd40;
  color: #333;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(255, 221, 64, 0.3);
  }

  &:focus {
    outline: none;
  }
`;

const HighlightedText = styled.span`
  color: #ffdd40;
  font-weight: bold;
`;

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <HomeContainer>
        <Heading>Welcome to My Portfolio</Heading>
        {/* Profile Card */}
        <ProfileCard>
          <ProfileImage src="../assets/profilePic.jpg" alt="Profile Picture" />
          <ProfileName>Michael Tamatey</ProfileName>
          <Description>
            Driven and detail-oriented{" "}
            <HighlightedText>Computer Information Systems</HighlightedText>{" "}
            student at <HighlightedText>Holland College</HighlightedText>.
            Proficient in <HighlightedText>Java</HighlightedText>,{" "}
            <HighlightedText>C#</HighlightedText>,{" "}
            <HighlightedText>PHP</HighlightedText>,{" "}
            <HighlightedText>MySQL</HighlightedText>, and front-end technologies
            like <HighlightedText>React</HighlightedText>. Dedicated to
            delivering <HighlightedText>innovative solutions</HighlightedText>{" "}
            and creating impactful software.
          </Description>
        </ProfileCard>

        {/* Experience Card */}
        <Card>
          <CardTitle>Experience</CardTitle>
          <CardDescription>
            I have gained experience as a Software Developer Intern at XYZ Corp.
            and Junior Web Developer at ABC Technologies, working on a variety
            of exciting projects, from full-stack development to mobile apps.
          </CardDescription>
        </Card>

        {/* Skills Card */}
        <Card>
          <CardTitle>Technical Skills</CardTitle>
          <CardDescription>
            Java, C#, PHP, React, TypeScript, MySQL, PostgreSQL, Git, Agile
          </CardDescription>
        </Card>

        <ButtonContainer>
          <Button onClick={() => navigate("/contact")}>Contact Me</Button>
          <Button onClick={() => navigate("/projects")}>View Projects</Button>
        </ButtonContainer>
      </HomeContainer>
    </Layout>
  );
};

export default Home;
