import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioResolver implements Resolve<Usuario> {
  constructor (private service: UsuarioService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Usuario> {
    if(route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
    }
    return of ({ id:0, name:'', email:'',password:''});
  }
}
