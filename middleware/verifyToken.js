const jwt = require('jsonwebtoken');

const API_SECRET = 'mysecret';

module.exports = (token) => {
  let decoded;
  try {
    decoded = jwt.verify(token, API_SECRET);
  } catch (error) {
    return null;
  }

  const result = decoded.data;
  if (!result) return null;
  return result;
};