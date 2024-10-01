import e from 'express';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import AuthController from './src/Controllers/AuthController';


import path from 'path';

const app = e();
app.use(e.json());
app.use(cookieParser());
app.use('/auth', AuthController);
console.log(__dirname)
console.log(path.join(__dirname, '/src/public'))
app.use('/public',e.static(path.join(__dirname, 'public')));


app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
})





