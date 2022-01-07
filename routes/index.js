const express = require('express');
const user = require('./user');
const login = require('./login');

const router = express.Router({ mergeParams: true });

router.use('/user', user);

router.use('/login', login);

module.exports = router;