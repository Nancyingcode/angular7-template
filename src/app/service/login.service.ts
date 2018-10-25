import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http/http';
import { $url } from '../config/config';

import { Log } from '../tools/console';
import { UserInfo, TokenInfo } from '../interface/login';
const console = new Log('login');

const loginApi = '/api/resul.json';
const reLoginApi = '';

@Injectable()
export class LoginService {
    private timer = 0;
    private isLogin = true;

    private userId = 0;
    private userName = '';
    private password = '';

    constructor(private http: HttpService,private router: Router) {}

    async login() {
        if (localStorage.getItem(this.userId.toString()) !== null) { this.reLogin(); }
        console.log('start login');
        const userInfo: UserInfo = { userName: this.userName, password: this.password };
        const loginRes = await this.http.request(loginApi, userInfo);
        if (loginRes['status'] !== 1) {
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
        return loginRes;
    }

    /**
     * 如果用户有本地的信息存储，那么进行的是reLogin
     * 如果token已经失效，跳转到主界面并执行login
     */
    async reLogin() {
        const userInfo: TokenInfo = this.getTokenInfo();
        const loginRes = await this.http.request(reLoginApi, userInfo);
        if (loginRes['status'] === 0) {
            console.log('已在别处登录，3s后自动重新登录');
            this.router.navigate(['/home']);
            this.login();
            return;
        }
        return this.isLogin;
    }

    getTokenInfo() {
        return JSON.parse(localStorage.getItem(''));
    }
}
