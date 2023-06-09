import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first, tap, of } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { User } from '../model/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly API = 'https://18.230.156.247:3001/api/logi';
  constructor( private httpClient: HttpClient) { }
  list (){
    return this.httpClient.get <User[]>(this.API)
    .pipe
     (first(),
      tap(usuarios => console.log(usuarios)),
      catchError(error => {
        console.log('Erro ao listar usuários:', error);
        return of([]);
      })
    );


    }
    save(record:User) {
      console.log(record)
      return this.httpClient.post <User>(this.API, record).pipe(first()),
      catchError(error => {
        console.log('Error ao Entrar', error);
        return of([]);
      })
    }
}
