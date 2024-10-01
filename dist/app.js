"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const AuthController_1 = __importDefault(require("./Controllers/AuthController"));
const UsersController_1 = __importDefault(require("./Controllers/UsersController"));
const path_1 = __importDefault(require("path"));
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const app = (0, express_1.default)();
const httpServer = (0, http_1.createServer)(app);
const io = new socket_io_1.Server(httpServer);
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use('/auth', AuthController_1.default);
app.use('/users', UsersController_1.default);
app.use('/public', express_1.default.static(path_1.default.join(__dirname, 'public')));
io.on('connection', (socket) => {
    console.log('A user connected');
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});
const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
    console.log(`Server started on localhost:${PORT}`);
});
// import e from 'express';
// import 'dotenv/config';
// import cookieParser from 'cookie-parser';
// import AuthController from './Controllers/AuthController';
// import UsersController from './Controllers/UsersController';
// import path from 'path';
// import http from 'http';
// import { Server } from 'socket.io';
// const app = e();
// const server = http.createServer(app);
// const socketServer = new Server(server)
// server.listen(3001, () => {
//     console.log('listening on *:3001');
// });
// socketServer.on('connection', (socket) => {
//     console.log('a user connected');
//     socket.on('disconnect', () => {
//         console.log('user disconnected');
//     })
// })
// app.use(e.json());
// app.use(cookieParser());
// app.use('/auth', AuthController);
// app.use('/users', UsersController);
// console.log(`${__dirname}`)
// console.log(path.join(__dirname, 'public'))
// app.use('/public',e.static(path.join(__dirname,'public')));
// app.listen(process.env.PORT, () => {
//     console.log(`Server started on localhost:${process.env.PORT}`);
// })
