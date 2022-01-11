const express = require('express');
const categorieController = require('../controllers/categorie');
const middleware = require('../middleware');

const router = express.Router({ mergeParams: true });

router.post('/', middleware.auth, categorieController.create);
router.get('/', middleware.auth, categorieController.findAll);

module.exports = router;