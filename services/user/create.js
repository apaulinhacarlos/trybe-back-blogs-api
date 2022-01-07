const { User } = require('../../models');
const userValidation = require('./utils/userValidation');
const { generateToken } = require('../../middleware');

module.exports = async ({ displayName, email, password, image }) => {
  const validatedUser = await userValidation.isValidParams(displayName, email, password);
  if (validatedUser) return validatedUser;

  const validatedEmail = await userValidation.isEmailUsed(email);
  if (!validatedEmail) return { alreadyExists: 'User already registered' };
  
  await User.create({ displayName, email, password, image });
  const userFound = await User.findOne({
    where: { email, password },
  });
  
  const { password: _password, ...userWithoutPassword } = userFound;
  const token = generateToken(userWithoutPassword);

  return { token };
};