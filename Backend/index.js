const express = require('express');
const app = express();
const cors = require("cors");

const db = require('./models');
app.use(express.json());
app.use(cors());


//All request from http://localhost:3001/api/login goes to this
const loginRouter = require('./routes/loginRouter');
app.use("/api/login",loginRouter);

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server running on port 3001");
    });
});