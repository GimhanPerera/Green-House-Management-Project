module.exports = (sequelize, DataTypes) => {

    const sensor = sequelize.define('sensor', {
       
        sensorId: {
            type: DataTypes.STRING(10),
            allowNull: false,
            primaryKey: true,
            defaultValue: '0',
        },
       
        sensorName: {
            type: DataTypes.STRING,

        },

        sensorStatus:{
            type:DataTypes.STRING,
        },

        upper_limit:{
            type:DataTypes.FLOAT,
        },

        lower_limit:{
            type:DataTypes.FLOAT,
        },

        lastUpdate:{
            type:DataTypes.STRING,
        },

        unit:{
            type:DataTypes.STRING,
        }

    },{
        timestamps: false
    });

    return sensor;
}