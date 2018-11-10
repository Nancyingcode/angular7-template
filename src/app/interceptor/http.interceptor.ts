import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Log } from '../tools/console';
import { Injectable } from '@angular/core';
import { LoginService } from '../service/login.service';
const console = new Log('HttpInterceptor');

@Injectable()
export class DefaultInterceptor implements HttpInterceptor {
    constructor(private ls: LoginService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { body } = req;
        const token = this.ls.getToken();
        const authReq = req.clone({
            headers: req.headers.set('token', token)
        });
        if (body) { return next.handle(authReq); }
        return;
    }
}
