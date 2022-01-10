const validateTitle = {
  notEmpty: { msg: '"title" is required' },
};

const validateContent = {
  notEmpty: { msg: '"content" is required' },
};

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('BlogPost', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, validate: validateTitle },
    content: { type: DataTypes.STRING, validate: validateContent },
    userId: { type: DataTypes.INTEGER, foreignKey: true },
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  },
  {
    tableName: 'BlogPosts',
    createdAt: 'published',
    updatedAt: 'updated',
  });

  User.associate = (models) => {
    User.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  };
  
  return User;
};
