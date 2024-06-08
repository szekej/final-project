require('dotenv').config();
const express = require('express');
const expressLayout = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 5000 || process.env.PORT;

// Serve static files
app.use(express.static('public'));

// Set up EJS
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// Middleware to parse POST request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/', require('./server/routes/main'));

app.post('/send-message', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Received message from ${name} (${email}): ${message}`);
    // For now, just redirect back to the contact page
    res.redirect('/contact');
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
