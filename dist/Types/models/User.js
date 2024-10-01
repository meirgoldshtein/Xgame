"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const bcrypt_1 = __importDefault(require("bcrypt"));
class User {
    constructor(username) {
        this.username = username;
        this.id = (0, uuid_1.v4)();
    }
    async hashPassword(_password) {
        this.password = await bcrypt_1.default.hash(_password, 10);
    }
    async checkPassword(_password) {
        if (!this.password)
            return false;
        return await bcrypt_1.default.compare(_password, this.password);
    }
}
exports.default = User;
