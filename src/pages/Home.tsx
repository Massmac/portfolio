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
    rgb(0, 128, 255)
  ); /* Blue gradient */
  color: white;
  border-radius: 15px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  max-width: 1100px;
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
  gap: 15px; /* space between items */
  list-style-type: none;
  padding: 0;
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
            <HighlightedText>MySQL</HighlightedText>, and front-end technologies
            like <HighlightedText>React</HighlightedText>. Dedicated to
            delivering <HighlightedText>innovative solutions</HighlightedText>{" "}
            and creating impactful software.
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
            As a <HighlightedText>student at Holland College</HighlightedText>,
            I have gained hands-on experience in software development, database
            management, and system analysis through various projects and
            assignments. My coursework has covered programming in Java, C#, PHP,
            and web technologies, along with practical applications in database
            design, networking, and cybersecurity. I have worked on multiple
            projects, including inventory management systems, pressure washing
            service platforms, and student registration applications,
            demonstrating my ability to apply theoretical knowledge to
            real-world solutions. Additionally, I have developed strong
            problem-solving, analytical, and teamwork skills, preparing me for a
            career in software development and IT solutions.
          </CardDescription>
          <CardDescription>
            As a <HighlightedText>Package Handler at FedEx</HighlightedText>, I
            efficiently load and unload packages from delivery vehicles using
            both manual and powered equipment. I inspect packages for damage or
            defects, ensuring accurate reporting of any issues. My role involves
            transporting parcels between loading docks, delivery vehicles, and
            postal facilities while maintaining 98% accuracy in sorting and
            delivery preparation. Using a handheld scanner, I sort and process
            over 200 packages daily based on destination and service type.
            Additionally, I assist in loading delivery trucks to ensure timely
            and organized dispatch of shipments.
          </CardDescription>
          <CardDescription>
            As a <HighlightedText>Cashier at HartStores</HighlightedText>, I
            provide exceptional customer service by assisting shoppers with
            inquiries about products, store policies, and procedures. I
            efficiently operate the cash register and POS system to handle
            transactions, including cash, credit card, and check payments.
            Additionally, I issue receipts, process refunds, and manage price
            checks for special orders or discounts. Beyond cashier duties, I
            contribute to store operations by stocking shelves, tracking
            inventory, organizing merchandise, and improving product displays to
            enhance sales. I also work closely with management to perform
            various assigned tasks, ensuring smooth store operations.
          </CardDescription>
          <CardDescription>
            As a <HighlightedText>Manager at Mass Enterprise </HighlightedText>,
            I played a key role in enhancing customer satisfaction, optimizing
            budgets, and leading organizational growth. I developed and
            implemented strategies to improve customer loyalty, ensuring a
            strong client base. Additionally, I monitored budgets and
            expenditures to maintain cost-effectiveness without compromising
            quality standards. During times of organizational change or crises,
            I provided strong leadership and guidance to ensure stability. I
            also oversaw staff performance, addressing issues promptly to
            maintain a productive and efficient workforce.
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
