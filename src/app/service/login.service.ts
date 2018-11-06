import { Injectable, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http/http';

import { Log } from '../tools/console';
import { UserInfo, TokenInfo } from '../interface/login';
import { HttpResult } from '../interface/http';
import { Config } from '../config/config';
const { home, login } = Config.routerList;
const console = new Log('login');
const loginApi = 'http://localhost:80/api/result.json';
const reLoginApi = '';
const registrpApi = '';

@Injectable()
export class LoginService {
    public isLogin = false;
    public redirUrl = '';
    private timer = 0;
    private userId = 0;

    @Input() userName: string;
    @Input() password: string;

    constructor(private http: HttpService, private router: Router) { }

    async login() {
        // if (localStorage.getItem(this.userName) !== null) { this.reLogin(); }
        const userInfo: UserInfo = { userName: this.userName, password: this.password };
        const loginRes = await this.http.req('post', loginApi, userInfo);
        console.log('loginRes:' + this.getJson(loginRes));
        if (loginRes.code !== '200') {
            this.timer++;
            if (this.timer > 30) {
                console.err('服务器异常,请稍后再试');
                return;
            }
            await this.login();
            return;
        }
        localStorage.setItem(this.userId.toString(), JSON.stringify(loginRes));
        this.isLogin = true;
        this.router.navigate([home]);
        return loginRes;
    }

    /**
     * 如果用户有本地的信息存储，那么进行的是re`Login
     * 如果token已经失效，跳转到主界面并执行login
     */
    async reLogin() {
        const userInfo: TokenInfo = this.getTokenInfo();
        const loginRes = await this.http.req('post', reLoginApi, userInfo);
        if (loginRes.code !== '200') {
            console.log('已在别处登录，3s后返回登录界面');
            this.isLogin = false;
            this.router.navigate([login]);
            return;
        }
        this.router.navigate([home]);
        this.isLogin = true;
        return;
    }

    async registor() {
        const userInfo: UserInfo = this.getUserInfo();
        const registorRes: HttpResult = await this.http.req('post', registrpApi, userInfo);
        if (registorRes.code !== '200') { return; }
        localStorage.setItem(this.userName, registorRes.data);
        this.isLogin = true;
        this.router.navigate([home]);
        return;
    }

    getUserInfo() {
        return {
            userName: this.userName,
            password: this.password
        };
    }

    getTokenInfo() {
        return JSON.parse(localStorage.getItem(''));
    }

    getJson(obj: any) {
        return JSON.parse(JSON.stringify(obj));
    }
}
