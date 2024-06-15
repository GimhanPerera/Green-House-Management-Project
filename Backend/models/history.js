// module.exports = (sequelize, DataTypes) => {

//     const history = sequelize.define('history', {
       
//         historyId: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             primaryKey: true,
//         },

//         dateTime:{
//             type:DataTypes.DATE,
//         },

//         measurement: {
//             type: DataTypes.FLOAT,
//         },

//         status: {
//             type: DataTypes.STRING,
//         },

//     },{
//         timestamps: false
//     });

//     return history;
// }

// models/history.js

module.exports = (sequelize, DataTypes) => {
    const History = sequelize.define('History', {
      historyId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      dateTime: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      measurement: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false
      },
      sensorSensorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Sensor', // Ensure 'Sensor' is the correct model name
          key: 'sensorId'
        }
      }
    });
  
    return History;
  };
  