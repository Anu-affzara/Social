const express = require('express');
const { getUserProfile, updateUserProfile } = require('../controller/userController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/:username', authMiddleware, getUserProfile);
router.put('/:username', authMiddleware, updateUserProfile);

module.exports = router;
