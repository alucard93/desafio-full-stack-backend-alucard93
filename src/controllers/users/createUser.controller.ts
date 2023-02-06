import { Request, Response } from "express";
import { IRegisterRequest } from "../../interfaces/register";
import createUserService from "../../services/users/createUser.service";
import { instanceToPlain } from "class-transformer";

const createUserController = async (request: Request, response: Response) => {
    const user: IRegisterRequest = request.body
    const createdUser = await createUserService(user) 

    return response.status(201).json(instanceToPlain(createdUser))
}

export default createUserController