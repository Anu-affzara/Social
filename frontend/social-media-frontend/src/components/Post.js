import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaTrash, FaThumbsUp, FaShareAlt } from 'react-icons/fa';

const PostContainer = styled(motion.div)`
  background: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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

const PostActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #007bff;
  font-size: 1.25rem;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;

  &:hover {
    color: #0056b3;
  }

  &.liked {
    color: #e91e63;
  }

  &.commented {
    color: #4caf50;
  }

  &.shared {
    color: #ff9800;
  }

  &.delete {
    color: #ff1744;
  }

  span {
    margin-left: 0.5rem;
    font-size: 1rem;
  }
`;

const CommentSection = styled.div`
  margin-top: 1rem;
`;

const CommentInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 0.5rem;
`;

const Comment = styled.p`
  color: #555;
  margin: 0.5rem 0;
`;

function Post({ post, onDelete, onLike, onComment, onShare, ...props }) {
  const [liked, setLiked] = useState(post.liked);
  const [comments, setComments] = useState(post.comments || []);
  const [newComment, setNewComment] = useState('');

  const handleLike = () => {
    setLiked(!liked);
    onLike(post._id);
  };

  const handleComment = (e) => {
    e.preventDefault();
    if (newComment.trim() !== '') {
      const updatedComments = [...comments, newComment];
      setComments(updatedComments);
      onComment(post._id, updatedComments);
      setNewComment('');
    }
  };

  const handleShare = () => {
    onShare(post._id);
  };

  const handleDelete = () => {
    onDelete(post._id);
  };

  return (
    <PostContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      <PostHeader>
        <PostAuthor>{post.user.username}</PostAuthor>
        <PostDate>{new Date(post.date).toLocaleDateString()}</PostDate>
      </PostHeader>
      <PostContent>{post.text}</PostContent>
      <PostActions>
        <ActionButton onClick={handleLike} className={liked ? 'liked' : ''}>
          <FaThumbsUp />
          <span>{liked ? 'Unlike' : 'Like'}</span>
        </ActionButton>
        <ActionButton onClick={handleShare} className="shared">
          <FaShareAlt />
          <span>Share</span>
        </ActionButton>
        <ActionButton onClick={handleDelete} className="delete">
          <FaTrash />
          <span>Delete</span>
        </ActionButton>
      </PostActions>
      <CommentSection>
        <form onSubmit={handleComment}>
          <CommentInput
            type="text"
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
        </form>
        {comments.map((comment, index) => (
          <Comment key={index}>{comment}</Comment>
        ))}
      </CommentSection>
    </PostContainer>
  );
}

export default Post;
