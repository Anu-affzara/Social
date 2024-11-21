import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PageContainer = styled.div`
  background: linear-gradient(135deg, #1de9b6 0%, #6a1b9a 100%);
  min-height: 100vh;
  padding: 2rem 0;
`;

const ProfileContainer = styled(motion.div)`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  background: #f0f4f8; /* Light blue background for the container */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: #333;
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 2rem;
`;

const ProfileInfo = styled.div`
  flex: 1;
`;

const Username = styled.h2`
  margin: 0;
  color: #333;
`;

const Bio = styled.p`
  color: #666;
`;

const EditProfileLink = styled(Link)`
  display: inline-block;
  margin-top: 1rem;
  color: #1e88e5;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #0d47a1;
  }
`;

const PostsContainer = styled.div`
  margin-top: 2rem;
`;

const PostContainer = styled(motion.div)`
  background: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PostAuthor = styled.h3`
  margin: 0;
  color: #333;
`;

const PostDate = styled.span`
  color: #777;
`;

const PostContent = styled.p`
  margin: 1rem 0 0;
  color: #555;
`;

const NewPostForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const NewPostInput = styled.input`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const NewPostButton = styled.button`
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

function Profile() {
  const { username } = useParams();
  const [profile, setProfile] = useState(null);
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedProfile = JSON.parse(localStorage.getItem('userProfile'));
    if (storedProfile && storedProfile.username === username) {
      setProfile(storedProfile);
      setPosts(storedProfile.posts || []);
    }
    setLoading(false);
  }, [username]);

  const handleNewPostSubmit = (e) => {
    e.preventDefault();
    const newPostData = {
      _id: Date.now().toString(),
      user: { username: profile.username },
      date: new Date().toISOString(),
      text: newPost,
    };
    const updatedPosts = [...posts, newPostData];
    setPosts(updatedPosts);
    setNewPost('');

    const updatedProfile = { ...profile, posts: updatedPosts };
    localStorage.setItem('userProfile', JSON.stringify(updatedProfile));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!profile) {
    return <div>User not found</div>;
  }

  return (
    <PageContainer>
      <ProfileContainer
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ProfileHeader>
          <Avatar src={profile.avatarUrl} alt={`${username}'s avatar`} />
          <ProfileInfo>
            <Username>{profile.username}</Username>
            <Bio>{profile.bio}</Bio>
            <EditProfileLink to={`/edit-profile/${username}`}>Edit Profile</EditProfileLink>
          </ProfileInfo>
        </ProfileHeader>
        <NewPostForm onSubmit={handleNewPostSubmit}>
          <NewPostInput
            type="text"
            placeholder="What's on your mind?"
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
          />
          <NewPostButton type="submit">Post</NewPostButton>
        </NewPostForm>
        <PostsContainer>
          {posts.map((post) => (
            <PostContainer
              key={post._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <PostHeader>
                <PostAuthor>{post.user.username}</PostAuthor>
                <PostDate>{new Date(post.date).toLocaleDateString()}</PostDate>
              </PostHeader>
              <PostContent>{post.text}</PostContent>
            </PostContainer>
          ))}
        </PostsContainer>
      </ProfileContainer>
    </PageContainer>
  );
}

export default Profile;
