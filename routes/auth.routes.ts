
import Express from "express";
import { AuthController } from "../app/controller/auth.controller";
const router = Express.Router()


router.post("/login", AuthController.login)
export const authRoutes = router
