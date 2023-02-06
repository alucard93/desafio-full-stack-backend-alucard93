import AppDataSource from "../../data-source";

import User from "../../entities/user.entity";

import { IUserUpdateRequest } from '../../interfaces/user/user.interface'

import { hash } from 'bcryptjs'
import { AppError } from "../../errors/appError";

const updateUserService = async ({ name, email, cellphone, password}: IUserUpdateRequest, id: string ): Promise<User> => {
    const userRepository = AppDataSource.getRepository(User)
    const findUser = await userRepository.findOneBy({
        id
    })

    if(!findUser) {
        throw new AppError('User not found', 404)
    }

    await userRepository.update(id, {
        name: name,
        email: email,
        cellphone:cellphone,
        password: password ? await hash(password, 10) : findUser.password
    })

    const user = await userRepository.findOneBy({ id })

    return user!
}

export default updateUserService