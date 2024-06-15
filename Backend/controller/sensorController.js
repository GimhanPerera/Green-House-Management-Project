const { history } = require('../models');

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


module.exports = {
    getSensorHistoryById
}