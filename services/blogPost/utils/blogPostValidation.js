const Joi = require('joi');
const { Category, BlogPost } = require('../../../models');

const TITLE_MESSAGE = {
  'string.empty': '"title" is required',
  'any.required': '"title" is required',
};

const CONTENT_MESSAGE = {
  'string.empty': '"content" is required',
  'any.required': '"content" is required',
};

const CATEGORY_IDS_MESSAGE = {
  'string.empty': '"categoryIds" is required',
  'any.required': '"categoryIds" is required',
};

const isValidParams = async (title, content, categoryIds) => {
  const { error } = Joi.object({
    title: Joi.string()
      .empty()
      .required()
      .messages(TITLE_MESSAGE),
    content: Joi.string()
      .empty()
      .required()
      .messages(CONTENT_MESSAGE),
    categoryIds: Joi.array()
      .items(Joi.number())
      .empty()
      .required()
      .messages(CATEGORY_IDS_MESSAGE),
  }).validate({ title, content, categoryIds });
  return error;
};

const categoryExists = async (categoryIds) => {
  const categories = await Category.findAll({
    attributes: ['id'],
    where: {
      id: categoryIds,
    },
  });

  if (categories.length === categoryIds.length) return true;
  return false;
};

const isValidParamsUpdate = async (title, content) => {
  const { error } = Joi.object({
    title: Joi.string()
      .empty()
      .required()
      .messages(TITLE_MESSAGE),
    content: Joi.string()
      .empty()
      .required()
      .messages(CONTENT_MESSAGE),
  }).validate({ title, content });
  return error;
};

const isValidUser = async (userId, postId) => {
  const validUser = await BlogPost.findOne({
    where: { id: postId },
  });
  if (validUser && userId !== validUser.userId) return false;
  return true;
};

module.exports = {
  isValidParams,
  categoryExists,
  isValidParamsUpdate,
  isValidUser,
};