import _ from 'lodash';
import {getUsers} from '../models/models.js';
export const getUserById = async (req, res , next) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        const error = new Error('Proper ID is required');
        error.status = 400;
        next(error);
        return;
    }
    try {
        const user = await getUsers(id);
        if (_.isEmpty(user)) {
            const notFoundError = new Error(`No data found with ID ${id}`);
            notFoundError.status = 404;
            next(notFoundError);
        } else {
            res.json(user);
        }
    } catch (error) {
        next(error);
    }
};