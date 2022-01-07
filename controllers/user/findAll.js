const { StatusCodes } = require('http-status-codes');
const userService = require('../../services/user');

module.exports = async (req, res, next) => {
  try {
    const users = await userService.findAll();

    return res.status(StatusCodes.OK).json(users);
  } catch (error) {
    next(error);
  }
};