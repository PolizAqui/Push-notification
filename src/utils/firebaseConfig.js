    const admin = require('firebase-admin');
    const serviceAccount = require('../config/notification-52303-firebase-adminsdk-q5zrl-d5d5c24c94.json'); // Cambia esta ruta

    admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    });

    module.exports = admin;
