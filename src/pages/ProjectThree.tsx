import React from "react";
import "./Projects.css"; // Import CSS for styling
import Hero from "../components/hero/Hero";

const ProjectThree: React.FC = () => {
  return (
    <>
      {" "}
      <div>
        <Hero />
      </div>
      <div className="case-study-container">
        <h1 className="case-study-header">
          Pressure Washing Service - Web Application
        </h1>

        <section className="summary">
          <h2>Summary</h2>
          <p>
            The Pressure Washing Service Platform is a web and mobile
            application designed to facilitate scheduling and managing pressure
            washing services for both residential and commercial buildings. The
            platform includes features for customer sign-up, service selection,
            appointment booking, payment processing, and an admin dashboard.
          </p>
        </section>

        <section className="technologies">
          <h2>Technologies Used</h2>
          <ul>
            <li>Java (Spring Boot)</li>
            <li>React & React Native</li>
            <li>MySQL</li>
            <li>Firebase Authentication</li>
            <li>Stripe API for payments</li>
          </ul>
        </section>

        <section className="key-contributions">
          <h2>Key Contributions</h2>
          <ul>
            <li>Designed and developed the backend using Java Spring Boot.</li>
            <li>
              Implemented React for the web application and React Native for the
              mobile version.
            </li>
            <li>
              Developed an admin dashboard for tracking revenue, clients, and
              requests.
            </li>
            <li>Integrated Stripe for seamless payment processing.</li>
            <li>Optimized database queries for faster response times.</li>
          </ul>
        </section>

        <section className="problems">
          <h2>Challenges</h2>
          <p>
            One of the main challenges was ensuring seamless synchronization
            between the web and mobile applications. Managing concurrent service
            requests and optimizing database performance for fast loading times
            was also a key hurdle.
          </p>
        </section>

        <section className="solutions">
          <h2>Solutions</h2>
          <p>
            To tackle synchronization issues, Firebase Realtime Database was
            used for instant updates. For performance, database indexing and
            query optimization techniques were applied, reducing response time
            by 40%.
          </p>
        </section>

        <section className="results">
          <h2>Results</h2>
          <p>
            - Successfully launched with over 200 active users in the first
            month.
            <br />
            - Reduced service scheduling time by 60% through automation.
            <br />- Improved revenue tracking accuracy by integrating real-time
            analytics.
          </p>
        </section>
        <div className="back-home">
          <a href="/">Back to Home</a>
        </div>
      </div>
    </>
  );
};

export default ProjectThree;
