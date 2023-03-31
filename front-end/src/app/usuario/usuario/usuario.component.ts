import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario'
import { UsuarioService } from '../services/usuario.service';

import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { AppComponent } from 'src/app/app.component';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent  implements  OnInit  {
  Usuario$: Observable<Usuario[]>;
  Usuario: any;
  dataHoraLocal: string;

  constructor(
    private usuario: UsuarioService,
    private router:Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    public app :AppComponent)
  {
    {
      //this.coursesService = new CoursesService();

      this.Usuario$ = this.usuario.list().pipe(
        catchError((error) => {
          this.onErro('Erro ao carregar. ');
          return of([]);
        })
      );
    }

    const dataHoraAtual = new Date();
    this.dataHoraLocal = dataHoraAtual.toLocaleString();
  }

  onErro(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }


  ngOnInit(): void {
    this.usuario.list().subscribe(res => {
      this.Usuario = res;
      console.log(this.Usuario)

    })
    this.app.isConta = false;
  }

}



