import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Post from '../components/Post';

const PageContainer = styled.div`
  background: linear-gradient(135deg, #1de9b6 0%, #6a1b9a 100%);
  min-height: 100vh;
  padding: 2rem 0;
`;

const ExploreContainer = styled(motion.div)`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  background: #f0f4f8;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: #333;
`;

const ExploreTitle = styled(motion.h2)`
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
  font-size: 2rem;
`;

const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const samplePosts = [
  {
    _id: '1',
    user: { username: 'alice' },
    date: new Date().toISOString(),
    text: 'Just enjoyed a beautiful sunset at the beach. 🌅 #nature #relax',
    liked: false,
    comments: [],
  },
  {
    _id: '2',
    user: { username: 'bob' },
    date: new Date().toISOString(),
    text: 'Had a great time hiking up the mountain today! 🥾 #adventure #outdoors',
    liked: false,
    comments: [],
  },
  {
    _id: '3',
    user: { username: 'charlie' },
    date: new Date().toISOString(),
    text: 'Excited to start my new job next week! 🎉 #career #newbeginnings',
    liked: false,
    comments: [],
  },
  {
    _id: '4',
    user: { username: 'daisy' },
    date: new Date().toISOString(),
    text: 'Loving the new book I’m reading. 📖 #booklover #reading',
    liked: false,
    comments: [],
  },
  {
    _id: '5',
    user: { username: 'ethan' },
    date: new Date().toISOString(),
    text: 'Enjoyed a wonderful dinner with family. 🍝 #foodie #familytime',
    liked: false,
    comments: [],
  },
];

function Explore() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching posts from local storage or a server
    const storedPosts = JSON.parse(localStorage.getItem('explorePosts')) || [];
    if (storedPosts.length === 0) {
      localStorage.setItem('explorePosts', JSON.stringify(samplePosts));
      setPosts(samplePosts);
    } else {
      setPosts(storedPosts);
    }
    setLoading(false);
  }, []);

  const handleLike = (postId) => {
    const updatedPosts = posts.map(post =>
      post._id === postId ? { ...post, liked: !post.liked } : post
    );
    setPosts(updatedPosts);
    localStorage.setItem('explorePosts', JSON.stringify(updatedPosts));
  };

  const handleDelete = (postId) => {
    const updatedPosts = posts.filter(post => post._id !== postId);
    setPosts(updatedPosts);
    localStorage.setItem('explorePosts', JSON.stringify(updatedPosts));
  };

  const handleComment = (postId, comments) => {
    const updatedPosts = posts.map(post =>
      post._id === postId ? { ...post, comments } : post
    );
    setPosts(updatedPosts);
    localStorage.setItem('explorePosts', JSON.stringify(updatedPosts));
  };

  const handleShare = (postId) => {
    console.log(`Post ${postId} shared`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <PageContainer>
      <ExploreContainer
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ExploreTitle>Explore</ExploreTitle>
        <PostsContainer>
          {posts.map(post => (
            <Post
              key={post._id}
              post={post}
              onLike={handleLike}
              onDelete={handleDelete}
              onComment={handleComment}
              onShare={handleShare}
            />
          ))}
        </PostsContainer>
      </ExploreContainer>
    </PageContainer>
  );
}

export default Explore;
