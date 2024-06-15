'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

// //m:n user alert
// db.user.belongsToMany(db.alert,{through: db.user_alert});
// db.alert.belongsToMany(db.user,{ through: db.user_alert});

//1:m sensor alert
db.user.hasMany(db.sensor);
db.sensor.belongsTo(db.user);

//1:m sensor alert
db.sensor.hasMany(db.alert);
db.alert.belongsTo(db.sensor);

//1:m sensor history
db.sensor.hasMany(db.history);
db.history.belongsTo(db.sensor);
