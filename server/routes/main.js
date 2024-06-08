const express = require('express');
const router = express.Router();

// Route for the root URL
router.get('/', (req, res) => {
    res.render('index', {
        title: 'Home - Pokémon Trainer',
        description: 'Welcome to the world of Pokémon!'
    });
});

// Route for about page
router.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me - Pokémon Trainer',
        description: 'Learn more about a young Pokémon trainer and their journey.'
    });
});

// Route for contact page
router.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contact Me - Pokémon Trainer',
        description: 'Get in touch with a young Pokémon trainer.'
    });
});

module.exports = router;
