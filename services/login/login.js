const { User } = require('../../models');
const loginValidation = require('./utils/loginValidation');
// const authService = require('../auth');

module.exports = async ({ email, password }) => {
  const validatedLogin = await loginValidation.isValidParams(email, password);
  if (validatedLogin) return validatedLogin;

  const validatedEmail = await loginValidation.isEmailUsed(email);
  if (!validatedEmail) return { doesNotExist: 'Invalid fields' };

  const userFound = await userModel.findUser(email, password);
  const { password: _password, ...userWithoutPassword } = userFound;
  const token = authService.generateToken(userWithoutPassword);
  
  return token;

  // return User.create({ displayName, email, password, image });
};