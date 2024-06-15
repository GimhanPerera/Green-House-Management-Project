
const { user } = require('../models');
const { createToken } = require('../JWT');

const Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Fetch user from the database
        const userFromDB = await user.findOne({ where: { email } });
        if (!userFromDB) {
            return res.status(401).json({ error: "Wrong username or password" });
        }

        // Compare the plain text passwords
        if (userFromDB.password !== password) {
            return res.status(401).json({ error: "Wrong username or password" });
        }
        const accessToken = createToken(userFromDB.userId);
        const response = {
            "isValid":true,
            "accessToken":accessToken,
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