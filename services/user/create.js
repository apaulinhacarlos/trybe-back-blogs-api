const { User } = require('../../models');
// const userValidation = require('./utils/userValidation');

module.exports = async ({ displayName, email, password, image }) => {
  // const validateEmail = await userValidation.isValidEmail(email);
  // if (validateEmail) return { emailAlreadyExists: 'Email already registered' };

  // const error = await userValidation.isValidParams(name, email, password);
  // if (error) return error;
  console.log('to aqui');
  
  return User.create({ displayName, email, password, image });
};