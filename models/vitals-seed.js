var Vitals = require("./vitals");

Vitals.find(function (err, vitals) {
    if (vitals.length) return;

    new Vitals({

        heartRate: 75,
        heartRateSource: 'stethiscope',
        temperature: 986,
        temperatureSource: 'oral ',
        respiratory: 66,
        bloodPressure: 13284,
        bloodPressureSource: 'Arm',
        bloodPressureMethod: 'wrap',

        abnormalGrowth: 'mole on back',

        //Pain Assessment

        painScore: 7,
        painLocation: 'shoulder',
        painDescription: 'consistent'

    }).save();

});
