'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DocumentHistory', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      docId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Document',
          key: 'id'
        }
      },
      revisionid: {
        type: Sequelize.BIGINT
      },
      description: {
        type: Sequelize.STRING
      },
      preparedBy: {
        type: Sequelize.STRING
      },
      approvedBy: {
        type: Sequelize.STRING
      },
      approvedDate: {
        type: Sequelize.DATE
      },
      data: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Data',
          key: 'id'
        }
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
    await queryInterface.dropTable('DocumentHistory');
  }
};