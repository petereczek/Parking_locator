'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {}

  Transaction.init({
    Grantor: {
      type: DataTypes.INTEGER,
    },
    Grantee: {
      type: DataTypes.INTEGER,
    },
    Time: {
      type: DataTypes.DATE,
    },
    Headroom: {
      type: DataTypes.INTEGER,
    },
    Delay: {
      type: DataTypes.INTEGER,
      },
    VoluntaryWait: {
      type: DataTypes.INTEGER,
      }
  }, {
    sequelize,
    modelName: 'transaction'
  });

  Transaction.associate = (models) => {
    // associations can be defined here
  };

  return Transaction;
};
