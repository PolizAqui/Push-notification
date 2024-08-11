    require('dotenv').config();

    /***** Server *****/
    const PORT = process.env.PORT;

    /******  DATABASE ******/
    const PG_USER = process.env._USER;
    const PG_PASS = process.env._PASS;
    const PG_HOST = process.env._HOST;
    const PG_NAME = process.env._NAME;

    /******* KEY *******/

    const KEY = process.env.KEY;

    /******* USERS ROUTES ******/
    const NOTIFICATION = process.env.NOTIFICATION;
    const SUBSCRIBE = process.env.SUBSCRIBE;
    /******* VAPID KEYS *******/
    const VAPID_PUBLIC_KEY = process.env.VAPID_PUBLIC_KEY;
    const VAPID_PRIVATE_KEY = process.env.VAPID_PRIVATE_KEY;

    module.exports = {
        // Server
        PORT,
        // Database
        PG_HOST,
        PG_NAME,
        PG_PASS,
        PG_USER,
        //key
        KEY,
        // Route
        NOTIFICATION,
        SUBSCRIBE,
        // Vapid Keys
        VAPID_PUBLIC_KEY,
        VAPID_PRIVATE_KEY
    };
