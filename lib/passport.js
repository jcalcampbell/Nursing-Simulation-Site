var LocalStrategy = require('passport-local').Strategy;

var User = require('../models/user');

module.exports = function (passport) {

    // Passport Setup
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });
    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });

    // ===============
    // Local =========
    // ===============

    // Local Signup
    passport.use('local-signup', new LocalStrategy({
            usernameField: 'username',
            passwordField: 'password',
            //idField: 'uriid',
            passReqToCallback: true
        },
        function (req, username, password, done) {
            process.nextTick(function () {
                User.findOne({'username': username}, function (err, existingUser) {

                    // if there are any errors, return the error
                    if (err)
                        return done(err);

                    // check to see if there's already a user with that email
                    if (existingUser)
                        return done(null, false, req.flash('signupMessage', 'That username is already taken.'));

                    //  We're not logged in, so we're creating a brand new user.
                    // create the user
                    var newUser = new User();

                    newUser.username = username;
                    newUser.password = newUser.generateHash(password);
                    //newUser.uriID = id;

                    newUser.save(function (err) {
                        if (err)
                            throw err;

                        return done(null, newUser);
                    });


                });
            });
        }));

    // Local Login
    passport.use('local-login', new LocalStrategy({
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true
        },
        function (req, username, password, done) {
            User.findOne({'username': username}, function (err, user) {
                // return any errors found
                if (err)
                    return done(err)
                // if no user found or wrong password
                if (!user || !user.validPassword(password))
                    return done(null, false, req.flash('loginMessage', 'Invalid username/password'));
                // if good, return user
                return done(null, user);
            });
        }));

};