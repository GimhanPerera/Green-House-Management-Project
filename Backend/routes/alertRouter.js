const express = require('express');
const router = express.Router();
const {validateToken} = require('../JWT');
const alertController = require('../controller/alertController');

//  http://localhost:3001/api/alert/getData
router.get("/getData",validateToken, alertController.getAllAlertDataOfUser);

module.exports = router;

