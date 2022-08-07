'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Document', [{
      partId: "BGH564W9",
      partName: "Fork Level Assembly",
      altPartId: "1413",
      isShippableFG: "No",
      parentPartId: "BGH564W9",
      partType: "Assembly",
      supplySource: "In House",
      hsnCode: "1413",
      client: "-",
      partDoc: "e-DOC",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
