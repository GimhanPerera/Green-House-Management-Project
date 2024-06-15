const express = require('express');
const app = express();
const cors = require("cors");

//All request from http://localhost:3001/api/login goes to this
const greenRoutes = require('./routes/greenRouter');
const sensorRouter = require('./routes/sensorRouter');
const userRouter = require('./routes/userRouter');
const alertRouter = require('./routes/alertRouter');
const db = require('./models');
app.use(express.json());
app.use(cors());

app.use("/api/green",greenRoutes);
app.use("/api/sensors",sensorRouter);
app.use("/api/user",userRouter);
app.use("/api/alert",alertRouter);

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server running on port 3001");
    });
});