import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',
  loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule)
  },
  { path: 'login',
  loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  { path: 'usuario',
  loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule)
  },
  { path: 'cadastro',
  loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)
  },
  { path: 'projeto',
  loadChildren: () => import('./project/project.module').then(m => m.ProjectModule)
  },
  { path: 'tarefa',
  loadChildren: () => import('./task/task.module').then(m => m.TaskModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
