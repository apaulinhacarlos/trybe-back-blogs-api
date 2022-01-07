const Joi = require('joi');
const { User } = require('../../../models');

const DISPLAY_NAME_MESSAGE = {
  'string.min': '"displayName" length must be at least 8 characters long',
};

const EMAIL_MESSAGE = {
  'string.email': '"email" must be a valid email',
  'string.empty': '"email" is required',
  'any.required': '"email" is required',
};

const PASSWORD_MESSAGE = {
  'string.min': '"password" length must be 6 characters long',
  'string.empty': '"password" is required',
  'any.required': '"password" is required',
};

const isValidParams = async (displayName, email, password) => {
  const { error } = Joi.object({
    displayName: Joi.string()
      .min(8)
      .messages(DISPLAY_NAME_MESSAGE),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
      .empty()
      .required()
      .messages(EMAIL_MESSAGE),
    password: Joi.string()
      .min(6)
      .empty()
      .required()
      .messages(PASSWORD_MESSAGE),
  }).validate({ displayName, email, password });
  return error;
};

const isEmailUsed = async (email) => {
  const alreadyExists = await User.findOne({
    where: { email },
  });
  if (alreadyExists) return false;
  return true;
};

module.exports = {
  isValidParams,
  isEmailUsed,
};