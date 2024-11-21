const express = require('express');
const { createPost, getPosts, likePost, commentOnPost } = require('../controller/postController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, createPost);
router.get('/', authMiddleware, getPosts);
router.put('/like/:id', authMiddleware, likePost);
router.post('/comment/:id', authMiddleware, commentOnPost);

module.exports = router;
