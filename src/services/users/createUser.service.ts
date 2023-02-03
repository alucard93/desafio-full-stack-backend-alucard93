import  AppDataSource from "../../data-source";
import  User  from "../../entities/user.entity";
import { IRegisterRequest, IRegisterResponse } from "../../interfaces/register";

import { hash } from "bcryptjs";
import { AppError } from "../../errors/appError";

const createUserService = async ({ name, email, cellphone, password }: IRegisterRequest): Promise<User> => {

    const userRepository = AppDataSource.getRepository(User)

    if(!password) {
        throw new AppError('Password is missing')
    }

    const hashedPassword = await hash(password, 10)
    
    const user = userRepository.create({
        name, 
        email, 
        cellphone, 
        password: hashedPassword
    })

    await userRepository.save(user)

    return user

}

export default createUserService