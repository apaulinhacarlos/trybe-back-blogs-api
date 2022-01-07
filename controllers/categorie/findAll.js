const { StatusCodes } = require('http-status-codes');
const categorieService = require('../../services/categorie');

module.exports = async (req, res, next) => {
  try {
    const categories = await categorieService.findAll();

    return res.status(StatusCodes.OK).json(categories);
  } catch (error) {
    next(error);
  }
};