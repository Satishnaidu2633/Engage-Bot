const User = require('../models/User');

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user profile', error });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const { interests, preferences } = req.body;
    const user = await User.findByIdAndUpdate(req.userId, { interests, preferences }, { new: true });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error updating user profile', error });
  }
};