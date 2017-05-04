var mongoose = require('mongoose');

var vitalsSchema = mongoose.Schema({

    // Vitals
    heartRate: Number,
    heartRateSource: String,
    temperature: Number,
    temperatureSource: String,
    respiratory: Number,
    bloodPressure: Number,
    bloodPressureSource: String,
    bloodPressureMethod: String,

    abnormalGrowth: String,

    // Pain Assessment
    painScore: Number,
    painLocation: String,
    painDescription: String

});

module.exports = mongoose.model('Vitals', vitalsSchema);