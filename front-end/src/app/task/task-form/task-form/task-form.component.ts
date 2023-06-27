import { DatePipe, Location} from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'auth.service';
import { TaskService } from '../../services/task.service';
import { Task } from '../../model/task';
import { ProjetoFormComponent } from '../../../project/projeto-form/projeto-form.component';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent {
  form: FormGroup;

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
          id_Project : projeto
      

      });

  }

  ngOnInit()  {
    const task: Task[]  = this.route.snapshot.data['task'];
    const createdAt = new DatePipe('en-US').transform(task[0].createdAt, 'dd/MM/yyyy HH:mm:ss');
    const updatedAt = new DatePipe('en-US').transform(task[0].updatedAt, 'dd/MM/yyyy HH:mm:ss');
    const deadline = new DatePipe('en-US').transform(task[0].deadline, 'dd/MM/yyyy HH:mm:ss');
    this.form.setValue ({
      id:task[0].id,
      name:task[0].name,
      description:task[0].description,

      id_User:this.authService.USER_ID,
      createdAt:createdAt,
      updatedAt:updatedAt,
      notes:task[0].notes,
      completed:task[0].completed,
      deadline:deadline,
      id_Project :task[0].id_Project
    })
      console.log('ID do task:', task[0].id)
  }

  onSubmit (){
    this.service.save(this.form.value)
    .subscribe( result => this.onSucess(), error => this.onError());


 }
 onCancel() {
  this.location.back();


 }

 private onSucess(){
  this.snackBar.open('Serviço salvo com sucesso!','',{duration:5000});
  this.onCancel();
 }
 private onError () {
  this.snackBar.open('Erro ao salvar serviço','',{duration:5000});
 }


}
