/**
 *  Nursing Simulation System
 *  Created by: James Campbell
 *
 *  app.js
 *  Main Javascript file used to start the Express Web Server using port 3000
 *   on the current machine.  Holds routing information for web addressing
 *   as well as middleware and database extensions.
 */
var express = require('express');
var path = require('path');
var session = require('express-session');
var mongoose = require('mongoose');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var flash = require('connect-flash');

/** App Setup **/
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('view options', { layout: false });

// Mongoose
mongoose.connect('mongodb://localhost/urinursing');
require('./lib/passport')(passport);
require('./models/user-seed');
require('./models/patient-seed');
require('./models/medicationAdmin-seed');
require('./models/vitals-seed');


// Middleware
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    secret: 'secret here',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(express.static(path.join(__dirname, 'public')));

/** Route Handlers **/
require('./routes/index')(app, passport);

/** Error Handling **/
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
