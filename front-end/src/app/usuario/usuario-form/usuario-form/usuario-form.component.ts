import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'auth.service';

import { Usuario } from '../../model/usuario';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.scss']
})
export class UsuarioFormComponent   implements OnInit {
  form: FormGroup;

  constructor( private formBuilder: FormBuilder,
    private service:UsuarioService,
    private snackBar: MatSnackBar,
    private location:Location,
    private route :ActivatedRoute,
    private authService : AuthService) {
      this.form = this.formBuilder.group( {
          id:[null],
          name:[null],
          email:[null],


      });

  }

  ngOnInit(): void {
    const usuario:Usuario = this.route.snapshot.data['usuario'];
      this.form.setValue ({
        id:usuario.id,
        name:usuario.name,
        email:usuario.email,
      })
      console.log(usuario)
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
