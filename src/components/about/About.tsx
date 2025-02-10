import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <section className="about">
      <h2 className="about-title">About</h2>
      <div className="about-container">
        <div className="about-item">
          <h2>Web Development</h2>
          <p>
            Skilled in building responsive and dynamic web applications using
            Java, Spring Boot, HTML, CSS, and JavaScript. Experienced in
            integrating RESTful APIs and handling database interactions with
            JDBC and Hibernate for seamless backend operations.
          </p>
        </div>
        <div className="about-item">
          <h2>Mobile Development</h2>
          <p>
            Proficient in developing Android applications using Kotlin in
            Android Studio. Experienced in implementing user authentication,
            real-time data synchronization, and push notifications. Skilled in
            creating offline-first applications and optimizing UI/UX for mobile
            users.
          </p>
        </div>
        <div className="about-item">
          <h2>Database Management</h2>
          <p>
            Experienced in database design and optimization using MySQL. Skilled
            in managing relational databases with Spring Data JPA and
            implementing efficient queries for improved performance and
            scalability.
          </p>
        </div>
      </div>

      <div className="about-container">
        <div className="about-item">
          <h2>API Development</h2>
          <p>
            Skilled in building robust and scalable RESTful APIs using Spring
            Boot. Experienced in integrating third-party APIs and ensuring
            secure, efficient data exchange between frontend and backend
            systems.
          </p>
        </div>
        <div className="about-item">
          <h2>Full-Stack Development</h2>
          <p>
            Proficient in full-stack development using Java, JavaScript ,Php,
            C#, TypeScript, and Kotlin for backend and HTML/CSS and React for
            frontend. Experienced in managing user authentication, business
            logic, and multithreading to ensure a scalable and secure
            application architecture.
          </p>
        </div>
        <div className="about-item">
          <h2>Version Control</h2>
          <p>
            Proficient in Git and Bitbucket for version control and
            collaboration. Experienced in branching strategies, pull requests,
            and resolving merge conflicts to maintain clean and efficient
            codebases.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
