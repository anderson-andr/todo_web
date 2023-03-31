import { Router } from 'express';
import { UserController} from '../controller/user';

const rota = Router();
const controller = new UserController();

//Rota: /api/user

rota.post('/', controller.validarUsuario);


export default rota;