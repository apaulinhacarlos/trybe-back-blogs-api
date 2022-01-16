// const { StatusCodes } = require('http-status-codes');
// // const verifyTokenAdmin = require('./verifyTokenAdmin');
// const { BlogPost, User } = require('../models');

// module.exports = async (req, res, next) => {
  // try {
  //   const { id } = req.user.dataValues;
  //   if (!id) return null;

  //   const userFound = await BlogPost.findOne({
  //     where: { id },
  //     include: [
  //       { model: User, as: 'user', attributes: { exclude: ['password'] } },
  //     ],
  //   });

  //   const { userId } = userFound.dataValues;
    
  //   if (id !== userId) {
  //     return res
  //       .status(StatusCodes.UNAUTHORIZED)
  //       .json({ message: 'Unauthorized user' });
  //   }

  //   // req.user = admin;

  //   next();
  // } catch (error) {
  //   next(error);
  // }
// };