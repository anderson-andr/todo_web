import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContaComponent } from './conta/conta.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioResolver } from './guards/usuario.resolver';
import { UsuarioFormComponent } from './usuario-form/usuario-form/usuario-form.component';
const routes: Routes = [
  {path:'', component:UsuarioComponent},
  {path:'conta', component:ContaComponent },
  {path:'conta/editar/:id', component:UsuarioFormComponent, resolve:{usuario:UsuarioResolver} },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
