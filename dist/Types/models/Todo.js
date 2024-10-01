"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Todo {
    constructor(title, userId) {
        this.title = title;
        this.userId = userId;
        this.completed = false;
        this.id = (0, uuid_1.v4)();
    }
    toggleStatus() {
        this.completed = !this.completed;
    }
}
exports.default = Todo;
