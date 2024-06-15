// module.exports = (sequelize, DataTypes) => {

//     const alert = sequelize.define('alert', {
       
//         alertId: {
//             type: DataTypes.STRING(10),
//             allowNull: false,
//             primaryKey: true,
//             defaultValue: '0',
//         },
       

//         alert: {
//             type: DataTypes.STRING,

//         },

//         dateTime:{
//             type:DataTypes.DATE,
//         }

//     },{
//         timestamps: false
//     });

//     return alert;
// }


module.exports = (sequelize, DataTypes) => {
    const Alert = sequelize.define('Alert', {
      alertId: {
        type: DataTypes.STRING(10),
        allowNull: false,
        primaryKey: true,
        defaultValue: '0', // Default value '0'
      },
      alert: {
        type: DataTypes.STRING,
      },
      dateTime: {
        type: DataTypes.DATE,
      }
    }, {
      timestamps: false // Disable timestamps
    });
  
    return Alert;
  };
  