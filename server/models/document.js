'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Document extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Document.hasMany(models.DocumentHistory, {
        foreignKey: 'docId',
        as: 'revisions',
        onDelete: 'CASCADE',
      });
    }
  }
  Document.init({
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    partId: DataTypes.STRING,
    partName: DataTypes.STRING,
    altPartId: DataTypes.STRING,
    isShippableFG: DataTypes.STRING,
    parentPartId: DataTypes.STRING,
    partType: DataTypes.STRING,
    supplySource: DataTypes.STRING,
    hsnCode: DataTypes.STRING,
    client: DataTypes.STRING,
    partDoc: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Document',
    tableName: 'Document'
  });
  return Document;
};