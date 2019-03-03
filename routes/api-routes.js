'use strict';
// Requiring our models and passport as we've configured it
const db = require('../models');

module.exports = app => {
  app.post('/api/event', (req, res) => {
    db.Event.findOrCreate({
      where: {
        title: req.body.title,
        date: req.body.date,
        location: req.body.event,
        description: req.body.description
      }
    }).then(event => {
      if (event[1] == 'true') {
        console.log('Created');
        res.json('Created');
      } else {
        res.json('Not Created');
      }
    });
  });

  app.get('/api/events', (req, res) => {
    db.Event.findALl({}).then(events => {
      console.log(events);
      res.json(events);
    });
  });
};
