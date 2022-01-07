const { StatusCodes } = require('http-status-codes');
const categorieService = require('../../services/categorie');

module.exports = async (req, res, next) => {
  try {
    const { name } = req.body;
    
    const newCategorie = await categorieService.create({ name });
  
    if (newCategorie.details) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: newCategorie.details[0].message });
      }

    return res.status(StatusCodes.CREATED).json(newCategorie);
  } catch (error) {
    next(error);
  }
};