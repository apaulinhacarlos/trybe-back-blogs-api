const { BlogPost, BlogPostCategorie } = require('../../models');
const blogPostValidation = require('./utils/blogPostValidation');

module.exports = async ({ userId, title, content, categoryIds }) => {
  const validatedBlogPost = await blogPostValidation.isValidParams(title, content, categoryIds);
  if (validatedBlogPost) return validatedBlogPost;
  
  const validatedCategorie = await blogPostValidation.categoryExists(categoryIds);
  if (!validatedCategorie) return { categoryDoesNotExists: '"categoryIds" not found' };

  const newPost = await BlogPost.create({ 
    userId,
    title,
    content,
    // categoryIds,
    teste: [{ categorieId: categoryIds }],
  },
  { include: [{ model: BlogPostCategorie, as: 'teste' }] });

  const { updated, published, ...newPostWithoutDate } = newPost.dataValues;

  return newPostWithoutDate;
};