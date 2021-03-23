const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('index.html', { title: 'NodeWebSite' });   //res= envie como respuesta send= hello world
});

router.get('/contact', (req, res) => {
    res.render('contact.html', { title: 'Contact-Page' });   //res= envie como respuesta send= hello world
});

module.exports = router;