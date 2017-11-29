<<<<<<< HEAD
var express = require('express');
var router = express.Router();

/* GET token page. */
router.get('/about', function(req, res, next) {
  res.render('views\pages\about.ejs', { title: 'about' });
});

module.exports = router;
=======
var express = require('express');
var router = express.Router();

/* GET token page. */
router.get('/about', function(req, res, next) {
  res.render('views\pages\about.ejs', { title: 'about' });
});

module.exports = router;
>>>>>>> 2127736e46b77601be94eec43c0b2b53abf49bce
