import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder, FormGroup ,Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  template: `

`,

})
export class RegisterComponent  implements OnInit{

  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });
  constructor( private formBuilder: FormBuilder,
    private service:RegisterService,
    private snackBar: MatSnackBar,
    private location:Location,
    private router: Router,
    private route : ActivatedRoute ) {
      this.form = this.formBuilder.group( {
          id:[null],
          name:[null],
          email:[null, [Validators.required, Validators.email]],
          password:[null]


      });

  }

  ngOnInit(): void {
  }

 onSubmit (){

  if (
    !this.form.get('name')?.value  ||
    !this.form.get('email')?.value  ||
    !this.form.get('password')?.value
  ) {
    window.alert('Por favor, preencha todos os campos obrigatórios para continuar.');

  } else {
    this.service.save(this.form.value)
    .subscribe( result => this.onSucess(), error => this.onError()

    );

  }



 }
 onCancel() {
  this.location.back();


 }

 private onSucess(){
  this.snackBar.open('Cadastro realizado com sucesso!','',{duration:5000});
  this.router.navigate(['/login'], {relativeTo:this.route});
 }
 private onError () {
  this.snackBar.open('Erro ao salvar usuario','',{duration:5000});
 }


}
