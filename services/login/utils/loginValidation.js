const Joi = require('joi');
const { User } = require('../../../models');

const EMAIL_MESSAGE = {
  'string.empty': '"email" is not allowed to be empty',
  'any.required': '"email" is required',
};

const PASSWORD_MESSAGE = {
  'string.empty': '"password" is not allowed to be empty',
  'any.required': '"password" is required',
};

const isValidParams = async (email, password) => {
  const { error } = Joi.object({
    email: Joi.string()
      .empty()
      .required()
      .messages(EMAIL_MESSAGE),
    password: Joi.string()
      .empty()
      .required()
      .messages(PASSWORD_MESSAGE),
  }).validate({ email, password });
  return error;
};

const isValidUser = async (email, password) => {
  const userFound = await User.findOne({
    where: { email, password },
  });
  if (!userFound) return false;
  return userFound.dataValues;
};

module.exports = {
  isValidParams,
  isValidUser,
};