const { Post } = require('../../models');
// const categorieValidation = require('./utils/categorieValidation');

module.exports = async ({ name }) => {
  // const validatedCategorie = await categorieValidation.isValidParams(name);
  // if (validatedCategorie) return validatedCategorie;
  
  const post = await Post.create({ name });

  return post.dataValues;
};