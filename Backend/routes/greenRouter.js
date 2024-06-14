const express = require("express");
const router = express.Router();
const loginContraller = require('../controller/loginController') //import controller
const loadProfileController = require('../controller/loadProfileController');


//Login
router.get("/", loginContraller.Login)
router.get("/profile/:userId", loadProfileController.getUserById);

module.exports = router;