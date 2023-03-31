import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioComponent } from './usuario/usuario.component';
import { MatInputModule } from '@angular/material/input';
import { ContaComponent } from './conta/conta.component';
import { MatButtonModule } from '@angular/material/button';

import {MatIconModule} from '@angular/material/icon';
import { UsuarioFormComponent } from './usuario-form/usuario-form/usuario-form.component';
@NgModule({
  declarations: [
    UsuarioComponent,
    ContaComponent,
    UsuarioFormComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    AppMaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule

  ]
})
export class UsuarioModule { }
