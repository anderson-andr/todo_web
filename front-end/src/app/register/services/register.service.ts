import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable, take, tap } from 'rxjs';
import { Usuario } from '../../usuario/model/usuario';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private readonly API = 'https://18.230.156.247:3001/api/register';
  constructor( private httpClient: HttpClient) {

  }

  list (){
    return this.httpClient.get <Usuario[]>(this.API)
    .pipe (first(),
      tap(usuarios => console.log(usuarios))
    );

    }
    save(record:Usuario) {
      console.log(record)
      return this.httpClient.post <Usuario>(this.API, record).pipe(first())
    
    }

}
