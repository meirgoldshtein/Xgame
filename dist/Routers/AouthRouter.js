"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handelLoginRequest = void 0;
const AuthService_1 = __importDefault(require("../Services/AuthService"));
const handelLoginRequest = async (req, res) => {
    var _a;
    try {
        const resault = await AuthService_1.default.login(req.body);
        const token = (_a = resault.data) === null || _a === void 0 ? void 0 : _a.token;
        res.cookie('token', token).status(resault.status || 200).json(resault);
    }
    catch (error) {
        console.log(error);
    }
};
exports.handelLoginRequest = handelLoginRequest;
