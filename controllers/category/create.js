const { StatusCodes } = require('http-status-codes');
const categoryService = require('../../services/category');

module.exports = async (req, res, next) => {
  try {
    const { name } = req.body;
    
    const newCategory = await categoryService.create({ name });
  
    if (newCategory.details) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: newCategory.details[0].message });
      }

    return res.status(StatusCodes.CREATED).json(newCategory);
  } catch (error) {
    next(error);
  }
};