'use strict';

module.exports = (sequelize, DataTypes) => {
    const Event = sequelize.define('Event', {
      title: DataTypes.STRING,
      date: DataTypes.STRING,
      type: DataTypes.STRING,
      location: DataTypes.STRING
    });

    return Event;
  };