"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskController = void 0;
const data_source_1 = require("../src/data-source");
const Task_1 = require("../src/entities/Task");
class TaskController {
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datasource = yield data_source_1.AppDataSource;
            const tarefaRepository = datasource.getRepository(Task_1.Task);
            const listatarefa = yield tarefaRepository.find();
            res.json(listatarefa);
        });
    }
    inserir(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const tarefaRequest = req.body;
            if (!tarefaRequest ||
                !tarefaRequest.name ||
                !tarefaRequest.description ||
                !tarefaRequest.id_project ||
                !tarefaRequest.deadline ||
                !tarefaRequest.notes) {
                return res.status(400).json({
                    Erro: "Todos os dados são Obrigatórios",
                });
            }
            const tarefa = new Task_1.Task();
            const dataAtual = new Date();
            tarefa.name = tarefaRequest.name;
            tarefa.description = tarefaRequest.description;
            tarefa.id_Project = tarefaRequest.id_project;
            tarefa.deadline = tarefaRequest.deadline;
            tarefa.completed = tarefaRequest.completed;
            tarefa.notes = tarefaRequest.notes;
            tarefa.createdAt = dataAtual;
            tarefa.updatedAt = dataAtual;
            const datasource = yield data_source_1.AppDataSource;
            const tarefaRepository = datasource.getRepository(Task_1.Task);
            const tarefaSalvo = yield tarefaRepository.save(tarefa);
            res.status(201).json(tarefaSalvo);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datasource = yield data_source_1.AppDataSource;
            const tarefaRepository = datasource.getRepository(Task_1.Task);
            const id = req.params.id;
            const tarefa = yield tarefaRepository.findOneBy({ id: id });
            yield tarefaRepository.delete({ id: id });
            res.status(201).json({ tarefaDeletada: tarefa });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datasource = yield data_source_1.AppDataSource;
            const tarefaRepository = datasource.getRepository(Task_1.Task);
            const id = req.params.id;
            const tarefaRequest = req.body;
            const dataAtual = new Date();
            if (!tarefaRequest ||
                !tarefaRequest.name ||
                !tarefaRequest.description ||
                !tarefaRequest.deadline ||
                !tarefaRequest.notes) {
                return res.status(400).json({
                    Erro: "Todos os dados são obrigatorios",
                });
            }
            yield tarefaRepository.update(id, {
                name: tarefaRequest.name,
                description: tarefaRequest.description,
                deadline: tarefaRequest.deadline,
                completed: tarefaRequest.completed,
                notes: tarefaRequest.notes,
                updatedAt: dataAtual,
            });
            const tarefa = yield tarefaRepository.findOneBy({ id: id });
            res.status(201).json(tarefa);
        });
    }
    buscarPorId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datasource = yield data_source_1.AppDataSource;
            const tarefaRepository = datasource.getRepository(Task_1.Task);
            const id = req.params.id;
            const tarefa = yield tarefaRepository.findOneBy({ id: id });
            res.json(tarefa);
        });
    }
    buscarPorIdProject(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datasource = yield data_source_1.AppDataSource;
            const tarefaRepository = datasource.getRepository(Task_1.Task);
            const id = req.params.id;
            const tarefa = yield tarefaRepository.findBy({ id_Project: id });
            res.json(tarefa);
        });
    }
}
exports.TaskController = TaskController;
