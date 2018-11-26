const express = require('express');
const router = express.Router();

// Load Guest model
const Guest = require('../../models/Guest');

// @route   GET api/guests/test
// @desc    Tests guests route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: "Guests works" }));

// @route   GET api/guests/attend
// @desc    Attend guests
// @access  Public
router.post('/attend', (req, res) => {
    Guest.findOne({ email: req.body.email })
        .then(guest => {
            if(guest) {
                return res.status(400).json({ email: 'Email already exists' });
            } else {
                const newGuest = new Guest({
                    name: req.body.name,
                    email: req.body.email,
                    adults: req.body.adults,
                    kids: req.body.kids
                });

                newGuest.save()
                    .then(guest => res.json(guest))
                    .catch(err => console.log(err));
            }
        })
});

module.exports = router;