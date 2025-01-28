// src/components/Contact.tsx
import React from "react";
import styled from "styled-components";

const ContactContainer = styled.div`
  text-align: center;
  margin: 50px auto;
  padding: 20px;
  max-width: 600px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const Heading = styled.h2`
  font-size: 2rem;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const TextArea = styled.textarea`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }
`;

const Contact: React.FC = () => {
  return (
    <ContactContainer>
      <Heading>Contact Me</Heading>
      <Form>
        <Input type="text" placeholder="Your Name" required />
        <Input type="email" placeholder="Your Email" required />
        <TextArea placeholder="Your Message" rows={5} required></TextArea>
        <SubmitButton type="submit">Send</SubmitButton>
      </Form>
    </ContactContainer>
  );
};

export default Contact;
