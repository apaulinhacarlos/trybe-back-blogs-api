const { User } = require('../../models');

module.exports = async (id) => {
  const userFound = await User.findByPk(id);
  
  if (!userFound) return { doesNotExist: 'User does not exist' };
  
  const { password, ...userWithoutPassword } = userFound.dataValues;
  return userWithoutPassword;
};