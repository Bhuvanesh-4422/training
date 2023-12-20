import express from 'express';
import { getAllUsers} from '../controllers/GetAllUsersController.js';
import { getUserById } from '../controllers/GetUserByIdController.js';
import { createUser } from '../controllers/CreateUserController.js';
import { deleteUser} from '../controllers/DeleteUserController.js';
import { updateUser } from '../controllers/UpdateUserController.js';
import { validateUserData } from '../middlewares/validationMiddleware.js';

const router = express.Router();

router.get('/data', getAllUsers);
router.get('/data/:id', getUserById);
router.post('/data', validateUserData, createUser);
router.delete('/data/:id', deleteUser);
router.put('/data/:id', validateUserData, updateUser);

export default router;