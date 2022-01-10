const { StatusCodes } = require('http-status-codes');
const postService = require('../../services/post');

module.exports = async (req, res, next) => {
  try {
    const { name } = req.body;
    
    const newPost = await postService.create({ name });
  
    if (newPost.details) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: newPost.details[0].message });
      }

    return res.status(StatusCodes.CREATED).json(newPost);
  } catch (error) {
    next(error);
  }
};