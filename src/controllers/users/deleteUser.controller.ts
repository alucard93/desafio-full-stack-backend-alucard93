import { Request, Response } from "express";
import deleteUserService from "../../services/users/deleteUser.service";


const deleteUserController = async (request: Request, response: Response) => {
    try {

        const { id } = request.params;
        await deleteUserService(id);

        return response
                    .status(204)
                    .json({ message: "User deleted with sucess!" });
    } catch (err) {
        if (err instanceof Error) {
            return response
                        .status(400)
                        .json({ message: err.message });
        }
    }
}

export default deleteUserController
