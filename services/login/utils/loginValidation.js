const Joi = require('joi');
// const { User } = require('../../../models');

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
      .empty('')
      .required()
      .messages(EMAIL_MESSAGE),
    password: Joi.string()
      .empty('')
      .required()
      .messages(PASSWORD_MESSAGE),
  }).validate({ email, password });
  return error;
};

const isEmailUsed = async (email) => {
  const alreadyExists = await User.findAll({
    limit: 1,
    where: { email },
  });
  if (alreadyExists.length) return false;
  return true;
};

module.exports = {
  isValidParams,
  isEmailUsed,
};