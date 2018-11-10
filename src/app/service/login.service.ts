import { Injectable, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http/http';

import { Log } from '../tools/console';
import { UserInfo, TokenInfo } from '../interface/login';
import { HttpResult } from '../interface/http';
import { Config } from '../config/config';
import { HttpHeaders } from '@angular/common/http';
const { home } = Config.routerList;
const console = new Log('login');
const { login, reLogin } = Config.apis;

@Injectable()
export class LoginService {
    public isLogin = false;
    public redirUrl = '';
    private account = '';
    private timer = 0;
    private userId = 0;

    constructor(private http: HttpService, private router: Router) { }

    async login(data: any) {
        const { account, loginPwd } = data;
        console.logger('loca;', localStorage.getItem(account) !== null);
        // if (localStorage.getItem(account)) { await this.reLogin(); return; }
        console.logger('skip');
        const userInfo = { account: account, loginPwd: loginPwd };
        const loginRes = await this.http.req('post', login, userInfo);
        if (loginRes.code !== 200) {
            this.timer++;
            if (this.timer > 30) {
                console.err('服务器异常,请稍后再试');
                return;
            }
            await this.login(data);
            return;
        }
        localStorage.setItem(account, JSON.stringify(loginRes.data));
        localStorage.setItem('username', account);
        this.isLogin = true;
        this.account = account;
        console.logger('account', this.account);
        console.logger('accounts', localStorage.getItem(account));
        this.router.navigate(['/home']);
        return true;
    }

    /**
     * 如果用户有本地的信息存储，那么进行的是re`Login
     * 如果token已经失效，跳转到主界面并执行login
     */

    async reLogin() {
        const userInfo = this.getUserInfo();
        console.logger('relog', userInfo);
        const loginRes = await this.http.req('post', reLogin, userInfo);
        console.logger('rel', userInfo, this.account);
        if (loginRes.code !== 200) {
            console.log('已在别处登录，3s后返回登录界面');
            this.isLogin = false;
            localStorage.removeItem(this.account);
            return;
        }
        this.isLogin = true;
        return true;
    }

    getJsonStr(obj) {
        return JSON.stringify(obj);
    }

    // async registor() {
    //     const userInfo: UserInfo = this.getUserInfo();
    //     const registorRes: HttpResult = await this.http.req('post', registrpApi, userInfo);
    //     if (registorRes.code !== 200) { return; }
    //     localStorage.setItem(this.userName, registorRes.data);
    //     this.isLogin = true;
    //     this.router.navigate([home]);
    //     return;
    // }

    // getUserInfo() {
    //     return {
    //         userName: this.userName,
    //         password: this.password
    //     };
    // }

    getUserInfo() {
        let userInfo = {};
        console.logger('account localStorage', localStorage.getItem('username'));
        console.logger('userInfo userId', this.getUserId());
        if (localStorage.getItem('username')) {
            userInfo = {
                userId: this.getUserId()
            };
        }
        console.logger('userInfo', userInfo);
        return userInfo;
    }

    getToken() {
        let token = '';
        if (this.account) {
            token = JSON.parse(localStorage.getItem(this.account)).token;
        }
        return token;
    }

    getUserId() {
        let userId = 0;
        if (localStorage.getItem('username')) {
            userId = JSON.parse(localStorage.getItem(this.account)).admin.id;
        }
        console.logger('setId', JSON.parse(localStorage.getItem(this.account)).admin.id);
        return userId;
    }


    getJson(obj: any) {
        return JSON.parse(JSON.stringify(obj));
    }
}
