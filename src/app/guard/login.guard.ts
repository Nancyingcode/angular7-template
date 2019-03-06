import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import * as _ from 'lodash';

import {
  Config,
  Log
} from './index';

import { HttpService } from '../http/http';
import { LoginService } from '../pages';
const console = new Log('AuthGuard');
const { login } = Config.routerList;
const { USER_INFO } = Config;
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private https: HttpService, private router: Router, private ls: LoginService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return this.checkLogin();
  }

  canLoad(route: Route): boolean {
    const url = `${route.path}`;
    console.log(url);
    return true;
  }

  checkLogin(): boolean {
    const token = this.ls.getToken();
    if (_.isEmpty(token)) {
      this.router.navigate([login]);
      return false;
    }

    // console.log(token);
    return true;
  }
}
