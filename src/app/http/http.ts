import { HttpClient, HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';

import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Config, FORMATE, HttpType, Log, RANDOM, STATIC } from './index';

const { host, USER_INFO }                                                = Config;
const { login } = Config.routerList;
const { testStatic, testFormate, testRandom, testStaticList } = Config.apis;
const console                                                 = new Log('http');

@Injectable()
export class HttpService {

  public code = 0;

  constructor(private httpc: HttpClient, private message: NzMessageService, private router: Router) { }

  async request(method: string, api: string, data: {}, params?: {}): Promise<HttpType> {
    const body = data;
    console.logger(`\nMethod:${method}\nsendTo:${api}\ndata:${JSON.stringify(body)}`);
    const res = await this
          .httpc
          .request<HttpType>(method, `${host}${api}${this.formateParamsToStr(params)}`, { body }).toPromise();
    console.logger('get:', JSON.stringify(res));
    return res;
  }

  // async request(method: string, api: string, data: any, options?: any): Promise<HttpResult> {
  //   let redir = testStatic;
  //   if (data.test) {
  //     switch (data.test) {
  //       case STATIC: {
  //         redir = testStatic;
  //         break;
  //       }

  //       case FORMATE: {
  //         redir = testFormate;
  //         break;
  //       }

  //       case RANDOM: {
  //         redir = testRandom;
  //         break;
  //       }
  //     }
  //   }

  //   console.logger(`\nMethod:${method}\nsendTo:${redir}\ndata:${JSON.stringify(data)}`);
  //   const res = await this.httpc.request<HttpResult>(method, `${host}${redir}`, { body: data }).toPromise();
  //   console.logger('get:', JSON.stringify(res));
  //   return res;
  // }

  async req(method: string, api: string, data: {}, params?: {}): Promise<HttpType> {
    const res: HttpType     = await this.request(method, api, data, params);
    const [code, msg, _data]  = [res.code, res.msg, res.data];
    const respone: HttpType = { code, msg, data: _data };
    if (code !== 200) {
      this.message.error(msg);
    }

    return respone;
  }

  /**
   * Obervable request
   */
  observableReq(method: string, api: string, body: any, params?: {}, headers?: any): Observable<HttpType> {
    return this.httpc.request<HttpType>(method, `${host}${api}`, { observe: 'body', params, body, headers }).pipe(
      tap(
        data  => {
          console.logger('get:', JSON.stringify(data));
          if (data.code === 405) {
            this.router.navigate([login]);
            sessionStorage.removeItem(USER_INFO);
            this.message.error('设备在其他地方登录,请重新登录');
          }

          if (data.code > 200) {
            this.message.error(data.msg);
          }
        },
        error => console.err(error)
      )
    );
  }

  // progressObservableReq(method: string, api: string, body: any, params?: {}, headers?: any): Observable<HttpEvent<any>> {
  //   return this.httpc.request(method, `${host}${api}`, { params, body, headers }).pipe(
  //     map(event => this.getEventMessage()),
  //     tap(
  //       data  => {
  //         console.logger('get:', JSON.stringify(data));
  //         if (data.code === 401) {
  //           this.router.navigate([login]);
  //           sessionStorage.removeItem(USER_INFO);
  //           this.message.error('设备在其他地方登录,请重新登录');
  //         }
  //       },
  //       error => console.err(error)
  //     )
  //   );
  // }

  // private getEventMessage(event: HttpEvent<any>, file: File) {
  //   switch (event.type) {
  //     case HttpEventType.Sent:
  //       return `Uploading file "${file.name}" of size ${file.size}.`;

  //     case HttpEventType.UploadProgress:
  //       // Compute and show the % done:
  //       const percentDone = Math.round(event.loaded * 100  / event.total);
  //       return `File "${file.name}" is ${percentDone}% uploaded.`;

  //     case HttpEventType.Response:
  //       return `File "${file.name}" was completely uploaded!`;

  //     default:
  //       return `File "${file.name}" surprising upload event: ${event.type}.`;
  //   }
  // }

  get(url: string): Observable<HttpType> {
    return this.httpc.get<HttpType>(url, { observe: 'body' }).pipe(
      tap(
        data  => console.logger('get:', JSON.stringify(data)),
        error => console.err(error)
      )
    );
  }

  post(url: string, body: {}): Observable<HttpType> {
    return this.httpc.post<HttpType>(url, body, { observe: 'body'}).pipe(
      tap(
        data  => console.logger('get:', JSON.stringify(data)),
        error => console.err(error)
      )
    );
  }

  formMsg(msg: string): string { return msg === 'success' ? '操作成功' : msg; }

  getJson(obj: {}): {} {
    return JSON.parse(JSON.stringify(obj));
  }

  formateParamsToStr(params: any): string {
    let str = '';
    if (params) {
                                                str     = '?';
                                                const columns = Object.keys(params);
                                                columns.forEach((item, index) => {
        if (index === columns.length) {
          str += `${item}=${params[item]}`;
        } else {
          str += `${item}=${params[item]}&`;
        }
      });
    }

    return str;

    // for (const key in params) {
    //   if (key) {
    //     str += `${key}=${params[key]}&`;
    //   }
    // }

    return str;
  }
}
