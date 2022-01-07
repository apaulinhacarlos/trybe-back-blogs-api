const { StatusCodes } = require('http-status-codes');
const userService = require('../../services/user');

module.exports = async (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;
    
    const newUser = await userService.create({ displayName, email, password, image });
  
    if (newUser.details) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: newUser.details[0].message });
      }
    
    if (newUser.alreadyExists) {
      return res
        .status(StatusCodes.CONFLICT)
        .json({ message: newUser.alreadyExists });
      }

    return res.status(StatusCodes.CREATED).json({ user: newUser }); // retornar o TOKEN
  } catch (error) {
    next(error);
  }
};