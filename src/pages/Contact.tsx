// src/components/Contact.tsx
import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const ContactContainer = styled.div`
  text-align: center;
  margin: 50px auto;
  padding: 20px;
  max-width: 600px;
  background: rgb(48, 85, 117);
  border-radius: 10px;
`;

const Heading = styled.h2`
  font-size: 2rem;
  color: white;
`;

const InfoText = styled.p`
  font-size: 1.2rem;
  color: white;
  margin-top: 10px;
`;

const Contact: React.FC = () => {
  return (
    <Layout>
      <ContactContainer>
        <Heading>Contact Me</Heading>
        <p>
          Driven and detail-oriented Computer Information Systems student at
          Holland College with hands-on experience in software development,
          database management, and web application design. Proficient in Java,
          C#, PHP, MySQL, and front-end technologies (HTML, CSS, JavaScript).
        </p>
        <InfoText>Email: tamateymichael99@gmail.com</InfoText>
        <InfoText>Phone: 902-916-3728</InfoText>
      </ContactContainer>
    </Layout>
  );
};

export default Contact;
