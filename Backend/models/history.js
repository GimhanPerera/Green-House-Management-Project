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
      allowNull: false,
      primaryKey: true,
      autoIncrement: true, // Set auto increment
    },
    dateTime: {
      type: DataTypes.DATE,
    },
    measurement: {
      type: DataTypes.FLOAT,
    },
    status: {
      type: DataTypes.STRING,
    }
  }, {
    timestamps: false // Disable timestamps
  });

  return History;
};
