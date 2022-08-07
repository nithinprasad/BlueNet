'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Data extends Model {

    static associate(models) {

    }
  }
  Data.init({
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    data: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'Data',
    tableName: 'Data'
  });
  return Data;
};