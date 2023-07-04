import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { TaskService } from '../services/task.service';
import { Task } from './../model/task';

@Injectable({
  providedIn: 'root'
})
export class TaskResolver implements Resolve<Task> {
  constructor (private service: TaskService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Task> {
    if(route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);

    }
    return of({ id:0, name:'', description:'',id_project:0,createdAt: new Date(), updatedAt:new Date(), notes:'',completed:false,deadline:new Date()});
  }
}
