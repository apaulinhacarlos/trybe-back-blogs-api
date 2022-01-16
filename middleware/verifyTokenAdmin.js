const jwt = require('jsonwebtoken');
const { User } = require('../models');

const API_SECRET = 'mysecret';

module.exports = async (token) => {
  let decoded;
  try {
    decoded = jwt.verify(token, API_SECRET);
    const { id } = decoded.data.dataValues;
  
    const userFound = await User.findOne({ where: { id } });
    if (!userFound) return null;
    
    const emailAdmin = userFound.dataValues.email;
    
    const emailToken = decoded.data.dataValues.email;

    if (emailAdmin !== emailToken) return false;
    return true;
  } catch (error) {
    return null;
  }  
};
