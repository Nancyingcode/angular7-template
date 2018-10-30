import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http/http';
import { LoginInterceptor } from '../interceptor/login.interceptor';
import { $url } from '../config/config';

import { Log } from '../tools/console';
import { UserInfo, TokenInfo } from '../interface/login';
import { HttpResult } from '../interface/http';
const console = new Log('login');
const loginApi = '/api/angular7-template/result.json';
const reLoginApi = '';

@Injectable()
export class RegisterService {
    public isLogin = false;
    public redirUrl = '';
    private userName = '';
    private password = '';
    private timer = 0;
    private userId = 0;

    // constructor(private http: HttpService, private router: Router) { }


    // getTokenInfo() {
    //     return JSON.parse(localStorage.getItem(''));
    // }

    // getJson(obj: any) {
    //     return JSON.parse(JSON.stringify(obj));
    // }
}
