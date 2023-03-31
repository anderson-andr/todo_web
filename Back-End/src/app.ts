import express from 'express';

import { AppDataSource } from "./data-source"

AppDataSource.initialize().then(async () => {
    console.log("iniciando banco de dados")
}).catch(error => console.log(error));



const cors = require('cors');
const corsOptions = {
    origin: '*' ,
    optionSuccessStatus:200
  };


import rotaUser from '../routes/user'
import rotaRegister from '../routes/register'
import rotaProject from '../routes/project'
import rotaTask from '../routes/task'
import rotaLogin from '../routes/login_router'
const loginMiddleware = require('../middleware/login_middleware.js');


const app = express();
const port = 3000;


app.use(cors(corsOptions));


app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.use('/api/login', rotaLogin);
app.use('/api/register' , rotaRegister);
app.use(loginMiddleware.validaToken);
app.use('/api/user', rotaUser);
app.use('/api/project', rotaProject);
app.use('/api/task', rotaTask);



app.listen(port, () => {
  console.log("Iniciando na porta "+port);
})
