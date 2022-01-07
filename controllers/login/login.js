const { StatusCodes } = require('http-status-codes');
const loginService = require('../../services/login');

module.exports = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    
    const loginToken = await loginService.login({ email, password });    

    if (loginToken.details) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: loginToken.details[0].message });
      }

    if (loginToken.doesNotExist) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: loginToken.doesNotExist });
      }

    return res.status(StatusCodes.OK).json(loginToken);
  } catch (error) {
    next(error);
  }
};