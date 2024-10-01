"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeFileData = exports.getFileData = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const getFileData = async (resource) => {
    try {
        const data = await promises_1.default.readFile(`${__dirname}/../../data/${resource}.json`, 'utf8');
        const JSONdata = JSON.parse(data);
        return JSONdata ? JSONdata : [];
    }
    catch (err) {
        console.log(err);
    }
};
exports.getFileData = getFileData;
const writeFileData = async (resource, data) => {
    try {
        const stringData = JSON.stringify(data, null, 2);
        await promises_1.default.writeFile(`${__dirname}/../../data/${resource}.json`, stringData, { encoding: 'utf8' });
        console.log('Data saved to file');
        return true;
    }
    catch (err) {
        console.log(err);
        return false;
    }
};
exports.writeFileData = writeFileData;
