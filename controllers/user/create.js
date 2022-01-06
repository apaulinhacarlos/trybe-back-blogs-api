const { StatusCodes } = require('http-status-codes');
const userService = require('../../services/user');

module.exports = async (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;
    
    const newUser = await userService.create({ displayName, email, password, image });

    // if (newUser.emailAlreadyExists) {
    //   return res
    //     .status(StatusCodes.CONFLICT)
    //     .json({ message: newUser.emailAlreadyExists });
    //   }

    // if (newUser.details) {
    //   return res
    //     .status(StatusCodes.BAD_REQUEST)
    //     .json({ message: 'Invalid entries. Try again.' });
    //   }

    return res.status(StatusCodes.CREATED).json({ user: newUser });
  } catch (error) {
    // next(error);
    console.log(error);
  }
};