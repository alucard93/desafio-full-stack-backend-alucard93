import AppDataSource from "../../data-source";
import Contact from "../../entities/contacts.entity";

import { AppError } from "../../errors/appError";

import { IContactUpdateRequest } from "../../interfaces/contact";

const updateContactService = async (id: string, contact: IContactUpdateRequest) => {
  const { name, email, cellphone } = contact
  const contactRepository = AppDataSource.getRepository(Contact);
  const contactEdited = await contactRepository.findOneBy({ id })

  if (!contactEdited) {
    throw new AppError("Contact not found", 404)
  }

    await contactRepository.update(id, {
        name: name ? name : contactEdited.name,
        email: email ? email : contactEdited.email,
        cellphone: cellphone ? cellphone : contactEdited.cellphone,
})

    const userReturn = await contactRepository.findOneBy({ id })

    return userReturn
}

export default updateContactService