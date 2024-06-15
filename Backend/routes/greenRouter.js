const express = require('express');
const router = express.Router();
const loadProfileController = require('../controller/loadProfileController');

router.get("/profile/:userId", loadProfileController.getUserById);
router.put("/profile/:userId", loadProfileController.updateUserById);

module.exports = router;

