const db = require('../models');
const md5 = require('md5');

const registrationController = {
  registerUser: async (req, res) => {
    try {
      const { firstName, lastName, email, password } = req.body;
      const maxUserId = await db.user.max('userId');
      const newUserId = (parseInt(maxUserId) + 1).toString();

      const newUser = await db.user.create({
        userId: newUserId,
        f_name: firstName,
        l_name: lastName,
        email,
        password: md5(password) // Encrypt the password with md5
      });

      res.status(201).json(newUser);
    } catch (error) {
      console.error("Error registering user:", error);
      res.status(500).json({ error: "An error occurred while registering the user." });
    }
  }
};

module.exports = registrationController;
