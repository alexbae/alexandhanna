const express = require('express');
const router = express.Router();

// Load Guest model
const Guest = require('../../models/Guest');

// @route   GET api/guests
// @desc    Tests guests route
// @access  Public
router.get('/', (req, res) => {
    const errors = {}

    Guest.find()
        .sort({ name: 1 })
        .then(guests => {
            if (!guests) {
                errors.noGuests = 'There are no guests'
                return res.status(404).json(errors)
            }

            res.json(guests)
        })
        .catch(err => res.status(404).json({ guests: 'There are no guests'}))
});

// @route   POST api/guests
// @desc    Attend guests
// @access  Public
router.post('/', (req, res) => {
    Guest.findOne({ email: req.body.email })
        .then(guest => {
            if(guest) {
                return res.status(400).json({ email: 'Email already exists' });
            } else {
                const newGuest = new Guest({
                    attend: req.body.attend,
                    side: req.body.side,
                    name: req.body.name,
                    email: req.body.email,
                    adults: req.body.adults,
                    kids: req.body.kids,
                    others: req.body.others
                });

                newGuest.save()
                    .then(guest => res.json(guest))
                    .catch(err => console.log(err));
            }
        })
});

module.exports = router;