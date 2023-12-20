import _ from "lodash";
import {deleteUserById} from "../models/models.js";

export const deleteUser = async (req, res , next) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        const error = new Error('Proper ID is required');
        error.status = 400;
        next(error);
        return;
    }
    try {
        const deletedUser = await deleteUserById(id);
        if (_.isEmpty(deletedUser)) {
            const notFoundError = new Error(`No data found with ID ${id}`);
            notFoundError.status = 404;
            next(notFoundError);
        } else {
            res.status(204).send();
        }
    } catch (error) {
        next(error);
    }
};
