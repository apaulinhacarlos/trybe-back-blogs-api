const { StatusCodes } = require('http-status-codes');
const { BlogPost, Category } = require('../../models');
const blogPostValidation = require('./utils/blogPostValidation');

module.exports = async ({ userId, id, title, content, categoryIds }) => {
  if (categoryIds) return { statusCode: 400, message: 'Categories cannot be edited' };

  const validatedUser = await blogPostValidation.isValidUser(userId, id);
  if (!validatedUser) return { statusCode: StatusCodes.UNAUTHORIZED, message: 'Unauthorized user' };

  const validatedBlogPost = await blogPostValidation.isValidParamsUpdate(title, content);
  if (validatedBlogPost) return { statusCode: 400, message: validatedBlogPost.details[0].message };

  await BlogPost.update(
    { title, content },
    { where: { id } },
  );

  const postFound = await BlogPost.findOne({
    where: { id },
    include: [
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  
  if (!postFound) return { statusCode: StatusCodes.BAD_REQUEST, message: 'Post does not exist' };

  const { password, id: _id, updated, published, ...postWithoutPassword } = postFound.dataValues;
  return postWithoutPassword;
};