import { Router } from 'express';
import { UserController} from '../controller/user';

const rota = Router();
const controller = new UserController();

//Rota: /api/user


rota.post('/', controller.inserir);

export default rota;