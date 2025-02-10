import React from "react";
import "./Contact.css";

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      <h1>Contact Information</h1>
      <p>
        Feel free to contact me! You can click on my Email, LinkedIn, and GitHub
        to connect. Looking forward to hearing from you!:
      </p>
      <div className="contact-info">
        <p>
          <strong>LinkedIn:</strong>
          <a
            href="https://www.linkedin.com/in/michael-tettey-tamatey-535535117/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/michaeltamatey
          </a>
        </p>
        <p>
          <strong>GitHub:</strong>
          <a
            href="https://github.com/Massmac/portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/michaeltamatey
          </a>
        </p>
        <p>
          <strong>Email:</strong>
          <a href="mailto:tamateymichael99@gmail.com">
            tamateymichael99@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
