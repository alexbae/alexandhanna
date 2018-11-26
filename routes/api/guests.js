const express = require('express');
const router = express.Router();

// @route   GET api/guests/test
// @desc    Tests guests route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: "Guests works" }));

module.exports = router;