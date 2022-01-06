const express = require('express');
// const middleware = require('../middleware');
const userController = require('../controllers/user');

const router = express.Router({ mergeParams: true });

router.post('/', userController.create);
module.exports = router;