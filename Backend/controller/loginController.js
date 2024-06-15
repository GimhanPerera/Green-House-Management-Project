const { user } = require('../models');
const md5 = require('md5');


const Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Fetch user from the database
        const userFromDB = await user.findOne({ where: { email } });
        
        if (!userFromDB) {
            return res.status(401).json({ error: "Wrong username or password" });
        }

        // Compare the encrypted passwords
        if (userFromDB.password !== md5(password)) {
            return res.status(401).json({ error: "Wrong username or password" });
        }
        const response = {
            "isValid":true
        }
        
        res.status(200).json(response);
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = Login;



module.exports = {
    Login
}