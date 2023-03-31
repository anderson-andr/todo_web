import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'auth.service';

import { Project } from '../model/project';
import { ProjectService } from '../services/project.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-projeto-form',
  templateUrl: './projeto-form.component.html',
  styleUrls: ['./projeto-form.component.scss']
})


export class ProjetoFormComponent implements OnInit {
  form: FormGroup;

  constructor( private formBuilder: FormBuilder,
    private service: ProjectService,
    private snackBar: MatSnackBar,
    private location:Location,
    private route :ActivatedRoute,
    private authService : AuthService
    ) {

      const date = new Date();
      const formattedDate = new DatePipe('en-US').transform(date, 'dd/MM/yyyy HH:mm:ss');
      this.form = this.formBuilder.group( {

          id:[null],
          name:[null],
          description:[null],
          id_User:this.authService.Usuario,
          createdAt:formattedDate,
          updatedAt:formattedDate,

      });

  }

  ngOnInit()  {
    const projeto: Project[]  = this.route.snapshot.data['projeto'];
    const createdAt = new DatePipe('en-US').transform(projeto[0].createdAt, 'dd/MM/yyyy HH:mm:ss');
    const updatedAt = new DatePipe('en-US').transform(projeto[0].updatedAt, 'dd/MM/yyyy HH:mm:ss');
    this.form.setValue ({
      id:projeto[0].id,
      name:projeto[0].name,
      description:projeto[0].description,

      id_User:this.authService.Usuario,
      createdAt:createdAt,
      updatedAt:updatedAt,
    })
      console.log('ID do projeto:', projeto[0].id)
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
