import { Router } from "express";
import createUserController from "../controllers/users/createUser.controller";
import deleteUserController from "../controllers/users/deleteUser.controller";
import listUsersController from "../controllers/users/listUsers.controller";
import updateUserController from "../controllers/users/updateUser.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";

const userRoutes = Router()

userRoutes.post('', createUserController)

userRoutes.get('',
                ensureAuthMiddleware,
                listUsersController
            )

userRoutes.patch('/:id',
                ensureAuthMiddleware,
                updateUserController
            )

userRoutes.delete('/:id',
                ensureAuthMiddleware,
                deleteUserController
            )

export default userRoutes