"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../Types/models/User"));
const fileDAL_1 = require("../DAL/fileDAL");
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
                let users = await (0, fileDAL_1.getFileData)('users');
                users ? users.push(newUser) : users = [newUser];
                await (0, fileDAL_1.writeFileData)('users', users);
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
    static async getAllUsers() {
        const users = await (0, fileDAL_1.getFileData)('users');
        return users ? users : [];
    }
    static async getUserById(id) {
        const users = await (0, fileDAL_1.getFileData)('users');
        return users ? users.find(user => user.id === id) : undefined;
    }
}
exports.default = UserService;
