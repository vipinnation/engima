import { Request, Response } from "express";
import Logger from "../../library/logger";
import { decryptPassword } from "../../library/password.process";
import { ServerResponse } from "../../library/server-response";
import { generateTokens } from "../middleware/tokens";
import User from "../model/user.model";

const login = async (req: Request, res: Response) => {
    try {
        let { email, password } = req.body
        const user: any = await User.findOne({ where: { email } });
        if (!user) return ServerResponse.bad_request(res, { msg: "Invalid Email or Password" })
        const { id, email: user_email, full_name, role, password: user_password, is_verified } = user.get({ plain: true });

        if (is_verified == false) return ServerResponse.bad_request(res, { msg: "Please verify your account" })

        const passwordMatch = decryptPassword(password, user_password)

        if (!passwordMatch) return ServerResponse.bad_request(res, { msg: "Invalid Email or Password" })


        let { enc } = await generateTokens({ id, email: user_email, full_name, role })
        ServerResponse.server_ok(res, { msg: `User authenticated successfully`, user, token: enc })

    } catch (error) {
        Logger.error(error)
        ServerResponse.server_error(res, { msg: "Internal server error" })
    }
}


export const AuthController = { login }