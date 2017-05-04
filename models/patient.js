var mongoose = require('mongoose');

var patientSchema = mongoose.Schema({

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

module.exports = mongoose.model('Patient', patientSchema);