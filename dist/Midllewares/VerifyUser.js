"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const VerifyUser = async (req, res, next) => {
    var _a;
    try {
        // @ts-ignore
        const token = ((_a = req.headers) === null || _a === void 0 ? void 0 : _a["authorization"]) || "";
        console.log({ token: token });
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        // @ts-ignore
        req.user = decoded;
        next();
    }
    catch (error) {
        console.log(error);
        if (error instanceof jsonwebtoken_1.default.JsonWebTokenError) {
            res.status(401).json({ error: true, status: 401, message: "Invalid token" });
        }
        else {
            res.status(500).json({ error: true, status: 500, message: "Internal server error" });
        }
    }
};
exports.default = VerifyUser;
