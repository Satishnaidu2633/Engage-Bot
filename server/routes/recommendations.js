const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Content = require('../models/Content');
const Product = require('../models/Product');

router.get('/', async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    const { contentPreference, productPreference } = user.preferences;

    const contentRecommendations = await Content.find({
      type: { $in: contentPreference }
    })
    .limit(5)
    .sort({ 'metadata.publishedAt': -1 });

    const productRecommendations = await Product.find({
      category: { $in: productPreference }
    })
    .limit(5)
    .sort({ price: 1 });

    const recommendations = [
      ...contentRecommendations.map((item) => ({ id: item._id, type: 'content', ...item._doc })),
      ...productRecommendations.map((item) => ({ id: item._id, type: 'product', ...item._doc }))
    ];

    res.json(recommendations);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching recommendations', error });
  }
});

module.exports = router;