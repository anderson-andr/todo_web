import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './project/project.component';

import { ProjetoFormComponent } from './projeto-form/projeto-form.component';
import { ProjetoResolver } from './guards/projeto.resolver';

const routes: Routes = [
  {path:'',component:ProjectComponent},
  {path:'novo',component:ProjetoFormComponent  },
  {path:'editar/:id',component:ProjetoFormComponent , resolve:{projeto:ProjetoResolver} }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
