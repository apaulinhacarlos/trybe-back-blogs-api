const validateName = {
  notEmpty: { msg: '"name" is required' },
};

module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, validate: validateName },
  },
  {
    tableName: 'Categories',
    timestamps: false,
  });
  
  Category.associate = (models) => {
    Category.belongsToMany(models.BlogPost, { through: 'PostsCategories' });
  };

  return Category;
};
