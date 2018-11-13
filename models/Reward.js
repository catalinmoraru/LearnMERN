const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const RewardSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Reward = mongoose.model('reward', RewardSchema);
