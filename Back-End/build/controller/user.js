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
exports.UserController = void 0;
const data_source_1 = require("../src/data-source");
const User_1 = require("../src/entities/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
class UserController {
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datasource = yield data_source_1.AppDataSource;
            const usuarioRepository = datasource.getRepository(User_1.User);
            const listaUsuarios = yield usuarioRepository.find();
            res.json(listaUsuarios);
        });
    }
    inserir(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarioRequest = req.body;
            if (!usuarioRequest ||
                !usuarioRequest.name ||
                !usuarioRequest.email ||
                !usuarioRequest.password) {
                return res.status(400).json({
                    Erro: "Todos os dados são Obrigatórios",
                });
            }
            const usuario = new User_1.User();
            usuario.name = usuarioRequest.name;
            usuario.email = usuarioRequest.email;
            console.log("senha 1 ", usuarioRequest.password);
            usuario.password = bcrypt.hashSync(usuarioRequest.password, 10);
            console.log("senha 2 ", usuario.password);
            const datasource = yield data_source_1.AppDataSource;
            const usuarioRepository = datasource.getRepository(User_1.User);
            const usuarioSalvo = yield usuarioRepository.save(usuario);
            res.status(201).json(usuarioSalvo);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datasource = yield data_source_1.AppDataSource;
            const usuarioRepository = datasource.getRepository(User_1.User);
            const id = req.params.id;
            const usuario = yield usuarioRepository.findOneBy({ id: id });
            yield usuarioRepository.delete({ id: id });
            res.status(201).json({ UsuarioDeletado: usuario });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datasource = yield data_source_1.AppDataSource;
            const usuarioRepository = datasource.getRepository(User_1.User);
            const id = req.params.id;
            const usuarioRequest = req.body;
            if (!usuarioRequest ||
                !usuarioRequest.name ||
                !usuarioRequest.email) {
                return res.status(400).json({
                    Erro: "Todos os dados são obrigatorios",
                });
            }
            if (usuarioRequest.password) {
                usuarioRequest.password = bcrypt.hashSync(usuarioRequest.password, 10);
            }
            yield usuarioRepository.update(id, {
                name: usuarioRequest.name,
                email: usuarioRequest.email
            });
            const usuario = yield usuarioRepository.findOneBy({ id: id });
            res.status(201).json(usuario);
        });
    }
    buscarPorId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datasource = yield data_source_1.AppDataSource;
            const usuarioRepository = datasource.getRepository(User_1.User);
            const id = req.params.id;
            const usuario = yield usuarioRepository.findOneBy({ id: id });
            res.json(usuario);
        });
    }
    validarUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datasource = yield data_source_1.AppDataSource;
            const usuarioRepository = datasource.getRepository(User_1.User);
            if (req.body && req.body.email && req.body.password) {
                const emailUsuario = req.body.email;
                const senhaUsuario = req.body.password;
                const usuarioEncontrado = yield usuarioRepository.findOneBy({
                    email: emailUsuario,
                });
                if (!usuarioEncontrado) {
                    return res.status(500).json({ Erro: "usuario não encontrado" });
                }
                else if (usuarioEncontrado.email &&
                    bcrypt.compareSync(senhaUsuario, usuarioEncontrado.password)) {
                    const token = jwt.sign({
                        id: usuarioEncontrado.id,
                    }, "Todo@App", { expiresIn: "1h" });
                    res.status(201).json({ token: token, user: usuarioEncontrado.id });
                }
                else {
                    return res.status(401).json({ Erro: "usuario ou senha invalidado" });
                }
            }
        });
    }
}
exports.UserController = UserController;
