import e from 'express';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import AuthController from './Controllers/AuthController';
import UsersController from './Controllers/UsersController';

import path from 'path';

const app = e();
app.use(e.json());
app.use(cookieParser());
app.use('/auth', AuthController);
app.use('/users', UsersController);
console.log(`${__dirname}`)
console.log(path.join(__dirname, 'public'))
app.use('/public',e.static(path.join(__dirname,'public')));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public'))
// })
app.listen(process.env.PORT, () => {
    console.log(`Server started on localhost:${process.env.PORT}`);
})

