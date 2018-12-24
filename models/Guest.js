const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const GuestSchema = new Schema({
    attend: {
        type: Boolean,
        required: true
    },
    side: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    adults: {
        type: Number,
        required: true
    },
    kids: {
        type: Number,
        required: true
    }
});

module.exports = Guest = mongoose.model('guests', GuestSchema);