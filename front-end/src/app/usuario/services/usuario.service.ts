import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable, take, tap } from 'rxjs';
import { Usuario } from '../../usuario/model/usuario';
import { AuthService } from '../../../../auth.service';
@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private readonly API = 'http://18.230.117.170:3001/api/user';
  constructor(
    private httpClient: HttpClient,
    private authservice: AuthService
  ) {}

  list() {
    return this.httpClient
      .get<Usuario[]>(this.API + '/' + this.authservice.Usuario)
      .pipe(
        first(),
        tap((Usuario) => {
          Usuario;
        })
      );
  }
  save(record: Partial<Usuario>) {
    console.log(record);
    if (record.id) {
      console.log('update');
      return this.update(record);
    }
    console.log('create');
    return this.create(record);
  }
  private create(record: Partial<Usuario>) {
    return this.httpClient.post<Usuario>(this.API, record).pipe(first());
  }
  private update(record: Partial<Usuario>) {
    return this.httpClient
      .put<Usuario>(`${this.API}/${record.id}`, record)
      .pipe(first());
  }

  loadById(id: string) {
    return this.httpClient.get<Usuario>(`${this.API}/${id}`);
  }

  delete(Usuario: Usuario) {
    return this.httpClient.delete<Usuario>(this.API + '/' + Usuario.id);
  }
}
