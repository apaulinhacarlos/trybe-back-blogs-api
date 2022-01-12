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
    Categorie.belongsToMany(models.BlogPost, { through: 'BlogPostCategories' });
  };

  return Categorie;
};
