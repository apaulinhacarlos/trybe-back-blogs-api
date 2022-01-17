const { StatusCodes } = require('http-status-codes');
const blogPostService = require('../../services/blogPost');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, content, categoryIds } = req.body;
    const { id: userId } = req.user;

    const updateBlogPost = await blogPostService.update({
      userId, id, title, content, categoryIds,
    });

    if (updateBlogPost.message) {
      return res
        .status(updateBlogPost.statusCode)
        .json({ message: updateBlogPost.message });
      }

    return res.status(StatusCodes.OK).json(updateBlogPost);
  } catch (error) {
    next(error);
  }
};