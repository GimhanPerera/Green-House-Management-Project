const express = require('express');
const router = express.Router();
const {validateToken} = require('../JWT');

const loginController = require('../controller/loginController');

//http://localhost:3001/api/user/login
router.post("/login", loginController.Login);
router.get("/getUserName", validateToken,loginController.getUserName);

module.exports = router;