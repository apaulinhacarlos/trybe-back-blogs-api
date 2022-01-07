const Joi = require('joi');
const { User } = require('../../../models');

const isEmailUsed = async (email) => {
  const alreadyExists = await User.findAll({
    limit: 1,
    where: {
      email,
    },
  });
  if (alreadyExists.length) return false;
  return true;
};
  
const isValidParams = async (displayName, email, password) => {
  const { validation } = Joi.object({
    displayName: Joi.string()
      .min(8)
      .messages({
        'string.min': '"displayName" length must be at least 8 characters long',
      }),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
      .empty('')
      .required()
      .messages({
        'string.email': '"email" must be a valid email',
        'string.empty': '"email" is required',
        'any.required': '"email" is required',
      }),
    password: Joi.string()
      .min(6)
      .required()
      .messages({
        'string.min': '"password" length must be 6 characters long',
        'any.required': '"password" is required',
      }),
  }).validate({ displayName, email, password });
  return validation;
};

module.exports = {
  isEmailUsed,
  isValidParams,
};