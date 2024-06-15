const { history, sensor, user } = require('../models');
const { validateToken } = require('../JWT');
const { sendAlert } = require('./alertController');

const getSensorHistoryById = async (req, res) => {
    try {
        const historyList = await history.findAll({
            where: {
                sensorSensorId: req.params.id,
            },
        });

        res.status(200).json(historyList);
    } catch (error) {
        console.error(error)
        res.status(400).json("Server error");
    }
}

const getAllSensorDataOfUser = async (req, res) => {
    try {
        const sensorList = await sensor.findAll({
            where: {
                userUserId: req.userId
            },
        });
        console.log("ID ", req.userId)
        res.status(200).json(sensorList);
    } catch (error) {
        console.error(error)
        res.status(400).json("Server error");
    }
}

const addSensor = async (req, res) => {
    try {
        const { sensorName, type, description, sensorStatus, upper_limit, lower_limit, lastUpdate, unit } = req.body;
        const userUserId = req.userId;

        const newSensor = await sensor.create({
            sensorName,
            type,
            description,
            sensorStatus,
            upper_limit,
            lower_limit,
            lastUpdate,
            unit,
            userUserId: req.userId
        });

        res.status(201).json(newSensor);
    } catch (error) {
        console.error('Error adding sensor:', error);
        res.status(500).json({ message: 'There was an error adding the sensor.' });
    }
}

const receiveSensorData = async (req, res) => {
    try {
        const { sensorId, measurement } = req.body;

        const sensor1 = await sensor.findByPk(sensorId);
        if (!sensor1) {
            return res.status(404).json({ message: 'Sensor not found' });
        }
        const userId = parseInt(sensor1.userUserId, 10);
        console.log("userID ", userId)
        //const user1 = await user.findOne({ where: { userId } });
        //const email = user1.email;
        const sensorDetails = {
            sensorId: sensor1.sensorId,
            sensorName: sensor1.sensorName,
            upper_limit: sensor1.upper_limit,
            lower_limit: sensor1.lower_limit,
            value: measurement
        }
        if (measurement > sensor1.upper_limit) {
            const newHistory = await history.create({
                dateTime: new Date(),
                measurement,
                status: 'High',
                sensorSensorId: sensorId
            });
            console.log("Upper")
            const answer = sendAlert(userId, sensorDetails)
            return res.status(200).json(sensorDetails);
        }

        if (measurement < sensor1.lower_limit) {
            const newHistory = await history.create({
                dateTime: new Date(),
                measurement,
                status: 'Low',
                sensorSensorId: sensorId
            });
            const answer = sendAlert(userId, sensorDetails)
            return res.status(201).json(sensorDetails);
        }

        // Get the current max historyId
        const lastHistory = await history.findOne({
            attributes: ['historyId'],
            order: [['historyId', 'DESC']]
        });

        // Determine the new historyId
        let newHistoryId;
        if (lastHistory) {
            newHistoryId = lastHistory.historyId + 1;
        } else {
            newHistoryId = 10000;
        }

        // Create the new history record
        const newHistory = await history.create({
            historyId: newHistoryId,
            dateTime: new Date(),
            measurement,
            status: 'ok',
            sensorSensorId: sensorId
        });

        res.status(201).json(newHistory);
    } catch (error) {
        console.error('Error saving sensor data:', error);
        res.status(500).json({ message: 'Failed to save sensor data' });
    }
}



const editSensor = async (req, res) => {
    try {

        const editSensor = await sensor.findByPk(req.body.sensorId);
        // Check if the sensor exists
        if (!editSensor) {
            console.log("ID not found: ", req.body.sensorId)
            return res.status(404).json({ error: "Sensor not found" });
        }
        editSensor.sensorName = req.body.sensorName;
        editSensor.description = req.body.description;
        editSensor.upper_limit = req.body.upper_limit;
        editSensor.lower_limit = req.body.lower_limit;
        editSensor.unit = req.body.unit;
        await editSensor.save();
        res.status(201).json("Updated");
    } catch (error) {
        console.error('Error adding sensor:', error);
        res.status(500).json({ message: 'There was an error adding the sensor.' });
    }
}

module.exports = {
    getSensorHistoryById,
    getAllSensorDataOfUser,
    addSensor,
    receiveSensorData,
    editSensor
}