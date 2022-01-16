const error = require('./error');
const generateToken = require('./generateToken');
const verifyToken = require('./verifyToken');
const verifyTokenAdmin = require('./verifyTokenAdmin');
const auth = require('./auth');
const authAdmin = require('./authAdmin');

module.exports = {
  error,
  generateToken,
  verifyToken,
  verifyTokenAdmin,
  auth,
  authAdmin,
};