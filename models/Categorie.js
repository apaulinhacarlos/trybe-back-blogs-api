const validateName = {
  notEmpty: { msg: '"name" is required' },
};

module.exports = (sequelize, DataTypes) => {
  const Categorie = sequelize.define('Categorie', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, validate: validateName },
  },
  {
    tableName: 'Categories',
    timestamps: false,
  });

  Categorie.associate = (models) => {
    Categorie.belongsTo(models.User, { foreignKey: 'id', as: 'user' });
    Categorie.belongsToMany(models.BlogPost,
      { as: 'blogPosts', through: 'BlogPost', foreignKey: 'id', otherKey: 'id' });
    // BlogPost.belongsToMany(models.Categorie, { as: 'categories', through: 'BlogPostCategorie', foreignKey: 'id', otherKey: 'id' });
  };
  
  return Categorie;
};
