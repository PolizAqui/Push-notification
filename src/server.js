    const express = require('express');
    const app = express();
    const _var = require('./global/_var')
    const cors = require('cors');


    /*****  ROUTES *****/

    const routes = require('./routes/notification.routes')

    /***** DEPENDENCY ******/

    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use(cors());

    /***** Server *****/

    app.listen(_var.PORT, (err) => {
        if (err) throw err;
        console.log(`Servidor inicializado en: http://localhost:${_var.PORT}`);   
    })

    app.use(routes)