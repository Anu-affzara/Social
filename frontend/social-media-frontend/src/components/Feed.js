import React, { useEffect, useState } from 'react';
import Post from './Post';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import mockPosts from '../mockData';

const FeedContainer = styled(motion.div)`
  padding: 2rem;
  max-width: 600px;
  margin: 2rem auto;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const FeedTitle = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
  font-size: 1.5rem;
`;

const PostList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Simulate fetching posts from an API
    setPosts(mockPosts);
  }, []);

  return (
    <FeedContainer
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <FeedTitle>Feed</FeedTitle>
      <PostList>
        {posts.map((post) => (
          <Post
            key={post._id}
            post={post}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
        ))}
      </PostList>
    </FeedContainer>
  );
}

export default Feed;
