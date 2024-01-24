import {User} from "../Models/user.js"

/**
 * function to get all users from db
 * @param req
 * @param res
 * @returns {Promise<User[]>}
 */
export const getUser = async (req, res) => {
    try {
        const users = await User.findAll()
        res.json(users);
        return users
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const getUserById = async (req, res) => {
    try {
        const idParam = req.params.id;
        const user = await User.findOne({ where: { id: idParam } })
        res.json(user);
        return user
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};



