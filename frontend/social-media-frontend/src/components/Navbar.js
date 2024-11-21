import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #343a40; /* Dark background color */
  color: #f8f9fa; /* Light text color */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Logo = styled(Link)`
  font-size: 1.75rem;
  font-weight: bold;
  color: #17a2b8; /* Bright logo color */
  text-decoration: none;

  &:hover {
    color: #138496; /* Slightly darker on hover */
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled(Link)`
  color: #f8f9fa;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #17a2b8; /* Matches the logo color */
  }
`;

const Button = styled.button`
  background: #17a2b8;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s ease;

  &:hover {
    background: #138496; /* Slightly darker on hover */
  }
`;

function Navbar() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Fetch the username from localStorage
    const storedProfile = JSON.parse(localStorage.getItem('userProfile'));
    if (storedProfile) {
      setUsername(storedProfile.username);
    }
  }, []);

  const handleLogout = () => {
    // Simulate logout
    localStorage.removeItem('userProfile');
    navigate('/');
  };

  return (
    <NavbarContainer>
      <Logo to="/">MySocialApp</Logo>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to={`/profile/${username}`}>Profile</NavLink>
        <NavLink to={`/edit-profile/${username}`}>Edit Profile</NavLink>
        <Button onClick={handleLogout}>Logout</Button>
      </NavLinks>
    </NavbarContainer>
  );
}

export default Navbar;
