import AppDataSource from "../../data-source";
import Contact from "../../entities/contacts.entity";
import { AppError } from "../../errors/appError";

const deleteContactService = async (id: string) => {

    const contactRepository = AppDataSource.getRepository(Contact);
    const contact = await contactRepository.findOneBy({ id });
    
    if (!contact) {
        throw new AppError("contact not found!", 404);
    }
    
    await contactRepository.delete(contact!.id)
    
    return true;
}

export default deleteContactService;



