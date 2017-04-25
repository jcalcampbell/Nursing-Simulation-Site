var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Patient = new Schema({
    firstName: String,
    lastName: String,
    age: Number,
    birthDate: Number,
    gender: String,
    city: String,
    state: String,
    zipCode: Number,
    dateAdministered: Date,
    status: String,
    bloodType: String
});

module.exports = mongoose.model('Patient', Patient);