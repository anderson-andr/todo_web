"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../controller/user");
const rota = (0, express_1.Router)();
const controller = new user_1.UserController();
//Rota: /api/user
rota.post('/', controller.inserir);
exports.default = rota;
