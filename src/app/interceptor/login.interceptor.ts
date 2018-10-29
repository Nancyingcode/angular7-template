import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Log } from '../tools/console';
import { Injectable } from '@angular/core';
const console = new Log('LoginInterceptor');

@Injectable()
export class LoginInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { body } = req;
        // console.log('body:', JSON.stringify(req));
        return next.handle(req);
    }
}
