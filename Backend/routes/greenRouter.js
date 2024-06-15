const express = require('express');
const router = express.Router();
const { validateToken } = require('../JWT');

const loadProfileController = require('../controller/loadProfileController');
const registrationController = require('../controller/registrationController');

router.get("/profile", validateToken, loadProfileController.getUserById);
router.put("/profile", validateToken, loadProfileController.updateUserById);
router.put("/profile/password", validateToken, loadProfileController.updatePasswordById);
router.post("/registerNew", registrationController.registerUser);

module.exports = router;
