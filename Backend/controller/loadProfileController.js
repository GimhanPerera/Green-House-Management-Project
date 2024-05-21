const db = require('../models');

const loadProfileController = {
    getUserById: async (req, res) => {
        try {
            const { userId } = req.params;
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
    }
};

module.exports = loadProfileController;
