// src/components/Contact.tsx
import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const ContactContainer = styled.div`
  text-align: center;
  margin: 50px auto;
  padding: 20px;
  max-width: 600px;
  background: rgb(81, 98, 116);
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
          Feel free to reach out if you have any questions or would like to
          discuss potential opportunities. I’m always happy to connect and
          collaborate! You can contact me via email or phone. Leave a message,
          and I’ll get back to you as soon as possible. Looking forward to
          hearing from you!.
        </p>
        <InfoText>Email: tamateymichael99@gmail.com</InfoText>
        <InfoText>Phone: 902-916-3728</InfoText>
      </ContactContainer>
    </Layout>
  );
};

export default Contact;
