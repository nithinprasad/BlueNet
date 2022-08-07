'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Document', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      partId: {
        type: Sequelize.STRING
      },
      partName: {
        type: Sequelize.STRING
      },
      altPartId: {
        type: Sequelize.STRING
      },
      isShippableFG: {
        type: Sequelize.STRING
      },
      parentPartId: {
        type: Sequelize.STRING
      },
      partType: {
        type: Sequelize.STRING
      },
      supplySource: {
        type: Sequelize.STRING
      },
      hsnCode: {
        type: Sequelize.STRING
      },
      client: {
        type: Sequelize.STRING
      },
      partDoc: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    },
      {
        initialAutoIncrement: 1
      });
  },
  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('Document');
  }
};