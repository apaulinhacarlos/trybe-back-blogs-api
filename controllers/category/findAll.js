const { StatusCodes } = require('http-status-codes');
const categoryService = require('../../services/category');

module.exports = async (req, res, next) => {
  try {
    const categories = await categoryService.findAll();

    return res.status(StatusCodes.OK).json(categories);
  } catch (error) {
    next(error);
  }
};