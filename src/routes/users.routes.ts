import { Router } from "express";
import createUserController from "../controllers/users/createUser.controller";
import listUsersController from "../controllers/users/listUsers.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";

const userRoutes = Router()

userRoutes.post('', createUserController)
userRoutes.get('',
                ensureAuthMiddleware,
                listUsersController
            )

export default userRoutes