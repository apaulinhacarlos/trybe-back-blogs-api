const validateTitle = {
  notEmpty: { msg: '"title" is required' },
};

const validateContent = {
  notEmpty: { msg: '"content" is required' },
};

// eslint-disable-next-line max-lines-per-function
module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, validate: validateTitle },
    content: { type: DataTypes.STRING, validate: validateContent },
    userId: DataTypes.INTEGER, // ??
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
    BlogPost.belongsToMany(models.Categorie, { through: 'BlogPostCategories' }); 
    BlogPost.hasMany(models.BlogPostCategorie, { as: 'teste', foreignKey: 'blogPostId' }); // NAO SEI SE PRECISA DISSO
  };
  
  return BlogPost;
};
