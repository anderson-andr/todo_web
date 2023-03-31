"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const task_1 = require("../controller/task");
const rota = (0, express_1.Router)();
const controller = new task_1.TaskController();
//Rota: /api/task
rota.get('/', controller.listar);
rota.post('/', controller.inserir);
rota.delete('/:id', controller.delete);
rota.put('/:id', controller.update);
rota.get('/:id', controller.buscarPorId);
rota.get('/project/:id', controller.buscarPorIdProject);
exports.default = rota;
