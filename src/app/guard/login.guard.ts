import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginService } from '../service/login.service';

import { Log } from '../tools/console';
const console = new Log('AuthGuard');
@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {

    constructor(private loginService: LoginService, private router: Router) { }
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        return this.checkLogin(state.url);
    }

    checkLogin(url: string) {
        if (this.loginService.isLogin) { return true; }
        this.loginService.redirUrl = url;
        this.router.navigate(['/login']);
        return false;
    }
}
