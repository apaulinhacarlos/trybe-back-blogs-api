const { BlogPost, User, Category } = require('../../models');

module.exports = async () => {
  const blogPosts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user' },
      { model: Category, as: 'categories' },
    ], 
  });
  return blogPosts;
};