const express = require('express');
const router = express.Router();

const loginController = require('../controller/loginController');

//http://localhost:3001/api/user/login
router.post("/login", loginController.Login);

module.exports = router;