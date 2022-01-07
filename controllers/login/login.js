const { StatusCodes } = require('http-status-codes');
const loginService = require('../../services/login');

module.exports = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    
    // const tokenLogin = await loginService.login({ email, password });    

    // if (tokenLogin.details) {
    //   return res
    //     .status(StatusCodes.UNAUTHORIZED)
    //     .json({ message: 'All fields must be filled' });
    //   }

    // if (tokenLogin.incorrectUser) {
    //   return res
    //     .status(StatusCodes.UNAUTHORIZED)
    //     .json({ message: tokenLogin.incorrectUser });
    //   }

    // return res.status(StatusCodes.OK).json({ token: tokenLogin });
  } catch (error) {
    next(error);
  }
};