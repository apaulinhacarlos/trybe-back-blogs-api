const validateTitle = {
  notEmpty: { msg: '"title" is required' },
};

const validateContent = {
  notEmpty: { msg: '"content" is required' },
};

module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, validate: validateTitle },
    content: { type: DataTypes.STRING, validate: validateContent },
    userId: DataTypes.INTEGER,
    categoryIds: DataTypes.ARRAY(DataTypes.INTEGER), // ??
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  },
  {
    tableName: 'BlogPosts',
    createdAt: 'published',
    updatedAt: 'updated',
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    // BlogPost.belongsToMany(models.Categorie, { as: 'categories', through: 'BlogPostCategorie', foreignKey: 'id', otherKey: 'id' });
    // BlogPost.hasMany(models.Categorie, { as: 'categories', through: 'BlogPostCategorie', foreignKey: 'id', otherKey: 'id' });
  };
  
  return BlogPost;
};
