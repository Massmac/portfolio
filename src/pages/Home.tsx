import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import profilePic from "../assets/profilePic.jpg";
import javascriptLogo from "../assets/javascriptLogo.png";
import cLogo from "../assets/cLogo.png";
import gitbucketLogo from "../assets/gitbucketLogo.png";
import javaLogo from "../assets/javaLogo.png";
import kotlinLogo from "../assets/kotlinLogo.jpeg";
import mysqlLogo from "../assets/mysqlLogo.png";
import phpLogo from "../assets/phpLogo.jpeg";
import reactLogo from "../assets/reactLogo.png";
import typescriptLogo from "../assets/typescriptLogo.png";
import agileLogo from "../assets/agileLogo.jpg";
import htmlcssLogo from "../assets/htmlcssLogo.png";

// Styled components for the Home page
const HomeContainer = styled.div`
  text-align: center;
  margin-top: 50px;
  padding: 20px;
  background: linear-gradient(
    135deg,
    rgb(63, 71, 78),
    rgb(53, 79, 107)
  ); /* Blue gradient */
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
  color: rgb(247, 203, 8);
`;
const Headings = styled.h2`
  color: rgb(231, 225, 225);
  font-size: 2rem;
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
  border: 4px solid white;
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

  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 items per row */
  gap: 20px; /* space between items */

  &:hover {
    transform: scale(1.05);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.6rem;
  color: #ffdd40;
  margin-bottom: 10px;
  grid-column: span 3; /* Span all 3 columns */
  text-align: center;
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

const SkillItem = styled.li`
  font-size: 1.1rem;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 25px; // You can adjust the size of the logos
    height: 30px;
    border-radius: 40%; // Make the image round
    object-fit: cover; // Ensure the image fits well within the circle
  }
`;

const SkillList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 items per row */
  gap: 30px; /* space between items */
  list-style-type: none;
  padding: 0;
  align-items: center;
`;

const SkillItemSoft = styled.li`
  font-size: 1.1rem;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  gap: 10px;

  &::before {
    content: "✔";
    color: #ffdd40;
    font-weight: bold;
  }
`;

const skills = [
  { src: javascriptLogo, alt: "JavaScript Logo", name: "JavaScript" },
  { src: htmlcssLogo, alt: "HTML Logo", name: "HTML/CSS" },
  { src: kotlinLogo, alt: "Kotlin Logo", name: "Kotlin" },
  { src: typescriptLogo, alt: "TypeScript Logo", name: "TypeScript" },
  { src: javaLogo, alt: "Java Logo", name: "Java" },
  { src: reactLogo, alt: "React Logo", name: "React" },
  { src: phpLogo, alt: "PHP Logo", name: "PHP" },
  { src: mysqlLogo, alt: "MySQL Logo", name: "MySQL" },
  { src: cLogo, alt: "C# Logo", name: "C#" },
  { src: gitbucketLogo, alt: "Git & Bitbucket Logo", name: "Git & Bitbucket" },
  { src: agileLogo, alt: "Agile Logo", name: "Agile Methodologies" },
];

// Function to shuffle the skills array
const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
};

const Home: React.FC = () => {
  const shuffledSkills = shuffleArray([...skills]); // Shuffle skills array
  const navigate = useNavigate();

  return (
    <Layout>
      <HomeContainer>
        <Heading>Welcome to My Portfolio</Heading>
        {/* Profile Card */}
        <ProfileCard>
          <ProfileImage src={profilePic} />
          <ProfileName>Michael Tettey Tamatey</ProfileName>
          <Description>
            Driven and detail-oriented{" "}
            <HighlightedText>Computer Information Systems</HighlightedText>{" "}
            student at <HighlightedText>Holland College</HighlightedText>.
            Proficient in <HighlightedText>Java</HighlightedText>,{" "}
            <HighlightedText>C#</HighlightedText>,{" "}
            <HighlightedText>PHP</HighlightedText>,{" "}
            <HighlightedText>MySQL</HighlightedText>,
            <HighlightedText>JavaScript</HighlightedText>,
            <HighlightedText>TypeScript</HighlightedText>, and front-end
            technologies like <HighlightedText>HTML</HighlightedText>,
            <HighlightedText>CSS</HighlightedText>,{" "}
            <HighlightedText>React</HighlightedText>. Dedicated to delivering{" "}
            <HighlightedText>innovative solutions</HighlightedText> and creating
            impactful software.
            <Link to="/projects" style={{ color: "white" }}>
              {" "}
              Click here to view my PROJECTS.
            </Link>
          </Description>
        </ProfileCard>

        {/* Experience Card */}
        <Card>
          <CardTitle>Experience</CardTitle>
          <CardDescription>
            <Headings> Web Development</Headings>
            Skilled in building responsive and dynamic web applications using
            Java, Spring Boot, HTML, CSS, and JavaScript. Experienced in
            integrating RESTful APIs and handling database interactions with
            JDBC and Hibernate for seamless backend operations.
          </CardDescription>
          <CardDescription>
            <Headings> Mobile Development</Headings>
            Proficient in developing Android applications using Kotlin in
            Android Studio. Experienced in implementing user authentication,
            real-time data synchronization, and push notifications. Skilled in
            creating offline-first applications and optimizing UI/UX for mobile
            users.
          </CardDescription>
          <CardDescription>
            <Headings> Database Management</Headings>
            Experienced in database design and optimization using MySQL. Skilled
            in managing relational databases with Spring Data JPA and
            implementing efficient queries for improved performance and
            scalability.
          </CardDescription>
          <CardDescription>
            <Headings> API Development</Headings>
            Skilled in building robust and scalable RESTful APIs using Spring
            Boot. Experienced in integrating third-party APIs and ensuring
            secure, efficient data exchange between frontend and backend
            systems.
          </CardDescription>
          <CardDescription>
            <Headings> Full-Stack Development</Headings>
            Proficient in full-stack development using Java, JavaScript ,Php,
            C#, TypeScript, and Kotlin for backend and HTML/CSS and React for
            frontend. Experienced in managing user authentication, business
            logic, and multithreading to ensure a scalable and secure
            application architecture.
          </CardDescription>
          <CardDescription>
            <Headings> Version Control</Headings>
            Proficient in Git and Bitbucket for version control and
            collaboration. Experienced in branching strategies, pull requests,
            and resolving merge conflicts to maintain clean and efficient
            codebases.
          </CardDescription>
          <CardDescription>
            <Headings> Package Handler at FedEx</Headings>
            Efficiently load and unload packages, inspecting for damage and
            ensuring accurate reporting. Sort and process 200+ packages daily
            using handheld scanners, maintaining 98% accuracy, and assisting in
            loading trucks for timely dispatch.
          </CardDescription>
          <CardDescription>
            <Headings> Cashier at HartStores</Headings>
            Provide exceptional customer service, operate the cash register for
            various payment methods, process refunds, and manage price checks.
            Assist in stocking, organizing, and improving product displays while
            ensuring smooth store operations.
          </CardDescription>
          <CardDescription>
            <Headings> Manager at Mass Enterprise</Headings>
            Implemented strategies to enhance customer loyalty and optimize
            budgets. Provided leadership during organizational changes,
            monitored expenditures, and ensured cost-effectiveness while
            overseeing staff performance and maintaining a productive, efficient
            workforce.
          </CardDescription>
        </Card>

        {/* Skills Card */}
        <Card>
          <CardTitle>Technical Skills</CardTitle>
          <SkillList>
            {shuffledSkills.map((skill, index) => (
              <SkillItem key={index}>
                <img src={skill.src} alt={skill.alt} />
                {skill.name}
              </SkillItem>
            ))}
          </SkillList>
        </Card>

        <Card>
          <CardTitle>Soft Skills</CardTitle>
          <SkillItemSoft>Problem-Solving</SkillItemSoft>
          <SkillItemSoft>Time Management</SkillItemSoft>
          <SkillItemSoft>Time Management</SkillItemSoft>
          <SkillItemSoft>Good Communication Skills</SkillItemSoft>
          <SkillItemSoft>Leadership</SkillItemSoft>
        </Card>

        <Card>
          <CardTitle>Education</CardTitle>
          <CardDescription>
            DIPLOMA: 2023-Current - COMPUTER INFORMATION SYSTEMS, Holland
            College, Charlottetown, PE, C1A 4Z1.
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
