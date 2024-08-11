const pool = require('../utils/mysql.connect.js'); // Asegúrate de tener esta conexión configurada

const saveSubscription = async (subscription) => {
    try {
        const query = `
            INSERT INTO push_subscriptions (subscription)
            VALUES (?)
        `;

        const values = [
            JSON.stringify(subscription), // Almacena la suscripción completa como JSON
        ];

        await pool.query(query, values);

        return {
            status: true,
            message: 'Subscription saved successfully',
            code: 200
        };
    } catch (err) {
        console.log(err);
        return {
            status: false,
            message: 'Error saving subscription',
            code: 500,
            error: err
        };
    }
};

module.exports = {
    saveSubscription
};
