'use strict';

module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    title: DataTypes.STRING,
    date: DataTypes.STRING,
    location: DataTypes.STRING,
    description: DataTypes.STRING
  });
  return Event;
};
