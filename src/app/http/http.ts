import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers, Http } from '@angular/http';

// import { toPromise } from '../../operator/toPromise';


import { Observable } from 'rxjs';
// import { of } from "rxjs/observable/of";

import { catchError, map, tap } from 'rxjs/operators';

import { Log } from '../tools/console';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const console = new Log('http');



@Injectable()
export class HttpService {

    private headers = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'});
    private url = 'http://queryverif.market.alicloudapi.com/lianzhuo/queryVerifyResult?requestNo=0801156281166';  //   URL to web api
    private res = '/api/result.json';
    private data: any;

    constructor( private http: Http,
        private httpc: HttpClient
         ) {}

    async getRes(): Promise<any> {
        const url = 'http://queryverif.market.alicloudapi.com/lianzhuo/queryVerifyResult?requestNo=0801156281166';
        const obj: any = {};
        // const a = await this.httpc.post(this.res, obj);
        return await this.httpc.post(this.res, obj).toPromise();
    }

    async post() {
        const res = await this.http
        .post(this.res, JSON.stringify({name: ''}), {headers: this.headers})
        .toPromise();
        return res;
    }

    async request(api: string, data: any, options?: any) {
        const body = Object.assign(data, {});
        console.log('sendTo:' + api, 'data:' + JSON.stringify(body));
        const res = await this.httpc.post(api, body, options || {}).toPromise();
        console.log('get:', JSON.stringify(res));
        return res;
    }
}
