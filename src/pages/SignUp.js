import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    userName: '',
    userFirstName: '',
    userLastName: '',
    userPassword: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9090/registerNewUser', formData);
      console.log('User registered successfully:', response.data);

      // Reset form
      setFormData({
        userName: '',
        userFirstName: '',
        userLastName: '',
        userPassword: ''
      });

      // Set success message
      setSuccessMessage('User registered successfully!');
      setTimeout(() => {
        navigate('/signin');
      }, 2000); 
    } catch (error) {
      console.error('There was an error registering the user!', error);
      // Handle registration error
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Sign Up</Title>
        {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
        <Input
          type="text"
          name="userName"
          placeholder="Username"
          value={formData.userName}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="userFirstName"
          placeholder="First Name"
          value={formData.userFirstName}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="userLastName"
          placeholder="Last Name"
          value={formData.userLastName}
          onChange={handleChange}
        />
        <Input
          type="password"
          name="userPassword"
          placeholder="Password"
          value={formData.userPassword}
          onChange={handleChange}
        />
        <Button type="submit">Sign Up</Button>
      </Form>
    </Container>
  );
};

export default SignUp;

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
  background: #4F45E4;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #fff;
    color:#555;
  }
`;

const SuccessMessage = styled.p`
  color: green;
  text-align: center;
  margin-bottom: 20px;
`;
