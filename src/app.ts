import express from 'express';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import AuthController from './Controllers/AuthController';
import UsersController from './Controllers/UsersController';
import path from 'path';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

app.use(express.json());
app.use(cookieParser());
app.use('/auth', AuthController);
app.use('/users', UsersController);
app.use('/public', express.static(path.join(__dirname, 'public')));

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

