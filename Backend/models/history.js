module.exports = (sequelize, DataTypes) => {

    const history = sequelize.define('history', {

        historyId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        dateTime: {
            type: DataTypes.DATE,
        },

        measurement: {
            type: DataTypes.FLOAT,
        },

        status: {
            type: DataTypes.STRING,
        },

    }, {
        timestamps: false
    });

    return history;
}