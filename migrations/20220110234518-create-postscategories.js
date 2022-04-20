'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PostsCategories', {
      postId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        // TALVEZ EU PRECISE REFERENCIAR A TABELA AQUI
        // references: {
        //   model: 'BlogPosts', // esse nome vem da migration
        //   key: 'id'
        // }
      },
      categoryId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        // TALVEZ EU PRECISE REFERENCIAR A TABELA AQUI
        // references: {
        //   model: 'Categories', // esse nome vem da migration
        //   key: 'id'
        // }
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PostsCategories');
  }
};
