var Patient = require("./patient");

Patient.find(function (err, patient) {
    if (patient.length) return;

    new Patient({
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        birthDate: 06261990,
        gender: 'male',
        city: 'Hope Springs',
        state: 'California',
        zipCode: 90210,
        dateAdministered: Date.now(),
        status: 'Non-critical',
        bloodType: 'O'
    }).save();


    new Patient({
        firstName: 'Bertha',
        lastName: 'Edwards',
        age: 56,
        birthDate: 02141966,
        gender: 'female',
        city: 'Beantown',
        state: 'Nebraska',
        zipCode: 61918,
        dateAdministered: Date.now(),
        status: '',
        bloodType: 'B+'

    }).save();

});
