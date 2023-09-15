import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApiService } from './src/app/api-service';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { User } from './src/app/login/model/login';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  public readonly TOKEN_NAME = 'x-auth-token'
  public readonly USER_ID   = 'usuario'
  isLoggedIn$ = this._isLoggedIn$.asObservable();


  constructor(private apiService: ApiService,
    private router: Router ) {
    const token = localStorage.getItem(this.TOKEN_NAME);
    const user =  localStorage.getItem(this.USER_ID)
    this._isLoggedIn$.next(!!token);
    console.log(token);

  }
  get token(){
     return JSON.parse((JSON.stringify(localStorage.getItem(this.TOKEN_NAME))));



  }

  get Usuario () {
    return JSON.parse((JSON.stringify(localStorage.getItem(this.USER_ID))));


  }


  login(email: string, password: string) {
    return this.apiService.login(email, password).pipe(
      tap((response) => {
        this._isLoggedIn$.next(true);
        let token = JSON.parse(JSON.stringify(response)).token.split(' ')[0];
        console.log(token)
        let user =JSON.parse(JSON.stringify(response)).user;
        window.localStorage.setItem(this.TOKEN_NAME, token)
        window.localStorage.setItem(this.USER_ID,user)




      })
    );
  }
  deslogar() {
    localStorage.removeItem(this.TOKEN_NAME);
    localStorage.removeItem(this.USER_ID);
    this.router.navigate(['login']);
}
  getAuthorizationToken() {
    const token = window.localStorage.getItem(this.TOKEN_NAME);
    return token

  }

  getTokenExpirationDate(token: any) :Date{

    const decoded: any = jwt_decode(token);

    if (decoded.exp == undefined) {
      return  decoded;
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }


  isTokenExpired(token?: string): boolean {
    if (!token) {
      return true;
    }

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) {
      return false;
    }

    return !(date.valueOf() > new Date().valueOf());
  }

  isUserLoggedIn() {
    const token = this.getAuthorizationToken();
    if (!token) {
      return false;
    } else if (this.isTokenExpired(token)) {
      return false;
    }
    return true;

  }



}





