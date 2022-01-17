const { StatusCodes } = require('http-status-codes');
const blogPostService = require('../../services/blogPost');

module.exports = async (req, res, next) => {
  try {
    const { title, content, categoryIds } = req.body;

    const { id: userId } = req.user;
    
    const newBlogPost = await blogPostService.create({ userId, title, content, categoryIds });
  
    if (newBlogPost.details) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: newBlogPost.details[0].message });
      }

    if (newBlogPost.categoryDoesNotExists) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: newBlogPost.categoryDoesNotExists });
      }

    return res.status(StatusCodes.CREATED).json(newBlogPost);
  } catch (error) {
    next(error);
  }
};