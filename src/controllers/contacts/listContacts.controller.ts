import { Request, Response } from "express";
import listContactsService from "../../services/contacts/listContacts.service";

const listContactsController = async (request: Request, response: Response) => {
    const id = request.user.id
    const contacts = await listContactsService(id)
    return response.json(contacts)
}

export default listContactsController