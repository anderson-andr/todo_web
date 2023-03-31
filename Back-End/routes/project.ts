import { ProjectController } from './../controller/project';
import { Router } from 'express';


const rota = Router();
const controller = new ProjectController();

//Rota: /api/project

rota.get('/', controller.listar);
rota.post('/', controller.inserir);
rota.delete('/:id', controller.delete);
rota.put('/:id', controller.update);
rota.get('/:id', controller.buscarPorId);
rota.get('/user/:id', controller.buscarPorUser);

export default rota;