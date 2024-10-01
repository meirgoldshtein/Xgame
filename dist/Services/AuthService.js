"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../Data/data");
require("dotenv/config");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class AuthService {
    static async login(userFromRequest) {
        try {
            const { username, password } = userFromRequest;
            if (!username || !password) {
                return {
                    err: true,
                    status: 400,
                    message: "Missing mandatory fields: username and password are required"
                };
            }
            else {
                const user = data_1.users.find(user => user.username === username);
                if (!user) {
                    return {
                        err: true,
                        status: 404,
                        message: "User not found"
                    };
                }
                const isPasswordCorrect = await user.checkPassword(password);
                if (!isPasswordCorrect) {
                    return {
                        err: true,
                        status: 401,
                        message: "Incorrect password"
                    };
                }
                const payload = { id: user.id, username: user.username };
                const _token = jsonwebtoken_1.default.sign(payload, process.env.JWT_SECRET, { expiresIn: '10m' });
                return {
                    err: false,
                    status: 200,
                    message: "User logged in successfully",
                    data: { token: _token, status: 200, message: "User logged in successfully", err: false }
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
}
exports.default = AuthService;
