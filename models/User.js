module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    displayName: {
      type: DataTypes.STRING,
      validate: {
        min: {
          args: 8,
          msg: '"displayName" length must be at least 8 characters long',
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: '"email" is required',
        },
        isEmail: {
          msg: '"email" must be a valid email',
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: '"password" is required',
        },
        len: {
          args: [6, 6],
          msg: '"password" length must be 6 characters long',
        },
      },
    },
    image: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'Users',
    timestamps: true,
  });
  return User;
};
