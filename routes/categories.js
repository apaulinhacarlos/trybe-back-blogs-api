const express = require('express');
const categoryController = require('../controllers/category');
const middleware = require('../middleware');

const router = express.Router({ mergeParams: true });

router.post('/', middleware.auth, categoryController.create);
router.get('/', middleware.auth, categoryController.findAll);

module.exports = router;