import React from "react";
import "./Skills.css";

const skillsData = [
  {
    title: "HTML/CSS",
    imageSrc: "/assets/skills/htmlcssLogo.png",
  },
  {
    title: "C#",
    imageSrc: "/assets/skills/CLogo.png",
  },
  {
    title: "Java",
    imageSrc: "/assets/skills/javaLogo.png",
  },
  {
    title: "React",
    imageSrc: "/assets/skills/reactLogo.png",
  },
  {
    title: "Kotlin",
    imageSrc: "/assets/skills/kotlinLogo.jpeg",
  },
  {
    title: "JavaScript",
    imageSrc: "/assets/skills/javascriptLogo.png",
  },
  {
    title: "Agile",
    imageSrc: "/assets/skillss/agileLogo.jpg",
  },
  {
    title: "Version Control",
    imageSrc: "/assets/skills/gitbucketLogo.png",
  },
  {
    title: "PHP",
    imageSrc: "/assets/skills/phpLogo.jpeg",
  },
  {
    title: "TypeScript",
    imageSrc: "/assets/skills/typescriptLogo.png",
  },
  {
    title: "MySQL",
    imageSrc: "/assets/skills/mysqlLogo.png",
  },
  {
    title: "Leadership",
    imageSrc: "/assets/skills/leadershipLogo.jpg",
  },
  {
    title: "Problem Solving",
    imageSrc: "/assets/skills/problemLogo.png",
  },
  {
    title: "Production Management",
    imageSrc: "/assets/skills/productionLogo.jpg",
  },
  {
    title: "Time Management",
    imageSrc: "/assets/skills/timeLogo.png",
  },
  {
    title: "Attention to Detail",
    imageSrc: "/assets/skills/detailLogo.png",
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
