import e from "express";
import ResponseData from "../Types/dto/ResponseData";
import SignupDto from "../Types/dto/signupDto";
import User from "../Types/models/User";
import { users } from "../Data/data";

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
                const newUser = new User(username);
                await newUser.hashPassword(password);
                users.push(newUser);
                return {
                    err: false,
                    status: 201,
                    message: "User created successfully",
                    data: {id: newUser.id, username: newUser.username}
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

    public static  getAllUsers(): User[] {
        return users
    }

    public static  getUserById(id: string): User | undefined {
        return users.find(user => user.id === id)
    }
}