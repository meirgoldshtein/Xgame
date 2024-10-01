"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../Types/models/User"));
const data_1 = require("../Data/data");
class UserService {
    static async signup(user) {
        try {
            const { username, password } = user;
            if (!username || !password) {
                return {
                    err: true,
                    status: 400,
                    message: "Missing mandatory fields: username and password are required"
                };
            }
            else {
                const newUser = new User_1.default(username);
                await newUser.hashPassword(password);
                data_1.users.push(newUser);
                return {
                    err: false,
                    status: 201,
                    message: "User created successfully",
                    data: { id: newUser.id, username: newUser.username }
                };
            }
        }
        catch (error) {
            return {
                err: true,
                status: 500,
                message: `Internal server error ${error}`
            };
        }
    }
    static getAllUsers() {
        return data_1.users;
    }
    static getUserById(id) {
        return data_1.users.find(user => user.id === id);
    }
}
exports.default = UserService;
