import React from "react";
import "./Skills.css";
import cLogo from "../../assets/skills/cLogo.png";
import agileLogo from "../../assets/skills/agileLogo.jpg";
import gitBucketLogo from "../../assets/skills/gitbucketLogo.png";
import htmlcssLogo from "../../assets/skills/htmlcssLogo.png";
import javaLogo from "../../assets/skills/javaLogo.png";
import javascriptLogo from "../../assets/skills/javascriptLogo.png";
import kotlinLogo from "../../assets/skills/kotlinLogo.jpeg";
import mysqlLogo from "../../assets/skills/mysqlLogo.png";
import phpLogo from "../../assets/skills/phpLogo.jpeg";
import reactLogo from "../../assets/skills/reactLogo.png";
import typescriptlogo from "../../assets/skills/typescriptlogo.png";

const skillsData = [
  {
    title: "HTML/CSS",
    imageSrc: htmlcssLogo,
  },
  {
    title: "C#",
    imageSrc: cLogo,
  },
  {
    title: "Java",
    imageSrc: javaLogo,
  },
  {
    title: "React",
    imageSrc: reactLogo,
  },
  {
    title: "Kotlin",
    imageSrc: kotlinLogo,
  },
  {
    title: "JavaScript",
    imageSrc: javascriptLogo,
  },
  {
    title: "Agile",
    imageSrc: agileLogo,
  },
  {
    title: "Version Control",
    imageSrc: gitBucketLogo,
  },
  {
    title: "PHP",
    imageSrc: phpLogo,
  },
  {
    title: "TypeScript",
    imageSrc: typescriptlogo,
  },
  {
    title: "MySQL",
    imageSrc: mysqlLogo,
  },
];

const Skills: React.FC = () => {
  return (
    <section className="skills">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-card">
            <img
              src={skill.imageSrc}
              alt={skill.title}
              className="skill-image"
            />
            <h3 className="skill-title">{skill.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
