module.exports = (sequelize, DataTypes) => {

    const alert = sequelize.define('alert', {
       
        alertId: {
            type: DataTypes.STRING(10),
            allowNull: false,
            primaryKey: true,
            defaultValue: '0',
        },
       

        alert: {
            type: DataTypes.STRING,

        },

        dateTime:{
            type:DataTypes.DATE,
        }

    });

    return alert;
}