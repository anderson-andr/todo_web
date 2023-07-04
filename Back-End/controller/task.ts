import { Request, Response } from "express";
import { AppDataSource } from "../src/data-source";
import { Task } from "../src/entities/Task";

export class TaskController {
  async listar(req: Request, res: Response) {
    const datasource = await AppDataSource;
    const tarefaRepository = datasource.getRepository(Task);
    const listatarefa = await tarefaRepository.find();
    res.json(listatarefa);
  }

  async inserir(req: Request, res: any) {
    const tarefaRequest = req.body;

    if (
      !tarefaRequest ||
      !tarefaRequest.name ||
      !tarefaRequest.description ||
      !tarefaRequest.id_project ||
      !tarefaRequest.deadline ||
      !tarefaRequest.notes
    ) {
      return res.status(400).json({
        Erro: "Todos os dados são Obrigatórios",
      });
    }

    const tarefa = new Task();
    const dataAtual: Date = new Date();
    tarefa.name = tarefaRequest.name;
    tarefa.description = tarefaRequest.description;
    tarefa.id_Project = tarefaRequest.id_project;
    tarefa.deadline = tarefaRequest.deadline;
    tarefa.completed = tarefaRequest.completed;
    tarefa.notes = tarefaRequest.notes
    tarefa.createdAt = dataAtual;
    tarefa.updatedAt = dataAtual;

    const datasource = await AppDataSource;

    const tarefaRepository = datasource.getRepository(Task);
    const tarefaSalvo = await tarefaRepository.save(tarefa);
    res.status(201).json(tarefaSalvo);
  }

   async delete(req: any, res: any) {
    const datasource = await AppDataSource;
    const tarefaRepository = datasource.getRepository(Task);

    const id = req.params.id;
    const tarefa = await tarefaRepository.findOneBy({ id: id });
    await tarefaRepository.delete({ id: id });
    res.status(201).json({ tarefaDeletada: tarefa });
  }


  async update(req: any, res: any) {
    const datasource = await AppDataSource;
    const tarefaRepository = datasource.getRepository(Task);

    const id = req.params.id;
    const tarefaRequest = req.body;
    const dataAtual: Date = new Date();
    if (
        !tarefaRequest ||
        !tarefaRequest.name ||
        !tarefaRequest.description ||
        !tarefaRequest.deadline ||
        !tarefaRequest.notes
    ) {
      return res.status(400).json({
        Erro: "Todos os dados são obrigatorios",
      });
    }

    await tarefaRepository.update(id, {
        name : tarefaRequest.name,
        description : tarefaRequest.description,
        deadline : tarefaRequest.deadline,
        completed : tarefaRequest.completed,
        notes : tarefaRequest.notes,
        updatedAt : dataAtual,
    });
    const tarefa = await tarefaRepository.findOneBy({ id: id });
    res.status(201).json(tarefa);
  }
  async buscarPorId(req: any, res: any) {
    const datasource = await AppDataSource;
    const tarefaRepository = datasource.getRepository(Task);

    const id = req.params.id;

    const tarefa = await tarefaRepository.findOneBy({ id: id });

    res.json(tarefa);
  }

  async buscarPorIdProject(req: any, res: any) {
    const datasource = await AppDataSource;
    const tarefaRepository = datasource.getRepository(Task);

    const id = req.params.id;

    const tarefa = await tarefaRepository.findBy({ id_Project: id });

    res.json(tarefa);
  }

}
