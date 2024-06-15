module.exports = (sequelize, DataTypes) => {

    const sensor = sequelize.define('sensor', {

        sensorId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true, // Set auto increment
        },

        sensorName: {
            type: DataTypes.STRING,

        },
        type: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
        },

        sensorStatus: {
            type: DataTypes.STRING,
        },

        upper_limit: {
            type: DataTypes.FLOAT,
        },

        lower_limit: {
            type: DataTypes.FLOAT,
        },

        lastUpdate: {
            type: DataTypes.FLOAT,
        },
        unit: {
            type: DataTypes.STRING,
        }

    }, {
        timestamps: false
    });

    return sensor;
}