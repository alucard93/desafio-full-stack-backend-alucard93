import { Request, Response } from "express";
import deleteContactService from "../../services/contacts/deleteUser.service";


const deleteContactController = async (request: Request, response: Response) => {
    try {

        const { id } = request.params;
        await deleteContactService(id);

        return response
                    .status(204)
                    .json({ message: "Contact deleted with sucess!" });
    } catch (err) {
        if (err instanceof Error) {
            return response
                        .status(400)
                        .json({ message: err.message });
        }
    }
}

export default deleteContactController
