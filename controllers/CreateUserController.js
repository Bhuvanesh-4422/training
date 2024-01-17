import {insertUser} from "../models/models.js";

export const createUser = async (req, res , next) => {
    try {
        const [insertedUser] = await insertUser(req.body);
        res.status(201).json(insertedUser);
    } catch (error) {
        next(error);
    }
};