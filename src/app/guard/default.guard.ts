import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot, UrlSegment
} from '@angular/router';
import * as _ from 'lodash';
import { Config } from '../config/config';
import { HttpService } from '../http/http';
import { LoginService } from '../service';
import { Log } from '../tools/console';
const console = new Log('AuthGuard');
const { login } = Config.routerList;
const { USER_INFO } = Config;
@Injectable({
  providedIn: 'root'
})
export class DefaultGuard implements CanActivate, CanLoad {

  constructor(private https: HttpService, private router: Router, private ls: LoginService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return this.checkLogin();
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean {
    const url = `${segments}`;
    console.log(url);
    return true;
  }

  checkLogin(): boolean {
    // const userInfo = this.ls.getUserInfo();
    // if (_.isEmpty(userInfo)) {
    //   this.router.navigate([login]);
    //   return false;
    // }

    // console.logger(userInfo);
    return true;
  }
}
