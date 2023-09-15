import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { Task } from '../model/task';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  task$: Observable<Task[]>
  displayedColumns = ['name', 'description','notes','completed','deadline','vencido','updatedAt','createdAt','actions'];
  tasks: Task[] = []

  constructor(
    private taskService: TaskService,
    private router:Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,)
  {
    {
      this.task$ = this.taskService.listByProject().pipe (

        catchError (error => {
           this.onErro('Erro ao carregar. ')
            return  of([])
        })
      );
    }




  }
  ngOnInit(): void {


  }

  onErro(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }


  onEdit(task:Task) {
    this.router.navigate(['editar', task.id], {relativeTo:this.route});
    console.log(task.name)
  }

  Add() {
    this.router.navigate(['novo'], {relativeTo:this.route});
  }



  refresh() {
    this.task$= this.taskService.listByProject()
      .pipe(
        catchError(error => {
          this.onErro('Erro ao carregar Tarefas.');
          return of([])
        })
      );
  }

  onDelete(task: Task) {
      this.taskService.delete(task).subscribe(data => {
        this.tasks = this.tasks.filter( response => response !==task)
        alert("Tarefa Deletada");
        this.refresh();
      })
  }

  isPrazoEsgotado(prazo: Date): boolean {
    const dataAtual = new Date();
    return dataAtual >= prazo;
  }

  onback () {
    this.router.navigate(['projeto'], {relativeTo:this.route});
  }

}
