// src/pages/SignIn.js
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const SignIn = () => {
  const [formData, setFormData] = useState({
    userName: '',
    userPassword: ''
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9090/authenticate', formData);
      console.log('User authenticated successfully:', response.data);
      setSuccessMessage('User authenticated successfully!');
      setErrorMessage('');
      // Handle successful authentication, e.g., store token, redirect to another page
    } catch (error) {
      console.error('There was an error authenticating the user!', error);
      setErrorMessage('Invalid username or password!');
      setSuccessMessage('');
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Sign In</Title>
        {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <Input
          type="text"
          name="userName"
          placeholder="Username"
          value={formData.userName}
          onChange={handleChange}
        />
        <Input
          type="password"
          name="userPassword"
          placeholder="Password"
          value={formData.userPassword}
          onChange={handleChange}
        />
        <Button type="submit">Sign In</Button>
      </Form>
    </Container>
  );
};

export default SignIn;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f8f8f8;
`;

const Form = styled.form`
  background: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  background: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #555;
  }
`;

const SuccessMessage = styled.p`
  color: green;
  text-align: center;
  margin-bottom: 20px;
`;

const ErrorMessage = styled.p`
  color: red;
  text-align: center;
  margin-bottom: 20px;
`;
