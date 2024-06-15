module.exports = (sequelize, DataTypes) => {
    const user_alert = sequelize.define( 'user_alert',{
            
        userUserId: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user', 
              key: 'userId',
            },
        },
    
        alertAlertId: {
            type: DataTypes.INTEGER,
            references: {
            model: 'alert', 
            key: 'alertId',
            }
        },
        },{
            timestamps: false
        }
    );
    return user_alert;
} 


