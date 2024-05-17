module.exports = (sequelize, DataTypes) => {

    const history = sequelize.define('history', {
       
        historyId: {
            type: DataTypes.STRING(10),
            allowNull: false,
            primaryKey: true,
            defaultValue: '0',
        },

        dateTime:{
            type:DataTypes.DATE,
        },

        measurement: {
            type: DataTypes.FLOAT,
        },

        status: {
            type: DataTypes.STRING,
        },

    });

    return history;
}