const express = require("express");
const router = express.Router();
const loginContraller = require('../controller/loginController') //import controller


//Login
router.get("/", loginContraller.Login)


module.exports = router;