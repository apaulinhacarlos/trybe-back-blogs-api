const validateDisplayName = {
  len: {
    args: [8],
    msg: '"displayName" length must be at least 8 characters long',
  },
};

const validateEmail = {
  notEmpty: { msg: '"email" is required' },
  isEmail: { msg: '"email" must be a valid email' },
};

const validatePassword = {
  notEmpty: { msg: '"password" is required' },
  len: {
    args: [6, 6],
    msg: '"password" length must be 6 characters long',
  },
};

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    displayName: { type: DataTypes.STRING, validate: validateDisplayName },
    email: { type: DataTypes.STRING, validate: validateEmail },
    password: { type: DataTypes.STRING, validate: validatePassword },
    image: DataTypes.STRING,
  },
  {
    tableName: 'Users',
    timestamps: false, // "timestamps: true" briga criação do createdAt e updateAt na migration
  });

  User.associate = (models) => {
    User.hasOne(models.BlogPost, { foreignKey: 'userId', as: 'user' });
  };
  return User;
};
