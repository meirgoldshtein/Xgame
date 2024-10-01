"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const AuthController_1 = __importDefault(require("./Controllers/AuthController"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use('/auth', AuthController_1.default);
console.log(`${__dirname}`);
console.log(path_1.default.join(__dirname, 'public'));
app.use('/public', express_1.default.static(path_1.default.join(__dirname, 'public')));
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public'))
// })
app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
});
