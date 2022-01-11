const { BlogPost, User, Categorie } = require('../../models');

module.exports = async () => {
  const blogPosts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user' },
      { model: Categorie, as: 'categories' },
    ], 
  });
  return blogPosts;
};