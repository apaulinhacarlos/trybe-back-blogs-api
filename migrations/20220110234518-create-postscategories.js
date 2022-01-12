'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PostsCategories', {
      postId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        // TALVEZ EU PRECISE REFERENCIAR A TABELA AQUI
      },
      categoryId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        // TALVEZ EU PRECISE REFERENCIAR A TABELA AQUI
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PostsCategories');
  }
};
