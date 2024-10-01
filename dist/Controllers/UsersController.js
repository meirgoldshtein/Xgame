"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UsersRouter_1 = require("../Routers/UsersRouter");
const UsersRouter_2 = require("../Routers/UsersRouter");
const VerifyUser_1 = __importDefault(require("../Midllewares/VerifyUser"));
const router = (0, express_1.Router)();
router.get('/profile', VerifyUser_1.default, UsersRouter_2.handelProfileRequest);
router.post('/signup', UsersRouter_1.handelSignupRequest);
router.patch('/', () => { });
router.delete('/signout/:id', () => { });
exports.default = router;
