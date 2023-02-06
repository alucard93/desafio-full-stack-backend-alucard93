import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { IContactRequest } from "../../interfaces/contact/index";
import createContactService from "../../services/contacts/createContact.service";


const createContactController = async (request: Request, response: Response) => {
    const contact: IContactRequest = request.body
    const id = request.user.id
    const createdContact = await createContactService(contact, id) 

    return response.status(201).json(instanceToPlain(createdContact))
}

export default createContactController