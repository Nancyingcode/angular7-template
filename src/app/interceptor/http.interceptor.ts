import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Log } from '../tools/console';
import { Injectable } from '@angular/core';
const console = new Log('HttpInterceptor');

@Injectable()
export class DefaultInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { body } = req;
        console.log('body:', body);
        if (body) { return next.handle(req); }
        return;
    }
}
