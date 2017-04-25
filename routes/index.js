/**
 *  Created by: James Campbell
 *
 *  login.js
 *  Router file for both standard and admin login
 */
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
router.post('/register', function(req, res) {
    Account.register(new Account({ username : req.body.username }), req.body.password, function(err) {
        if (err) {
            return res.render('register', { title: 'Admin Registration', info: "Sorry. That username already exists. Try again." });
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
router.post('/login', passport.authenticate('local', { failWithError: true }),
    function (req, res, next) {
        res.redirect('/');
    },
    function (err, req, res, next) {
        return res.render('login', { info: 'Invalid username or password' });
    }
);
// Logout
router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});

module.exports = router;