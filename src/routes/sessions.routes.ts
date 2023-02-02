import { Router } from "express";
import createSessionsController from "../controllers/session/sessions.controller";

const sessionRoutes = Router()

sessionRoutes.post('', createSessionsController)

export default sessionRoutes