/**
 *  Created by: James Campbell
 *
 *  login.js
 *  Router file for both standard and admin login
 */
var Patients = require('../models/patient');

module.exports = function (app, passport) {

    /* GET home page. */
    app.get('/', function (req, res) {
        res.render('index', {title: 'Nursing Simulator', user: req.user});
    });

    app.get('/home', function (req, res) {
        res.render('dashboard', { title: 'Dashboard' });
    });

    app.post('/home', function (req, res) {
        res.redirect(303, '/home');
    });

    /** Admin Pages **/

    // Admin Dashboard
    app.get('/admin', isLoggedIn, function (req, res) {
        res.render('admin-dashboard', { title: 'Admin Dashboard', user: req.user });
    });

    // Search Options
    app.post('/search', function (req, res) {
        if (req.query.type === 'patient') {
            console.log('patient');
            console.log(req.body.patient);
        } else if (req.query.type === 'medicine') {
            console.log('medicine');
            console.log(req.body.medicine);
        }
        res.redirect(303, '/admin');
    });

    // Add Options
    app.post('/add', function (req, res) {
        if (req.query.type === 'patient') {
            var newPatient = new Patients();
            newPatient.firstName = req.body.firstName;
            newPatient.lastName = req.body.lastName;
            newPatient.age = req.body.age;
            newPatient.birthDate = req.body.birthDate;
            newPatient.gender = req.body.gender;
            newPatient.city = req.body.city;
            newPatient.state = req.body.state;
            newPatient.zipCode = req.body.zipCode;
            newPatient.dateAdministered = Date.now();
            newPatient.status = req.body.status;
            newPatient.bloodType = req.body.bloodType;

            newPatient.save();
            if (req.xhr || req.accepts('json,html') === 'json') {
                res.send({success: true});
            } else {
                res.redirect(303, '/admin');
            }
        }
    });

    /** Authentication **/

    // Login
    app.get('/login', function (req, res) {
        res.render('login', {message: req.flash('loginMessage')});
    });
    // Process login
    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/admin',
        failureRedirect: '/login',
        failureFlash: true
    }));

    // Signup
    // show signup
    app.get('/signup', isLoggedIn, function (req, res) {
        res.render('signup', {message: req.flash('signupMessage')});
    });
    // process signup
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/login',
        failureRedirect: '/signup',
        failureFlash: true
    }));

    // Logout
    app.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/');
    });

};

// logged in middleware
function isLoggedIn(req, res, next) {
    // check to see if logged in
    if (req.isAuthenticated())
        return next();

    // if not redirect to login
    res.redirect('/login');
}