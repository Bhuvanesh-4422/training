import {getUsers} from '../models/models.js';
export const getAllUsers = async (req, res ,next) => {
    try {
        const users = await getUsers();
        res.json(users);
    } catch (error) {
        next(error);
    }
};