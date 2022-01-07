const loginValidation = require('./utils/loginValidation');
const { generateToken } = require('../../middleware');

module.exports = async ({ email, password }) => {
  const validatedLogin = await loginValidation.isValidParams(email, password);
  if (validatedLogin) return validatedLogin;

  const userFound = await loginValidation.isValidUser(email, password);
  if (!userFound) return { doesNotExist: 'Invalid fields' };

  const { password: _password, ...userWithoutPassword } = userFound;
  const token = generateToken(userWithoutPassword);

  return { token };
};