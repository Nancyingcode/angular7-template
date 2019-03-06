import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Log } from '../index';
import { LoginService } from '../service/login.service';
const console = new Log('HttpInterceptor');

@Injectable()
export class DefaultInterceptor implements HttpInterceptor {
  constructor(private ls: LoginService) { }
  // tslint:disable-next-line:no-any
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let ok: string;
    const started = Date.now();
    const { body, headers, url } = req;
    const userInfo = this.ls.getUserInfo();
    const { token } = userInfo;
    const newBody = req.clone({
      headers: req.headers.set('token', token)
    });

    console.logger(`
        \nuserInfo: ${JSON.stringify(userInfo)}
        \nurl     : ${url}
        \ntoken   : ${JSON.stringify(token)}
        \nbody    : ${JSON.stringify(body)
      }`);

    return next.handle(newBody)
    .pipe(
        tap(
          event => ok = event instanceof HttpResponse ? 'succeeded' : '',
          error => ok = 'failed'
        ),

        finalize(() => {
          const elapsed = Date.now() - started;
          const msg = `
          ${req.method}${req.urlWithParams}
          ${ok} in ${elapsed} ms.`;
          console.logger(msg);
        })
    );
  }
}
