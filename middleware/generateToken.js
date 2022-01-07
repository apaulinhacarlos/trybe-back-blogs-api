const jwt = require('jsonwebtoken');

const API_SECRET = 'mysecret';

const JWT_CONFIG = {
  expiresIn: '10h',
  algorithm: 'HS256',
};

module.exports = (data) => jwt.sign({ data }, API_SECRET, JWT_CONFIG);
