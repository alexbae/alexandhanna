const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const GuestSchema = new Schema({
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
        required: false
    }
});

module.exports = Guest = mongoose.model('guests', GuestSchema);