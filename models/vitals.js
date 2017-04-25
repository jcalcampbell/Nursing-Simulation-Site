var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Vitals = new Schema({
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

module.exports = mongoose.model('Vitals', Vitals);