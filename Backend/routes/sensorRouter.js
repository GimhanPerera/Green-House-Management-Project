const express = require("express");
const router = express.Router();
const sensorController = require('../controller/sensorController') //import controller
const alertController = require('../controller/alertController') //immport controller


// http://localhost:3001/api/sensors

// http://localhost:3001/api/sensors/historyById/:id
router.get("/historyById/:id", sensorController.getSensorHistoryById)

// http://localhost:3001/api/sensors/sensorDataByUserId/:id
router.get("/sensorDataByUserId/:id", sensorController.getAllSensorDataOfUser)

// http://localhost:3001/api/sensors/add
router.post("/add", sensorController.addSensor)

//http://localhost:3001/api/sensors/edit
router.post("/edit", sensorController.editSensor)
//http://localhost:3001/api/sensors/alert
router.post("/alert", alertController.sendAlert)

module.exports = router;