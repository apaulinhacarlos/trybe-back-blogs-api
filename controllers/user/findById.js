const { StatusCodes } = require('http-status-codes');
const userService = require('../../services/user');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await userService.findById(id);

    if (user.doesNotExist) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: user.doesNotExist });
      }

    return res.status(StatusCodes.OK).json(user);
  } catch (error) {
    next(error);
  }
};