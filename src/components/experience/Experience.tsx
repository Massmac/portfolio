import React from "react";
import "./Experience.css";

const experienceData = [
  {
    company: "Federal Express",
    position: "Package Handler",
    date: "Sept, 2023 - Present",
    bulletPoints: [
      "Processed 200 packages daily, ensuring 98% package sorting and delivery preparation accuracy.",
      "Transported parcels between loading docks, delivery vehicles, and post office facilities.",
      "Scanned and sorted packages according to destinations and service type using a handheld scanner.",
    ],
  },
  {
    company: "Hart Stores",
    position: "Store Associate",
    date: "sept, 2023 - Present",
    bulletPoints: [
      "Helped customers find specific products, answered questions, and offered product advice",
      "Conducted price checks for special orders or discounts as requested by customers.",
      "Performed other duties as assigned by management.",
    ],
  },
  {
    company: "Mass Enterprise",
    position: "Manager",
    date: "Feb, 2022 - Nov, 2022",
    bulletPoints: [
      "Monitored budgets and expenditures to ensure cost-effectiveness while maintaining quality standards.",
      "Provided leadership during times of organizational change or crises.",
      "Monitored staff performance and addressed issues.",
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <section className="experience">
      <h2>Experience</h2>
      {experienceData.map((exp, index) => (
        <div key={index} className="experience-card">
          <h3>{exp.company}</h3>
          <h4>
            {exp.position} | <span>{exp.date}</span>
          </h4>
          <ul>
            {exp.bulletPoints.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Experience;
