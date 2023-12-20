import _ from "lodash";
import {updateUserById} from "../models/models.js";

export const updateUser = async (req, res,next) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        const error = new Error('Proper ID is required');
        error.status = 400;
        next(error);
        return;
    }
    try {
        const [updatedUser] = await updateUserById(id,req.body);
        if (_.isEmpty(updatedUser)) {
            const notFoundError = new Error(`No data found with ID ${id}`);
            notFoundError.status = 404;
            next(notFoundError);
        } else {
            res.json(updatedUser);
        }
    } catch (error) {
        next(error);
    }
};
