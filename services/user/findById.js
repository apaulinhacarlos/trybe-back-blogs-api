const { User } = require('../../models');

module.exports = async (id) => {
  const userFound = await User.findByPk(id);
  const { password, ...userWithoutPassword } = userFound.dataValues;
  return userWithoutPassword;
};