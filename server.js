const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const guests = require('./routes/api/guests');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.get('/', (req, res) => res.send(`Welcome to Alex and Hanna's website, website is under constuction now!`));

// Use Guests
app.use('/api/guests', guests);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));