const db = require('../models');
const md5 = require('md5');

const loadProfileController = {
    getUserById: async (req, res) => {
        try {
            const userId = req.userId;
            const user = await db.user.findOne({ where: { userId } });
            if (user) {
                res.json(user);
            } else {
                res.status(404).json({ error: "User not found" });
            }
        } catch (error) {
            console.error("Error fetching user:", error);
            res.status(500).json({ error: "An error occurred while fetching the user." });
        }
    },
    updateUserById: async (req, res) => {
        try {
            const userId = req.userId;
            const { f_name, l_name, email } = req.body;
            const [updated] = await db.user.update(
                { f_name, l_name, email },
                { where: { userId } }
            );
            if (updated) {
                const updatedUser = await db.user.findOne({ where: { userId } });
                res.status(200).json(updatedUser);
            } else {
                res.status(404).json({ error: "User not found" });
            }
        } catch (error) {
            console.error("Error updating user:", error);
            res.status(500).json({ error: "An error occurred while updating the user." });
        }
    },
    updatePasswordById: async (req, res) => {
        try {
            const userId = req.userId;
            const { password } = req.body;
            const encryptedPassword = md5(password);
            const [updated] = await db.user.update(
                { password: encryptedPassword },
                { where: { userId } }
            );
            if (updated) {
                res.status(200).json({ message: "Password updated successfully" });
            } else {
                res.status(404).json({ error: "User not found" });
            }
        } catch (error) {
            console.error("Error updating password:", error);
            res.status(500).json({ error: "An error occurred while updating the password." });
        }
    }
};

module.exports = loadProfileController;
