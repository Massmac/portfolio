import React from "react";
import "./Hero.css";
import profilePic from "./profileMike.jpeg";
const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <img src={profilePic} alt="Michael Tamatey" className="profile-pic" />
        <h1>Michael Tettey Tamatey</h1>
        <p>
          Driven and detail-oriented final year Computer Information Systems
          student at Holland College. Proficient in Java, C#, PHP, MySQL,
          JavaScript, and TypeScript, and front-end technologies like HTML, CSS,
          and React. Dedicated to delivering innovative solutions and creating
          impactful software.
        </p>
      </div>
    </section>
  );
};

export default Hero;
