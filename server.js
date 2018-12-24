const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const guests = require('./routes/api/guests');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Server static assets if in production
if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.setHeader('Last-Modified', (new Date()).toUTCString())
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Use Guests
app.use('/api/guests', guests);

app.disable('etag');

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));