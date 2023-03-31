import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project/project.component';
import { ProjetoFormComponent } from './projeto-form/projeto-form.component';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [
    ProjectComponent,
    ProjetoFormComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    AppMaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ]
})
export class ProjectModule { }
