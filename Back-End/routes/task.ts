import { Router } from 'express';
import { TaskController } from '../controller/task';


const rota = Router();
const controller = new TaskController();

//Rota: /api/task

rota.get('/', controller.listar);
rota.post('/', controller.inserir);
rota.delete('/:id', controller.delete);
rota.put('/:id', controller.update);
rota.get('/:id', controller.buscarPorId);
rota.get('/project/:id', controller.buscarPorIdProject);

export default rota;