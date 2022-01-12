const { BlogPost, PostsCategories } = require('../../models');
const blogPostValidation = require('./utils/blogPostValidation');

module.exports = async ({ userId, title, content, categoryIds }) => {
  const validatedBlogPost = await blogPostValidation.isValidParams(title, content, categoryIds);
  if (validatedBlogPost) return validatedBlogPost;
  
  const validatedCategory = await blogPostValidation.categoryExists(categoryIds);
  if (!validatedCategory) return { categoryDoesNotExists: '"categoryIds" not found' };

  const newPost = await BlogPost.create({ 
    userId,
    title,
    content,
    // categoryIds,
    teste: [{ categorieId: categoryIds }],
  },
  { include: [{ model: PostsCategories, as: 'teste' }] });

  const { updated, published, ...newPostWithoutDate } = newPost.dataValues;

  return newPostWithoutDate;
};