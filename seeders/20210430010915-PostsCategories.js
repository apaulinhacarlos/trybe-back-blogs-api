module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('BlogPostCategories',
      [
        {
          blogPostId: 1,
          categorieId: 1, // arrumar esses nomes
        },
        {
          blogPostId: 2,
          categorieId: 2,
        },

      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('BlogPostCategories', null, {});
  },
};
