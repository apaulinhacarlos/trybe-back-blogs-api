const { StatusCodes } = require('http-status-codes');
const blogPostService = require('../../services/blogPost');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, content, categoryIds } = req.body;

    const updateBlogPost = await blogPostService.update({ id, title, content, categoryIds });
  
    if (updateBlogPost.details) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: updateBlogPost.details[0].message });
      }

    if (updateBlogPost.categoryError) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: updateBlogPost.categoryError });
      }

    return res.status(StatusCodes.OK).json(updateBlogPost);
  } catch (error) {
    next(error);
  }
};