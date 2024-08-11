const fs = require('fs');
const path = require('path');
const webPush = require('web-push');
const { VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY } = require('../global/_var');
const { saveSubscription } = require('../models/push.supscrition.model');

webPush.setVapidDetails(
    'mailto:polizaqui.contact@gmail.com',
    VAPID_PUBLIC_KEY,
    VAPID_PRIVATE_KEY
);

const remindersFilePath = path.join(__dirname, '../reminders.json');

const controller = {};

// Guarda la suscripción en un archivo JSON
controller.saveSubscription = async (req, res) => {
  try {
      const subscription = req.body.subscription;

      // Llama al modelo para guardar la suscripción en la base de datos
      const result = await saveSubscription(subscription);

      if (result.status) {
          res.status(200).json({ message: result.message });
      } else {
          res.status(result.code).json({ error: result.message });
      }
  } catch (err) {
      console.error('Error saving subscription:', err);
      res.status(500).json({ error: 'Error saving subscription' });
  }
};

// Envía notificaciones a todas las suscripciones almacenadas
controller.sendNotification = async (req, res) => {
  try {
    const { title, body, icon, url } = req.body;
    const reminders = fs.existsSync(remindersFilePath) ? JSON.parse(fs.readFileSync(remindersFilePath, 'utf8')) : [];

    reminders.forEach(async (subscription) => {
      const payload = JSON.stringify({
        title: title || 'Default Title',
        body: body || 'Default Body',
        icon: icon || 'path_to_default_icon.png',
        url: url || '/'
      });

      await webPush.sendNotification(subscription, payload);
    });

    res.status(200).json({ message: 'Notificaciones enviadas exitosamente' });
  } catch (err) {
    console.error('Error enviando las notificaciones:', err);
    res.status(500).json({ error: 'Error enviando las notificaciones' });
  }
};

module.exports = controller;
