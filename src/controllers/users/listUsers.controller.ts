import listUsersService from "../../services/users/listUsers.service";

import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";

const listUsersController = async (request: Request, response: Response) => {
    const users = await listUsersService()
    return response.json(instanceToPlain(users))
}

export default listUsersController