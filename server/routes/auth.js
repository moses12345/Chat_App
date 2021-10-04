const express = require('express');

const { signup, login } = require('../controllers/auth.js');

const router = express.Router();
console.log("this isnd auth.js")

router.post('/signup', signup);
router.post('/login', login);

module.exports = router;