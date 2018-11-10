import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Headers, Http } from '@angular/http';
import { HttpResult } from '../interface/http';


// import { toPromise } from '../../operator/toPromise';


import { Observable } from 'rxjs';
// import { of } from "rxjs/observable/of";

import { catchError, map, tap } from 'rxjs/operators';

import { Log } from '../tools/console';
import { Config } from '../config/config';
const { host } = Config;
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const console = new Log('http');



@Injectable()
export class HttpService {

    constructor(private http: Http, private httpc: HttpClient) { }

    async request(method: string, api: string, data: any, options?: any) {
        const body = Object.assign(data, {});
        console.logger('Method:' + method, 'sendTo:' + api, 'data:' + JSON.stringify(body));
        const req = {
            body,
        };
        const res = await this.httpc.request(method, host + api, req).toPromise();
        console.logger('get:', JSON.stringify(res));
        return res;
    }

    async req(method: string, api: string, data: any, options?: any) {
        const res = await this.request(method, api, data, options);
        const respone: HttpResult = { code: res['code'], msg: res['msg'], data: res['data'] };
        return respone;
    }

    getUserToken(obj) {
        const token = this.getJson(obj).token;
        return token ? token : '';
    }

    getJson(obj: any) {
        return JSON.parse(JSON.stringify(obj));
    }
    // getConfigResponse(method: string, api: string, data: any, options?: any): Observable<HttpResponse<any>> {
    //     return this.httpc.request<any>(method, api, options || {}).subscribe();}
    // async request(api: string, data: any, options?: any) {

    // }
}
