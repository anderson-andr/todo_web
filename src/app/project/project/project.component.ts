import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Project } from '../model/project';
import { ProjectService } from '../services/project.service';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  project$: Observable<Project[]>
  displayedColumns = ['name', 'description','updatedAt','createdAt','actions'];
  projetos: Project[] = []
  constructor(
    private projetoService: ProjectService,
    private router:Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,)
  {
    {
      this.project$ = this.projetoService.listByUser().pipe (

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



  onEdit(projeto:Project) {
    this.router.navigate(['editar', projeto.id], {relativeTo:this.route});
  }

  Add() {
    this.router.navigate(['novo'], {relativeTo:this.route});
  }



  refresh() {
    this.project$= this.projetoService.listByUser()
      .pipe(
        catchError(error => {
          this.onErro('Erro ao carregar Projetos.');
          return of([])
        })
      );
  }

  onDelete(projeto: Project) {
      this.projetoService.delete(projeto).subscribe(data => {
        this.projetos = this.projetos.filter( response => response !==projeto)
        alert("Projeto Deletado");
        this.refresh();
      })
  }


  onTask(projeto:Project) {
    this.router.navigate(['/tarefa'], {relativeTo:this.route});
    let id_Project :any = projeto.id
    localStorage.setItem('projeto',id_Project)
    console.log(localStorage.getItem('projeto'))

  }
}
