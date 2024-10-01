"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AouthRouter_1 = require("../Routers/AouthRouter");
const router = (0, express_1.Router)();
router.post('/login', AouthRouter_1.handelLoginRequest);
router.delete('/logout', () => { });
exports.default = router;
