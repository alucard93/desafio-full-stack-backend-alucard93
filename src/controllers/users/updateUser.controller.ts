import { instanceToPlain } from "class-transformer";
import { request, Request, Response } from "express";
import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { IUserUpdateRequest } from "../../interfaces/user/user.interface";

import updateUserService  from '../../services/users/updateUser.service'

const updateUserController = async (request: Request, response: Response) => {
    const user: IUserUpdateRequest = request.body
    const id: string = request.params.id
    const updatedUser: IUserUpdateRequest = await updateUserService(user, id)

    return response.json(instanceToPlain(updatedUser))
}

export default updateUserController