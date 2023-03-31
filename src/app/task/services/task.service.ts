import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'auth.service';
import { first, Observable, take, tap } from 'rxjs';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private readonly API = 'http://localhost:3000/api/Task';
  constructor(
    private httpClient: HttpClient,
    private authservice: AuthService
  ) { }

  list() {
    return this.httpClient
      .get<Task[]>(this.API )
      .pipe(
        first(),
        tap((Task) => {
          console.log(Task);
        })
      );
  }
  listByProject() {
    return this.httpClient
      .get<Task[]>(this.API + '/project/' + window.localStorage.getItem('projeto') )
      .pipe(
        first(),
        tap((Task) => {
          console.log(Task);
        })
      );
  }
  save(record: Partial<Task>) {
    console.log(record);
    if (record.id) {
      console.log('update');
      return this.update(record);
    }
    console.log('create');
    return this.create(record);
  }
  private create(record: Partial<Task>) {
    return this.httpClient.post<Task>(this.API, record).pipe(first());
  }
  private update(record: Partial<Task>) {
    return this.httpClient
      .put<Task>(`${this.API}/${record.id}`, record)
      .pipe(first());
  }

  loadById(id: string) {
    return this.httpClient.get<Task>(`${this.API}/${id}`);

  }

  delete(Task: Task) {
    return this.httpClient.delete<Task>(this.API + '/' + Task.id);
  }
}
