import { Request, Response } from "express";
import { IRegisterRequest } from "../../interfaces/register";
import createUserService from "../../services/users/createUser.service";

const createUserController = async (request: Request, response: Response) => {
    const user: IRegisterRequest = request.body
    const createdUser = await createUserService(user) 

    return response.json(createdUser)
}

export default createUserController