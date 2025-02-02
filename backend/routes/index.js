var express = require('express');
const { signup } = require('../controllers/user.controller.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// signup route
router.post('/signup', signup);
// login route
router.post('/login', ()=>{});

module.exports = router;
