const { BlogPost } = require('../../models'); // esse nome vem da model
const blogPostValidation = require('./utils/blogPostValidation');

module.exports = async ({ userId, title, content, categoryIds }) => {
  const validatedBlogPost = await blogPostValidation.isValidParams(title, content, categoryIds);
  if (validatedBlogPost) return validatedBlogPost;
  
  const validatedCategory = await blogPostValidation.categoryExists(categoryIds);
  if (!validatedCategory) return { categoryDoesNotExists: '"categoryIds" not found' };

  const newPost = await BlogPost.create({ userId, title, content });

  const { updated, published, ...newPostWithoutDate } = newPost.dataValues;

  return newPostWithoutDate;
};