const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  interests: [String],
  preferences: {
    contentType: [String],
    productCategory: [String]
  },
  interactions: [
    {
      contentId: String,
      productId: String,
      action: { type: String, enum: ['view', 'like', 'share', 'purchase'] },
      timestamp: Date
    }
  ]
});

module.exports = mongoose.model('User', userSchema);