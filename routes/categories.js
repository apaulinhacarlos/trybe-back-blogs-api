const express = require('express');
const categorieController = require('../controllers/categorie');
const middleware = require('../middleware');

const router = express.Router({ mergeParams: true });

router.post('/', middleware.auth, categorieController.create);
// router.get('/', middleware.auth, userController.findAll);
// router.get('/:id', middleware.auth, userController.findById);

module.exports = router;