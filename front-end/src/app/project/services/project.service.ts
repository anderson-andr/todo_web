import { Injectable } from '@angular/core';
import { AuthService } from '../../../../auth.service';
import { first, Observable, take, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Project } from '../model/project';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private readonly API = 'http://18.230.117.170:3001/api/project';
  constructor(
    private httpClient: HttpClient,
    private authservice: AuthService
  ) { }

  list() {
    return this.httpClient
      .get<Project[]>(this.API )
      .pipe(
        first(),
        tap((Project) => {
          console.log(Project);
        })
      );
  }
  listByUser() {
    return this.httpClient
      .get<Project[]>(this.API + '/user/' + this.authservice.Usuario)
      .pipe(
        first(),
        tap((Project) => {
          console.log(Project);
        })
      );
  }
  save(record: Partial<Project>) {
    console.log(record);
    if (record.id) {
      console.log('update');
      return this.update(record);
    }
    console.log('create');
    return this.create(record);
  }
  private create(record: Partial<Project>) {
    return this.httpClient.post<Project>(this.API, record).pipe(first());
  }
  private update(record: Partial<Project>) {
    return this.httpClient
      .put<Project>(`${this.API}/${record.id}`, record)
      .pipe(first());
  }

  loadById(id: string) {
    return this.httpClient.get<Project>(`${this.API}/${id}`);

  }

  delete(Project: Project) {
    return this.httpClient.delete<Project>(this.API + '/' + Project.id);
  }
}
