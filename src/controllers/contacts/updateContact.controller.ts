import { instanceToPlain } from "class-transformer";
import { request, Request, Response } from "express";

import updateContactService from "../../services/contacts/updateContact.service";


const updateContactController = async (request: Request, response: Response) => {
    const contact = request.body
    const id: string = request.user.id
    const updatedContact = await updateContactService(id, contact)

    return response.json(updatedContact)
}

export default updateContactController