import {HTTP_STATUS} from "../enums/status.js"
import {getUserById} from "./userController.js";
import {User} from "../models/user.js";
import {compare} from "bcrypt";
import jwt from "jsonwebtoken";
import * as crypto from 'crypto';

export const login = async (req, res) => {
    const {email, password} = req.body;

    if(email === "" || password === ""){
        res.status(HTTP_STATUS.BAD_REQUEST).send("Credentials not found.")
    }

    try{
        const checkUser = await User.findOne({ where: { email: email } })
        if (checkUser === null) {
            return res.status(HTTP_STATUS.NOT_FOUND).send("User not found.");
        }

        const pwdMatching = await compare(
            password,
            checkUser.dataValues.password_h,
        )

        if (pwdMatching) {
            const JWT = crypto.randomBytes(32).toString('hex');
            const secret_key = jwt.sign({ userId: checkUser.dataValues.id },JWT , {
                expiresIn: '1h'
            });

            const user = {
                id: checkUser.dataValues.id,
                username: checkUser.dataValues.username,
                email: checkUser.dataValues.email,
                token: secret_key
            };

            return res.status(HTTP_STATUS.OK).json({ user });
        } else {
            return res.status(HTTP_STATUS.UNAUTHORIZED).send("Invalid password.");
        }
    }catch (e) {
        console.log(e)
    }
}
