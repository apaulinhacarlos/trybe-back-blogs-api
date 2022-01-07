const { StatusCodes } = require('http-status-codes');
const loginService = require('../../services/login');

module.exports = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    
    const login = await loginService.login({ email, password });    

    if (login.details) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: login.details[0].message });
      }

      console.log(login);
    if (login.doesNotExist) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: login.doesNotExist });
      }

    return res.status(StatusCodes.OK).json(login);
  } catch (error) {
    next(error);
  }
};