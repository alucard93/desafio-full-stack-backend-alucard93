//conexão com o banco
import AppDataSource from "../../data-source";

//entitity
import User from "../../entities/user.entity";

//interface
import { ISessionRequest } from "../../interfaces/session/sessions.interface";

//autentificação
import { compare } from "bcryptjs";
import jwt from 'jsonwebtoken'

//error
import { AppError } from "../../errors/appError";

import 'dotenv/config'

const createSessionService = async ({ email, password }: ISessionRequest): Promise<string> => {

    const userRepository = AppDataSource.getRepository(User)
    
    const user = await userRepository.findOneBy({
        email: email
    })

    if(!user) {
        throw new AppError('Invalid user or password', 401)
    }

    const passwordMatch = await compare(password, user.password)

    if(!passwordMatch) {
        throw new AppError('Invalid user or password', 401)
    }

    const token = jwt.sign({
        isAdm: user.isAdm
    }, 
        process.env.SECRET_KEY as string, 
        {
            expiresIn: '24h',
            subject: user.id
        }
    )

    return token
}

export default createSessionService