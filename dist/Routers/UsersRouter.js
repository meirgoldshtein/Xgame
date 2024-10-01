"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handelProfileRequest = exports.handelSignupRequest = void 0;
const UsersService_1 = __importDefault(require("../Services/UsersService"));
const handelSignupRequest = async (req, res) => {
    try {
        const resault = await UsersService_1.default.signup(req.body);
        res.status(resault.status || 201).json(resault);
    }
    catch (error) {
        console.log(error);
    }
};
exports.handelSignupRequest = handelSignupRequest;
const handelProfileRequest = async (req, res) => {
    try {
        const resault = {
            err: false,
            status: 200,
            message: "User profile",
            // @ts-ignore
            data: UsersService_1.default.getUserById(req.user.id)
        };
        res.status(200).json(resault);
    }
    catch (error) {
        console.log(error);
    }
};
exports.handelProfileRequest = handelProfileRequest;
