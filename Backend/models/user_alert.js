module.exports = (sequelize, DataTypes) => {
    const user_alert = sequelize.define( 'user_alert',{
            
        userUserId: {
            type: DataTypes.STRING(10),
            references: {
              model: 'user', 
              key: 'userId',
            },
        },
    
        alertAlertId: {
            type: DataTypes.STRING(10),
            references: {
            model: 'alert', 
            key: 'alertId',
            }
        },
        }  
    );
    return user_alert;
} 


