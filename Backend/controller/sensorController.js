const { history, sensor } = require('../models');

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
        //Need to implement the logic for only sensors what we need

        const sensorList = await sensor.findAll({
            // where: {
            //     sensorSensorId: req.params.id,
            // },
        });
        
        res.status(200).json(sensorList);
    } catch (error) {
        console.error(error)
        res.status(400).json("Server error");
    }
}

const addSensor = async (req, res) => {
    try {
        const { sensorName, type, description, sensorStatus, upper_limit, lower_limit, lastUpdate, unit, userUserId } = req.body;

        const newSensor = await sensor.create({
            sensorName,
            type,
            description,
            sensorStatus,
            upper_limit,
            lower_limit,
            lastUpdate,
            unit,
            userUserId
        });

        res.status(201).json(newSensor);
    } catch (error) {
        console.error('Error adding sensor:', error);
        res.status(500).json({ message: 'There was an error adding the sensor.' });
    }
}

const receiveSensorData = async (req, res) => {
    try {
        const { sensorId, measurement, status } = req.body;

        const sensor = await Sensor.findByPk(sensorId);
        if (!sensor) {
            return res.status(404).json({ message: 'Sensor not found' });
        }

        const newHistory = await History.create({
            dateTime: new Date(),
            measurement,
            status,
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
        

        res.status(201).json("Test");
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