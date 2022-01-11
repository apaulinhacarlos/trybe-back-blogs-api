const { BlogPost } = require('../../models');
const blogPostValidation = require('./utils/blogPostValidation');

module.exports = async ({ userId, title, content, categoryIds }) => {
  const validatedBlogPost = await blogPostValidation.isValidParams(title, content, categoryIds);
  if (validatedBlogPost) return validatedBlogPost;
  
  const validatedCategorie = await blogPostValidation.categoryExists(categoryIds);
  if (!validatedCategorie) return { categoryDoesNotExists: '"categoryIds" not found' };

  const newPost = await BlogPost.create({ userId, title, content, categoryIds });

  const { updated, published, ...newPostWithoutDate } = newPost.dataValues;

  return newPostWithoutDate;
};