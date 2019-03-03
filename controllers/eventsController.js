const db = require('../models');

// Defining methods for the events Controller
module.exports = {
  findAll(req, res) {
    db.events
      .find({})
      .then(function(dbModel) {
        res.send({ dbModel });
      })
      .catch(err => res.status(422).json(err));
  },
  create(req, res) {
    db.events
      .create(req.body)
      .then(function(dbModel) {
        res.status(status).json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  }
};
