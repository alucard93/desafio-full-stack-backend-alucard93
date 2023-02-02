import { Request, Response } from "express"

import { ISessionRequest } from "../../interfaces/session/sessions.interface"

import createSessionService from "../../services/session/createSession.service"

const createSessionsController = async (request: Request, response: Response) => {
    
    const data: ISessionRequest = request.body

    const token = await createSessionService(data)

    return response.json( { token })
}
export default createSessionsController