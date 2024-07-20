const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  contentId: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: String,
  type: { type: String, required: true, enum: ['article', 'video', 'image'] },
  tags: [String],
  metadata: {
    author: String,
    publishedAt: Date
  }
});

module.exports = mongoose.model('Content', contentSchema);