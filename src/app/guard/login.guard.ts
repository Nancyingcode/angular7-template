import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../service/login.service';
@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {

    constructor(private loginService: LoginService) { }
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        console.log('AuthGuard#canActivate called');
        return true;
    }
}
