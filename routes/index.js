var express = require('express');
var router = express.Router();
var passport = require('passport');
var Account = require('../models/account');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Nursing Simulator', user: req.user });
});
// Registration Page
router.get('/register', function (req, res) {
    res.render('register', { title: 'Admin Registration' });
});
router.post('/register', function (req, res) {
    Account.register(new Account({ username: req.body.username}), req.body.password, function (err, account) {
        if (err) {
            return res.render('register', { title: 'Admin Registration', account: account });
        }
        passport.authenticate('local')(req, res, function () {
            res.redirect('/');
        });
    });
});
// Login page
router.get('/login', function (req, res) {
    res.render('login', { user: req.user });
});
router.post('/login', passport.authenticate('local'), function (req, res) {
    res.redirect('/');
});
// Logout
router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});

module.exports = router;