import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #1de9b6 0%, #6a1b9a 100%);
`;

const LoginContainer = styled.div`
  padding: 2rem;
  max-width: 400px;
  width: 100%;
  background: #f0f4f8;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: #333;
`;

const LoginTitle = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
  font-size: 1.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 0.75rem;
  border: none;
  border-radius: 25px;
  background: #004d40;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover {
    background: #00332c;
    transform: scale(1.05);
  }
`;

const ErrorMessage = styled.p`
  color: #ff1744;
  font-size: 0.875rem;
`;

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedProfile = JSON.parse(localStorage.getItem('userProfile'));

    if (!storedProfile || storedProfile.username !== username || storedProfile.password !== password) {
      setError('Invalid username or password');
      return;
    }

    navigate(`/profile/${username}`);
  };

  return (
    <PageContainer>
      <LoginContainer>
        <LoginTitle>Login</LoginTitle>
        <Form onSubmit={handleLogin}>
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit">Login</Button>
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </Form>
      </LoginContainer>
    </PageContainer>
  );
}

export default Login;
