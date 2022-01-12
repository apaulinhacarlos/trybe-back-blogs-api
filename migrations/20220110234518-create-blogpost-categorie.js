'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BlogPostCategories', {
      blogPostId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        // TALVEZ EU PRECISE REFERENCIAR A TABELA AQUI
      },
      categorieId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        // TALVEZ EU PRECISE REFERENCIAR A TABELA AQUI
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('BlogPostCategories');
  }
};
