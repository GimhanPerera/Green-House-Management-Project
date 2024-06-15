module.exports = (sequelize, DataTypes) => {

  const alert = sequelize.define('alert', {
     
      alertId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          
      },
     

      alert: {
          type: DataTypes.STRING,

      },

      dateTime:{
          type:DataTypes.DATE,
      }

  },{
      timestamps: false
  });

  return alert;
}