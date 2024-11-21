const User = require('../models/User');

exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username }).select('-password');
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.updateUserProfile = async (req, res) => {
  try {
    const { bio, avatar } = req.body;
    let user = await User.findOne({ username: req.params.username });

    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    user.bio = bio || user.bio;
    user.avatar = avatar || user.avatar;

    await user.save();
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
