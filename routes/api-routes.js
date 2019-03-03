'use strict';
// Requiring our models and passport as we've configured it
const db = require('../models');

module.exports = app => {
  app.post('/api/event', (req, res) => {
    db.Event.findOrCreate({
      where: {
        title: req.body.title,
        date: req.body.date,
        location: req.body.location,
        description: req.body.description
      }
    }).then(event => {
      console.log(event);
      console.log('Created');
      res.json('Created');
    });
  });

  app.get('/api/events', (req, res) => {
    db.Event.findAll().then(events => {
      console.log(events);
      res.json(events);
    });
  });
};
