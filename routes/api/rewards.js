const express = require('express');
const router = express.Router();

// Item Model
const Reward = require('../../models/Reward');

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/', (req, res) => {
  Reward.find()
    .sort({ date: -1 })
    .then(rewards => res.json(rewards));
});

// @route   POST api/items
// @desc    Create An Item
// @access  Public
router.post('/', (req, res) => {
  const newReward = new Reward({
    name: req.body.name
  });

  newReward.save().then(reward => res.json(reward));
});

// @route   DELETE api/items/:id
// @desc    Delete A Item
// @access  Public
router.delete('/:id', (req, res) => {
  Reward.findById(req.params.id)
    .then(reward => reward.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
