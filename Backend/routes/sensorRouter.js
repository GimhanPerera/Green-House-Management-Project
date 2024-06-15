const express = require("express");
const router = express.Router();
const sensorController = require('../controller/sensorController') //import controller
const alertController = require('../controller/alertController') //immport controller
const {validateToken} = require('../JWT');


// http://localhost:3001/api/sensors

// http://localhost:3001/api/sensors/historyById/:id
router.get("/historyById/:id",validateToken, sensorController.getSensorHistoryById)

// http://localhost:3001/api/sensors/sensorDataByUserId/:id
router.get("/sensorDataByUserId",validateToken, sensorController.getAllSensorDataOfUser)

// http://localhost:3001/api/sensors/add
router.post("/add",validateToken, sensorController.addSensor)

//http://localhost:3001/api/sensors/edit
router.post("/edit",validateToken, sensorController.editSensor)
//http://localhost:3001/api/sensors/alert
router.post("/alert", alertController.sendAlert)

router.post("/receiveData", sensorController.receiveSensorData)


module.exports = router;