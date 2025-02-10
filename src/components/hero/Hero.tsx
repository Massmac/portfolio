import React from "react";
import "./Hero.css";
import profilePic from "./profilePic.jpg";
const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <img src={profilePic} alt="Michael Tamatey" className="profile-pic" />
        <h1>Michael Tettey Tamatey</h1>
        <p>
          A passionate software developer specializing in web and mobile
          applications. I love building solutions that enhance user experiences
          and solve real-world problems.
        </p>
      </div>
    </section>
  );
};

export default Hero;
