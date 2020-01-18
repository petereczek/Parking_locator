'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Node extends Model {}

  Node.init({
    Latitude: {
      type: DataTypes.FLOAT,
    },
    Longitude: {
      type: DataTypes.FLOAT,
    },
    Available: {
      type:DataTypes.DATE,
    },
  //   AvailableTime: {
  //     type:DataTypes.DATE,
  // },
},
  {
    sequelize,
    modelName: 'Node'
  });

  Node.associate = (models) => {
    // associations can be defined here
  };

  return Node;
};
