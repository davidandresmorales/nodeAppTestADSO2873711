'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
    "Categories",
    [
      {
        name: "Ciencia",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Política",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Deportes",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Video-juegos",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {}
  );
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
