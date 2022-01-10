const express = require('express');
const blogPostController = require('../controllers/blogPost');
const middleware = require('../middleware');

const router = express.Router({ mergeParams: true });

router.post('/', middleware.auth, blogPostController.create);

module.exports = router;