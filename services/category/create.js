const { Category } = require('../../models');
const categoryValidation = require('./utils/categoryValidation');

module.exports = async ({ name }) => {
  const validatedCategory = await categoryValidation.isValidParams(name);
  if (validatedCategory) return validatedCategory;
  
  const category = await Category.create({ name });

  return category.dataValues;
};