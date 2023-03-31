import { Project } from "./../src/entities/Project";
import { Request, Response } from "express";
import { AppDataSource } from "../src/data-source";

export class ProjectController {
  async listar(req: Request, res: Response) {
    const datasource = await AppDataSource;
    const projetoRepository = datasource.getRepository(Project);
    const listaProjetos = await projetoRepository.find();
    res.json(listaProjetos);
  }

  async inserir(req: Request, res: any) {
    const projetoRequest = req.body;

    if (
      !projetoRequest ||
      !projetoRequest.name ||
      !projetoRequest.description ||
      !projetoRequest.id_User
    ) {
      return res.status(400).json({
        Erro: "Todos os dados são Obrigatórios",
      });
    }

    const projeto = new Project();
    const dataAtual: Date = new Date();
    projeto.name = projetoRequest.name;
    projeto.description = projetoRequest.description;
    projeto.createdAt = dataAtual;
    projeto.updatedAt = dataAtual;
    projeto.id_User = projetoRequest.id_User;
    const datasource = await AppDataSource;

    const projetoRepository = datasource.getRepository(Project);
    const projetoSalvo = await projetoRepository.save(projeto);
    res.status(201).json(projetoSalvo);
  }

  async delete(req: any, res: any) {
    const datasource = await AppDataSource;
    const projetoRepository = datasource.getRepository(Project);

    const id = req.params.id;
    const projeto = await projetoRepository.findOneBy({ id: id });
    await projetoRepository.delete({ id: id });
    res.status(201).json({ projetoDeletado: projeto });
  }

  async update(req: any, res: any) {
    const datasource = await AppDataSource;
    const projetoRepository = datasource.getRepository(Project);

    const id = req.params.id;
    const projetoRequest = req.body;
    const dataAtual: Date = new Date();
    if (
      !projetoRequest ||
      !projetoRequest.name ||
      !projetoRequest.description
    ) {
      return res.status(400).json({
        Erro: "Todos os dados são obrigatorios",
      });
    }

    await projetoRepository.update(id, {
      name: projetoRequest.name,
      description: projetoRequest.description,
      updatedAt: dataAtual,
    });
    const projeto = await projetoRepository.findOneBy({ id: id });
    res.status(201).json(projeto);
  }

  async buscarPorId(req: any, res: any) {
    const datasource = await AppDataSource;
    const projetoRepository = datasource.getRepository(Project);

    const id = req.params.id;

    const projeto = await projetoRepository.findBy({ id: id });

    res.json(projeto);
  }

  async buscarPorUser(req: any, res: any) {
    const datasource = await AppDataSource;
    const projetoRepository = datasource.getRepository(Project);

    const id = req.params.id;

    const projeto = await projetoRepository.findBy({ id_User: id });

    res.json(projeto);
  }
}
