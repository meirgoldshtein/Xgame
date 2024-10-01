"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todos = exports.users = void 0;
const Todo_1 = __importDefault(require("../Types/models/Todo"));
const User_1 = __importDefault(require("../Types/models/User"));
exports.users = [];
exports.todos = [];
// IIFE - Immediately Invoked Function Expression
(async () => {
    const jon = new User_1.default('jon');
    await jon.hashPassword('1234');
    const todo1 = new Todo_1.default('clean the house', jon.id);
    const todo2 = new Todo_1.default('buy groceries', jon.id);
    exports.users.push(jon);
    exports.todos.push(todo1, todo2);
    console.log("data loaded");
})();
