import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import { UsuarioService } from '../services/usuario.service';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { AppComponent } from 'src/app/app.component';
@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.scss'],
})
export class ContaComponent {
  displayedColumns = ['name', 'email', 'actions'];
  usuarios: any;

  constructor(
    private usuario: UsuarioService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    public app: AppComponent
  ) {
    {
      this.usuario
        .list()
        .pipe(
          catchError((error) => {
            this.onErro('Erro ao carregar. ');
            return of([]);
          })
        )
        .subscribe((usuarios) => {
          this.usuarios = Array.isArray(usuarios) ? usuarios : [usuarios];
        });
    }
  }

  ngOnInit(): void {
    this.app.isConta = true;
  }
  onErro(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }


  onEdit(usuario:Usuario) {
    this.router.navigate(['editar',usuario.id], {relativeTo:this.route});
  }

}
