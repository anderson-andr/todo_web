import { DatePipe, Location } from '@angular/common';

import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'auth.service';


import { Task } from '../../model/task';
import { TaskService } from '../../services/task.service';
import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],

})
export class TaskFormComponent implements OnInit{
  form: FormGroup;
  task: Task | undefined;
  isChecked: boolean = false;

  constructor( private formBuilder: FormBuilder,
    private service: TaskService,
    private snackBar: MatSnackBar,
    private location:Location,
    private route :ActivatedRoute,
    private authService : AuthService
    ) {

      const date = new Date();
      const formattedDate = new DatePipe('en-US').transform(date, 'dd/MM/yyyy HH:mm:ss');
      const projeto = window.localStorage.getItem('projeto')
      this.form = this.formBuilder.group( {
          id:[null],
          name:[null],
          description:[null],
          createdAt:formattedDate,
          updatedAt:formattedDate,
          notes:[null],
          completed:[null],
          deadline:[null],
          id_project : projeto


      });

  }
  ngOnInit() {
    this.task = this.route.snapshot.data['tarefa'];
    const projeto = window.localStorage.getItem('projeto')
    // Acesse as propriedades de this.task
    if (this.task) {
      this.form.setValue ({
        id:this.task.id,
        name:this.task.name,
        description:this.task.description,
        createdAt:this.task.createdAt,
        updatedAt:this.task.updatedAt,
        notes:this.task.notes,
        completed:this.task.completed,
        deadline:this.task.deadline,
        id_project :projeto


      })
      console.log('ID do tarefa:', this.task.id)
      if (this.task.completed) {
        this.isChecked = this.task.completed;
      }
    }

  }




  onCheckboxChange(){
    if (this.isChecked) {
      console.log(this.isChecked);
    } else {
      console.log(this.isChecked);
    }
  }


 onSubmit (){
    this.service.save(this.form.value)
    .subscribe( result => this.onSucess(), error => this.onError());
  }


 onCancel() {
  this.location.back();


 }

 private onSucess(){
  this.snackBar.open('Tarefa salvo com sucesso!','',{duration:5000});
  this.onCancel();
 }
 private onError () {
  this.snackBar.open('Erro ao salvar Tarefa','',{duration:5000});
 }


}
