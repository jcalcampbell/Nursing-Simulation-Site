var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Medication = new Schema({
    // Medication Administration
    physicianName: String,
    medicationName: String,
    date: Date.now,
    administrator: String
});

module.exports = mongoose.model('Medication', Medication);