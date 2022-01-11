module.exports = (sequelize, _DataTypes) => {
  const BlogPostCategorie = sequelize.define('BlogPostCategorie',
    {},
    { timestamps: false, tableName: 'BlogPostCategories' });

  BlogPostCategorie.associate = (models) => {
    models.BlogPost.belongsToMany(models.Categorie, {
      as: 'categories', // ?
      through: BlogPostCategorie,
      foreignKey: 'blogPostId',
      otherKey: 'categorieId',
    });
    models.Categorie.belongsToMany(models.BlogPost, {
      as: 'categories', // ?
      through: BlogPostCategorie,
      foreignKey: 'categorieId',
      otherKey: 'blogPostId',
    });
  };

  return BlogPostCategorie;
};