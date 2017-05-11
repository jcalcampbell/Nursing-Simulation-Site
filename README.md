# Nursing-Simulation-Site
Simulation Site for URI Department of Nursing

This project was started to provide nursing students at URI with a mobile platform to access simulated patient data
for use in URI's Nursing Sim Labs in White Hall.  This platform allows for various patient simulations to be created
and help students in practicing giving medication.  The system uses barcodes to lookup patients and medicatation in 
their various databases and retrieves the data necessary for the current simulation.

USE:
Students:
 - Login by scanning your id card
 - Scan patient barcode to begin simulation
 - Scan medication to give to patient and enter dosage

Admins:
 - Login with your admin login
 - Options to create new sims using a web form
 - Options to search current data
 - Options to add new medication to the database
 - Option to print sim data

INSTALL:
To install on new server:
 - Download and install NodeJS
 - Download and install MongoDB
 - npm install (in terminal, in project directory)
 - run mongod (in a seperate terminal)
 - node www
