/**
 *  Created by: James Campbell
 *
 *  login.js
 *  Router file for both standard and admin login
 */
module.exports = function (app, passport) {

    /* GET home page. */
    app.get('/', function (req, res) {
        res.render('index', {title: 'Nursing Simulator', user: req.user});
    });

    /** Authentication **/

    // Login
    app.get('/login', function (req, res) {
        res.render('login', {message: req.flash('loginMessage')});
    });
    // Process login
    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true
    }));

    // Signup
    // show signup
    app.get('/signup', function (req, res) {
        res.render('signup', {message: req.flash('signupMessage')});
    });
    // process signup
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/',
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