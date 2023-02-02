import listUsersService from "../../services/users/listUsers.service";

import { Request, Response } from "express";

const listUsersController = async (request: Request, response: Response) => {
    const users = await listUsersService()
    return response.json(users)
}

export default listUsersController