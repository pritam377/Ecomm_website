import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const SignIn = () => {
  const [formData, setFormData] = useState({
    userName: '',
    userPassword: ''
  });

  const [errorMessage, setErrorMessage] = useState('');
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
      const response = await axios.post('http://localhost:9090/authenticate', formData);
      console.log('User authenticated successfully:', response.data);
      setSuccessMessage('User authenticated successfully!');
      setErrorMessage('');
      const token = response.data.jwtToken;
      console.log(token)
      if (!token) {
        throw new Error('Token not found in response');
      }
      // const decodedToken = jwtDecode(token);
      const { role } = response.data.user.role[0].roleName;
      localStorage.setItem('token', token);

      setTimeout(() => {
        if (role === 'admin') {
          navigate('/admin-dashboard');
        } else if (role === 'user') {
          navigate('/admin-dashboard');
        } else {
          navigate('/');
        }
      }, 2000); 

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
        <SignUpLink>
          New user? <Link to="/signup">Sign up here</Link>
        </SignUpLink>
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

const ErrorMessage = styled.p`
  color: red;
  text-align: center;
  margin-bottom: 20px;
`;


const SignUpLink = styled.p`
  text-align: center;
  margin-top: 20px;

  a {
    color: #333;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;
