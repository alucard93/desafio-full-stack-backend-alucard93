import AppDataSource from "../../data-source";
import Contact from "../../entities/contacts.entity";
import User from "../../entities/user.entity";



const listContactsService = async (id: string): Promise<Contact[]> => {
    
    const userRepository = AppDataSource.getRepository(User)
    const contactRepository = AppDataSource.getRepository(Contact)

    const user = await userRepository.findOne({
        where: {
            id
        },
        relations: {
            contact: true
        }
    })

    return user!.contact
}

export default listContactsService