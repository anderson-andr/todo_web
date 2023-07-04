import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { TaskFormComponent } from './task-form/task-form/task-form.component';
import { TaskResolver } from './guards/task.resolver';

const routes: Routes = [
  {path:'', component:TaskComponent},
  {path:'novo', component:TaskFormComponent},
  {path:'editar/:id', component:TaskFormComponent , resolve:{tarefa:TaskResolver}},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
