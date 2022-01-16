const { BlogPost, Category } = require('../../models');
const blogPostValidation = require('./utils/blogPostValidation');

module.exports = async ({ id, title, content, categoryIds }) => {
  const validatedBlogPost = await blogPostValidation.isValidParamsUpdate(title, content);
  if (validatedBlogPost) return validatedBlogPost;
  
  if (categoryIds) return { categoryError: 'Categories cannot be edited' };

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
  
  if (!postFound) return { doesNotExist: 'Post does not exist' };

  const { password, id: _id, updated, published, ...postWithoutPassword } = postFound.dataValues;
  return postWithoutPassword;
};