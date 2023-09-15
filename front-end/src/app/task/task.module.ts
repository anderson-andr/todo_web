import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';

import { SharedModule } from '../shared/shared.module';
import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { TaskFormComponent } from './task-form/task-form/task-form.component';
import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [
    TaskComponent,
    TaskFormComponent

  ],
  imports: [
    CommonModule,
    TaskRoutingModule,

    AppMaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatCheckboxModule,

  ]
})
export class TaskModule {
  }
