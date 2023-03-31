import express from 'express';

import { AppDataSource } from "./data-source"
import fs from 'fs';
import https from 'https';
import cors from 'cors';

AppDataSource.initialize().then(async () => {
    console.log("iniciando banco de dados")
}).catch(error => console.log(error));





import rotaUser from '../routes/user'
import rotaRegister from '../routes/register'
import rotaProject from '../routes/project'
import rotaTask from '../routes/task'
import rotaLogin from '../routes/login_router'
const loginMiddleware = require('../middleware/login_middleware.js');


const app = express();
const port = 3000;


app.use(cors());


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

https.createServer({
    cert:fs.readFileSync('src/ssl/code.crt'),
    key:fs.readFileSync('src/ssl/code.key')
  
}, app).listen(3001, () => console.log("rodando em https"))