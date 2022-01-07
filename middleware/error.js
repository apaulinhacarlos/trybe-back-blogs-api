const { StatusCodes } = require('http-status-codes');

module.exports = (err, _req, res, _next) => {
  console.log({ INTERNAL_SERVER_ERROR: err.message });
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: err.message });
};