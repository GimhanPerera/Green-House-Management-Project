const express = require("express");
const router = express.Router();
const sensorController = require('../controller/sensorController') //import controller


// http://localhost:3001/api/sensors

// http://localhost:3001/api/sensors/historyById/:id
router.get("/historyById/:id", sensorController.getSensorHistoryById)

module.exports = router;