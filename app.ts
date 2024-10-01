import e from 'express';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import AuthController from './src/Controllers/AuthController';
import TodoController from './src/Controllers/TodoController';
import UsersController from './src/Controllers/UsersController';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

const app = e();
app.use(e.json());
app.use(cookieParser());
app.use('/auth', AuthController);
app.use('/users', UsersController);
app.use('/todos', TodoController);

app.use('/public',e.static(path.join(__dirname, 'public')));


app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
})


