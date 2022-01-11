const { StatusCodes } = require('http-status-codes');
const blogPostService = require('../../services/blogPost');

module.exports = async (req, res, next) => {
  try {
    const categories = await blogPostService.findAll();

    return res.status(StatusCodes.OK).json(categories);
  } catch (error) {
    next(error);
  }
};