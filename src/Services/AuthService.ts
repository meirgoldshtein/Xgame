import e from "express";
import ResponseData from "../Types/dto/ResponseData";
import SignupDto from "../Types/dto/signupDto";
import User from "../Types/models/User";
import { users } from "../Data/data";
import 'dotenv/config';

import jwt, { Jwt } from "jsonwebtoken";
import TokenPayloadDTO from "../Types/dto/TokenPayloadDTO";
import LoginResponseDTO from "../Types/dto/LoginResponseDTO";

export default class AuthService {

    public static async login(userFromRequest: SignupDto): Promise<ResponseData<LoginResponseDTO>> {
        try {
            const { username, password } = userFromRequest
            if (!username || !password) {
                return {
                    err: true,
                    status: 400,
                    message: "Missing mandatory fields: username and password are required"
                }
            } else {
                const user = users.find(user => user.username === username)
                if (!user) {
                    return {
                        err: true,
                        status: 404,
                        message: "User not found"
                    }
                }
                const isPasswordCorrect = await user.checkPassword(password)
                if (!isPasswordCorrect) {
                    return {
                        err: true,
                        status: 401,
                        message: "Incorrect password"
                    }
                }
                const payload: TokenPayloadDTO = { id: user.id, username: user.username }
                const _token = jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: '10m' })
                return {
                    err: false,
                    status: 200,
                    message: "User logged in successfully",
                    data:{ token : _token , status: 200 , message: "User logged in successfully", err: false }
                }
            }
        } catch (error) {
            return {
                err: true,
                status: 500,
                message: `Internal server error ${error}`
            }
        }
    }
}