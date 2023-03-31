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
exports.ProjectController = void 0;
const Project_1 = require("./../src/entities/Project");
const data_source_1 = require("../src/data-source");
class ProjectController {
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datasource = yield data_source_1.AppDataSource;
            const projetoRepository = datasource.getRepository(Project_1.Project);
            const listaProjetos = yield projetoRepository.find();
            res.json(listaProjetos);
        });
    }
    inserir(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const projetoRequest = req.body;
            if (!projetoRequest ||
                !projetoRequest.name ||
                !projetoRequest.description ||
                !projetoRequest.id_User) {
                return res.status(400).json({
                    Erro: "Todos os dados são Obrigatórios",
                });
            }
            const projeto = new Project_1.Project();
            const dataAtual = new Date();
            projeto.name = projetoRequest.name;
            projeto.description = projetoRequest.description;
            projeto.createdAt = dataAtual;
            projeto.updatedAt = dataAtual;
            projeto.id_User = projetoRequest.id_User;
            const datasource = yield data_source_1.AppDataSource;
            const projetoRepository = datasource.getRepository(Project_1.Project);
            const projetoSalvo = yield projetoRepository.save(projeto);
            res.status(201).json(projetoSalvo);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datasource = yield data_source_1.AppDataSource;
            const projetoRepository = datasource.getRepository(Project_1.Project);
            const id = req.params.id;
            const projeto = yield projetoRepository.findOneBy({ id: id });
            yield projetoRepository.delete({ id: id });
            res.status(201).json({ projetoDeletado: projeto });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datasource = yield data_source_1.AppDataSource;
            const projetoRepository = datasource.getRepository(Project_1.Project);
            const id = req.params.id;
            const projetoRequest = req.body;
            const dataAtual = new Date();
            if (!projetoRequest ||
                !projetoRequest.name ||
                !projetoRequest.description) {
                return res.status(400).json({
                    Erro: "Todos os dados são obrigatorios",
                });
            }
            yield projetoRepository.update(id, {
                name: projetoRequest.name,
                description: projetoRequest.description,
                updatedAt: dataAtual,
            });
            const projeto = yield projetoRepository.findOneBy({ id: id });
            res.status(201).json(projeto);
        });
    }
    buscarPorId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datasource = yield data_source_1.AppDataSource;
            const projetoRepository = datasource.getRepository(Project_1.Project);
            const id = req.params.id;
            const projeto = yield projetoRepository.findBy({ id: id });
            res.json(projeto);
        });
    }
    buscarPorUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datasource = yield data_source_1.AppDataSource;
            const projetoRepository = datasource.getRepository(Project_1.Project);
            const id = req.params.id;
            const projeto = yield projetoRepository.findBy({ id_User: id });
            res.json(projeto);
        });
    }
}
exports.ProjectController = ProjectController;
