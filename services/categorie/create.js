const { Categorie } = require('../../models');
const categorieValidation = require('./utils/categorieValidation');

module.exports = async ({ name }) => {
  const validatedCategorie = await categorieValidation.isValidParams(name);
  if (validatedCategorie) return validatedCategorie;
  
  const categorie = await Categorie.create({ name });

  return categorie.dataValues;
};