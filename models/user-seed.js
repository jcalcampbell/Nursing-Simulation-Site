var User = require('./user');

User.find(function (err, users) {
    if (users.length) return;

    new User({
        username: 'admin',
        password: '$2a$08$xuFS90fkcYaozXsQ/NPWlePemaotJO4m3MAI9.b72B2vhIcSd2Lle'
    });
});