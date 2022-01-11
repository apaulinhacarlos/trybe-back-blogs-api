'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BlogPostCategories', {
      blogPostId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      categorieId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('BlogPostCategories');
  }
};
