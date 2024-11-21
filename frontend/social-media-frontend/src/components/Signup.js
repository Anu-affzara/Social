import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #1de9b6 0%, #6a1b9a 100%);
`;

const SignupContainer = styled(motion.div)`
  padding: 2rem;
  max-width: 600px;
  width: 100%;
  background: #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: #333;
`;

const SignupTitle = styled.h2`
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

const FileInput = styled.input`
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

const ErrorMessage = styled(motion.p)`
  color: #ff1744;
  font-size: 0.875rem;
`;

const PasswordToggle = styled.span`
  cursor: pointer;
  margin-left: -25px;
  color: #007bff;
  text-decoration: underline;

  &:hover {
    color: #0056b3;
  }
`;

const ForgotPasswordLink = styled.a`
  color: #007bff;
  text-align: right;
  margin-top: -10px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #0056b3;
  }
`;

function Signup() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [profilePic, setProfilePic] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedProfile = JSON.parse(localStorage.getItem('userProfile'));
    if (storedProfile) {
      navigate('/login');
    }
  }, [navigate]);

  const handleNext = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const userProfile = {
      username,
      email,
      avatarUrl: profilePic ? URL.createObjectURL(profilePic) : '',
      bio,
      password, // Save password
      posts: [],
    };

    localStorage.setItem('userProfile', JSON.stringify(userProfile));
    navigate(`/profile/${username}`);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleProfilePicChange = (e) => {
    setProfilePic(e.target.files[0]);
  };

  return (
    <PageContainer>
      <SignupContainer
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <SignupTitle>Signup</SignupTitle>
        <Form onSubmit={step === 5 ? handleSignup : handleNext}>
          {step === 1 && (
            <>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit">Next</Button>
            </>
          )}
          {step === 2 && (
            <>
              <Input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <Button type="submit">Next</Button>
            </>
          )}
          {step === 3 && (
            <>
              <FileInput 
                type="file" 
                accept="image/*" 
                onChange={handleProfilePicChange} 
              />
              <Button type="submit">Next</Button>
            </>
          )}
          {step === 4 && (
            <>
              <Input
                type="text"
                placeholder="Bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                required
              />
              <Button type="submit">Next</Button>
            </>
          )}
          {step === 5 && (
            <>
              <div style={{ position: 'relative' }}>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <PasswordToggle onClick={toggleShowPassword}>
                  {showPassword ? 'Hide' : 'Show'}
                </PasswordToggle>
              </div>
              <Input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <Button type="submit">Signup</Button>
              {error && (
                <ErrorMessage
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {error}
                </ErrorMessage>
              )}
            </>
          )}
          {step < 5 && (
            <ForgotPasswordLink href="/forgot-password">Forgot Password?</ForgotPasswordLink>
          )}
        </Form>
      </SignupContainer>
    </PageContainer>
  );
}

export default Signup;
