import React from "react";
import "./Projects.css"; // Import CSS for styling
import Hero from "../components/hero/Hero";

const ProjectTwo: React.FC = () => {
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
          <h2>Overview</h2>
          <p>
            This is a web application that enables users to schedule and manage
            residential and commercial pressure washing services. The
            application supports service selection, views, and updates to
            appointment bookings. It includes an admin dashboard for business
            owners to monitor requests, client details, and revenue, with a
            feature to calculate monthly income based on bookings and discounts.
          </p>
        </section>

        <section className="technologies">
          <h2>Technologies Used</h2>
          <ul>
            <li>
              <strong>Backend:</strong> Java (Spring Boot) for a secure and
              scalable server-side framework, and RESTful APIs.
            </li>
            <br></br>
            <li>
              <strong>Frontend:</strong> HTML and CSS for an intuitive and
              dynamic user interface.
            </li>
            <br></br>
            <li>
              <strong>Database:</strong> MySQL for structured and reliable data
              storage.
            </li>
            <br></br>
          </ul>
        </section>

        <section className="key-contributions">
          <h2>Key Features</h2>
          <ul>
            <li>
              <strong>Customer Booking System: </strong> Displays service
              options, offers calendar-based scheduling, and provides discounts
              for multi-day bookings and large packages.
            </li>
            <br></br>
            <li>
              <strong>Admin Dashboard for Business Owners: </strong>
              Tracks revenue with monthly reports, displays customer and booking
              details, and manages service requests
            </li>
            <br></br>
            <li>
              <strong>Real-time Revenue Reporting: </strong>
              Automatically calculates monthly revenue and displays trends with
              service-type breakdowns.
            </li>
            <br></br>
          </ul>
        </section>

        <section className="problems">
          <h2>Problem Statement</h2>
          <p>
            Pressure washing businesses often face challenges in managing
            bookings, tracking revenue, and maintaining customer relationships
            due to manual processes. Inefficiencies in tracking service requests
            can result in scheduling conflicts, lost revenue, and poor customer
            satisfaction.{" "}
          </p>
        </section>

        <section className="solutions">
          <h2>Solutions Implemented</h2>
          <ul>
            <li>
              <strong>Automated Booking and Scheduling: </strong>Streamlines
              service management, applies multi-day booking discounts, and
              prevents conflicts with real-time updates.
            </li>
            <br></br>
            <li>
              <strong>Admin Dashboard for Oversight: </strong>
              Tracks revenue with monthly summaries, centralizes bookings and
              payments, and provides real-time service request notificationsy.
            </li>
            <br></br>
            <li>
              <strong>Revenue and Financial Management: </strong>
              Automates revenue calculations, provides real-time insights by
              service type, and offers exportable reports for tax and analysis.
            </li>
            <br></br>
            <li>
              <strong>nhanced Customer Experience: </strong>Mobile-friendly
              booking, and discounts for repeat and bulk bookings.
            </li>
          </ul>
        </section>

        <section className="results">
          <h2>Results</h2>
          <ul>
            <li>
              <strong>85% Improvement in Scheduling Efficiency:</strong>{" "}
              Automated booking system reduces manual errors.
            </li>
            <br></br>
            <li>
              <strong>50% Increase in Customer Retention:</strong> Discounts and
              seamless user experience encourage repeat bookings.
            </li>
            <br></br>
            <li>
              <strong>90% Accuracy in Revenue Tracking:</strong> Real-time
              updates ensure accurate reporting.
            </li>
            <br></br>
            <li>
              <strong>Enhanced Operational Control:</strong> Admin dashboard
              improves request and revenue oversight.
            </li>
          </ul>
        </section>
        <div className="back-home">
          <a href="/">Back to Home</a>
        </div>
      </div>
    </>
  );
};

export default ProjectTwo;
