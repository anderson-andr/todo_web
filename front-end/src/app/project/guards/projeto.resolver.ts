import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Project } from '../model/project';
import { ProjectService } from '../services/project.service';

@Injectable({
  providedIn: 'root'
})
export class ProjetoResolver implements Resolve<Project> {
  constructor (private service: ProjectService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Project> {
    if(route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);

    }
    return of({ id:0, name:'', description:'',id_User:0,createdAt: new Date(), updatedAt:new Date() });
  }
}
