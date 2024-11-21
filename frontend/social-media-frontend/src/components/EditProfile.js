import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';

const PageContainer = styled.div`
  background: linear-gradient(135deg, #1de9b6 0%, #6a1b9a 100%);
  min-height: 100vh;
  padding: 2rem 0;
`;

const EditProfileContainer = styled.div`
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
  background: #f0f4f8; /* Light blue background for the container */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: #333;
`;

const EditProfileTitle = styled.h2`
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

const ErrorMessage = styled.p`
  color: #ff1744;
  font-size: 0.875rem;
`;

function EditProfile() {
  const { username } = useParams();
  const [profile, setProfile] = useState(null);
  const [updatedUsername, setUpdatedUsername] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [profilePic, setProfilePic] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedProfile = JSON.parse(localStorage.getItem('userProfile'));
    if (storedProfile && storedProfile.username === username) {
      setProfile(storedProfile);
      setUpdatedUsername(storedProfile.username);
      setEmail(storedProfile.email);
      setBio(storedProfile.bio);
    }
  }, [username]);

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!updatedUsername || !email || !bio) {
      setError('Please fill in all fields');
      return;
    }

    const updatedProfile = {
      ...profile,
      username: updatedUsername,
      email,
      bio,
      avatarUrl: profilePic ? URL.createObjectURL(profilePic) : profile.avatarUrl,
    };

    localStorage.setItem('userProfile', JSON.stringify(updatedProfile));
    navigate(`/profile/${updatedUsername}`);
  };

  const handleProfilePicChange = (e) => {
    setProfilePic(e.target.files[0]);
  };

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <PageContainer>
      <EditProfileContainer>
        <EditProfileTitle>Edit Profile</EditProfileTitle>
        <Form onSubmit={handleUpdate}>
          <Input
            type="text"
            placeholder="Username"
            value={updatedUsername}
            onChange={(e) => setUpdatedUsername(e.target.value)}
            required
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <FileInput
            type="file"
            accept="image/*"
            onChange={handleProfilePicChange}
          />
          <Input
            type="text"
            placeholder="Bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            required
          />
          <Button type="submit">Update Profile</Button>
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </Form>
      </EditProfileContainer>
    </PageContainer>
  );
}

export default EditProfile;
