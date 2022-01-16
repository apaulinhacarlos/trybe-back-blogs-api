const { BlogPost, User, Category } = require('../../models');

module.exports = async (id) => {
  const postFound = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  
  if (!postFound) return { doesNotExist: 'Post does not exist' };
  
  const { password, ...postWithoutPassword } = postFound.dataValues;
  return postWithoutPassword;
};