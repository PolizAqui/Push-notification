const { NOTIFICATION , SUBSCRIBE} = require('../global/_var');

/****** DEPENDENCY ******/
const express = require('express');
const router = express.Router();

/****** CONTROLLER ******/
const notificationController = require('../controller/notification.getInfo.controller');

/***** ROUTES ******/
router.post(NOTIFICATION, notificationController.sendNotification);
router.post(SUBSCRIBE, notificationController.saveSubscription)

module.exports = router;
