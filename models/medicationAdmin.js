var mongoose = require('mongoose');

var medicationSchema = mongoose.Schema({

    // Medication Administration
    physicianName: String,
    medicationName: String,
    date: Date,
    administrator: String

});

module.exports = mongoose.model('Medication', medicationSchema);