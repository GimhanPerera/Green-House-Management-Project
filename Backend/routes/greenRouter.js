const express = require('express');
const router = express.Router();

const loadProfileController = require('../controller/loadProfileController');
const registrationController = require('../controller/registrationController');

router.get("/profile/:userId", loadProfileController.getUserById);
router.put("/profile/:userId", loadProfileController.updateUserById);
router.post("/registerNew", registrationController.registerUser);

module.exports = router;

