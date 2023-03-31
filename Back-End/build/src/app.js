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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_source_1 = require("./data-source");
const fs_1 = __importDefault(require("fs"));
const https_1 = __importDefault(require("https"));
const cors_1 = __importDefault(require("cors"));
data_source_1.AppDataSource.initialize().then(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log("iniciando banco de dados");
})).catch(error => console.log(error));
const user_1 = __importDefault(require("../routes/user"));
const register_1 = __importDefault(require("../routes/register"));
const project_1 = __importDefault(require("../routes/project"));
const task_1 = __importDefault(require("../routes/task"));
const login_router_1 = __importDefault(require("../routes/login_router"));
const loginMiddleware = require('../middleware/login_middleware.js');
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/api/login', login_router_1.default);
app.use('/api/register', register_1.default);
app.use(loginMiddleware.validaToken);
app.use('/api/user', user_1.default);
app.use('/api/project', project_1.default);
app.use('/api/task', task_1.default);
app.listen(port, () => {
    console.log("Iniciando na porta " + port);
});
https_1.default.createServer({
    cert: fs_1.default.readFileSync('src/ssl/code.crt'),
    key: fs_1.default.readFileSync('src/ssl/code.key')
}, app).listen(3001, () => console.log("rodando em https"));
