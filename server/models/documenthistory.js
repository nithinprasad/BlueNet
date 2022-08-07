'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DocumentHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.DocumentHistory.belongsTo(models.Document, {
        foreignKey: 'docId',
        as: 'document'
      });
      models.DocumentHistory.belongsTo(models.Data, {
        foreignKey: 'data',
        as: 'diagram'
      });
    }
  }
  DocumentHistory.init({
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    docId: {
      type: DataTypes.BIGINT,
      references: {
        model: "Document",
        key: "id"
      }
    },
    revisionid: DataTypes.BIGINT,
    description: DataTypes.STRING,
    preparedBy: DataTypes.STRING,
    approvedBy: DataTypes.STRING,
    approvedDate: DataTypes.DATE,
    data: {
      type: DataTypes.BIGINT,
      references: {
        model: "Data",
        key: "id"
      }
    }
  }, {
    sequelize,
    modelName: 'DocumentHistory',
    tableName: 'DocumentHistory',
  });
  return DocumentHistory;
};