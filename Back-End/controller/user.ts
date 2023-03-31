import { Request, Response } from "express";

import { AppDataSource } from "../src/data-source";
import { User } from "../src/entities/User";

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

export class UserController {
  async listar(req: Request, res: Response) {
    const datasource = await AppDataSource;
    const usuarioRepository = datasource.getRepository(User);
    const listaUsuarios = await usuarioRepository.find();
    res.json(listaUsuarios);
  }

  async inserir(req: Request, res: any) {
    const usuarioRequest = req.body;

    if (
      !usuarioRequest ||
      !usuarioRequest.name ||
      !usuarioRequest.email ||
      !usuarioRequest.password
    ) {
      return res.status(400).json({
        Erro: "Todos os dados são Obrigatórios",
      });
    }

    const usuario = new User();
    usuario.name = usuarioRequest.name;
    usuario.email = usuarioRequest.email;
    console.log("senha 1 ", usuarioRequest.password);
    usuario.password = bcrypt.hashSync(usuarioRequest.password, 10);
    console.log("senha 2 ", usuario.password);

    const datasource = await AppDataSource;

    const usuarioRepository = datasource.getRepository(User);
    const usuarioSalvo = await usuarioRepository.save(usuario);
    res.status(201).json(usuarioSalvo);
  }

  async delete(req: any, res: any) {
    const datasource = await AppDataSource;
    const usuarioRepository = datasource.getRepository(User);

    const id = req.params.id;
    const usuario = await usuarioRepository.findOneBy({ id: id });
    await usuarioRepository.delete({ id: id });
    res.status(201).json({ UsuarioDeletado: usuario });
  }
  async update(req: any, res: any) {
    const datasource = await AppDataSource;
    const usuarioRepository = datasource.getRepository(User);

    const id = req.params.id;
    const usuarioRequest = req.body;
    if (
      !usuarioRequest ||
      !usuarioRequest.name ||
      !usuarioRequest.email 

    ) {
      return res.status(400).json({
        Erro: "Todos os dados são obrigatorios",
      });
    }
    if (usuarioRequest.password) {
      usuarioRequest.password = bcrypt.hashSync(usuarioRequest.password, 10);
    }
    await usuarioRepository.update(id, {
      name: usuarioRequest.name,
      email: usuarioRequest.email
      
    });
    const usuario = await usuarioRepository.findOneBy({ id: id });
    res.status(201).json(usuario);
  }

  async buscarPorId(req: any, res: any) {
    const datasource = await AppDataSource;
    const usuarioRepository = datasource.getRepository(User);

    const id = req.params.id;

    const usuario = await usuarioRepository.findOneBy({ id: id });

    res.json(usuario);
  }

  async validarUsuario(req: any, res: any) {
    const datasource = await AppDataSource;
    const usuarioRepository = datasource.getRepository(User);

    if (req.body && req.body.email && req.body.password) {
      const emailUsuario = req.body.email;
      const senhaUsuario = req.body.password;

      const usuarioEncontrado = await usuarioRepository.findOneBy({
        email: emailUsuario,
      });

      if (!usuarioEncontrado) {
        return res.status(500).json({ Erro: "usuario não encontrado" });
        
      } else if (
        usuarioEncontrado.email &&
        bcrypt.compareSync(senhaUsuario, usuarioEncontrado.password)
      ) {
        const token = jwt.sign(
          {
            id: usuarioEncontrado.id,
          },
          "Todo@App",
          { expiresIn: "1h" }
        );
        res.status(201).json({ token: token, user: usuarioEncontrado.id });
      } else {
        return res.status(401).json({ Erro: "usuario ou senha invalidado" });
      }
    }
  }
}
