import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from '../../../../auth.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  errorMessage = '';
  constructor(
    private service: LoginService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private location: Location,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null],
    });
  }

  ngOnInit(): void {
    window.localStorage.removeItem(this.authService.TOKEN_NAME);
    window.localStorage.removeItem(this.authService.USER_ID);
  }

  onLogar() {
    if (
      !this.form.get('email')?.value  ||
      !this.form.get('password')?.value
    ) {
      window.alert('Por favor, preencha todos os campos obrigatórios para continuar.');

    } else {
      this.authService
        .login(this.form.get('email')?.value, this.form.get('password')?.value)
        .subscribe(
          (result) => {
            this.onSucess();
          },
          (error) =>  {
          this.onError()
        }
        );
    }
  }
  onCancel() {
    this.location.back();
  }

  private onSucess() {
    this.snackBar.open('Login realizado com sucesso!', '', {
      duration: 5000,
    });
    this.router.navigate(['/usuario'], { relativeTo: this.route });
  }
  private onError() {
    this.snackBar.open('Ops! Não foi possível fazer login com as informações fornecidas. Verifique seus dados e tente novamente', '', { duration: 5000 });

    this.form = this.formBuilder.group({
      email: [null],
      password: [null],
    });
  }
}
