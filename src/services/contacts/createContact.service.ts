import  AppDataSource from "../../data-source";

import { IContactRequest } from "../../interfaces/contact/index";

import Contact from "../../entities/contacts.entity";
import User from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

const createContactService = async ({ name, email, cellphone }: IContactRequest, id: string): Promise<Contact> => {

    //repositorios
    const userRepository = AppDataSource.getRepository(User)
    const contactRepository = AppDataSource.getRepository(Contact)
    
    //procurei dentro do repositorio o id
    const user = await userRepository.findOneBy({
        id
    })
    

    if (!user) {
        throw new AppError("Usuário não encontrado", 404);
    }


    const contact = contactRepository.create({
        name, 
        email, 
        cellphone,
        user
    })

    await contactRepository.save(contact)

    return contact

}

export default createContactService