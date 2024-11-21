import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HomeContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: linear-gradient(135deg, #1de9b6 0%, #6a1b9a 100%); /* Vibrant teal and purple background */
  height: 100vh;
  overflow: hidden;
  text-align: center;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  color: #fff;
  margin-bottom: 1rem;
`;

const Subtitle = styled(motion.h2)`
  font-size: 1.75rem;
  color: #fff;
  margin-bottom: 2rem;
`;

const Button = styled(motion(Link))`
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 25px; /* Rounded buttons for modern look */
  background: #004d40;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover {
    background: #00332c;
    transform: scale(1.05); /* Slightly larger on hover */
  }

  &:not(:last-child) {
    margin-right: 1rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const FeatureSection = styled.div`
  margin-top: 4rem;
`;

const FeatureTitle = styled(motion.h3)`
  font-size: 1.75rem;
  color: #fff;
  margin-bottom: 1rem;
`;

const FeatureList = styled.ul`
  list-style-type: none;
  padding: 0;
  font-size: 1.125rem;
  color: #fff;

  li {
    margin-bottom: 0.5rem;
  }
`;

const fadeInUp = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

function Home() {
  return (
    <HomeContainer initial="initial" animate="animate" variants={staggerContainer}>
      <Title variants={fadeInUp}>Welcome to MySocialApp</Title>
      <Subtitle variants={fadeInUp}>Connect with friends and the world around you.</Subtitle>
      <ButtonGroup>
        <Button to="/signup" variants={fadeInUp}>Sign Up</Button>
        <Button to="/explore" variants={fadeInUp}>Explore</Button>
      </ButtonGroup>
      <FeatureSection>
        <FeatureTitle variants={fadeInUp}>Features</FeatureTitle>
        <FeatureList>
          <motion.li variants={fadeInUp}>Create and share posts</motion.li>
          <motion.li variants={fadeInUp}>Follow your friends</motion.li>
          <motion.li variants={fadeInUp}>Like and comment on posts</motion.li>
          <motion.li variants={fadeInUp}>Edit your profile</motion.li>
        </FeatureList>
      </FeatureSection>
    </HomeContainer>
  );
}

export default Home;
