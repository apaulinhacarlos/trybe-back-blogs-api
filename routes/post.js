const express = require('express');
const postController = require('../controllers/post');
const middleware = require('../middleware');

const router = express.Router({ mergeParams: true });

router.post('/', middleware.auth, postController.create);

module.exports = router;