import e from "express";
import ResponseData from "../Types/dto/ResponseData";
import SignupDto from "../Types/dto/signupDto";
import User from "../Types/models/User";
import TokenPayloadDTO from "../Types/dto/TokenPayloadDTO";
import jwt from "jsonwebtoken";

import {getFileData , writeFileData} from "../DAL/fileDAL";

export default class UserService {

    public static async signup(user: SignupDto): Promise<ResponseData<{id : string, username: string } | unknown>> {
        try {
            const { username, password } = user
            if (!username || !password) {
                return {
                    err: true,
                    status: 400,
                    message: "Missing mandatory fields: username and password are required"
                }
            } else {
                const newUser: User = new User(username);
                await newUser.hashPassword(password);
                let users = await getFileData<User>('users');
                users? users.push(newUser) : users = [newUser];
                await writeFileData('users', users);
                const payload: TokenPayloadDTO = { id: newUser.id, username: newUser.username }
                const _token = jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: '10m' })
                return {
                    err: false,
                    status: 200,
                    message: "User logged in successfully",
                    data:{ token : _token , status: 200 , message: "User created successfully", err: false }
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

    public static async getAllUsers(): Promise<User[]> {
        const users = await getFileData<User>('users');
        return users? users : [];
    }

    public static async getUserById(id: string):Promise<User | undefined> {
        const users = await getFileData<User>('users');
        return users? users.find(user => user.id === id) : undefined
    }
}