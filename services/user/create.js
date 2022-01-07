const { User } = require('../../models');
const userValidation = require('./utils/userValidation');

module.exports = async ({ displayName, email, password, image }) => {
  const validatedUser = await userValidation.isValidParams(displayName, email, password);
  if (validatedUser) return validatedUser;

  const validatedEmail = await userValidation.isEmailUsed(email);
  if (!validatedEmail) return 'User already registered';

  console.log('to aqui');
  
  return User.create({ displayName, email, password, image });
};