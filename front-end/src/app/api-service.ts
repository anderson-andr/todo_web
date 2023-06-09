
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly API = 'https://18.230.156.247:3001/api/login';

  constructor(private http: HttpClient) {}


  login(email: string, password: string) {
    return this.http.post(this.API, { email, password });
  }


}
