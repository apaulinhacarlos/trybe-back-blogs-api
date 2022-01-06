module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      displayName: {
        type: Sequelize.STRING,
        allowNull: {
          args: false,
          msg: '\"displayName\" is required',
        },
        validate: {
          min: {
            args: 8,
            msg: '\"displayName\" length must be at least 8 characters long',
          }, 
        },
      },
      email: {
        type: Sequelize.STRING,
        allowNull: {
          args: false,
          msg: '\"email\" is required',
        },
        unique: {
          msg: 'User already registered'
        },
        validate: {
          notEmpty: {
            msg: '\"email\" is required',
          },
          isEmail: {
            msg: '\"email\" must be a valid email',
          },
        },
      },
      password: {
        type: Sequelize.STRING,
        allowNull: {
          args: false,
          msg: '\"password\" is required',
        },
        validate: {
          notEmpty: {
            msg: '\"password\" is required',
          },
          len: {
            args: [6,6], 
            msg: '\"password\" length must be 6 characters long',
          },
        },
      },
      image: {
        type: Sequelize.STRING,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};
