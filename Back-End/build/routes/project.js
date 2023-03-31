"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const project_1 = require("./../controller/project");
const express_1 = require("express");
const rota = (0, express_1.Router)();
const controller = new project_1.ProjectController();
//Rota: /api/project
rota.get('/', controller.listar);
rota.post('/', controller.inserir);
rota.delete('/:id', controller.delete);
rota.put('/:id', controller.update);
rota.get('/:id', controller.buscarPorId);
rota.get('/user/:id', controller.buscarPorUser);
exports.default = rota;
