'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class User extends Model {}

  User.init({
    First: {
      type: DataTypes.STRING,
    },
    Last: {
      type: DataTypes.STRING,
    },
    Username: {
      type: DataTypes.STRING,
    },
    Password: {
      type: DataTypes.STRING,
    },
    Latitude: {
      type: DataTypes.FLOAT,
      },
    Longitude: {
      type: DataTypes.FLOAT,
      }
  }, {
    sequelize,
    modelName: 'user'
  });

  User.associate = (models) => {
    // associations can be defined here
  };

  return User;
};
