const { Categorie } = require('../../models');

module.exports = async () => {
  const categories = await Categorie.findAll();
  return categories;
};