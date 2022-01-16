const { StatusCodes } = require('http-status-codes');
const verifyToken = require('./verifyToken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Token not found' });
    }

    const user = verifyToken(token);

    if (!user) {
      return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Expired or invalid token' });
    }

    req.user = user;
    
    next();
  } catch (error) {
    next(error);
  }
};