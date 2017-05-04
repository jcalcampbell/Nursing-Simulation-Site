var Medications = require("./medicationAdmin");

Medications.find(function(err, medications) {
    if (medications.length) return;

    new Medications({

        physicianName: 'Dr.Jones',
        medicationName: 'Moltron',
        date: Date.now(),
        administrator: 'Nurse Jane'

    }).save();
});
