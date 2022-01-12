const Joi = require('joi');

const NAME_MESSAGE = {
  'string.empty': '"name" is required',
  'any.required': '"name" is required',
};

const isValidParams = async (name) => {
  const { error } = Joi.object({
    name: Joi.string()
      .empty()
      .required()
      .messages(NAME_MESSAGE),
  }).validate({ name });
  return error;
};

module.exports = {
  isValidParams,
};