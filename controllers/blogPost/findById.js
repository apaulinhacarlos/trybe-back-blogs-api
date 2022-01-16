const { StatusCodes } = require('http-status-codes');
const blogPostService = require('../../services/blogPost');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const blogPost = await blogPostService.findById(id);

    if (blogPost.doesNotExist) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: blogPost.doesNotExist });
      }

    return res.status(StatusCodes.OK).json(blogPost);
  } catch (error) {
    next(error);
  }
};