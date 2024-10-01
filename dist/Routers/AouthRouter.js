"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handelLoginRequest = void 0;
const AuthService_1 = __importDefault(require("../Services/AuthService"));
const handelLoginRequest = async (req, res) => {
    try {
        const resault = await AuthService_1.default.login(req.body);
        res.status(resault.status || 200).json(resault);
    }
    catch (error) {
        console.log(error);
    }
};
exports.handelLoginRequest = handelLoginRequest;
